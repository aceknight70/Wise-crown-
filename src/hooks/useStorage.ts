/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { AppState, LetterEntry, TrustedAdult, UserPlan, SavingPlan } from '../types';
import { VALUES } from '../data/content';

const STORAGE_KEY = 'wisecrown.v1';

export function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDayKey(offsetDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDayNumber(): number {
  return Math.floor(Date.now() / 864e5);
}

export function formatShortDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day)).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

const defaultState: AppState = {
  done: {},
  letters: [],
  trusted: [],
  plan: { term: '', y18: '', y25: '' },
  sv: { what: '', ways: [], own: '', who: '', talked: false },
  dream: '',
  cycle: [],
  helpline: '',
  age: 12
};

export function loadStoredState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...defaultState,
        ...parsed,
        plan: { ...defaultState.plan, ...(parsed.plan || {}) },
        sv: { ...defaultState.sv, ...(parsed.sv || {}) }
      };
    }
  } catch (err) {
    console.warn('Could not read from localStorage:', err);
  }
  return defaultState;
}

export function saveStoredState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Could not save to localStorage:', err);
  }
}

export function calculateStreak(doneMap: Record<string, Record<string, boolean>>): number {
  const hasAnyForDate = (dateKey: string) => {
    const d = doneMap[dateKey];
    return !!d && Object.values(d).some(Boolean);
  };

  let count = 0;
  let offset = hasAnyForDate(getDayKey(0)) ? 0 : 1;
  while (hasAnyForDate(getDayKey(offset))) {
    count++;
    offset++;
  }
  return count;
}

export function useStorage() {
  const [state, setState] = useState<AppState>(loadStoredState);

  // Sync to localStorage whenever state changes
  useEffect(() => {
    saveStoredState(state);
  }, [state]);

  const markDone = useCallback((challengeId: string) => {
    const tKey = getTodayKey();
    setState(prev => {
      const currentToday = prev.done[tKey] || {};
      if (currentToday[challengeId]) return prev; // already done
      const updatedToday = { ...currentToday, [challengeId]: true };
      return {
        ...prev,
        done: {
          ...prev.done,
          [tKey]: updatedToday
        }
      };
    });
  }, []);

  const addTrustedAdult = useCallback((adult: TrustedAdult) => {
    setState(prev => ({
      ...prev,
      trusted: [...prev.trusted, adult]
    }));
  }, []);

  const removeTrustedAdult = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      trusted: prev.trusted.filter((_, i) => i !== index)
    }));
  }, []);

  const setDreamCareer = useCallback((careerName: string) => {
    setState(prev => ({
      ...prev,
      dream: careerName
    }));
  }, []);

  const addLetter = useCallback((text: string) => {
    const entry: LetterEntry = {
      d: getTodayKey(),
      t: text
    };
    setState(prev => ({
      ...prev,
      letters: [...prev.letters, entry]
    }));
  }, []);

  const setAge = useCallback((age: number) => {
    setState(prev => ({
      ...prev,
      age
    }));
  }, []);

  const updatePlan = useCallback((fields: Partial<UserPlan>) => {
    setState(prev => ({
      ...prev,
      plan: { ...prev.plan, ...fields }
    }));
  }, []);

  const recordPeriodDay1 = useCallback(() => {
    const tKey = getTodayKey();
    setState(prev => {
      if (prev.cycle.includes(tKey)) return prev;
      return {
        ...prev,
        cycle: [...prev.cycle, tKey]
      };
    });
  }, []);

  const updateSavingPlan = useCallback((fields: Partial<SavingPlan>) => {
    setState(prev => ({
      ...prev,
      sv: { ...prev.sv, ...fields }
    }));
  }, []);

  const toggleSavingWay = useCallback((wayIndex: number) => {
    setState(prev => {
      const currentWays = prev.sv.ways;
      const exists = currentWays.includes(wayIndex);
      const updatedWays = exists
        ? currentWays.filter(i => i !== wayIndex)
        : [...currentWays, wayIndex];
      return {
        ...prev,
        sv: {
          ...prev.sv,
          ways: updatedWays
        }
      };
    });
  }, []);

  const todayKey = getTodayKey();
  const todayDone = state.done[todayKey] || {};
  const litCount = VALUES.filter(v => todayDone[v.id]).length;
  const streak = calculateStreak(state.done);

  return {
    state,
    todayKey,
    todayDone,
    litCount,
    streak,
    markDone,
    addTrustedAdult,
    removeTrustedAdult,
    setDreamCareer,
    addLetter,
    setAge,
    updatePlan,
    recordPeriodDay1,
    updateSavingPlan,
    toggleSavingWay
  };
}
