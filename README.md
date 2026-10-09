# WISE Crown — OLAMII WISE Solutions

**WISE Crown** is an empowering, mobile-first Progressive Web App (PWA) created for girls aged 9 to 16, launched for the **International Day of the Girl Child 2026** at Charity Schools, Salem City, Warri, Delta State, Nigeria. 

The app champions five core values: **Education**, **Equality**, **Safety**, **Opportunity**, and **A Brighter Tomorrow**, supporting UN Sustainable Development Goals (SDG) 1, 3, 4, 5, 8, and 9.

Founded by **Olamide Olaniyan** (OLAMII WISE Solutions) and mentored by **ESGMC** under the **SDG Learning Lab**.

---

## 📱 Features & Highlights

- **The Golden Princess Crown**: Interactive hero element that tracks daily progress across the five core values. Completed challenges light up individual jewels with sparkles; completing all 5 triggers a celebratory confetti burst.
- **Slim Vertical Side Navigation Rail**: An ergonomic 76 px vertical rail on phones (widening to labeled tiles on larger screens) that stays sticky and accessible without crowding the mobile screen.
- **Five Interactive Tabs**:
  1. **Today**: Daily rotational education quiz, equality scenario, safe adult recorder, career dream picker, and five-year aspirational letter with starters and examples.
  2. **My Body**: Age-specific guidance (9–16), daily nutrition guides with Nigerian foods, and interactive **Ready to Wait** flip cards busting common myths.
  3. **My Plan**: Term, 18-year, and 25-year goal setting with auto-save, private period cycle diary with interval tracking, and home chore load check slider.
  4. **My Money**: Adult-guided saving planner with multi-select strategies, adult partner identification, and five structured earning pathways for girls.
  5. **Safe**: Personal trusted adult directory with quick management, vetted community support card, and fundamental rights breakdown.
- **The W · I · S · E Standard**: Interactive wellness pillars (Wellness, Indulgence, Self-care, Elegance) with daily actionable tips.
- **Child Safeguarding First**: 100% offline-first and private. All data stays strictly in `localStorage` on the child's device. No trackers, no external analytics, no user accounts required.
- **PWA & Low Data Optimized**: Instant service worker caching via `vite-plugin-pwa`, full offline functionality, fast 3G loading, and in-app home screen installation.
- **Light & Dark Themes**: High-contrast, WCAG AA compliant palette celebrating hot pink (`#E6197F`), mint & teal (`#2FC7AB`), navy (`#0B2A6B`), and royal gold (`#F5C518`).

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node.js 22)
- npm or bun

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✏️ How Non-Developers Can Edit Copy

All content, questions, scenarios, careers, body guidance, and myths are isolated inside a single, strictly-typed file:
📁 **`src/data/content.ts`**

Non-technical team members can easily update:
- `QUIZ`: Daily rotating education questions, answer choices, and explanations.
- `EQ`: Equality scenarios, choices, and teaching takeaways.
- `CAREERS`: Career names and descriptions.
- `BODY`: Age-specific guidance (9–10, 11–12, 13–14, 15–16).
- `MYTHS`: Ready to Wait myth-and-fact pairings.
- `IDEAS`: Ways girls can earn across crafts, digital skills, food, agriculture, and wellness.
- `WISE`: The four pillars and daily suggestions.
- `CONTACTS`: Directory of community and school guidance counsellors with direct WhatsApp and phone links.

---

## 🌐 Deploying to Static Hosting

Because WISE Crown is a pure client-side SPA with zero server dependencies, it can be deployed to any static host in seconds:

### Vercel / Netlify / Cloudflare Pages / GitHub Pages
1. Build command: `npm run build`
2. Output directory: `dist`
3. Single-Page Application (SPA) rewrite: Ensure `/*` routes to `/index.html`.

---

## 📋 Architectural Changes from the Original Prototype

While retaining 100% of the approved copy, logic, and data behavior, the following intentional visual and technical upgrades were made:

1. **Modernized Visual Design**:
   - Replaced basic HTML default controls with rounded card geometry, micro-shadows, and high-contrast color blocks.
   - Introduced original, child-safe SVG vector illustrations of Nigerian girls in school uniform and traditional attire with diverse natural hairstyles (braids, cornrows, afro puffs).
2. **Interactive Flip Cards**:
   - Upgraded the "Ready to Wait" static text lists into interactive flip cards with visual indicators to encourage girls to actively reflect on myths versus facts.
3. **Ergonomic Side Rail**:
   - Maintained the specified 76 px sticky side navigation on phones while adding responsive widening (`md:w-[170px]`) for larger screens.
4. **Celebratory Micro-Interactions**:
   - Added animated jewel glows and a sparkling confetti burst upon completing all 5 daily crown challenges.
5. **Full PWA & Offline Support**:
   - Integrated `vite-plugin-pwa` with custom service worker caching for Google Fonts, Web App Manifest, maskable app icons, and an in-app installation prompt.
