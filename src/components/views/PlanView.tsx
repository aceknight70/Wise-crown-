/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserPlan } from '../../types';
import { formatShortDate } from '../../hooks/useStorage';
import { Calendar, Clock, Sparkles } from 'lucide-react';

interface PlanViewProps {
  plan: UserPlan;
  cycle: string[];
  onUpdatePlan: (fields: Partial<UserPlan>) => void;
  onRecordPeriodDay1: () => void;
}

export const PlanView: React.FC<PlanViewProps> = ({
  plan,
  cycle,
  onUpdatePlan,
  onRecordPeriodDay1
}) => {
  const [loadHours, setLoadHours] = useState(2);

  // Sorted latest first
  const sortedCycle = [...cycle].sort().reverse();
  const lastCycleDate = sortedCycle[0];

  let daysSinceLast = null;
  if (lastCycleDate) {
    try {
      const [year, month, day] = lastCycleDate.split('-');
      const last = new Date(Number(year), Number(month) - 1, Number(day)).getTime();
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      daysSinceLast = Math.round((today - last) / (1000 * 60 * 60 * 24));
    } catch {
      daysSinceLast = null;
    }
  }

  const getLoadFeedback = (hours: number) => {
    if (hours <= 2) return 'A fair balance.';
    if (hours <= 4) return 'A busy day. Make sure you still sleep and study.';
    return 'That is a lot for a growing girl. Talk to a trusted adult about sharing the load.';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)]">
          My Plan
        </h2>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-[var(--muted)]">
          A girl with a plan is hard to rush. Write yours here. It stays on this phone.
        </p>
      </div>

      {/* Card 1: 3-Stage Goals */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-[#2FC7AB]">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            My Dreams & Milestones
          </h3>
        </div>

        <div className="space-y-3">
          <div>
            <label htmlFor="p1" className="block text-xs font-extrabold text-[var(--fg)]">
              This term I will
            </label>
            <textarea
              id="p1"
              rows={2}
              value={plan.term}
              onChange={e => onUpdatePlan({ term: e.target.value })}
              placeholder="e.g. read one extra book every week and pass maths..."
              className="mt-1 w-full rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] p-3 text-sm text-[var(--fg)]"
            />
          </div>

          <div>
            <label htmlFor="p2" className="block text-xs font-extrabold text-[var(--fg)]">
              By age 18 I will
            </label>
            <textarea
              id="p2"
              rows={2}
              value={plan.y18}
              onChange={e => onUpdatePlan({ y18: e.target.value })}
              placeholder="e.g. complete secondary school and apply for nursing or university..."
              className="mt-1 w-full rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] p-3 text-sm text-[var(--fg)]"
            />
          </div>

          <div>
            <label htmlFor="p3" className="block text-xs font-extrabold text-[var(--fg)]">
              By age 25 I will
            </label>
            <textarea
              id="p3"
              rows={2}
              value={plan.y25}
              onChange={e => onUpdatePlan({ y25: e.target.value })}
              placeholder="e.g. have my degree or trade, be working and supporting my dreams..."
              className="mt-1 w-full rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] p-3 text-sm text-[var(--fg)]"
            />
          </div>
        </div>
      </div>

      {/* Card 2: Period Diary */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-[#E6197F]">
          <Calendar className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            Period diary
          </h3>
        </div>
        <p className="text-xs font-semibold text-[var(--muted)]">
          Private to this phone. Tap on the first day of each period.
        </p>

        <button
          onClick={onRecordPeriodDay1}
          className="w-full min-h-[48px] rounded-full bg-[#E6197F] px-4 py-2.5 text-sm font-extrabold text-white shadow hover:bg-[#D6106F] active:scale-98 transition flex items-center justify-center gap-2"
        >
          <span>Today is day 1</span>
        </button>

        {daysSinceLast !== null && (
          <div className="rounded-2xl bg-[#FFE6F1] dark:bg-[#3D1C42] p-3 text-center">
            <p className="text-sm font-extrabold text-[#E6197F] dark:text-[#FF6AB1]">
              {daysSinceLast} {daysSinceLast === 1 ? 'day' : 'days'} since your last period began.
            </p>
          </div>
        )}

        {sortedCycle.length > 0 && (
          <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] pt-3">
            <p className="text-xs font-bold text-[var(--muted)] mb-2">
              Recent recorded dates:
            </p>
            <div className="space-y-1.5">
              {sortedCycle.slice(0, 4).map((dateKey, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-[var(--bg)] px-3 py-2 text-xs font-bold text-[var(--fg)]"
                >
                  <span>{formatShortDate(dateKey)}</span>
                  <span className="text-[10px] text-[var(--muted)]">Recorded</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="border-t border-[#F3D2E2] dark:border-[#4E2C52] pt-2 text-xs leading-relaxed text-[var(--muted)]">
          Cycles can be uneven in the first years. See a nurse if a regular period stops for three months, or bleeding is very heavy.
        </p>
      </div>

      {/* Card 3: Home Load Check Slider */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-[#EE7F12]">
          <Clock className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            Home load check
          </h3>
        </div>
        <p className="text-xs font-semibold text-[var(--muted)]">
          Hours of chores and work today, besides school.
        </p>

        <div className="space-y-3">
          <input
            type="range"
            id="load"
            min="0"
            max="8"
            step="1"
            value={loadHours}
            onChange={e => setLoadHours(Number(e.target.value))}
            aria-label="Hours of chores"
            className="w-full accent-[#E6197F] h-2 bg-[#F3D2E2] dark:bg-[#4E2C52] rounded-lg cursor-pointer"
          />

          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-black text-[#EE7F12] tabular-nums">
              {loadHours} {loadHours === 1 ? 'hour' : 'hours'}
            </span>
            <span className="text-xs font-bold text-[var(--muted)]">
              Max 8 hrs
            </span>
          </div>

          <div
            className={`rounded-2xl p-3 text-sm font-bold transition-all ${
              loadHours <= 2
                ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                : loadHours <= 4
                ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
                : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200'
            }`}
          >
            {getLoadFeedback(loadHours)}
          </div>
        </div>
      </div>
    </div>
  );
};
