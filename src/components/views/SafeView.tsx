/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TrustedAdult } from '../../types';
import { CONTACTS } from '../../data/content';
import { Shield, ShieldAlert, HeartHandshake, Phone, Trash2 } from 'lucide-react';
import { NigerianGirlIllustration } from '../illustrations/NigerianGirlIllustration';

interface SafeViewProps {
  trusted: TrustedAdult[];
  onAddTrustedAdult: (adult: TrustedAdult) => void;
  onRemoveTrustedAdult: (index: number) => void;
}

export const SafeView: React.FC<SafeViewProps> = ({
  trusted,
  onAddTrustedAdult,
  onRemoveTrustedAdult
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddTrustedAdult({
      n: name.trim(),
      r: role.trim() || 'Trusted adult',
      p: phone.trim()
    });
    setName('');
    setRole('');
    setPhone('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--fg)]">
            Safe
          </h2>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-[var(--muted)]">
            Your safe people, your rights, and where to turn.
          </p>
        </div>
        <div className="shrink-0 hidden xs:block">
          <NigerianGirlIllustration variant="school" size={72} />
        </div>
      </div>

      {/* Card 1: If Something Feels Wrong */}
      <div className="rounded-3xl bg-[#FFE6F1] dark:bg-[#3D1C42] p-5 text-[var(--fg)] shadow-2xs">
        <div className="flex items-center gap-2 text-[#E6197F] dark:text-[#FF6AB1]">
          <ShieldAlert className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold">
            If something feels wrong
          </h3>
        </div>
        <p className="mt-2 text-sm font-medium leading-relaxed">
          Go to a safe adult you trust and tell them. You do not have to handle it alone.
        </p>
      </div>

      {/* Card 2: My Trusted Adults List and Form */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-[#129C7F]">
          <HeartHandshake className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            My trusted adults
          </h3>
        </div>

        {/* Saved List */}
        {trusted.length > 0 ? (
          <div className="space-y-2">
            {trusted.map((adult, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] p-3 text-sm text-[var(--fg)]"
              >
                <div>
                  <b className="font-bold text-base">{adult.n}</b>
                  <p className="text-xs text-[var(--muted)]">
                    {adult.r}
                    {adult.p && <span> · {adult.p}</span>}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveTrustedAdult(idx)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 active:scale-95 transition"
                  aria-label={`Remove ${adult.n}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs font-semibold text-[var(--muted)]">
            No one saved yet.
          </p>
        )}

        {/* Add Form */}
        <form onSubmit={handleAdd} className="space-y-3 border-t border-[#F3D2E2] dark:border-[#4E2C52] pt-4">
          <div>
            <label htmlFor="tn" className="block text-xs font-extrabold text-[var(--fg)]">
              Name
            </label>
            <input
              id="tn"
              type="text"
              autoComplete="off"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Mrs. Grace or Uncle Tunde"
              className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="tr" className="block text-xs font-extrabold text-[var(--fg)]">
                Who
              </label>
              <input
                id="tr"
                type="text"
                autoComplete="off"
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="Auntie, Teacher, Pastor..."
                className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
              />
            </div>

            <div>
              <label htmlFor="tp" className="block text-xs font-extrabold text-[var(--fg)]">
                Phone (optional)
              </label>
              <input
                id="tp"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Optional phone number"
                className="mt-1 w-full min-h-[44px] rounded-2xl border-2 border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full min-h-[44px] rounded-full bg-[#129C7F] px-4 py-2.5 text-sm font-extrabold text-white shadow hover:opacity-95 active:scale-98 disabled:opacity-50 transition"
          >
            Save
          </button>
        </form>
      </div>

      {/* Card 3: Community Support Card */}
      <article className="overflow-hidden rounded-3xl border border-[#2FC7AB] bg-[#E3F9F3] dark:bg-[#123B33] shadow-2xs">
        <h4 className="bg-[#2FC7AB] px-4 py-2.5 font-display text-base font-bold text-[#062050]">
          Community support
        </h4>
        <div className="p-4 space-y-3">
          <p className="text-sm leading-relaxed text-[var(--fg)]">
            <b className="font-bold text-[#0B7A62] dark:text-[#5BE3C5]">Coming soon: </b>
            the SDG Allied Parents and Youth Network. Ask your parent to find out more.
          </p>

          {/* Render Contacts list */}
          {CONTACTS.length > 0 && (
            <div className="mt-3 space-y-2.5 border-t border-[#2FC7AB]/30 pt-3">
              {CONTACTS.map((contact, idx) => {
                const cleanPhone = (contact.whatsapp || contact.p || '').replace(/[^0-9]/g, '');
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white/70 dark:bg-black/30 p-3.5 text-xs text-[var(--fg)] border border-[#2FC7AB]/20"
                  >
                    <div>
                      <b className="font-bold text-sm text-[var(--fg)]">{contact.n}</b>
                      <p className="mt-0.5 font-bold text-[#0B7A62] dark:text-[#5BE3C5]">
                        {contact.r}
                      </p>
                      {contact.p && (
                        <p className="mt-0.5 text-[var(--muted)] font-mono text-[11px]">
                          {contact.p}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {/* WhatsApp Button */}
                      {cleanPhone && (
                        <a
                          href={`https://wa.me/${cleanPhone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2 text-xs font-extrabold text-white shadow-xs hover:bg-[#20BA5A] active:scale-95 transition"
                          aria-label={`Chat with ${contact.n} on WhatsApp`}
                        >
                          <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      )}
                      {/* Direct Phone Call Button */}
                      {contact.p && (
                        <a
                          href={`tel:${contact.p}`}
                          className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#2FC7AB] px-3 py-2 text-xs font-extrabold text-[#062050] shadow-xs hover:opacity-90 active:scale-95 transition"
                          aria-label={`Call ${contact.n}`}
                        >
                          <Phone className="h-4 w-4 shrink-0" />
                          <span>Call</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </article>

      {/* Card 4: My Rights */}
      <div className="rounded-3xl border border-[#F3D2E2] dark:border-[#4E2C52] bg-[var(--surface)] p-5 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-[#7B3FA0]">
          <Shield className="h-5 w-5" />
          <h3 className="font-display text-lg font-bold text-[var(--fg)]">
            My rights
          </h3>
        </div>

        <ul className="list-disc space-y-2 pl-5 text-sm font-semibold text-[var(--fg)]">
          <li>I have the right to go to school</li>
          <li>I have the right to say no</li>
          <li>I have the right to be safe, to rest and to play</li>
          <li>No one may force me to marry while I am a child</li>
        </ul>

        <div className="rounded-2xl bg-[var(--bg)] p-3 text-xs leading-relaxed text-[var(--fg)] border border-[#F3D2E2] dark:border-[#4E2C52]">
          <b className="font-bold text-[#E6197F]">
            If anyone tries to take these rights away,{' '}
          </b>
          tell a trusted adult from your list, your class teacher or the school counsellor.
        </div>
      </div>

      {/* Privacy note */}
      <p className="text-center text-xs leading-relaxed text-[var(--muted)] px-2">
        Everything you type here stays on this phone. If something is troubling you, tell a trusted adult in person.
      </p>
    </div>
  );
};
