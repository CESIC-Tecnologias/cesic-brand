import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SYMBOLS_DIR = path.join(ROOT, 'assets', 'symbols');
const WORDMARKS_DIR = path.join(ROOT, 'assets', 'wordmarks');
const LOCKUPS_DIR = path.join(ROOT, 'assets', 'lockups');

for (const dir of [SYMBOLS_DIR, WORDMARKS_DIR, LOCKUPS_DIR]) {
  fs.mkdirSync(dir, { recursive: true });
}

// ============================================================================
// 1. MASTER SYMBOL GEOMETRIES (viewBox="0 0 100 100")
// ============================================================================

function symbolCesicMasterLight(cutout = '#FAFAFA') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>CESIC Tecnologias — Master 4D Hypercube Mark (Light)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#10B981"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0284C7"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#059669"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#0F172A"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#0284C7"/>
  <circle cx="50" cy="50.2" r="5" fill="${cutout}"/>
</svg>`;
}

function symbolCesicMasterDark(cutout = '#090D16') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>CESIC Tecnologias — Master 4D Hypercube Mark (Dark)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#34D399"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0EA5E9"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#34D399"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#38BDF8"/>
  <circle cx="50" cy="50.2" r="5" fill="#F8FAFC"/>
</svg>`;
}

function symbolCesicMonoDark() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <title>CESIC Tecnologias — Monochrome Mark (Slate/Black)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#0F172A"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#0F172A"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0F172A"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#FFFFFF"/>
  <polygon points="50,33 65,41.6 50,48.5 35,41.6" fill="#0F172A"/>
  <polygon points="34,43.5 48.5,51.2 48.5,67.4 34,58.8" fill="#0F172A"/>
  <polygon points="66,43.5 66,58.8 51.5,67.4 51.5,51.2" fill="#0F172A"/>
  <circle cx="50" cy="50.2" r="5.5" fill="#FFFFFF"/>
</svg>`;
}

function symbolCesicMonoLight() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <title>CESIC Tecnologias — Monochrome Mark (Pure White)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#FFFFFF"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#FFFFFF"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#FFFFFF"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#090D16"/>
  <polygon points="50,33 65,41.6 50,48.5 35,41.6" fill="#FFFFFF"/>
  <polygon points="34,43.5 48.5,51.2 48.5,67.4 34,58.8" fill="#FFFFFF"/>
  <polygon points="66,43.5 66,58.8 51.5,67.4 51.5,51.2" fill="#FFFFFF"/>
  <circle cx="50" cy="50.2" r="5.5" fill="#090D16"/>
</svg>`;
}

function symbolCesicFavicon16() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>CESIC Tecnologias — 16px Optical Favicon</title>
  <polygon points="50,8 86,29 50,48 14,29" fill="#10B981"/>
  <polygon points="12,33 47,52 47,91 12,71" fill="#059669"/>
  <polygon points="88,33 88,71 53,91 53,52" fill="#0284C7"/>
  <polygon points="50,28 69,39 69,61 50,72 31,61 31,39" fill="#090D16"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#34D399"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#38BDF8"/>
  <circle cx="50" cy="50.2" r="6" fill="#FFFFFF"/>
</svg>`;
}

function symbolGastroCoreLight(cutout = '#FAFAFA') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>GastroCore by CESIC — Product Symbol (Light)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#10B981"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,51.5 85,70.5 52,89.5 52,51.5" fill="#047857"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#F59E0B"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#059669"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#EA580C"/>
  <circle cx="50" cy="50.2" r="5" fill="${cutout}"/>
</svg>`;
}

function symbolGastroCoreDark(cutout = '#090D16') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>GastroCore by CESIC — Product Symbol (Dark)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#34D399"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,51.5 85,70.5 52,89.5 52,51.5" fill="#10B981"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#FBBF24"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#F97316"/>
  <circle cx="50" cy="50.2" r="5" fill="#F8FAFC"/>
</svg>`;
}

function symbolDeskcommLight(cutout = '#FAFAFA') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>Deskcomm by CESIC — Product Symbol (Light)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#38BDF8"/>
  <polygon points="15,32.5 48,51.5 48,93 30,82 15,90 15,70.5" fill="#0284C7"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#10B981"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#0284C7"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#0F172A"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#10B981"/>
  <circle cx="50" cy="50.2" r="5" fill="${cutout}"/>
</svg>`;
}

function symbolDeskcommDark(cutout = '#090D16') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>Deskcomm by CESIC — Product Symbol (Dark)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#38BDF8"/>
  <polygon points="15,32.5 48,51.5 48,93 30,82 15,90 15,70.5" fill="#0EA5E9"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#34D399"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#38BDF8"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#34D399"/>
  <circle cx="50" cy="50.2" r="5" fill="#F8FAFC"/>
