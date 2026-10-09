/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useStorage } from './hooks/useStorage';
import { AppTab } from './types';
import { Header } from './components/Header';
import { NavigationRail } from './components/NavigationRail';
import { TodayView } from './components/views/TodayView';
import { BodyView } from './components/views/BodyView';
import { PlanView } from './components/views/PlanView';
import { MoneyView } from './components/views/MoneyView';
import { SafeView } from './components/views/SafeView';
import { ConfettiEffect } from './components/ConfettiEffect';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>('today');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('wisecrown_theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const {
    state,
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
  } = useStorage();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('wisecrown_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectTab = (tab: AppTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col font-sans transition-colors duration-200">
      {/* 5-Jewel Celebration Confetti */}
      <ConfettiEffect trigger={litCount === 5} />

      {/* Top Application Header */}
      <Header
        streak={streak}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Layout Shell: Sticky Left Rail + Responsive Center Feed */}
      <div className="mx-auto flex w-full max-w-[760px] flex-1 items-start">
        {/* Slim Vertical Side Navigation Rail */}
        <NavigationRail
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
        />

        {/* Primary Viewport Column */}
        <main className="min-w-0 flex-1 px-3 py-4 sm:px-5 sm:py-6 max-w-[540px]">
          {currentTab === 'today' && (
            <TodayView
              state={state}
              todayDone={todayDone}
              litCount={litCount}
              onMarkDone={markDone}
              onAddTrustedAdult={addTrustedAdult}
              onSetDreamCareer={setDreamCareer}
              onAddLetter={addLetter}
              onSelectTab={handleSelectTab}
            />
          )}

          {currentTab === 'body' && (
            <BodyView
              age={state.age}
              onSetAge={setAge}
            />
          )}

          {currentTab === 'plan' && (
            <PlanView
              plan={state.plan}
              cycle={state.cycle}
              onUpdatePlan={updatePlan}
              onRecordPeriodDay1={recordPeriodDay1}
            />
          )}

          {currentTab === 'money' && (
            <MoneyView
              sv={state.sv}
              onUpdateSavingPlan={updateSavingPlan}
              onToggleSavingWay={toggleSavingWay}
            />
          )}

          {currentTab === 'safe' && (
            <SafeView
              trusted={state.trusted}
              onAddTrustedAdult={addTrustedAdult}
              onRemoveTrustedAdult={removeTrustedAdult}
            />
          )}
        </main>
      </div>

      {/* Connectivity Alert for Offline Support */}
      <OfflineIndicator />
    </div>
  );
}
