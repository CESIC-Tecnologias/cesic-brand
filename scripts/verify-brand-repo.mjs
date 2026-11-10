import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const ROOT = path.resolve(import.meta.dirname, '..');

const EXPECTED_SYMBOLS = [
  'cesic-master-light.svg',
  'cesic-master-dark.svg',
  'cesic-master-mono-dark.svg',
  'cesic-master-mono-light.svg',
  'cesic-favicon-16.svg',
  'gastrocore-light.svg',
  'gastrocore-dark.svg',
  'deskcomm-light.svg',
  'deskcomm-dark.svg',
  'mobile-orbit-light.svg',
  'mobile-orbit-dark.svg',
  'residency-lab-light.svg',
  'residency-lab-dark.svg',
];

const EXPECTED_WORDMARKS = [
  'cesic-tech-wordmark-light.svg',
  'cesic-tech-wordmark-dark.svg',
  'cesic-labs-wordmark-light.svg',
  'cesic-labs-wordmark-dark.svg',
  'gastro-core-wordmark-light.svg',
  'gastro-core-wordmark-dark.svg',
  'desk-comm-wordmark-light.svg',
  'desk-comm-wordmark-dark.svg',
  'mobile-orbit-wordmark-light.svg',
  'mobile-orbit-wordmark-dark.svg',
];

const EXPECTED_LOCKUPS = [
  'cesic-tecnologias-lockup-light.svg',
  'cesic-tecnologias-lockup-dark.svg',
  'gastrocore-lockup-light.svg',
  'gastrocore-lockup-dark.svg',
  'deskcomm-lockup-light.svg',
  'deskcomm-lockup-dark.svg',
  'mobile-orbit-lockup-light.svg',
  'mobile-orbit-lockup-dark.svg',
  'residency-lab-lockup-light.svg',
  'residency-lab-lockup-dark.svg',
];

function checkSvgFile(relPath) {
  const fullPath = path.join(ROOT, relPath);
  assert.ok(fs.existsSync(fullPath), `Missing SVG file: ${relPath}`);
  const content = fs.readFileSync(fullPath, 'utf8').trim();
  assert.ok(
    content.startsWith('<svg xmlns="http://www.w3.org/2000/svg"'),
    `Invalid SVG header in ${relPath}`
  );
  assert.ok(content.endsWith('</svg>'), `Missing </svg> closing tag in ${relPath}`);
  return content;
}

console.log('Running CESIC Brand Repository verification...');

// 1. Check Tokens
const tokensJsonPath = path.join(ROOT, 'tokens', 'brand-tokens.json');
const tokensCssPath = path.join(ROOT, 'tokens', 'brand-variables.css');
assert.ok(fs.existsSync(tokensJsonPath), 'Missing tokens/brand-tokens.json');
assert.ok(fs.existsSync(tokensCssPath), 'Missing tokens/brand-variables.css');

const tokensData = JSON.parse(fs.readFileSync(tokensJsonPath, 'utf8'));
assert.equal(tokensData.brand.colors.emerald.core.hex, '#059669');
assert.equal(tokensData.brand.colors.gastrocore.amber.hex, '#F59E0B');

// 2. Check all 13 Symbol SVGs
for (const file of EXPECTED_SYMBOLS) {
  checkSvgFile(path.join('assets', 'symbols', file));
}

// Specific geometry & color pins from Spec
const masterLight = checkSvgFile('assets/symbols/cesic-master-light.svg');
assert.ok(masterLight.includes('points="50,10 83,29 50,47 17,29"'), 'Master Light missing top rhombus');
assert.ok(masterLight.includes('cx="50" cy="50.2" r="5"'), 'Master Light missing center hub');

const gastroLight = checkSvgFile('assets/symbols/gastrocore-light.svg');
assert.ok(gastroLight.includes('#F59E0B'), 'GastroCore Light missing #F59E0B warm amber');
assert.ok(gastroLight.includes('#EA580C'), 'GastroCore Light missing #EA580C warm orange');
assert.ok(gastroLight.includes('points="85,51.5 85,70.5 52,89.5 52,51.5"'), 'GastroCore missing G half-facet');

const orbitDark = checkSvgFile('assets/symbols/mobile-orbit-dark.svg');
assert.ok(
  orbitDark.includes('<circle cx="50" cy="50.5" r="5.5" fill="#F8FAFC"/>'),
  'Mobile Orbit Dark MUST have pure white (#F8FAFC) center hub'
);

// Monochrome symbols MUST be pure single-color with transparent cutouts (no black/white inner background patch)
const monoLight = checkSvgFile('assets/symbols/cesic-master-mono-light.svg');
assert.ok(!monoLight.includes('#090D16') && !monoLight.includes('#0F172A'), 'Mono Light must be 100% pure white (#FFFFFF) with transparent negative space, no dark fill inside');
const monoDark = checkSvgFile('assets/symbols/cesic-master-mono-dark.svg');
assert.ok(!monoDark.includes('#FFFFFF') && !monoDark.includes('#FAFAFA'), 'Mono Dark must be 100% pure dark (#0F172A) with transparent negative space, no white fill inside');