</svg>`;
}

function symbolMobileOrbitLight(cutout = '#FAFAFA') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>Antigravity Mobile Orbit by CESIC — Product Symbol (Light)</title>
  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="#0F172A" stroke-width="8" fill="none" stroke-linejoin="round"/>
  <circle cx="85" cy="30" r="8" fill="#10B981"/>
  <polygon points="50,31 67,40.8 50,50.5 33,40.8" fill="#10B981"/>
  <polygon points="33,40.8 50,50.5 50,70 33,60.2" fill="#059669"/>
  <polygon points="67,40.8 67,60.2 50,70 50,50.5" fill="#0284C7"/>
  <circle cx="50" cy="50.5" r="5.5" fill="${cutout}"/>
</svg>`;
}

function symbolMobileOrbitDark() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>Antigravity Mobile Orbit by CESIC — Product Symbol (Dark)</title>
  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="#F8FAFC" stroke-width="8" fill="none" stroke-linejoin="round"/>
  <circle cx="85" cy="30" r="8" fill="#34D399"/>
  <polygon points="50,31 67,40.8 50,50.5 33,40.8" fill="#34D399"/>
  <polygon points="33,40.8 50,50.5 50,70 33,60.2" fill="#059669"/>
  <polygon points="67,40.8 67,60.2 50,70 50,50.5" fill="#38BDF8"/>
  <circle cx="50" cy="50.5" r="5.5" fill="#F8FAFC"/>
</svg>`;
}

function symbolResidencyLabLight(cutout = '#FAFAFA') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>CESIC Residency Lab — Division Symbol (Light)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#0F172A"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0284C7"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#10B981"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#0F172A"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#0284C7"/>
  <circle cx="50" cy="50.2" r="5" fill="${cutout}"/>
</svg>`;
}

function symbolResidencyLabDark(cutout = '#090D16') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <title>CESIC Residency Lab — Division Symbol (Dark)</title>
  <polygon points="50,10 83,29 50,47 17,29" fill="#F8FAFC"/>
  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#38BDF8"/>
  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="${cutout}"/>
  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#34D399"/>
  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#38BDF8"/>
  <circle cx="50" cy="50.2" r="5" fill="#F8FAFC"/>
</svg>`;
}

// ============================================================================
// 2. ARCHITECTURAL INLINE WORDMARKS (CESIC■TECH, CESIC■LABS, etc.)
// ============================================================================
function createWordmarkSvg({ leftText, rightText, dotX, rightX, dotColor, mode, width = 560 }) {
  const textColor = mode === 'light' ? '#0F172A' : '#F8FAFC';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 96" fill="none">
  <title>${leftText}.${rightText} — Architectural Inline Wordmark (${mode})</title>
  <style>
    .wm {
      font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
      font-weight: 900;
      font-size: 68px;
      letter-spacing: -0.06em;
    }
  </style>
  <text x="12" y="74" fill="${textColor}" class="wm">${leftText}</text>
  <rect x="${dotX}" y="60" width="14" height="14" fill="${dotColor}"/>
  <text x="${rightX}" y="74" fill="${textColor}" class="wm">${rightText}</text>
</svg>`;
}

