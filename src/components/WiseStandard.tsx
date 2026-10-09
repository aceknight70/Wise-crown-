/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WISE } from '../data/content';

export const WiseStandard: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(-1);

  const togglePillar = (index: number) => {
    setActivePillarIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2A6B] to-[#001A55] p-5 text-center text-white shadow-lg">
      <p className="text-xs font-black tracking-widest text-[#B9C7F0] uppercase">
        The W · I · S · E Standard
      </p>

      {/* 4 Letter Buttons */}
      <div
        className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4"
        role="group"
        aria-label="The WISE standard pillars"
      >
        {WISE.map((pillar, i) => {
          const isSelected = activePillarIndex === i;
          return (
            <button
              key={pillar.l}
              onClick={() => togglePillar(i)}
              aria-pressed={isSelected}
              className={`flex min-h-[64px] flex-col items-center justify-center rounded-2xl p-2.5 transition-all active:scale-95 border ${
                isSelected
                  ? 'bg-white/20 border-white/40 shadow-inner'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <b className="font-display text-2xl font-bold leading-none text-white">
                {pillar.l}
              </b>
              <span className="mt-1 text-[11px] font-extrabold uppercase tracking-wide text-[#4FE0C2]">
                {pillar.n}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded Details Panel */}
      {activePillarIndex >= 0 ? (
        <div className="mt-4 rounded-2xl bg-white/10 p-4 text-left backdrop-blur-xs transition-all">
          <h3 className="font-display text-lg font-bold text-white">
            {WISE[activePillarIndex].n}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#E6ECFF]">
            {WISE[activePillarIndex].t}
          </p>
          <p className="mt-2.5 text-sm font-semibold text-[#4FE0C2]">
            <b className="font-bold text-white">Try this today: </b>
            {WISE[activePillarIndex].d}
          </p>
        </div>
      ) : (
        <p className="mt-3 text-xs text-[#B9C7F0]">
          Tap a letter to learn what it means.
        </p>
      )}

      {/* Brand & Credit Footer */}
      <div className="mt-6 border-t border-white/15 pt-4">
        <p className="font-display text-base font-bold tracking-widest text-white">
          OLAMII <em className="not-italic text-[#FF6AB1]">WISE</em> SOLUTIONS
        </p>
        <p className="mt-2 text-xs leading-relaxed text-[#B9C7F0]">
          Made for the International Day of the Girl Child 2026, Charity Schools, Salem City, Warri. First version. Founded by Olamide Olaniyan, mentored by ESGMC under the SDG Learning Lab.
        </p>
      </div>
    </section>
  );
};
