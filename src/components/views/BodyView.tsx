/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BODY, FOODS, MEALS, MYTHS } from '../../data/content';
import { NigerianGirlIllustration } from '../illustrations/NigerianGirlIllustration';
import { RotateCw } from 'lucide-react';

interface BodyViewProps {
  age: number;
  onSetAge: (age: number) => void;
}

export const BodyView: React.FC<BodyViewProps> = ({ age, onSetAge }) => {
  // Find matching age band
  const currentBand = BODY.find(b => age >= b.min && age <= b.max) || BODY[1];

  // Track flipped state for the 7 myth & fact cards
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header section with illustration */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)]">
            My Body
          </h2>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-[var(--muted)]">
            Pick your age. Everyone changes at their own speed, and that is normal.
          </p>
        </div>
        <div className="shrink-0 hidden xs:block">
          <NigerianGirlIllustration variant="reading" size={72} />
        </div>
      </div>

      {/* Age Selector Chips (9 to 16) */}
      <div>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Age selector from 9 to 16"
        >
          {Array.from({ length: 8 }, (_, i) => 9 + i).map(num => {
            const isSelected = age === num;
            return (
              <button
                key={num}
                onClick={() => onSetAge(num)}
                aria-pressed={isSelected}
                className={`flex h-11 min-w-[48px] items-center justify-center rounded-full px-3.5 text-sm font-extrabold transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-[#7B3FA0] text-white shadow-md ring-2 ring-[#7B3FA0]/30'
                    : 'border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] text-[var(--fg)] hover:border-[#7B3FA0]'
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>
      </div>

      {/* Age Guidance Cards */}
      <div className="space-y-3">
        {/* What is changing */}
        <article className="rounded-2xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-4 shadow-2xs">
          <h3 className="font-display text-lg font-bold text-[#7B3FA0] dark:text-[#C08AE6]">
            What is changing
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--fg)]">
            {currentBand.change}
          </p>
        </article>

        {/* Looking after yourself */}
        <article className="rounded-2xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-4 shadow-2xs">
          <h3 className="font-display text-lg font-bold text-[#129C7F] dark:text-[#3FD6B4]">
            Looking after yourself
          </h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-[var(--fg)]">
            {currentBand.care.map((item, idx) => (
              <li key={idx} className="leading-snug">{item}</li>
            ))}
          </ul>
        </article>

        {/* When to tell a trusted woman or nurse */}
        <article className="rounded-2xl bg-[#FFE6F1] dark:bg-[#3D1C42] p-4 text-[var(--fg)] shadow-2xs">
          <h3 className="font-display text-lg font-bold text-[#E6197F] dark:text-[#FF6AB1]">
            Tell a trusted woman or a nurse if
          </h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
            {currentBand.ask.map((item, idx) => (
              <li key={idx} className="leading-snug font-medium">{item}</li>
            ))}
          </ul>
        </article>
      </div>

      {/* Eating Well Section */}
      <div className="space-y-3 pt-2">
        <h3 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">
          Eating well
        </h3>
        <p className="text-sm font-semibold leading-relaxed text-[var(--muted)]">
          Growing girls need strong blood and strong bones. Once periods begin, a little blood is lost each month, so iron-rich food matters.
        </p>

        {/* Foods that help your body */}
        <article className="rounded-2xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-4 shadow-2xs">
          <h4 className="font-display text-base font-bold text-[var(--fg)]">
            Foods that help your body
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm text-[var(--fg)]">
            {FOODS.map(([category, desc], idx) => (
              <li key={idx} className="leading-snug">
                <b className="font-bold text-[#0B7A62] dark:text-[#5BE3C5]">{category}: </b>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Meal ideas for a day */}
        <article className="rounded-2xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-4 shadow-2xs">
          <h4 className="font-display text-base font-bold text-[var(--fg)]">
            Meal ideas for a day
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm text-[var(--fg)]">
            {MEALS.map(([time, meal], idx) => (
              <li key={idx} className="leading-snug">
                <b className="font-bold text-[#EE7F12] dark:text-[#FFA24D]">{time}: </b>
                <span>{meal}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-[#F3D2E2] dark:border-[#4E2C52] pt-2 text-xs font-bold text-[var(--muted)]">
            Eat what your family can afford. Beans, eggs and green leaves are cheap and strong.
          </p>
        </article>
      </div>

      {/* Ready to Wait (Interactive Flip Cards) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold tracking-tight text-[var(--fg)]">
            Ready to Wait
          </h3>
          <span className="text-xs font-bold text-[var(--muted)]">
            Tap cards to flip
          </span>
        </div>
        <p className="text-sm font-semibold leading-relaxed text-[var(--muted)]">
          Facts that help a girl and her family decide with a clear mind.
        </p>

        <div className="space-y-3">
          {MYTHS.map((item, idx) => {
            const isFlipped = Boolean(flippedCards[idx]);

            return (
              <div
                key={idx}
                onClick={() => toggleCardFlip(idx)}
                className="group cursor-pointer rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-4 shadow-2xs transition-all hover:border-[#E6197F] active:scale-[0.99]"
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCardFlip(idx);
                  }
                }}
                aria-label={`Myth and fact card ${idx + 1}. Currently showing ${isFlipped ? 'Fact' : 'Myth'}. Tap to flip.`}
              >
                <div className="flex items-center justify-between border-b border-[#F3D2E2] dark:border-[#4E2C52] pb-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-wider ${
                      isFlipped
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
                    }`}
                  >
                    {isFlipped ? 'Fact ✓' : 'Myth ⚠'}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-[var(--muted)] group-hover:text-[#E6197F]">
                    <span>{isFlipped ? 'Show Myth' : 'Tap for Fact'}</span>
                    <RotateCw className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 duration-500" />
                  </div>
                </div>

                <div className="mt-3">
                  {!isFlipped ? (
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                        Common Myth:
                      </p>
                      <p className="mt-1 text-sm font-bold text-[var(--fg)] leading-snug">
                        "{item.m}"
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                        The Real Truth:
                      </p>
                      <p className="mt-1 text-sm font-bold text-[var(--fg)] leading-snug">
                        {item.f}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
