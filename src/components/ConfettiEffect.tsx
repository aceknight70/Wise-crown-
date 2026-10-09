/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
  trigger: boolean;
}

export function ConfettiEffect({ trigger }: ConfettiEffectProps) {
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Only fire if trigger is true and hasn't fired yet for this completion
    if (!trigger) {
      hasTriggeredRef.current = false;
      return;
    }

    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Burst 1: Central explosion of gold, pink, mint, violet
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.35 },
      colors: ['#F5C518', '#E6197F', '#2FC7AB', '#7B3FA0', '#EE7F12'],
      disableForReducedMotion: true
    });

    // Burst 2: Left and right sparkles
    const timer = setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.4 },
        colors: ['#FFE27A', '#E6197F', '#2FC7AB']
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.4 },
        colors: ['#FFE27A', '#7B3FA0', '#EE7F12']
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [trigger]);

  return null;
}
