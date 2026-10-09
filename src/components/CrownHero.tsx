/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VALUES } from '../data/content';

interface CrownHeroProps {
  todayDone: Record<string, boolean>;
  litCount: number;
}

export const CrownHero: React.FC<CrownHeroProps> = ({ todayDone, litCount }) => {
  const xs = [48, 99, 150, 201, 252];
  const isFull = litCount === 5;

  const getSubMessage = () => {
    if (litCount === 5) return 'Crown complete. Come back tomorrow.';
    if (litCount === 0) return 'Light your first jewel. Each takes about 2 minutes.';
    return `Keep going. ${5 - litCount} to light.`;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E] p-5 text-center shadow-sm transition-all">
      {/* Background radial glow */}
      <div 
        className="pointer-events-none absolute inset-0 -z-0 opacity-40 dark:opacity-20"
        style={{
          background: isFull
            ? 'radial-gradient(circle at center 40%, rgba(245, 197, 24, 0.45) 0%, transparent 70%)'
            : 'radial-gradient(circle at center 40%, rgba(230, 25, 127, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Hero Crown SVG */}
      <div className="relative mx-auto max-w-[320px] transition-transform">
        <svg
          viewBox="0 0 300 180"
          role="img"
          aria-label={`Crown with ${litCount} of 5 jewels lit`}
          className={`w-full h-auto drop-shadow-sm ${isFull ? 'crown-shimmer' : ''}`}
        >
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--crown-hi, #FFE27A)" />
              <stop offset="100%" stopColor="var(--crown, #F0A800)" />
            </linearGradient>

            <filter id="gemGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Golden Crown Body */}
          <path
            d="M24 134 L24 56 L87 98 L150 30 L213 98 L276 56 L276 134 Z"
            fill="url(#goldGradient)"
            stroke="var(--crown-band, #B0740A)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Crown Peak Ruby Tips */}
          <circle cx="24" cy="50" r="7.5" fill="var(--crown-tip, #E6197F)" />
          <circle cx="150" cy="23" r="9" fill="var(--crown-tip, #E6197F)" />
          <circle cx="276" cy="50" r="7.5" fill="var(--crown-tip, #E6197F)" />

          {/* Crown Band */}
          <rect
            x="20"
            y="130"
            width="260"
            height="38"
            rx="8"
            fill="var(--crown-band, #B0740A)"
          />

          {/* 5 Value Jewels */}
          {VALUES.map((val, i) => {
            const isLit = Boolean(todayDone[val.id]);
            const cx = xs[i];
            const cy = 149;

            return (
              <g key={val.id}>
                {/* Glow ring if lit */}
                {isLit && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="16"
                    fill={val.colorHex}
                    fillOpacity="0.4"
                    filter="url(#gemGlow)"
                  />
                )}

                {/* Main jewel circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="13"
                  fill={isLit ? val.colorHex : 'var(--gem-off, #FBEBC8)'}
                  stroke={isLit ? '#FFFFFF' : 'var(--crown-band, #B0740A)'}
                  strokeWidth={isLit ? '2.5' : '2'}
                  className={isLit ? 'gem-active' : ''}
                  style={{ color: val.colorHex }}
                />

                {/* Sparkle star atop lit gem */}
                {isLit && (
                  <g transform={`translate(${cx - 5}, ${cy - 5})`} className="sparkle-anim pointer-events-none">
                    <path
                      d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z"
                      fill="#FFFFFF"
                    />
                  </g>
                )}

                {/* Reflection highlight */}
                <circle
                  cx={cx - 3.5}
                  cy={cy - 3.5}
                  r="3"
                  fill="#FFFFFF"
                  fillOpacity={isLit ? '0.75' : '0.2'}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Progress & Status */}
      <div className="mt-3">
        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--fg)]">
          {litCount} of 5 jewels lit today
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {getSubMessage()}
        </p>

        {/* 5-dot mini progress indicator */}
        <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
          {VALUES.map(val => {
            const isLit = Boolean(todayDone[val.id]);
            return (
              <div
                key={val.id}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isLit ? 'w-6 shadow-sm' : 'w-2.5 opacity-30'
                }`}
                style={{ backgroundColor: val.colorHex }}
                title={`${val.name}: ${isLit ? 'Completed' : 'Pending'}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
