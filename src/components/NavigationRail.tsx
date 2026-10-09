/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppTab } from '../types';

interface NavItem {
  id: AppTab;
  label: string;
  color: string;
  textColor: string;
  bgLight: string;
  iconPath: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'today',
    label: 'Today',
    color: '#E6197F',
    textColor: '#FFFFFF',
    bgLight: 'rgba(230, 25, 127, 0.12)',
    iconPath: (
      <path
        d="M12 2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16.3l-5.6 2.9 1.1-6.2L3 8.6l6.2-.9z"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    id: 'body',
    label: 'My Body',
    color: '#7B3FA0',
    textColor: '#FFFFFF',
    bgLight: 'rgba(123, 63, 160, 0.12)',
    iconPath: (
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },
  {
    id: 'plan',
    label: 'My Plan',
    color: '#2FC7AB',
    textColor: '#062050',
    bgLight: 'rgba(47, 199, 171, 0.16)',
    iconPath: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2.2" />
        <path d="M8 12l3 3 5-6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  },
  {
    id: 'money',
    label: 'My Money',
    color: '#F28A1E',
    textColor: '#2A1400',
    bgLight: 'rgba(242, 138, 30, 0.14)',
    iconPath: (
      <>
        {/* Naira Symbol ₦ */}
        <path d="M7 6v12M17 6v12M7 6l10 12M5 10h14M5 14h14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  },
  {
    id: 'safe',
    label: 'Safe',
    color: '#F5C518',
    textColor: '#2A1F00',
    bgLight: 'rgba(245, 197, 24, 0.18)',
    iconPath: (
      <path
        d="M12 2l8 3.5v5.5c0 5.25-3.5 10-8 11.5-4.5-1.5-8-6.25-8-11.5V5.5L12 2z"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  }
];

interface NavigationRailProps {
  currentTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav
      className="sticky top-[72px] z-30 flex shrink-0 flex-col gap-2.5 py-4 pl-2 pr-1 w-[76px] md:w-[170px]"
      aria-label="Main Navigation"
    >
      {NAV_ITEMS.map(item => {
        const isActive = currentTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`group flex min-h-[66px] md:min-h-[52px] w-full flex-col md:flex-row items-center justify-center md:justify-start md:px-3 md:gap-3 rounded-2xl p-1.5 transition-all duration-200 active:scale-95 ${
              isActive
                ? 'shadow-md ring-1 ring-black/5 dark:ring-white/10'
                : 'hover:opacity-90'
            }`}
            style={{
              backgroundColor: isActive ? item.color : item.bgLight,
              color: isActive ? item.textColor : 'var(--fg)'
            }}
          >
            {/* SVG Icon */}
            <svg
              className="h-6 w-6 md:h-5 md:w-5 shrink-0 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isActive ? item.textColor : item.color}
              aria-hidden="true"
            >
              {item.iconPath}
            </svg>

            {/* Label */}
            <span
              className={`text-center md:text-left text-[11px] md:text-sm font-extrabold tracking-tight leading-tight mt-1 md:mt-0 ${
                isActive ? 'font-black' : ''
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
