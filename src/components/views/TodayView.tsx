/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { CrownHero } from '../CrownHero';
import { WiseStandard } from '../WiseStandard';
import { NigerianGirlIllustration } from '../illustrations/NigerianGirlIllustration';
import {
  VALUES,
  QUIZ,
  EQ,
  CAREERS,
  STARTERS,
  EXAMPLES,
  QuizQuestion
} from '../../data/content';
import { getDayNumber, formatShortDate } from '../../hooks/useStorage';
import { AppTab, AppState } from '../../types';

interface TodayViewProps {
  state: AppState;
  todayDone: Record<string, boolean>;
  litCount: number;
  onMarkDone: (id: string) => void;
  onAddTrustedAdult: (adult: { n: string; r: string; p?: string }) => void;
  onSetDreamCareer: (career: string) => void;
  onAddLetter: (text: string) => void;
  onSelectTab: (tab: AppTab) => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  state,
  todayDone,
  litCount,
  onMarkDone,
  onAddTrustedAdult,
  onSetDreamCareer,
  onAddLetter,
  onSelectTab
}) => {
  const dayIndex = getDayNumber();
  const currentQuiz = QUIZ[dayIndex % QUIZ.length];
  const currentEq = EQ[dayIndex % EQ.length];

  // Accordion open state - defaults to first unfinished challenge
  const [openChallengeId, setOpenChallengeId] = useState<string>(() => {
    const firstUnfinished = VALUES.find(v => !todayDone[v.id]);
    return firstUnfinished ? firstUnfinished.id : 'edu';
  });

  // Quiz user choices
  const [quizPick, setQuizPick] = useState<number | null>(null);
  const [eqPick, setEqPick] = useState<number | null>(null);

  // Safety form inputs
  const [adultName, setAdultName] = useState('');
  const [adultRole, setAdultRole] = useState('Parent');

  // Custom dream input
  const [customDream, setCustomDream] = useState('');

  // Letter input
  const [letterText, setLetterText] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenChallengeId(prev => (prev === id ? '' : id));
  };

  // Education Quiz handlers
  const handleQuizAnswer = (index: number) => {
    setQuizPick(index);
    if (index === currentQuiz.b) {
      onMarkDone('edu');
    }
  };

  // Equality Scenario handlers
  const handleEqAnswer = (index: number) => {
    setEqPick(index);
    if (index === currentEq.b) {
      onMarkDone('eq');
    }
  };

  // Safety handler
  const handleSaveAdult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adultName.trim()) return;
    onAddTrustedAdult({ n: adultName.trim(), r: adultRole, p: '' });
    onMarkDone('safe');
    setAdultName('');
  };

  // Career handlers
  const handleSelectCareer = (careerName: string) => {
    onSetDreamCareer(careerName);
    onMarkDone('opp');
  };

  const handleSaveCustomDream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDream.trim()) return;
    onSetDreamCareer(customDream.trim());
    onMarkDone('opp');
    setCustomDream('');
  };

  // Letter handlers
  const handleStarterClick = (starter: string) => {
    setLetterText(prev => (prev ? `${prev} ${starter}` : starter));
  };

  const handleExampleClick = (example: string) => {
    setLetterText(example);
  };

  const handleSaveLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (letterText.trim().length < 4) return;
    onAddLetter(letterText.trim());
    onMarkDone('tom');
    setLetterText('');
  };

  const renderQuizContent = (
    item: QuizQuestion,
    userPick: number | null,
    isDone: boolean,
    onPick: (index: number) => void
  ) => {
    let feedback = '';
    if (userPick !== null) {
      feedback =
        userPick === item.b
          ? `Right. ${item.w}`
          : 'Not quite. Read it again and pick another answer.';
    } else if (isDone) {
      feedback = `Done for today. ${item.w}`;
    }

    return (
      <div className="space-y-3 pt-2">
        <p className="text-base font-bold text-[var(--fg)]">{item.q}</p>
        <div className="space-y-2">
          {item.o.map((option, idx) => {
            const isPicked = userPick === idx;
            const isCorrect = idx === item.b;
            let btnStyle =
              'border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] hover:bg-[var(--surface-hover)]';
            if (isPicked) {
              btnStyle = isCorrect
                ? 'border-emerald-600 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100 dark:border-emerald-500'
                : 'border-amber-600 bg-amber-50 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100 dark:border-amber-500';
            } else if (isDone && isCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30';
            }

            return (
              <button
                key={option}
                onClick={() => onPick(idx)}
                className={`w-full min-h-[44px] rounded-2xl border-2 p-3 text-left font-semibold text-sm leading-snug transition-all active:scale-[0.99] ${btnStyle}`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {feedback && (
          <p
            role="status"
            className={`mt-2 text-sm font-bold ${
              userPick === item.b || (isDone && userPick === null)
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-amber-700 dark:text-amber-400'
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    );
  };

  const selectedCareerInfo = CAREERS.find(c => c.n === state.dream);

  return (
    <div className="space-y-4">
      {/* SDG Badge */}
      <div className="rounded-full bg-[#E3F9F3] dark:bg-[#123B33] px-4 py-2 text-center text-xs font-black tracking-wide text-[#0B7A62] dark:text-[#5BE3C5] shadow-xs">
        Supporting SDG 1, 3, 4, 5, 8 and 9 for girls and their families
      </div>

      {/* Hero Crown */}
      <CrownHero todayDone={todayDone} litCount={litCount} />

      {/* 5 Accordion Challenges */}
      <div className="space-y-3 pt-1">
        {/* Challenge 1: Education */}
        <section
          className={`overflow-hidden rounded-2xl border transition-all ${
            todayDone.edu
              ? 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#28142E]'
              : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E]'
          }`}
        >
          <button
            onClick={() => toggleAccordion('edu')}
            aria-expanded={openChallengeId === 'edu'}
            className="flex w-full min-h-[56px] items-center justify-between p-3.5 text-left transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: '#E6197F' }}
              />
              <div>
                <b className="font-bold text-[var(--fg)] text-base">Education</b>
                <p className="text-xs text-[var(--muted)]">Answer one quick question</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  todayDone.edu
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FFE6F1] text-[#2B1230] dark:bg-[#3D1C42] dark:text-pink-200'
                }`}
              >
                {todayDone.edu ? 'Done' : '2 min'}
              </span>
              {openChallengeId === 'edu' ? (
                <ChevronUp className="h-4 w-4 text-[var(--muted)]" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              )}
            </div>
          </button>
          {openChallengeId === 'edu' && (
            <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] p-4">
              {renderQuizContent(currentQuiz, quizPick, Boolean(todayDone.edu), handleQuizAnswer)}
            </div>
          )}
        </section>

        {/* Challenge 2: Equality */}
        <section
          className={`overflow-hidden rounded-2xl border transition-all ${
            todayDone.eq
              ? 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#28142E]'
              : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E]'
          }`}
        >
          <button
            onClick={() => toggleAccordion('eq')}
            aria-expanded={openChallengeId === 'eq'}
            className="flex w-full min-h-[56px] items-center justify-between p-3.5 text-left transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: '#7B3FA0' }}
              />
              <div>
                <b className="font-bold text-[var(--fg)] text-base">Equality</b>
                <p className="text-xs text-[var(--muted)]">Decide what the girl should do</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  todayDone.eq
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#F3E8FF] text-[#2B1230] dark:bg-[#3D1C42] dark:text-purple-200'
                }`}
              >
                {todayDone.eq ? 'Done' : '2 min'}
              </span>
              {openChallengeId === 'eq' ? (
                <ChevronUp className="h-4 w-4 text-[var(--muted)]" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              )}
            </div>
          </button>
          {openChallengeId === 'eq' && (
            <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] p-4">
              {renderQuizContent(currentEq, eqPick, Boolean(todayDone.eq), handleEqAnswer)}
            </div>
          )}
        </section>

        {/* Challenge 3: Safety */}
        <section
          className={`overflow-hidden rounded-2xl border transition-all ${
            todayDone.safe
              ? 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#28142E]'
              : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E]'
          }`}
        >
          <button
            onClick={() => toggleAccordion('safe')}
            aria-expanded={openChallengeId === 'safe'}
            className="flex w-full min-h-[56px] items-center justify-between p-3.5 text-left transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: '#129C7F' }}
              />
              <div>
                <b className="font-bold text-[var(--fg)] text-base">Safety</b>
                <p className="text-xs text-[var(--muted)]">Name one adult you trust</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  todayDone.safe
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#E3F9F3] text-[#2B1230] dark:bg-[#123B33] dark:text-teal-200'
                }`}
              >
                {todayDone.safe ? 'Done' : '2 min'}
              </span>
              {openChallengeId === 'safe' ? (
                <ChevronUp className="h-4 w-4 text-[var(--muted)]" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              )}
            </div>
          </button>
          {openChallengeId === 'safe' && (
            <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] p-4 space-y-3">
              <p className="text-sm font-bold text-[var(--fg)]">
                Pick one adult you could tell if something felt wrong. A parent, an auntie, a teacher, a counsellor or a mentor.
              </p>

              {state.trusted.length > 0 && (
                <div className="rounded-2xl bg-[#E3F9F3] dark:bg-[#123B33] p-3 text-sm text-[#0B7A62] dark:text-[#5BE3C5]">
                  <p className="font-bold">
                    You have {state.trusted.length} trusted{' '}
                    {state.trusted.length === 1 ? 'adult' : 'adults'} saved.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => onMarkDone('safe')}
                      className="min-h-[44px] rounded-full bg-[#129C7F] px-4 py-2 text-xs font-extrabold text-white shadow hover:opacity-90 active:scale-95"
                    >
                      Mark done
                    </button>
                    <button
                      onClick={() => onSelectTab('safe')}
                      className="min-h-[44px] rounded-full border-2 border-[#129C7F] px-4 py-2 text-xs font-extrabold text-[#129C7F] dark:text-[#5BE3C5] hover:bg-white/10 active:scale-95"
                    >
                      See my list
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSaveAdult} className="space-y-3 pt-1">
                <div>
                  <label htmlFor="sName" className="block text-xs font-extrabold text-[var(--fg)]">
                    Name
                  </label>
                  <input
                    id="sName"
                    type="text"
                    autoComplete="off"
                    value={adultName}
                    onChange={e => setAdultName(e.target.value)}
                    placeholder="e.g. Auntie Grace"
                    className="mt-1 w-full min-h-[44px] rounded-xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
                  />
                </div>

                <div>
                  <label htmlFor="sRole" className="block text-xs font-extrabold text-[var(--fg)]">
                    Who is she or he?
                  </label>
                  <select
                    id="sRole"
                    value={adultRole}
                    onChange={e => setAdultRole(e.target.value)}
                    className="mt-1 w-full min-h-[44px] rounded-xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
                  >
                    <option>Parent</option>
                    <option>Auntie</option>
                    <option>Uncle</option>
                    <option>Grandparent</option>
                    <option>Elder sister</option>
                    <option>Teacher</option>
                    <option>Counsellor</option>
                    <option>Mentor</option>
                    <option>Nurse</option>
                    <option>Pastor or imam</option>
                    <option>Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!adultName.trim()}
                  className="w-full min-h-[44px] rounded-full bg-[#E6197F] px-4 py-2.5 text-sm font-extrabold text-white shadow hover:bg-[#D6106F] active:scale-98 disabled:opacity-50 transition"
                >
                  Save and light the jewel
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Challenge 4: Opportunity */}
        <section
          className={`overflow-hidden rounded-2xl border transition-all ${
            todayDone.opp
              ? 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#28142E]'
              : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E]'
          }`}
        >
          <button
            onClick={() => toggleAccordion('opp')}
            aria-expanded={openChallengeId === 'opp'}
            className="flex w-full min-h-[56px] items-center justify-between p-3.5 text-left transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: '#EE7F12' }}
              />
              <div>
                <b className="font-bold text-[var(--fg)] text-base">Opportunity</b>
                <p className="text-xs text-[var(--muted)]">What do I want to be?</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  todayDone.opp
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FFF0E5] text-[#2B1230] dark:bg-[#3D1C42] dark:text-amber-200'
                }`}
              >
                {todayDone.opp ? 'Done' : '2 min'}
              </span>
              {openChallengeId === 'opp' ? (
                <ChevronUp className="h-4 w-4 text-[var(--muted)]" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              )}
            </div>
          </button>
          {openChallengeId === 'opp' && (
            <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] p-4 space-y-3">
              <p className="text-sm font-bold text-[var(--fg)]">
                Tap what you could see yourself becoming, or type your own below.
              </p>

              {/* Career Chips */}
              <div className="flex flex-wrap gap-2 pt-1 max-h-60 overflow-y-auto pr-1">
                {CAREERS.map(career => {
                  const isSelected = state.dream === career.n;
                  return (
                    <button
                      key={career.n}
                      onClick={() => handleSelectCareer(career.n)}
                      aria-pressed={isSelected}
                      className={`min-h-[44px] rounded-full px-4 py-2 text-xs font-extrabold border-2 transition active:scale-95 ${
                        isSelected
                          ? 'border-[#0B2A6B] bg-[#0B2A6B] text-white dark:border-[#3A62D6] dark:bg-[#3A62D6]'
                          : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] text-[var(--fg)] hover:border-[#EE7F12]'
                      }`}
                    >
                      {career.n}
                    </button>
                  );
                })}
              </div>

              {state.dream && (
                <div className="rounded-2xl bg-[#FFF0E5] dark:bg-[#3A1B14] p-3 text-sm text-[var(--fg)]">
                  <p>
                    My dream: <b className="font-bold text-[#EE7F12]">{state.dream}</b>.{' '}
                    {selectedCareerInfo ? selectedCareerInfo.t : ''}
                  </p>
                </div>
              )}

              <form onSubmit={handleSaveCustomDream} className="space-y-2 pt-2 border-t border-[#F3D2E2] dark:border-[#4E2C52]">
                <label htmlFor="dOwn" className="block text-xs font-extrabold text-[var(--fg)]">
                  Not on the list? Type your own
                </label>
                <input
                  id="dOwn"
                  type="text"
                  autoComplete="off"
                  value={customDream}
                  onChange={e => setCustomDream(e.target.value)}
                  placeholder="What do you want to be?"
                  className="w-full min-h-[44px] rounded-xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
                />
                <button
                  type="submit"
                  disabled={!customDream.trim()}
                  className="w-full min-h-[44px] rounded-full border-2 border-[#EE7F12] px-4 py-2 text-xs font-extrabold text-[#EE7F12] dark:text-[#FFA24D] hover:bg-[#EE7F12]/10 active:scale-98 disabled:opacity-50 transition"
                >
                  Save my dream
                </button>
              </form>
            </div>
          )}
        </section>

        {/* Challenge 5: A Brighter Tomorrow */}
        <section
          className={`overflow-hidden rounded-2xl border transition-all ${
            todayDone.tom
              ? 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#28142E]'
              : 'border-[#F3D2E2] dark:border-[#4E2C52] bg-white dark:bg-[#28142E]'
          }`}
        >
          <button
            onClick={() => toggleAccordion('tom')}
            aria-expanded={openChallengeId === 'tom'}
            className="flex w-full min-h-[56px] items-center justify-between p-3.5 text-left transition hover:bg-[var(--surface-hover)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: '#D9A400' }}
              />
              <div>
                <b className="font-bold text-[var(--fg)] text-base">A Brighter Tomorrow</b>
                <p className="text-xs text-[var(--muted)]">Write to the girl you will be</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  todayDone.tom
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FEF9C3] text-[#2B1230] dark:bg-[#3D1C42] dark:text-amber-200'
                }`}
              >
                {todayDone.tom ? 'Done' : '2 min'}
              </span>
              {openChallengeId === 'tom' ? (
                <ChevronUp className="h-4 w-4 text-[var(--muted)]" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              )}
            </div>
          </button>
          {openChallengeId === 'tom' && (
            <div className="border-t border-[#F3D2E2] dark:border-[#4E2C52] p-4 space-y-3">
              <p className="text-sm font-bold text-[var(--fg)]">
                Write one sentence to the girl you will be in five years.
              </p>

              <div>
                <p className="text-xs font-bold text-[var(--muted)]">
                  Tap a start, then finish it in your own way.
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {STARTERS.map(starter => (
                    <button
                      key={starter}
                      onClick={() => handleStarterClick(starter)}
                      className="min-h-[44px] rounded-xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] px-3 py-2 text-left text-xs font-bold text-[var(--fg)] hover:border-[#D9A400] active:scale-98"
                    >
                      → {starter}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-[var(--muted)]">
                  Or tap an example and change it to fit you.
                </p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {EXAMPLES.map(example => (
                    <button
                      key={example}
                      onClick={() => handleExampleClick(example)}
                      className="min-h-[44px] rounded-xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] px-3 py-2 text-left text-xs font-bold text-[var(--fg)] hover:border-[#D9A400] active:scale-98"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSaveLetter} className="space-y-2 pt-2">
                <label htmlFor="ltxt" className="block text-xs font-extrabold text-[var(--fg)]">
                  My letter
                </label>
                <textarea
                  id="ltxt"
                  rows={3}
                  value={letterText}
                  onChange={e => setLetterText(e.target.value)}
                  placeholder="Write it in your own words..."
                  className="w-full rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] p-3 text-sm text-[var(--fg)]"
                />
                <button
                  type="submit"
                  disabled={letterText.trim().length < 4}
                  className="w-full min-h-[44px] rounded-full bg-[#E6197F] px-4 py-2.5 text-sm font-extrabold text-white shadow hover:bg-[#D6106F] active:scale-98 disabled:opacity-50 transition"
                >
                  Save and light the jewel
                </button>
              </form>

              {state.letters.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#F3D2E2] dark:border-[#4E2C52]">
                  <h4 className="font-display text-sm font-bold text-[var(--fg)]">
                    My letters
                  </h4>
                  <div className="mt-2 space-y-2 max-h-48 overflow-y-auto pr-1">
                    {state.letters
                      .slice(-3)
                      .reverse()
                      .map((letter, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-2.5 text-xs text-[var(--fg)]"
                        >
                          <small className="font-bold text-[var(--muted)]">
                            {formatShortDate(letter.d)}
                          </small>
                          <p className="mt-1 font-semibold">{letter.t}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Pass It On Card with Nigerian Girl Vector Illustration */}
      <div className="flex items-center gap-4 rounded-3xl bg-[#FFE6F1] dark:bg-[#3D1C42] p-4 text-[var(--fg)]">
        <div className="shrink-0">
          <NigerianGirlIllustration variant="school" size={76} />
        </div>
        <div>
          <h3 className="font-display text-base font-bold text-[#E6197F] dark:text-[#FF6AB1]">
            Pass it on
          </h3>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-[var(--fg)]">
            Show this app to your parent, auntie or a friend. Ask her one of today's questions.
          </p>
        </div>
      </div>

      {/* The W.I.S.E Standard Footer Band */}
      <WiseStandard />
    </div>
  );
};
