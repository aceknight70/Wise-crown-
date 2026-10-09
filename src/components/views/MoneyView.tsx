/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SavingPlan } from '../../types';
import { SAVEWAYS, IDEAS } from '../../data/content';
import { Wallet, Check } from 'lucide-react';

interface MoneyViewProps {
  sv: SavingPlan;
  onUpdateSavingPlan: (fields: Partial<SavingPlan>) => void;
  onToggleSavingWay: (wayIndex: number) => void;
}

export const MoneyView: React.FC<MoneyViewProps> = ({
  sv,
  onUpdateSavingPlan,
  onToggleSavingWay
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)]">
          My Money
        </h2>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-[var(--muted)]">
          Saving is easier with an adult beside you. Make your plan here, then talk it over with your parent or a trusted adult.
        </p>
      </div>

      {/* Card 1: My Saving Plan */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-[#EE7F12]">
          <Wallet className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            My saving plan
          </h3>
        </div>

        <div className="space-y-4">
          {/* What am I saving for */}
          <div>
            <label htmlFor="svWhat" className="block text-xs font-extrabold text-[var(--fg)]">
              What am I saving for?
            </label>
            <input
              id="svWhat"
              type="text"
              autoComplete="off"
              value={sv.what}
              onChange={e => onUpdateSavingPlan({ what: e.target.value })}
              placeholder="School bag, sewing kit, data for school..."
              className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
            />
          </div>

          {/* How do I plan to save (multi-select chips) */}
          <div>
            <label className="block text-xs font-extrabold text-[var(--fg)]">
              How do I plan to save?
            </label>
            <div className="mt-2 flex flex-col gap-2">
              {SAVEWAYS.map((way, idx) => {
                const isSelected = sv.ways.includes(idx);
                return (
                  <button
                    key={way}
                    type="button"
                    onClick={() => onToggleSavingWay(idx)}
                    aria-pressed={isSelected}
                    className={`flex min-h-[44px] items-center justify-between rounded-2xl border-2 px-3.5 py-2.5 text-left text-xs font-bold transition-all active:scale-98 ${
                      isSelected
                        ? 'border-[#2FC7AB] bg-[#E3F9F3] text-[#0B7A62] dark:border-[#2FC7AB] dark:bg-[#123B33] dark:text-[#5BE3C5] shadow-xs'
                        : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] text-[var(--fg)] hover:border-[#2FC7AB]'
                    }`}
                  >
                    <span>{way}</span>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isSelected
                          ? 'border-[#2FC7AB] bg-[#2FC7AB] text-white'
                          : 'border-[#F3D2E2] dark:border-[#4E2C52]'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* My own idea */}
          <div>
            <label htmlFor="svOwn" className="block text-xs font-extrabold text-[var(--fg)]">
              My own idea (optional)
            </label>
            <input
              id="svOwn"
              type="text"
              autoComplete="off"
              value={sv.own}
              onChange={e => onUpdateSavingPlan({ own: e.target.value })}
              placeholder="e.g. Sell handmade hair beads during the holidays..."
              className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
            />
          </div>

          {/* Which adult will help me */}
          <div>
            <label htmlFor="svWho" className="block text-xs font-extrabold text-[var(--fg)]">
              Which adult will help me?
            </label>
            <input
              id="svWho"
              type="text"
              autoComplete="off"
              value={sv.who}
              onChange={e => onUpdateSavingPlan({ who: e.target.value })}
              placeholder="Parent, auntie, teacher, counsellor, mentor..."
              className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
            />
          </div>

          {/* Checkbox: Talked to adult */}
          <div className="pt-1">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                id="svTalked"
                checked={sv.talked}
                onChange={e => onUpdateSavingPlan({ talked: e.target.checked })}
                className="h-5 w-5 rounded-md accent-[#E6197F] cursor-pointer"
              />
              <span className="text-sm font-bold text-[var(--fg)]">
                I have talked to my parent or trusted adult about my plan
              </span>
            </label>
          </div>

          {/* Dynamic Guidance Message */}
          <div
            className={`rounded-2xl p-3 text-xs font-bold leading-relaxed transition-all ${
              sv.talked
                ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                : 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
            }`}
          >
            {sv.talked
              ? 'Well done. Ask your adult to help you review your plan every month.'
              : 'Next step: sit with your adult this week and agree one small amount to put aside.'}
          </div>
        </div>
      </div>

      {/* Ways Girls Can Earn */}
      <div className="space-y-3 pt-2">
        <h3 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">
          Ways girls can earn
        </h3>
        <p className="text-sm font-semibold leading-relaxed text-[var(--muted)]">
          Pick a path that fits you, and learn it with a trusted adult or a skilled person.
        </p>

        <div className="space-y-4">
          {IDEAS.map((category, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded-3xl border border-[#2FC7AB] bg-[#E3F9F3] dark:bg-[#123B33] shadow-2xs"
            >
              <h4 className="bg-[#2FC7AB] px-4 py-2.5 font-display text-base font-bold text-[#062050]">
                {category.t}
              </h4>
              <div className="p-4 space-y-3">
                {category.items.map(([title, desc], itemIdx) => (
                  <p key={itemIdx} className="text-sm leading-relaxed text-[var(--fg)]">
                    <b className="font-bold text-[#0B7A62] dark:text-[#5BE3C5]">
                      {title}.{' '}
                    </b>
                    <span>{desc}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
