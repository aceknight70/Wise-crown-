/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppTab = 'today' | 'body' | 'plan' | 'money' | 'safe';

export interface LetterEntry {
  d: string; // YYYY-MM-DD
  t: string; // letter text
}

export interface TrustedAdult {
  n: string; // Name
  r: string; // Relationship / Role
  p?: string; // Optional phone
}

export interface UserPlan {
  term: string;
  y18: string;
  y25: string;
}

export interface SavingPlan {
  what: string;
  ways: number[]; // indices from SAVEWAYS
  own: string;
  who: string;
  talked: boolean;
}

export interface AppState {
  done: Record<string, Record<string, boolean>>; // dateKey -> { edu: true, eq: true, ... }
  letters: LetterEntry[];
  trusted: TrustedAdult[];
  plan: UserPlan;
  sv: SavingPlan;
  dream: string;
  cycle: string[]; // array of ISO dates (YYYY-MM-DD)
  helpline: string;
  age: number;
}