// ============================================================================
// 3. HORIZONTAL LOCKUPS (4D Symbol + Brand Name + Descriptor)
// ============================================================================
function createLockupSvg({ innerSymbolMarkup, primaryText, secondaryText, dotColor, mode, width = 520 }) {
  const textColor = mode === 'light' ? '#0F172A' : '#F8FAFC';
  const subColor = mode === 'light' ? '#64748B' : '#94A3B8';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 100" fill="none">
  <title>${primaryText} ${secondaryText} — Official Lockup (${mode})</title>
  <style>
    .lk-main {
      font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;
      font-weight: 800;
      font-size: 38px;
      letter-spacing: -0.04em;
    }
    .lk-sub {
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
  </style>
  <g transform="translate(0, 0)">
    ${innerSymbolMarkup}
  </g>
  <text x="114" y="54" fill="${textColor}" class="lk-main">${primaryText}</text>
  <rect x="114" y="65" width="7" height="7" fill="${dotColor}"/>
  <text x="128" y="73" fill="${subColor}" class="lk-sub">${secondaryText}</text>
</svg>`;
}

function stripSvgWrapper(svgString) {
  return svgString
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>$/, '')
    .replace(/<title>.*?<\/title>/, '')
    .trim();
}

// Write Symbols
const symbolsMap = {
  'cesic-master-light.svg': symbolCesicMasterLight(),
  'cesic-master-dark.svg': symbolCesicMasterDark(),
  'cesic-master-mono-dark.svg': symbolCesicMonoDark(),
  'cesic-master-mono-light.svg': symbolCesicMonoLight(),
  'cesic-favicon-16.svg': symbolCesicFavicon16(),
  'gastrocore-light.svg': symbolGastroCoreLight(),
  'gastrocore-dark.svg': symbolGastroCoreDark(),
  'deskcomm-light.svg': symbolDeskcommLight(),
  'deskcomm-dark.svg': symbolDeskcommDark(),
  'mobile-orbit-light.svg': symbolMobileOrbitLight(),
  'mobile-orbit-dark.svg': symbolMobileOrbitDark(),
  'residency-lab-light.svg': symbolResidencyLabLight(),
  'residency-lab-dark.svg': symbolResidencyLabDark(),
};

for (const [filename, content] of Object.entries(symbolsMap)) {
  fs.writeFileSync(path.join(SYMBOLS_DIR, filename), content + '\n', 'utf8');
}

// Write Wordmarks
const wordmarksConfig = [
  { slug: 'cesic-tech', left: 'CESIC', right: 'TECH', dotX: 188, rightX: 210, lightDot: '#059669', darkDot: '#10B981', width: 410 },
  { slug: 'cesic-labs', left: 'CESIC', right: 'LABS', dotX: 188, rightX: 210, lightDot: '#059669', darkDot: '#10B981', width: 410 },
  { slug: 'gastro-core', left: 'GASTRO', right: 'CORE', dotX: 280, rightX: 302, lightDot: '#EA580C', darkDot: '#F59E0B', width: 520 },
  { slug: 'desk-comm', left: 'DESK', right: 'COMM', dotX: 186, rightX: 208, lightDot: '#0284C7', darkDot: '#38BDF8', width: 470 },
  { slug: 'mobile-orbit', left: 'MOBILE', right: 'ORBIT', dotX: 264, rightX: 286, lightDot: '#059669', darkDot: '#10B981', width: 520 },
];

for (const wm of wordmarksConfig) {
  fs.writeFileSync(
    path.join(WORDMARKS_DIR, `${wm.slug}-wordmark-light.svg`),
    createWordmarkSvg({ leftText: wm.left, rightText: wm.right, dotX: wm.dotX, rightX: wm.rightX, dotColor: wm.lightDot, mode: 'light', width: wm.width }) + '\n',
    'utf8'
  );
  fs.writeFileSync(
    path.join(WORDMARKS_DIR, `${wm.slug}-wordmark-dark.svg`),
    createWordmarkSvg({ leftText: wm.left, rightText: wm.right, dotX: wm.dotX, rightX: wm.rightX, dotColor: wm.darkDot, mode: 'dark', width: wm.width }) + '\n',
    'utf8'
  );
}

// Write Lockups
const lockupsConfig = [
  {
    slug: 'cesic-tecnologias',
    primary: 'CESIC',
    secondary: 'Tecnologias • Engineering & AI',
    lightSymbol: symbolCesicMasterLight(),
    darkSymbol: symbolCesicMasterDark(),
    lightDot: '#059669',
    darkDot: '#10B981',
  },
  {
    slug: 'gastrocore',
    primary: 'GastroCore',
    secondary: 'by CESIC • Foodservice ERP',
    lightSymbol: symbolGastroCoreLight(),
    darkSymbol: symbolGastroCoreDark(),
    lightDot: '#EA580C',
    darkDot: '#F59E0B',
  },
  {
    slug: 'deskcomm',
    primary: 'Deskcomm',
    secondary: 'by CESIC • Autonomous AI CRM',
    lightSymbol: symbolDeskcommLight(),
    darkSymbol: symbolDeskcommDark(),
    lightDot: '#0284C7',
    darkDot: '#38BDF8',
  },
  {
    slug: 'mobile-orbit',
    primary: 'Mobile Orbit',
    secondary: 'by CESIC • Rust & Flutter Engine',
    lightSymbol: symbolMobileOrbitLight(),
    darkSymbol: symbolMobileOrbitDark(),
    lightDot: '#059669',
    darkDot: '#10B981',
  },
  {
    slug: 'residency-lab',
    primary: 'CESIC Lab',
    secondary: 'APONTI Technological Residency',
    lightSymbol: symbolResidencyLabLight(),
    darkSymbol: symbolResidencyLabDark(),
    lightDot: '#059669',
    darkDot: '#10B981',
  },
];

for (const lk of lockupsConfig) {
  fs.writeFileSync(
    path.join(LOCKUPS_DIR, `${lk.slug}-lockup-light.svg`),
    createLockupSvg({
      innerSymbolMarkup: stripSvgWrapper(lk.lightSymbol),
      primaryText: lk.primary,
      secondaryText: lk.secondary,
      dotColor: lk.lightDot,
      mode: 'light',
    }) + '\n',
    'utf8'
  );
  fs.writeFileSync(
    path.join(LOCKUPS_DIR, `${lk.slug}-lockup-dark.svg`),
    createLockupSvg({
      innerSymbolMarkup: stripSvgWrapper(lk.darkSymbol),
      primaryText: lk.primary,
      secondaryText: lk.secondary,
      dotColor: lk.darkDot,
      mode: 'dark',
    }) + '\n',
    'utf8'
  );
}

console.log('Generated 33 official SVG brand assets in c:\\cesic\\cesic-brand\\assets');

