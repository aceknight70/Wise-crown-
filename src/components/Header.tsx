/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon, Flame, Download } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface HeaderProps {
  streak: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ streak, theme, onToggleTheme }) => {
  const { isInstallable, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#F0278A] to-[#C70C63] text-white shadow-md">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          {/* Heart OW Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 p-1 shadow-inner backdrop-blur-xs transition-transform hover:scale-105">
            <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M24 43S5 31 5 17.5A10.5 10.5 0 0124 11a10.5 10.5 0 0119 6.5C43 31 24 43 24 43z"
                fill="#FFFFFF"
              />
              <text
                x="24"
                y="30"
                textAnchor="middle"
                fontFamily="'Playfair Display', Georgia, serif"
                fontWeight="700"
                fontSize="13"
                fill="#D6106F"
              >
                OW
              </text>
            </svg>
          </div>

          <div className="leading-tight">
            <h1 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
              WISE Crown
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-wider text-pink-100 opacity-95">
              OLAMII WISE Solutions
            </p>
          </div>
        </div>

        {/* Action Controls & Streak Badge */}
        <div className="flex items-center gap-2">
          {/* PWA Install Button */}
          {isInstallable && (
            <button
              onClick={install}
              className="flex min-h-[44px] min-w-[44px] items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-xs hover:bg-white/30 active:scale-95 transition"
              title="Install app to your home screen"
              aria-label="Install App"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Install</span>
            </button>
          )}

          {isIOS && !isInstallable && (
            <button
              onClick={() => setShowIOSModal(true)}
              className="flex min-h-[44px] min-w-[44px] items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-xs hover:bg-white/30 active:scale-95 transition"
              title="How to install on iOS"
              aria-label="Install instructions for iOS"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Add</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/15 p-2 text-white hover:bg-white/25 active:scale-95 transition"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* Daily Streak Chip */}
          <div
            className="flex min-h-[44px] items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-black tracking-wide text-white backdrop-blur-xs shadow-inner"
            title="Daily active streak"
          >
            <Flame className="h-4 w-4 text-amber-300 fill-amber-300" />
            <span className="tabular-nums">
              Streak {streak} {streak === 1 ? 'day' : 'days'}
            </span>
          </div>
        </div>
      </div>

      {/* iOS Install Guide Modal */}
      {showIOSModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-[var(--fg)] shadow-2xl dark:bg-[#28142E]">
            <h3 className="font-display text-lg font-bold text-[#E6197F]">
              Install on your Phone
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              1. Tap the <strong className="text-[var(--fg)]">Share button</strong> (square with arrow) at the bottom of Safari.<br />
              2. Scroll down and tap <strong className="text-[var(--fg)]">Add to Home Screen</strong>.<br />
              3. Tap <strong className="text-[var(--fg)]">Add</strong> in the top-right corner.
            </p>
            <button
              onClick={() => setShowIOSModal(false)}
              className="mt-5 w-full min-h-[44px] rounded-full bg-[#E6197F] px-4 py-2.5 text-sm font-bold text-white shadow hover:bg-[#D6106F] active:scale-98 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