// 3. Check all 10 Wordmark SVGs and calibrated dotX coordinates
for (const file of EXPECTED_WORDMARKS) {
  const wm = checkSvgFile(path.join('assets', 'wordmarks', file));
  assert.ok(wm.includes('<rect'), `Wordmark ${file} must contain geometric square period <rect>`);
}
const gastroWm = checkSvgFile('assets/wordmarks/gastro-core-wordmark-light.svg');
assert.ok(gastroWm.includes('x="280"'), 'gastro-core wordmark must use calibrated dotX=280 to prevent glyph collision');
const cesicTechWm = checkSvgFile('assets/wordmarks/cesic-tech-wordmark-light.svg');
assert.ok(cesicTechWm.includes('x="188"'), 'cesic-tech wordmark must use calibrated dotX=188');

// 4. Check all 10 Lockup SVGs
for (const file of EXPECTED_LOCKUPS) {
  const lk = checkSvgFile(path.join('assets', 'lockups', file));
  assert.ok(!lk.includes('y="44" width="8"'), `Lockup ${file} must not have floating uncalibrated square dot`);
}

// 5. Task 2 Checks: Brand Book Web App, BRAND_BOOK.md, README.md, and Anti-Emoji Rule
const brandBookHtmlPath = path.join(ROOT, 'brandbook-web', 'index.html');
const brandBookMdPath = path.join(ROOT, 'BRAND_BOOK.md');
const readmeMdPath = path.join(ROOT, 'README.md');

assert.ok(fs.existsSync(brandBookHtmlPath), 'Missing brandbook-web/index.html');
assert.ok(fs.existsSync(brandBookMdPath), 'Missing BRAND_BOOK.md');
assert.ok(fs.existsSync(readmeMdPath), 'Missing README.md');

const htmlContent = fs.readFileSync(brandBookHtmlPath, 'utf8');
const mdContent = fs.readFileSync(brandBookMdPath, 'utf8');
const readmeContent = fs.readFileSync(readmeMdPath, 'utf8');

// Verify all 10 required sections in brandbook-web/index.html
const requiredSectionIds = [
  'id="sec-manifesto"',
  'id="sec-overview"',
  'id="sec-construction"',
  'id="sec-suite"',
  'id="sec-palette"',
  'id="sec-matrix"',
  'id="sec-typography"',
  'id="sec-donts"',
  'id="sec-scale"',
  'id="sec-downloads"',
];

for (const secId of requiredSectionIds) {
  assert.ok(htmlContent.includes(secId), `brandbook-web/index.html missing section ${secId}`);
}

// Verify key acronym & partnership lockups & Pantone/CMYK/OKLCH tokens
assert.ok(
  htmlContent.includes('Centro de Software de Inteligência e Inovação em Computação'),
  'Missing full CESIC origin acronym in Brand Book HTML'
);
assert.ok(htmlContent.includes('PMS 3285 C'), 'Missing Pantone specification in Brand Book HTML');
assert.ok(htmlContent.includes('2X'), 'Missing 2X partnership lockup clearspace ratio');
assert.ok(htmlContent.includes('SSOT: c:\\cesic\\cesic-brand'), 'Sidebar SSOT path must have properly escaped backslashes');
const dontCardsCount = (htmlContent.match(/class="dont-card"/g) || []).length;
assert.equal(dontCardsCount, 9, `Expected 9 visual Don't cards in 3x3 grid, found ${dontCardsCount}`);
assert.ok(!htmlContent.includes('width:auto;height:auto;'), 'Download vault SVGs must not use width:auto;height:auto which collapses to 0x0px in flex containers');
assert.ok(htmlContent.includes('<img src="data:image/svg+xml;base64,'), 'Download vault cards must render visible <img> previews from base64 SVG');
assert.ok(!htmlContent.includes('CESIC<span class="dot" style="background:#090D16;"></span>TECH'), 'Matrix green card wordmark must use pure white square dot, not black');

// Anti-Emoji Rule check (blocks common Pictographs/Emojis)
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
assert.ok(!emojiRegex.test(htmlContent), 'Emoji detected in brandbook-web/index.html (Anti-Bobo violation)');
assert.ok(!emojiRegex.test(mdContent), 'Emoji detected in BRAND_BOOK.md (Anti-Bobo violation)');
assert.ok(!emojiRegex.test(readmeContent), 'Emoji detected in README.md (Anti-Bobo violation)');

console.log('Task 1 & Task 2 checks PASSED: 33 SVG files, tokens, BRAND_BOOK.md, README.md, and brandbook-web/index.html verified.');

