/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Original vector SVG illustrations of Nigerian girls in school uniform and everyday attire.
 * Features diverse natural hairstyles (cornrows, afro puffs, braided buns) and varied warm skin tones.
 * Safe for children: no copyrighted characters or real photos.
 */

import React from 'react';

interface NigerianGirlIllustrationProps {
  variant?: 'school' | 'dreaming' | 'reading' | 'safe';
  className?: string;
  size?: number;
}

export const NigerianGirlIllustration: React.FC<NigerianGirlIllustrationProps> = ({
  variant = 'school',
  className = '',
  size = 140
}) => {
  if (variant === 'dreaming') {
    // Girl in bright lilac top with two fluffy afro puffs looking up hopefully
    return (
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F6" />
            <stop offset="100%" stopColor="#FFE4F0" />
          </linearGradient>
          <linearGradient id="dressViolet" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
        </defs>

        {/* Backdrop circle */}
        <circle cx="100" cy="100" r="92" fill="url(#skyGrad)" stroke="#F3D2E2" strokeWidth="3" />

        {/* Small golden star sparkles around */}
        <path d="M42 50 L45 58 L53 61 L45 64 L42 72 L39 64 L31 61 L39 58 Z" fill="#F5C518" />
        <path d="M165 40 L167 46 L173 48 L167 50 L165 56 L163 50 L157 48 L163 46 Z" fill="#F5C518" />
        <path d="M168 115 L170 119 L174 120 L170 121 L168 125 L166 121 L162 120 L166 119 Z" fill="#2FC7AB" />

        {/* Left Afro Puff with pink ribbon */}
        <circle cx="56" cy="68" r="26" fill="#1C1412" />
        <ellipse cx="68" cy="78" rx="7" ry="11" fill="#E6197F" transform="rotate(25 68 78)" />

        {/* Right Afro Puff with pink ribbon */}
        <circle cx="144" cy="68" r="26" fill="#1C1412" />
        <ellipse cx="132" cy="78" rx="7" ry="11" fill="#E6197F" transform="rotate(-25 132 78)" />

        {/* Shoulders & Clothing */}
        <path d="M48 185 C55 145 75 136 100 136 C125 136 145 145 152 185 Z" fill="url(#dressViolet)" />
        {/* Soft yellow collar accent */}
        <path d="M85 136 Q100 152 115 136" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />

        {/* Neck */}
        <path d="M89 122 L89 142 L111 142 L111 122 Z" fill="#6B3A22" />

        {/* Head & Face - warm rich brown skin */}
        <ellipse cx="100" cy="98" rx="34" ry="38" fill="#784227" />

        {/* Hair Front Edge / Texture */}
        <path d="M68 85 Q100 68 132 85 Q100 80 68 85 Z" fill="#1C1412" />

        {/* Eyebrows */}
        <path d="M80 88 Q88 84 94 88" stroke="#1C1412" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M106 88 Q112 84 120 88" stroke="#1C1412" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Happy wide eyes looking slightly up */}
        <ellipse cx="86" cy="97" rx="5" ry="6" fill="#FFFFFF" />
        <circle cx="87" cy="96" r="3.2" fill="#2E1B14" />
        <circle cx="88.5" cy="94.5" r="1.2" fill="#FFFFFF" />

        <ellipse cx="114" cy="97" rx="5" ry="6" fill="#FFFFFF" />
        <circle cx="115" cy="96" r="3.2" fill="#2E1B14" />
        <circle cx="116.5" cy="94.5" r="1.2" fill="#FFFFFF" />

        {/* Cute nose */}
        <path d="M97 106 Q100 110 103 106" stroke="#542B15" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Warm cheerful smile */}
        <path d="M88 116 Q100 128 112 116" stroke="#48220F" strokeWidth="2.5" strokeLinecap="round" fill="#D6106F" />
        <path d="M91 116 Q100 120 109 116" fill="#FFFFFF" />

        {/* Rosy blush cheeks */}
        <ellipse cx="78" cy="108" rx="6" ry="4" fill="#D6106F" fillOpacity="0.25" />
        <ellipse cx="122" cy="108" rx="6" ry="4" fill="#D6106F" fillOpacity="0.25" />

        {/* Golden hoop earrings */}
        <ellipse cx="66" cy="102" rx="3.5" ry="5.5" stroke="#F5C518" strokeWidth="2" fill="none" />
        <ellipse cx="134" cy="102" rx="3.5" ry="5.5" stroke="#F5C518" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (variant === 'reading') {
    // Girl reading a book with braided crown/cornrows
    return (
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E3F9F3" />
            <stop offset="100%" stopColor="#D0F3EA" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="92" fill="url(#mintGrad)" stroke="#B2EBDC" strokeWidth="3" />

        {/* Hair - high braided bun */}
        <ellipse cx="100" cy="50" rx="26" ry="22" fill="#150E0C" />
        <circle cx="100" cy="50" r="16" fill="#2A1B17" />
        {/* Hair wrap ribbon */}
        <rect x="86" y="58" width="28" height="6" rx="3" fill="#2FC7AB" />

        {/* Neck */}
        <rect x="91" y="108" width="18" height="24" rx="4" fill="#5F331A" />

        {/* Shoulders */}
        <path d="M52 185 C58 140 76 130 100 130 C124 130 142 140 148 185 Z" fill="#0B2A6B" />
        {/* Crisp white school collar */}
        <path d="M78 130 L100 152 L122 130 Z" fill="#FFFFFF" />
        <path d="M98 142 L100 160 L102 142 Z" fill="#E6197F" />

        {/* Head */}
        <ellipse cx="100" cy="88" rx="33" ry="36" fill="#6E3B20" />
        {/* Hairline braids */}
        <path d="M68 80 C80 68 120 68 132 80 C120 74 80 74 68 80 Z" fill="#150E0C" />

        {/* Eyes looking focused & smiling at book below */}
        <path d="M82 86 Q88 89 94 86" stroke="#221109" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M106 86 Q112 89 118 86" stroke="#221109" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Lashes */}
        <path d="M88 88 L89 92" stroke="#221109" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M112 88 L111 92" stroke="#221109" strokeWidth="1.5" strokeLinecap="round" />

        {/* Sweet calm smile */}
        <path d="M90 105 Q100 114 110 105" stroke="#48220F" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Hands holding open book */}
        <g transform="translate(62, 145)">
          {/* Left page */}
          <path d="M38 12 C24 8 10 12 2 16 L2 38 C10 34 24 30 38 34 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
          {/* Right page */}
          <path d="M38 12 C52 8 66 12 74 16 L74 38 C66 34 52 30 38 34 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
          {/* Book Spine */}
          <rect x="36" y="10" width="4" height="26" rx="2" fill="#E6197F" />
          {/* Gentle lines of text */}
          <line x1="8" y1="20" x2="30" y2="18" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="26" x2="28" y2="24" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="18" x2="68" y2="20" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="24" x2="68" y2="26" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  // Default: 'school' - Confident girl in Nigerian green/white uniform with neat braided cornrows
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5F9" />
          <stop offset="100%" stopColor="#FFE4F1" />
        </linearGradient>
        <linearGradient id="uniformGreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B7A62" />
          <stop offset="100%" stopColor="#075E4B" />
        </linearGradient>
      </defs>

      {/* Background glowing circle */}
      <circle cx="100" cy="100" r="92" fill="url(#warmGrad)" stroke="#F3D2E2" strokeWidth="3" />

      {/* Decorative sparkles */}
      <path d="M38 52 L40 58 L46 60 L40 62 L38 68 L36 62 L30 60 L36 58 Z" fill="#F5C518" />
      <path d="M162 60 L164 65 L169 66 L164 68 L162 73 L160 68 L155 66 L160 65 Z" fill="#E6197F" />

      {/* Hair: Cornrow braids falling gracefully */}
      <circle cx="100" cy="72" r="42" fill="#18110F" />
      {/* Individual braid texture lines */}
      <path d="M72 75 Q68 115 62 135" stroke="#251A17" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 75 Q78 118 74 140" stroke="#251A17" strokeWidth="6" strokeLinecap="round" />
      <path d="M128 75 Q132 115 138 135" stroke="#251A17" strokeWidth="6" strokeLinecap="round" />
      <path d="M120 75 Q122 118 126 140" stroke="#251A17" strokeWidth="6" strokeLinecap="round" />

      {/* Green beaded hair ends */}
      <circle cx="62" cy="136" r="4" fill="#2FC7AB" />
      <circle cx="74" cy="141" r="4" fill="#F5C518" />
      <circle cx="138" cy="136" r="4" fill="#2FC7AB" />
      <circle cx="126" cy="141" r="4" fill="#F5C518" />

      {/* Neck */}
      <rect x="91" y="112" width="18" height="24" rx="4" fill="#6A3B22" />

      {/* Shoulders - Nigerian green school pinafore uniform */}
      <path d="M50 185 C56 142 75 134 100 134 C125 134 144 142 150 185 Z" fill="url(#uniformGreen)" />
      {/* White collared school shirt underneath */}
      <path d="M82 134 L100 155 L118 134 Z" fill="#FFFFFF" />
      {/* Green school tie / neck button */}
      <circle cx="100" cy="146" r="3.5" fill="#E6197F" />

      {/* Head - warm ebony/caramel skin */}
      <ellipse cx="100" cy="94" rx="33" ry="36" fill="#7C4427" />

      {/* Braided hairline */}
      <path d="M70 82 C82 72 118 72 130 82 C118 77 82 77 70 82 Z" fill="#18110F" />

      {/* Eyebrows */}
      <path d="M79 84 Q86 80 93 83" stroke="#18110F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M107 83 Q114 80 121 84" stroke="#18110F" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Bright, confident eyes */}
      <ellipse cx="85" cy="91" rx="5" ry="5.5" fill="#FFFFFF" />
      <circle cx="86" cy="91" r="3.2" fill="#271812" />
      <circle cx="87" cy="89.5" r="1.2" fill="#FFFFFF" />

      <ellipse cx="115" cy="91" rx="5" ry="5.5" fill="#FFFFFF" />
      <circle cx="114" cy="91" r="3.2" fill="#271812" />
      <circle cx="115" cy="89.5" r="1.2" fill="#FFFFFF" />

      {/* Nose */}
      <path d="M97 99 Q100 103 103 99" stroke="#522A14" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Bright radiant smile */}
      <path d="M86 109 Q100 124 114 109" stroke="#3D1C0B" strokeWidth="2.5" strokeLinecap="round" fill="#D6106F" />
      <path d="M90 109 Q100 114 110 109" fill="#FFFFFF" />

      {/* Rosy blush */}
      <circle cx="78" cy="103" r="5" fill="#E6197F" fillOpacity="0.22" />
      <circle cx="122" cy="103" r="5" fill="#E6197F" fillOpacity="0.22" />

      {/* Tiny gold dot earrings */}
      <circle cx="67" cy="98" r="3" fill="#F5C518" />
      <circle cx="133" cy="98" r="3" fill="#F5C518" />
    </svg>
  );
};
