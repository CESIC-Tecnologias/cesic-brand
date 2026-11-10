import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SYMBOLS_DIR = path.join(ROOT, 'assets', 'symbols');
const WORDMARKS_DIR = path.join(ROOT, 'assets', 'wordmarks');
const LOCKUPS_DIR = path.join(ROOT, 'assets', 'lockups');
const WEB_DIR = path.join(ROOT, 'brandbook-web');

fs.mkdirSync(WEB_DIR, { recursive: true });

function readAsset(dir, file) {
  return fs.readFileSync(path.join(dir, file), 'utf8').trim();
}

const assetsMap = {};
for (const f of fs.readdirSync(SYMBOLS_DIR)) {
  assetsMap[`symbols/${f}`] = readAsset(SYMBOLS_DIR, f);
}
for (const f of fs.readdirSync(WORDMARKS_DIR)) {
  assetsMap[`wordmarks/${f}`] = readAsset(WORDMARKS_DIR, f);
}
for (const f of fs.readdirSync(LOCKUPS_DIR)) {
  assetsMap[`lockups/${f}`] = readAsset(LOCKUPS_DIR, f);
}

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CESIC Tecnologias — Brand Book &amp; Design Language v1.0</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --cesic-emerald-core: #059669;
      --cesic-emerald-bright: #10B981;
      --cesic-emerald-luminous: #34D399;
      --cesic-emerald-deep: #047857;
      --cesic-blue-core: #0284C7;
      --cesic-blue-bright: #0EA5E9;
      --cesic-blue-luminous: #38BDF8;
      --cesic-gastro-amber: #F59E0B;
      --cesic-gastro-orange: #EA580C;
      --cesic-surface-canvas: #FAFAFA;
      --cesic-surface-white: #FFFFFF;
      --cesic-surface-slate: #0F172A;
      --cesic-surface-obsidian: #090D16;
      --cesic-border: #E4E4E7;
      --cesic-border-dark: #1E293B;
      --font-display: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', ui-monospace, monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--cesic-surface-canvas);
      color: var(--cesic-surface-slate);
      font-family: var(--font-sans);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* IBM Design Language Layout Shell */
    .app-shell {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }
    @media (max-width: 1024px) {
      .app-shell { grid-template-columns: 1fr; }
    }

    /* Left Sticky Navigation (IBM Carbon / Design Language Style) */
    .sidebar {
      background: var(--cesic-surface-obsidian);
      color: #F8FAFC;
      border-right: 1px solid var(--cesic-border-dark);
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 28px 22px;
      z-index: 40;
    }
    @media (max-width: 1024px) {
      .sidebar {
        position: relative;
        height: auto;
        padding: 20px;
      }
    }
    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 22px;
      border-bottom: 1px solid var(--cesic-border-dark);
    }
    .sidebar-title {
      font-family: var(--font-display);
      font-weight: 900;
      font-size: 18px;
      letter-spacing: -0.05em;
      color: #FFFFFF;
      display: flex;
      align-items: baseline;
    }
    .sq-dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      background: var(--cesic-emerald-bright);
      margin: 0 2px;
    }
    .sidebar-sub {
      font-family: var(--font-mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94A3B8;
      margin-top: 2px;
    }

    .nav-list {
      list-style: none;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border-radius: 8px;
      color: #94A3B8;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      transition: all 0.15s ease;
    }
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.06);
      color: #FFFFFF;
    }
    .nav-num {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--cesic-emerald-bright);
      font-variant-numeric: tabular-nums;
    }
    .sidebar-footer {
      padding-top: 20px;
      border-top: 1px solid var(--cesic-border-dark);
      font-family: var(--font-mono);
      font-size: 11px;
      color: #64748B;
      font-variant-numeric: tabular-nums;
    }
    .sidebar-footer a {
      color: var(--cesic-emerald-luminous);
      text-decoration: none;
    }

    /* Main Content Column */
    .main-content {
      max-width: 1320px;
      width: 100%;
      margin: 0 auto;
      padding: 0 48px 96px 48px;
    }
    @media (max-width: 768px) {
      .main-content { padding: 0 20px 64px 20px; }
    }

    /* Top Cover Plate (Speedrun Page 1 + IBM Hero) */
    .cover-hero {
      margin-top: 36px;
      background: var(--cesic-surface-obsidian);
      background-image:
        radial-gradient(circle at 82% 22%, rgba(16, 185, 129, 0.16) 0%, transparent 45%),
        radial-gradient(circle at 18% 80%, rgba(2, 132, 199, 0.14) 0%, transparent 50%),
        linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 32px 32px, 32px 32px;
      border-radius: 24px;
      padding: 56px;
      color: #F8FAFC;
      border: 1px solid var(--cesic-border-dark);
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 40px;
      align-items: center;
    }
    @media (max-width: 900px) {
      .cover-hero { grid-template-columns: 1fr; padding: 32px 24px; }
    }
    .cover-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--cesic-emerald-luminous);
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(52, 211, 153, 0.3);
      padding: 5px 12px;
      border-radius: 99px;
      margin-bottom: 20px;
    }
    .cover-title {
      font-family: var(--font-display);
      font-size: clamp(32px, 4.2vw, 54px);
      font-weight: 900;
      letter-spacing: -0.045em;
      line-height: 1.04;
      margin-bottom: 18px;
    }
    .cover-lead {
      font-size: 16px;
      color: #94A3B8;
      max-width: 600px;
      line-height: 1.65;
      margin-bottom: 28px;
    }
    .cover-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 22px;
      border-top: 1px solid rgba(148, 163, 184, 0.16);
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #CBD5E1;
      font-variant-numeric: tabular-nums;
    }
    .cover-symbol-stage {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(15, 23, 42, 0.72);
      border: 1px solid rgba(148, 163, 184, 0.18);
      border-radius: 20px;
      padding: 36px;
      position: relative;
    }

    /* Editorial Section Structure (Twitch Speedrun 2-column + IBM grid) */
    .brand-section {
      padding-top: 72px;
      margin-top: 72px;
      border-top: 1px solid var(--cesic-border);
      display: grid;
      grid-template-columns: 310px 1fr;
      gap: 44px;
      align-items: start;
    }
    @media (max-width: 1100px) {
      .brand-section { grid-template-columns: 1fr; gap: 24px; }
    }
    .sec-meta {
      position: sticky;
      top: 32px;
    }
    @media (max-width: 1100px) {
      .sec-meta { position: static; }
    }
    .sec-index {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--cesic-emerald-core);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: block;
      font-variant-numeric: tabular-nums;
    }
    .sec-heading {
      font-family: var(--font-display);
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--cesic-surface-slate);
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .sec-copy {
      font-size: 14px;
      color: #475569;
      line-height: 1.65;
    }
    .sec-copy p + p {
      margin-top: 12px;
    }
    .sec-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: #FFFFFF;
      border: 1px solid var(--cesic-border);
      border-left: 3px solid var(--cesic-emerald-core);
      border-radius: 8px;
      font-size: 12.5px;
      color: #334155;
    }

    /* Visual Plates (Right column) */
    .plates-col {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .plate {
      background: #FFFFFF;
      border: 1px solid var(--cesic-border);
      border-radius: 18px;
      overflow: hidden;
    }
    .plate-header {
      padding: 14px 22px;
      background: #FAFAFA;
      border-bottom: 1px solid var(--cesic-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--font-mono);
      font-size: 11.5px;
      color: #64748B;
      font-variant-numeric: tabular-nums;
    }
    .plate-header strong {
      color: var(--cesic-surface-slate);
      font-weight: 600;
    }
    .plate-body {
      padding: 32px;
    }
    .plate-body.dark-canvas {
      background: var(--cesic-surface-obsidian);
      color: #F8FAFC;
    }
    .plate-body.grid-canvas {
      background-color: #FAFAFA;
      background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
      background-size: 16px 16px;
    }

    /* Grid Helpers */
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
    @media (max-width: 860px) {
      .grid-2, .grid-3, .grid-5 { grid-template-columns: 1fr; }
    }

    /* Architectural Wordmark Classes */
    .arch-wm {
      font-family: var(--font-display);
      font-weight: 900;
      letter-spacing: -0.06em;
      line-height: 0.9;
      display: inline-flex;
      align-items: baseline;
      user-select: none;
    }
    .arch-wm .dot {
      display: inline-block;
      width: 0.165em;
      height: 0.165em;
      margin: 0 0.04em;
    }

    /* Swatch Cards (Twitch Page 5 Tall Style + IBM Carbon Values) */
    .swatch-tall {
      border-radius: 16px;
      padding: 24px;
      min-height: 310px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(15, 23, 42, 0.08);
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    .swatch-tall:hover {
      transform: translateY(-3px);
    }
    .swatch-tall h4 {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }
    .swatch-specs {
      font-family: var(--font-mono);
      font-size: 11.5px;
      line-height: 1.75;
      font-variant-numeric: tabular-nums;
    }

    /* Don'ts Cards (Twitch Pages 7-9 Style) */
    .dont-card {
      background: #FFFFFF;
      border: 1px solid var(--cesic-border);
      border-radius: 14px;
      overflow: hidden;
    }
    .dont-stage {
      height: 170px;
      background: #F8FAFC;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid var(--cesic-border);
      padding: 20px;
    }
    .dont-caption {
      padding: 12px 16px;
      font-size: 12.5px;
      font-weight: 600;
      color: #B91C1C;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dont-x {
      display: inline-flex;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: #FEE2E2;
      color: #DC2626;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-weight: 800;
      font-size: 11px;
      flex-shrink: 0;
    }

    /* Buttons */
    .btn-action {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 600;
      padding: 7px 12px;
      border-radius: 8px;
      border: 1px solid var(--cesic-border);
      background: #FFFFFF;
      color: var(--cesic-surface-slate);
      cursor: pointer;
      transition: all 0.15s ease;
      text-decoration: none;
    }
    .btn-action:hover {
      border-color: var(--cesic-emerald-core);
      color: var(--cesic-emerald-core);
    }
    .btn-action:active {
      transform: scale(0.98);
    }
    .btn-primary {
      background: var(--cesic-surface-slate);
      color: #FFFFFF;
      border-color: var(--cesic-surface-slate);
    }
    .btn-primary:hover {
      background: var(--cesic-emerald-core);
      border-color: var(--cesic-emerald-core);
      color: #FFFFFF;
    }

    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--cesic-surface-obsidian);
      color: #F8FAFC;
      border: 1px solid var(--cesic-emerald-bright);
      padding: 12px 18px;
      border-radius: 10px;
      font-family: var(--font-mono);
      font-size: 12px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 100;
    }
    #toast.visible { opacity: 1; }
  </style>
</head>
<body>

<div id="toast">Copiado para a área de transferência!</div>

<div class="app-shell">

  <!-- LEFT STICKY SIDEBAR -->
  <aside class="sidebar">
    <div>
      <div class="sidebar-brand">
        <div style="width:38px;height:38px;flex-shrink:0;">
          ${assetsMap['symbols/cesic-master-dark.svg']}
        </div>
        <div>
          <div class="sidebar-title">CESIC<span class="sq-dot"></span>BRAND</div>
          <div class="sidebar-sub">Design Language v1.0</div>
        </div>
      </div>

      <nav>
        <ul class="nav-list">
          <li><a class="nav-link" href="#sec-manifesto"><span class="nav-num">01</span> Manifesto &amp; Origem</a></li>
          <li><a class="nav-link" href="#sec-overview"><span class="nav-num">02</span> Visão Geral (Overview)</a></li>
          <li><a class="nav-link" href="#sec-construction"><span class="nav-num">03</span> Grid 4D &amp; Clearspace</a></li>
          <li><a class="nav-link" href="#sec-suite"><span class="nav-num">04</span> Suíte de Produtos &amp; Lockups</a></li>
          <li><a class="nav-link" href="#sec-palette"><span class="nav-num">05</span> Core Palette &amp; Tokens</a></li>
          <li><a class="nav-link" href="#sec-matrix"><span class="nav-num">06</span> Matriz de Contraste 3×3</a></li>
          <li><a class="nav-link" href="#sec-typography"><span class="nav-num">07</span> Sistema Tipográfico</a></li>
          <li><a class="nav-link" href="#sec-donts"><span class="nav-num">08</span> Usos Incorretos (Don'ts)</a></li>
          <li><a class="nav-link" href="#sec-scale"><span class="nav-num">09</span> Escala Extrema (16px–512px)</a></li>
          <li><a class="nav-link" href="#sec-downloads"><span class="nav-num">10</span> Central de Assets (33 SVGs)</a></li>
        </ul>
      </nav>
    </div>

    <div class="sidebar-footer">
      <div>ORG: <a href="https://github.com/CESIC-Tecnologias" target="_blank" rel="noreferrer">CESIC-Tecnologias</a></div>
      <div style="margin-top:4px;">SSOT: c:\\cesic\\cesic-brand</div>
      <div style="margin-top:4px;color:#10B981;">STATUS: OFFICIAL RELEASE</div>
    </div>
  </aside>

  <!-- RIGHT MAIN CONTENT -->
  <main class="main-content">

    <!-- HERO COVER -->
    <header class="cover-hero">
      <div>
        <div class="cover-kicker">
          <span>CESIC DESIGN LANGUAGE // MULTINATIONAL STANDARD</span>
        </div>
        <h1 class="cover-title">
          O Hipercubo 4D &amp;<br/>O Centro de Inteligência.
        </h1>
        <p class="cover-lead">
          Manual global de engenharia visual da <strong>CESIC Tecnologias</strong> (<em>Centro de Software de Inteligência e Inovação em Computação</em>) e de sua suíte proprietária: <strong>GastroCore</strong>, <strong>Deskcomm</strong>, <strong>Antigravity Mobile Orbit</strong> e <strong>CESIC Residency Lab</strong>.
        </p>
        <div class="cover-meta-row">
          <span>VERSÃO: <strong>1.0.0 (2026)</strong></span>
          <span>GRID MESTRE: <strong>100×100 ISOMÉTRICO (30°/60°)</strong></span>
          <span>ASSETS: <strong>33 ARQUIVOS SVG PUROS</strong></span>
        </div>
      </div>

      <div class="cover-symbol-stage">
        <div style="width:176px;height:176px;">
          ${assetsMap['symbols/cesic-master-dark.svg']}
        </div>
        <div style="margin-top:22px;text-align:center;">
          <div class="arch-wm" style="font-size:32px;color:#FFFFFF;">
            CESIC<span class="dot" style="background:#10B981;"></span>TECH
          </div>
          <div style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;margin-top:6px;">
            MASTER MARK • OPTION B
          </div>
        </div>
      </div>
    </header>

    <!-- ================================================================== -->
    <!-- 01. MANIFESTO & ORIGEM -->
    <!-- ================================================================== -->
    <section id="sec-manifesto" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">01 // THE WHY &amp; ORIGIN</span>
        <h2 class="sec-heading">Manifesto, Origem da Sigla &amp; O "C" de Centro</h2>
        <div class="sec-copy">
          <p>
            A sigla <strong>CESIC</strong> nasceu como <strong>Centro de Software de Inteligência e Inovação em Computação</strong>. O primeiro <strong>"C"</strong> carrega a palavra-chave de toda a nossa arquitetura: <strong>Centro</strong>.
          </p>
          <p>
            Não criamos tecnologia por vaidade acadêmica; construímos o <strong>Hub Central</strong> de engenharia aplicada que elimina burocracias e multiplica a margem operacional de empresas reais.
          </p>
        </div>
        <div class="sec-callout">
          <strong>Metáfora Geométrica:</strong> O símbolo oficial une a projeção isométrica de um <strong>Hipercubo 4D (Tesseract)</strong> com o ponto de singularidade central em <code>(50, 50.2)</code> — o Hub onde convergem Software House, SaaS B2B e Inteligência Artificial.
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>DECOMPOSIÇÃO SEMÂNTICA DA SIGLA CESIC</strong>
            <span>ACRONYM ARCHITECTURE</span>
          </div>
          <div class="plate-body">
            <div class="grid-5">
              <div style="padding:16px;border:1px solid #E4E4E7;border-radius:12px;background:#FAFAFA;">
                <div style="font-family:var(--font-display);font-weight:900;font-size:32px;color:#059669;">C</div>
                <div style="font-weight:700;font-size:14px;margin-top:4px;">Centro</div>
                <div style="font-size:12px;color:#64748B;margin-top:4px;">O Hub gravitacional no coração do Hipercubo 4D.</div>
              </div>
              <div style="padding:16px;border:1px solid #E4E4E7;border-radius:12px;background:#FAFAFA;">
                <div style="font-family:var(--font-display);font-weight:900;font-size:32px;color:#0F172A;">E</div>
                <div style="font-weight:700;font-size:14px;margin-top:4px;">Engenharia &amp;</div>
                <div style="font-size:12px;color:#64748B;margin-top:4px;">Fundações determinísticas de missão crítica.</div>
              </div>
              <div style="padding:16px;border:1px solid #E4E4E7;border-radius:12px;background:#FAFAFA;">
                <div style="font-family:var(--font-display);font-weight:900;font-size:32px;color:#0F172A;">S</div>
                <div style="font-weight:700;font-size:14px;margin-top:4px;">Software de</div>
                <div style="font-size:12px;color:#64748B;margin-top:4px;">Plataformas SaaS verticais e sistemas sob medida.</div>
              </div>
              <div style="padding:16px;border:1px solid #E4E4E7;border-radius:12px;background:#FAFAFA;">
                <div style="font-family:var(--font-display);font-weight:900;font-size:32px;color:#0284C7;">I</div>
                <div style="font-weight:700;font-size:14px;margin-top:4px;">Inteligência &amp; Inovação</div>
                <div style="font-size:12px;color:#64748B;margin-top:4px;">Agentes autônomos e P&amp;D aplicado (Residency Lab).</div>
              </div>
              <div style="padding:16px;border:1px solid #E4E4E7;border-radius:12px;background:#FAFAFA;">
                <div style="font-family:var(--font-display);font-weight:900;font-size:32px;color:#0F172A;">C</div>
                <div style="font-weight:700;font-size:14px;margin-top:4px;">Computação</div>
                <div style="font-size:12px;color:#64748B;margin-top:4px;">Performance extrema em Rust, Cloud e Web moderna.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 02. OVERVIEW (TWITCH SPEEDRUN PAGE 3 STYLE) -->
    <!-- ================================================================== -->
    <section id="sec-overview" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">02 // SYSTEM OVERVIEW</span>
        <h2 class="sec-heading">As 3 Expressões Oficiais da Marca</h2>
        <div class="sec-copy">
          <p>
            Assim como nas diretrizes globais das Big Techs, a identidade da CESIC opera através de três ativos modulares que se adaptam a qualquer escala ou ponto de contato:
          </p>
          <p>
            <strong>1. Símbolo 4D (The Hypercube Mark):</strong> A expressão mais rápida e icônica da CESIC sem precisar soletrar o nome.
          </p>
          <p>
            <strong>2. Wordmark Arquitetural em Linha:</strong> Nossa assinatura tipográfica de alto impacto com o Ponto Quadrado de Engenharia na linha de base.
          </p>
          <p>
            <strong>3. Lockup Institucional:</strong> A combinação equilibrada do Símbolo 4D com a tipografia corporativa.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <!-- 1. The Hypercube Mark -->
        <div class="plate">
          <div class="plate-header">
            <strong>02.1 • SÍMBOLO MESTRE 4D (THE HYPERCUBE MARK)</strong>
            <span>PRIMARY ICONIC MARK</span>
          </div>
          <div class="plate-body grid-2" style="padding:0;">
            <div style="padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#FAFAFA;border-right:1px solid #E4E4E7;">
              <div style="width:136px;height:136px;">${assetsMap['symbols/cesic-master-light.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#64748B;margin-top:16px;">LIGHT EDITORIAL MODE (#FAFAFA)</span>
            </div>
            <div style="padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#090D16;">
              <div style="width:136px;height:136px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;margin-top:16px;">INFRASTRUCTURE DARK MODE (#090D16)</span>
            </div>
          </div>
        </div>

        <!-- 2. Architectural Wordmark -->
        <div class="plate">
          <div class="plate-header">
            <strong>02.2 • WORDMARK ARQUITETURAL EM LINHA (INLINE MONUMENTAL WORDMARK)</strong>
            <span>TRACKING -0.06EM + SQUARE PERIOD</span>
          </div>
          <div class="plate-body grid-2" style="padding:0;">
            <div style="padding:44px 32px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#FFFFFF;border-right:1px solid #E4E4E7;">
              <div class="arch-wm" style="font-size:52px;color:#0F172A;">
                CESIC<span class="dot" style="background:#059669;"></span>TECH
              </div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#64748B;margin-top:14px;">WORDMARK LIGHT • PONTO ESMERALDA #059669</span>
            </div>
            <div style="padding:44px 32px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#090D16;">
              <div class="arch-wm" style="font-size:52px;color:#F8FAFC;">
                CESIC<span class="dot" style="background:#10B981;"></span>LABS
              </div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;margin-top:14px;">WORDMARK DARK • PONTO ESMERALDA #10B981</span>
            </div>
          </div>
        </div>

        <!-- 3. Institutional Lockup -->
        <div class="plate">
          <div class="plate-header">
            <strong>02.3 • LOCKUP INSTITUCIONAL HORIZONTAL</strong>
            <span>CORPORATE SIGN-OFF</span>
          </div>
          <div class="plate-body grid-2" style="padding:0;">
            <div style="padding:36px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-right:1px solid #E4E4E7;">
              <div style="width:100%;max-width:380px;">${assetsMap['lockups/cesic-tecnologias-lockup-light.svg']}</div>
            </div>
            <div style="padding:36px;display:flex;align-items:center;justify-content:center;background:#090D16;">
              <div style="width:100%;max-width:380px;">${assetsMap['lockups/cesic-tecnologias-lockup-dark.svg']}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 03. GRID CONSTRUTIVO MATEMÁTICO & CLEARSPACE -->
    <!-- ================================================================== -->
    <section id="sec-construction" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">03 // GEOMETRY &amp; CLEARSPACE</span>
        <h2 class="sec-heading">Grid Construtivo 4D &amp; Zona de Proteção (X)</h2>
        <div class="sec-copy">
          <p>
            O Hipercubo da CESIC nunca é desenhado a olho livre. Ele obedece a uma matriz ortogonal e isométrica de <code>100×100</code> unidades com ângulos de <code>30°</code> e <code>60°</code>, canais negativos de <code>3.5u</code> e raio central de <code>r = 5u</code>.
          </p>
          <p>
            <strong>Regra de Clearspace:</strong> A margem mínima ao redor do símbolo é de <code>1/2 X</code> (onde <code>X</code> é a largura da câmara central). Nas wordmarks em linha, a margem mínima é de <code>2X</code> (onde <code>X</code> é o lado do Ponto Quadrado).
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>BLUEPRINT MATEMÁTICO (VIEWBOX 0 0 100 100) &amp; CLEARSPACE</strong>
            <span>ISOMETRIC 30° / 60° PRECISION</span>
          </div>
          <div class="plate-body grid-2">
            <!-- Construction Blueprint SVG -->
            <div style="background:#090D16;border-radius:14px;padding:28px;display:flex;flex-direction:column;align-items:center;">
              <svg width="260" height="260" viewBox="0 0 120 120" fill="none">
                <!-- Outer Grid Box -->
                <rect x="10" y="10" width="100" height="100" stroke="#1E293B" stroke-width="0.75"/>
                <!-- Construction Guides -->
                <line x1="60" y1="5" x2="60" y2="115" stroke="#0EA5E9" stroke-width="0.5" stroke-dasharray="2 2"/>
                <line x1="5" y1="60.2" x2="115" y2="60.2" stroke="#0EA5E9" stroke-width="0.5" stroke-dasharray="2 2"/>
                <line x1="15" y1="34" x2="105" y2="86" stroke="#EC4899" stroke-width="0.5" stroke-dasharray="2 2"/>
                <line x1="15" y1="86" x2="105" y2="34" stroke="#EC4899" stroke-width="0.5" stroke-dasharray="2 2"/>
                <!-- Translated Symbol at (+10, +10) -->
                <g transform="translate(10, 10)">
                  <polygon points="50,10 83,29 50,47 17,29" fill="#34D399" fill-opacity="0.88" stroke="#A7F3D0" stroke-width="0.6"/>
                  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669" fill-opacity="0.88" stroke="#A7F3D0" stroke-width="0.6"/>
                  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0EA5E9" fill-opacity="0.88" stroke="#BAE6FD" stroke-width="0.6"/>
                  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#090D16" stroke="#F43F5E" stroke-width="0.7" stroke-dasharray="1.5 1.5"/>
                  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#34D399"/>
                  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#10B981"/>
                  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#38BDF8"/>
                  <circle cx="50" cy="50.2" r="5" fill="#F8FAFC" stroke="#EC4899" stroke-width="0.8"/>
                </g>
                <!-- Coordinate Callouts -->
                <text x="63" y="18" fill="#38BDF8" font-family="monospace" font-size="4.5">(50, 10)</text>
                <text x="64" y="59" fill="#F43F5E" font-family="monospace" font-size="4.5">HUB r=5</text>
                <text x="14" y="106" fill="#94A3B8" font-family="monospace" font-size="4.5">GAP = 3.5u</text>
              </svg>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;margin-top:10px;">GEOMETRIA DE COORDENADAS EXATAS</span>
            </div>

            <!-- Clearspace Diagram (Twitch Page 3 Right Column Style) -->
            <div style="background:#F8FAFC;border:1px solid #E4E4E7;border-radius:14px;padding:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
              <svg width="260" height="260" viewBox="0 0 160 160" fill="none">
                <!-- Clearspace Outer Boundary -->
                <rect x="15" y="15" width="130" height="130" fill="rgba(5, 150, 105, 0.06)" stroke="#059669" stroke-width="1" stroke-dasharray="4 3"/>
                <rect x="35" y="35" width="90" height="90" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.75"/>
                <!-- Corner X markers -->
                <text x="21" y="28" fill="#059669" font-family="monospace" font-weight="700" font-size="8">1/2 X</text>
                <text x="118" y="28" fill="#059669" font-family="monospace" font-weight="700" font-size="8">1/2 X</text>
                <text x="21" y="138" fill="#059669" font-family="monospace" font-weight="700" font-size="8">1/2 X</text>
                <text x="118" y="138" fill="#059669" font-family="monospace" font-weight="700" font-size="8">1/2 X</text>
                <g transform="translate(30, 30)">
                  <polygon points="50,10 83,29 50,47 17,29" fill="#10B981"/>
                  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
                  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0284C7"/>
                  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#FFFFFF"/>
                  <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#059669"/>
                  <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#0F172A"/>
                  <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#0284C7"/>
                  <circle cx="50" cy="50.2" r="5" fill="#FFFFFF"/>
                </g>
              </svg>
              <span style="font-family:var(--font-mono);font-size:11px;color:#475569;margin-top:10px;">ZONA DE SEGURANÇA MÍNIMA (CLEARSPACE 1/2 X)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 04. SUÍTE DE PRODUTOS & PARTNERSHIP LOCKUPS (TWITCH PAGE 4 STYLE) -->
    <!-- ================================================================== -->
    <section id="sec-suite" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">04 // PRODUCT SUITE &amp; CO-BRANDING</span>
        <h2 class="sec-heading">Suíte Oficial de Produtos &amp; Lockups de Parceria</h2>
        <div class="sec-copy">
          <p>
            A CESIC opera sob o <strong>Sistema 2 (Suíte de Produtos)</strong>: a holding e o Residency Lab ostentam o Hipercubo B integral, enquanto cada plataforma de software possui seu ícone geométrico próprio construído na mesma grade e compartilhando o mesmo <strong>Cubo 4D + Hub Central</strong>.
          </p>
          <p>
            Em parcerias estratégicas (como <strong>APONTI</strong> e <strong>Bondegusto</strong>), o espaçamento entre marcas obedece à regra <code>2X | X | 2X</code>.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <!-- 5 Product Matrix -->
        <div class="plate">
          <div class="plate-header">
            <strong>04.1 • MATRIZ DA FAMÍLIA DE MARCAS (LIGHT &amp; DARK + INLINE WORDMARKS)</strong>
            <span>5 OFFICIAL VERTICALS</span>
          </div>
          <div class="plate-body" style="padding:0;">
            <div class="grid-5" style="gap:0;">
              <!-- 1. CESIC TECH -->
              <div style="border-right:1px solid #E4E4E7;">
                <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-bottom:1px solid #E4E4E7;">
                  <div style="width:82px;height:82px;">${assetsMap['symbols/cesic-master-light.svg']}</div>
                </div>
                <div style="height:130px;display:flex;align-items:center;justify-content:center;background:#090D16;border-bottom:1px solid #E4E4E7;">
                  <div style="width:74px;height:74px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
                </div>
                <div style="padding:16px;">
                  <div style="font-family:var(--font-mono);font-size:10px;color:#64748B;">01 • HOLDING</div>
                  <div class="arch-wm" style="font-size:19px;color:#0F172A;margin-top:4px;">CESIC<span class="dot" style="background:#059669;"></span>TECH</div>
                  <div style="font-size:11.5px;color:#475569;margin-top:6px;">Hipercubo B Mestre</div>
                </div>
              </div>

              <!-- 2. GASTROCORE -->
              <div style="border-right:1px solid #E4E4E7;">
                <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-bottom:1px solid #E4E4E7;">
                  <div style="width:82px;height:82px;">${assetsMap['symbols/gastrocore-light.svg']}</div>
                </div>
                <div style="height:130px;display:flex;align-items:center;justify-content:center;background:#090D16;border-bottom:1px solid #E4E4E7;">
                  <div style="width:74px;height:74px;">${assetsMap['symbols/gastrocore-dark.svg']}</div>
                </div>
                <div style="padding:16px;">
                  <div style="font-family:var(--font-mono);font-size:10px;color:#EA580C;">02 • UAN &amp; FOOD ERP</div>
                  <div class="arch-wm" style="font-size:19px;color:#0F172A;margin-top:4px;">GASTRO<span class="dot" style="background:#EA580C;"></span>CORE</div>
                  <div style="font-size:11.5px;color:#475569;margin-top:6px;">"G" Isométrico + Core Laranja</div>
                </div>
              </div>

              <!-- 3. DESKCOMM -->
              <div style="border-right:1px solid #E4E4E7;">
                <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-bottom:1px solid #E4E4E7;">
                  <div style="width:82px;height:82px;">${assetsMap['symbols/deskcomm-light.svg']}</div>
                </div>
                <div style="height:130px;display:flex;align-items:center;justify-content:center;background:#090D16;border-bottom:1px solid #E4E4E7;">
                  <div style="width:74px;height:74px;">${assetsMap['symbols/deskcomm-dark.svg']}</div>
                </div>
                <div style="padding:16px;">
                  <div style="font-family:var(--font-mono);font-size:10px;color:#0284C7;">03 • AI AGENTS CRM</div>
                  <div class="arch-wm" style="font-size:19px;color:#0F172A;margin-top:4px;">DESK<span class="dot" style="background:#0284C7;"></span>COMM</div>
                  <div style="font-size:11.5px;color:#475569;margin-top:6px;">Cubo Diálogo + Core B</div>
                </div>
              </div>

              <!-- 4. MOBILE ORBIT -->
              <div style="border-right:1px solid #E4E4E7;">
                <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-bottom:1px solid #E4E4E7;">
                  <div style="width:82px;height:82px;">${assetsMap['symbols/mobile-orbit-light.svg']}</div>
                </div>
                <div style="height:130px;display:flex;align-items:center;justify-content:center;background:#090D16;border-bottom:1px solid #E4E4E7;">
                  <div style="width:74px;height:74px;">${assetsMap['symbols/mobile-orbit-dark.svg']}</div>
                </div>
                <div style="padding:16px;">
                  <div style="font-family:var(--font-mono);font-size:10px;color:#059669;">04 • DEVTOOLS OSS</div>
                  <div class="arch-wm" style="font-size:19px;color:#0F172A;margin-top:4px;">MOBILE<span class="dot" style="background:#059669;"></span>ORBIT</div>
                  <div style="font-size:11.5px;color:#475569;margin-top:6px;">Órbita + Hub Branco no Dark</div>
                </div>
              </div>

              <!-- 5. RESIDENCY LAB -->
              <div>
                <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#FAFAFA;border-bottom:1px solid #E4E4E7;">
                  <div style="width:82px;height:82px;">${assetsMap['symbols/residency-lab-light.svg']}</div>
                </div>
                <div style="height:130px;display:flex;align-items:center;justify-content:center;background:#090D16;border-bottom:1px solid #E4E4E7;">
                  <div style="width:74px;height:74px;">${assetsMap['symbols/residency-lab-dark.svg']}</div>
                </div>
                <div style="padding:16px;">
                  <div style="font-family:var(--font-mono);font-size:10px;color:#0F172A;">05 • P&amp;D &amp; TALENTOS</div>
                  <div class="arch-wm" style="font-size:19px;color:#0F172A;margin-top:4px;">CESIC<span class="dot" style="background:#059669;"></span>LABS</div>
                  <div style="font-size:11.5px;color:#475569;margin-top:6px;">Edição P&amp;D Ardósia/Branco</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Partnership Lockup Plate (Twitch Page 4 Style) -->
        <div class="plate">
          <div class="plate-header">
            <strong>04.2 • PARTNERSHIP &amp; INTERNAL LOCKUPS (REGRA DE ESPAÇAMENTO 2X | X | 2X)</strong>
            <span>CO-BRANDING GEOMETRY</span>
          </div>
          <div class="plate-body" style="background:#FAFAFA;">
            <div style="position:relative;padding:28px;background:#FFFFFF;border:1px solid #E4E4E7;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:0;">
              <!-- Guide lines -->
              <div style="display:flex;align-items:center;flex-wrap:wrap;justify-content:center;">
                <span class="arch-wm" style="font-size:36px;color:#0F172A;">CESIC<span class="dot" style="background:#059669;"></span>LABS</span>
                <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:44px;background:rgba(236,72,153,0.12);border-x:1px dashed #EC4899;font-family:var(--font-mono);font-size:10px;color:#BE185D;">2X</span>
                <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:#0F172A;color:#FFF;font-family:var(--font-mono);font-size:10px;font-weight:700;">×</span>
                <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:44px;background:rgba(236,72,153,0.12);border-x:1px dashed #EC4899;font-family:var(--font-mono);font-size:10px;color:#BE185D;">2X</span>
                <span style="font-family:var(--font-display);font-weight:800;font-size:34px;letter-spacing:-0.04em;color:#059669;">APONTI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 05. CORE PALETTE & TOKENS (TWITCH PAGE 5 + IBM CARBON) -->
    <!-- ================================================================== -->
    <section id="sec-palette" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">05 // CORE PALETTE &amp; TOKENS</span>
        <h2 class="sec-heading">Especificação Cromática (HEX, RGB, CMYK, PMS, OKLCH)</h2>
        <div class="sec-copy">
          <p>
            Nossa paleta equilibra a sobriedade editorial do <strong>Editorial Canvas (#FAFAFA)</strong> e do <strong>Deep Slate (#0F172A)</strong> com a energia técnica do <strong>Institutional Emerald (#059669)</strong>, do <strong>Engineering Sky (#0284C7)</strong> e do calor térmico do <strong>GastroCore Amber/Orange (#F59E0B / #EA580C)</strong>.
          </p>
          <p>Clique em qualquer cartão para copiar o código HEX instantaneamente.</p>
        </div>
      </div>

      <div class="plates-col">
        <div class="grid-3">
          <!-- Swatch 1: Institutional Emerald -->
          <div class="swatch-tall" style="background:#059669;color:#FFFFFF;" onclick="copyText('#059669')">
            <div>
              <h4>Institutional Emerald</h4>
              <span style="font-family:var(--font-mono);font-size:11px;opacity:0.85;">--cesic-emerald-core</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #059669</div>
              <div>RGB: 5, 150, 105</div>
              <div>CMYK: C88 M12 Y68 K2</div>
              <div>PMS: PMS 3285 C</div>
              <div>OKLCH: oklch(0.60 0.15 163)</div>
            </div>
          </div>

          <!-- Swatch 2: Quantum Emerald -->
          <div class="swatch-tall" style="background:#10B981;color:#090D16;" onclick="copyText('#10B981')">
            <div>
              <h4>Quantum Emerald</h4>
              <span style="font-family:var(--font-mono);font-size:11px;opacity:0.8;">--cesic-emerald-bright</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #10B981</div>
              <div>RGB: 16, 185, 129</div>
              <div>CMYK: C78 M0 Y62 K0</div>
              <div>PMS: PMS 339 C</div>
              <div>OKLCH: oklch(0.70 0.17 162)</div>
            </div>
          </div>

          <!-- Swatch 3: Engineering Sky -->
          <div class="swatch-tall" style="background:#0284C7;color:#FFFFFF;" onclick="copyText('#0284C7')">
            <div>
              <h4>Engineering Sky Deep</h4>
              <span style="font-family:var(--font-mono);font-size:11px;opacity:0.85;">--cesic-blue-core</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #0284C7</div>
              <div>RGB: 2, 132, 199</div>
              <div>CMYK: C86 M32 Y0 K0</div>
              <div>PMS: PMS 2995 C</div>
              <div>OKLCH: oklch(0.58 0.15 242)</div>
            </div>
          </div>

          <!-- Swatch 4: Thermal Amber + Flame Orange (GastroCore) -->
          <div class="swatch-tall" style="background:linear-gradient(155deg, #F59E0B 0%, #EA580C 100%);color:#FFFFFF;" onclick="copyText('#F59E0B / #EA580C')">
            <div>
              <h4>GastroCore Thermal Core</h4>
              <span style="font-family:var(--font-mono);font-size:11px;opacity:0.9;">--cesic-gastro-amber / orange</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #F59E0B / #EA580C</div>
              <div>RGB: 245, 158, 11 / 234, 88, 12</div>
              <div>CMYK: C0 M42 Y96 K0</div>
              <div>PMS: PMS 130 C / PMS 1655 C</div>
              <div>OKLCH: oklch(0.77 0.17 70)</div>
            </div>
          </div>

          <!-- Swatch 5: Infrastructure Obsidian -->
          <div class="swatch-tall" style="background:#090D16;color:#F8FAFC;" onclick="copyText('#090D16')">
            <div>
              <h4>Infrastructure Obsidian</h4>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">--cesic-surface-obsidian</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #090D16 (Slate: #0F172A)</div>
              <div>RGB: 9, 13, 22</div>
              <div>CMYK: C90 M78 Y52 K85</div>
              <div>PMS: PMS Black 6 C</div>
              <div>OKLCH: oklch(0.15 0.02 264)</div>
            </div>
          </div>

          <!-- Swatch 6: Editorial Canvas -->
          <div class="swatch-tall" style="background:#FAFAFA;color:#0F172A;border:1.5px solid #E4E4E7;" onclick="copyText('#FAFAFA')">
            <div>
              <h4>Editorial Light Canvas</h4>
              <span style="font-family:var(--font-mono);font-size:11px;color:#64748B;">--cesic-surface-canvas</span>
            </div>
            <div class="swatch-specs">
              <div>HEX: #FAFAFA (White: #FFFFFF)</div>
              <div>RGB: 250, 250, 250</div>
              <div>CMYK: C2 M1 Y1 K0</div>
              <div>PMS: PMS Cool Gray 1 C</div>
              <div>OKLCH: oklch(0.985 0 0)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 06. MATRIZ DE APLICAÇÃO 3X3 (TWITCH PAGE 6 STYLE) -->
    <!-- ================================================================== -->
    <section id="sec-matrix" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">06 // SURFACE MATRIX (3×3)</span>
        <h2 class="sec-heading">Comportamento sobre Superfícies &amp; Versões Monocromáticas</h2>
        <div class="sec-copy">
          <p>
            Para garantir contraste cirúrgico em qualquer mídia (interfaces web, terminais escuros, brindes gravados a laser, uniformes bordados ou notas fiscais P&amp;B), siga rigorosamente esta matriz 3×3 de aplicação.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>MATRIZ 3×3: FUNDO ESCURO (#090D16) • FUNDO CLARO (#FAFAFA) • MONOCROMÁTICO</strong>
            <span>CONTRAST GOVERNANCE</span>
          </div>
          <div class="plate-body">
            <div class="grid-3">
              <!-- Row 1: Symbols -->
              <div style="height:170px;background:#090D16;border-radius:14px;display:flex;align-items:center;justify-content:center;">
                <div style="width:92px;height:92px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              </div>
              <div style="height:170px;background:#FAFAFA;border:1px solid #E4E4E7;border-radius:14px;display:flex;align-items:center;justify-content:center;">
                <div style="width:92px;height:92px;">${assetsMap['symbols/cesic-master-light.svg']}</div>
              </div>
              <div style="height:170px;background:#059669;border-radius:14px;display:flex;align-items:center;justify-content:center;gap:20px;">
                <div style="width:76px;height:76px;">${assetsMap['symbols/cesic-master-mono-light.svg']}</div>
              </div>

              <!-- Row 2: Inline Wordmarks -->
              <div style="height:150px;background:#090D16;border-radius:14px;display:flex;align-items:center;justify-content:center;">
                <div class="arch-wm" style="font-size:32px;color:#F8FAFC;">CESIC<span class="dot" style="background:#10B981;"></span>TECH</div>
              </div>
              <div style="height:150px;background:#FAFAFA;border:1px solid #E4E4E7;border-radius:14px;display:flex;align-items:center;justify-content:center;">
                <div class="arch-wm" style="font-size:32px;color:#0F172A;">CESIC<span class="dot" style="background:#059669;"></span>TECH</div>
              </div>
              <div style="height:150px;background:#059669;border-radius:14px;display:flex;align-items:center;justify-content:center;">
                <div class="arch-wm" style="font-size:32px;color:#FFFFFF;">CESIC<span class="dot" style="background:#090D16;"></span>TECH</div>
              </div>

              <!-- Row 3: Monochrome & Product Wordmarks -->
              <div style="height:150px;background:#090D16;border-radius:14px;display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center;">
                <div class="arch-wm" style="font-size:24px;color:#F8FAFC;">GASTRO<span class="dot" style="background:#F59E0B;"></span>CORE</div>
                <div class="arch-wm" style="font-size:24px;color:#F8FAFC;">DESK<span class="dot" style="background:#38BDF8;"></span>COMM</div>
              </div>
              <div style="height:150px;background:#FAFAFA;border:1px solid #E4E4E7;border-radius:14px;display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center;">
                <div class="arch-wm" style="font-size:24px;color:#0F172A;">MOBILE<span class="dot" style="background:#059669;"></span>ORBIT</div>
                <div class="arch-wm" style="font-size:24px;color:#0F172A;">CESIC<span class="dot" style="background:#059669;"></span>LABS</div>
              </div>
              <div style="height:150px;background:#FFFFFF;border:1px solid #E4E4E7;border-radius:14px;display:flex;align-items:center;justify-content:center;gap:16px;">
                <div style="width:76px;height:76px;">${assetsMap['symbols/cesic-master-mono-dark.svg']}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 07. SISTEMA TIPOGRÁFICO -->
    <!-- ================================================================== -->
    <section id="sec-typography" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">07 // TYPOGRAPHY SYSTEM</span>
        <h2 class="sec-heading">Tríade Tipográfica de Engenharia</h2>
        <div class="sec-copy">
          <p>
            Combinamos a autoridade geométrica da <strong>Plus Jakarta Sans</strong> para títulos e wordmarks, a neutralidade cirúrgica da <strong>Inter</strong> para interfaces e documentação, e a precisão tabular da <strong>JetBrains Mono</strong> para telemetria e código.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>ESPECIFICAÇÃO DE FONTES &amp; NUMERAIS TABULARES</strong>
            <span>FONT STACK</span>
          </div>
          <div class="plate-body" style="display:flex;flex-direction:column;gap:24px;">
            <div style="padding-bottom:20px;border-bottom:1px solid #E4E4E7;">
              <div style="font-family:var(--font-mono);font-size:11px;color:#059669;">01 • DISPLAY &amp; WORDMARKS — PLUS JAKARTA SANS (800 / 900 BLACK)</div>
              <div style="font-family:var(--font-display);font-weight:900;font-size:40px;letter-spacing:-0.05em;color:#0F172A;margin-top:6px;">
                Engenharia Aplicada &amp; Sistemas Autônomos.
              </div>
            </div>
            <div style="padding-bottom:20px;border-bottom:1px solid #E4E4E7;">
              <div style="font-family:var(--font-mono);font-size:11px;color:#0284C7;">02 • UI &amp; EDITORIAL BODY — INTER (400 / 500 / 600)</div>
              <div style="font-family:var(--font-sans);font-size:16px;color:#334155;margin-top:6px;max-width:720px;">
                Construímos plataformas verticais B2B e infraestrutura de inteligência artificial que operam com latência sub-milissegundo e governança sênior auditável.
              </div>
            </div>
            <div>
              <div style="font-family:var(--font-mono);font-size:11px;color:#EA580C;">03 • TELEMETRY &amp; TABULAR METRICS — JETBRAINS MONO (TABULAR-NUMS)</div>
              <div style="font-family:var(--font-mono);font-size:22px;font-weight:700;color:#0F172A;margin-top:6px;font-variant-numeric:tabular-nums;">
                SYS.LATENCY: 0.18ms // CMV_REDUCTION: -28.4% // UPTIME: 99.98%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 08. USOS INCORRETOS — DON'TS (TWITCH PAGES 7-9 STYLE) -->
    <!-- ================================================================== -->
    <section id="sec-donts" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">08 // BRAND PROTECTION (DON'TS)</span>
        <h2 class="sec-heading">O Que Nunca Fazer com o Símbolo e a Wordmark</h2>
        <div class="sec-copy">
          <p>
            A credibilidade de uma marca de padrão multinacional depende da consistência absoluta. Nunca distorça, rotacione, adicione efeitos amadores ou altere a relação entre o Hipercubo 4D, o Hub Central e o Ponto Quadrado de Engenharia.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="grid-3">
          <!-- Don't 1: Stretch -->
          <div class="dont-card">
            <div class="dont-stage">
              <div style="width:120px;height:65px;">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="120" height="65">
                  <polygon points="50,10 83,29 50,47 17,29" fill="#10B981"/>
                  <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
                  <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0284C7"/>
                  <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#F8FAFC"/>
                  <circle cx="50" cy="50.2" r="8" fill="#0F172A"/>
                </svg>
              </div>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não achate nem estique o Hipercubo.</div>
          </div>

          <!-- Don't 2: Rotate -->
          <div class="dont-card">
            <div class="dont-stage">
              <div style="width:88px;height:88px;transform:rotate(28deg);">${assetsMap['symbols/cesic-master-light.svg']}</div>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não rotacione o ângulo isométrico.</div>
          </div>

          <!-- Don't 3: Remove Center Hub -->
          <div class="dont-card">
            <div class="dont-stage">
              <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
                <polygon points="50,10 83,29 50,47 17,29" fill="#10B981"/>
                <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#059669"/>
                <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#0284C7"/>
                <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#F8FAFC"/>
                <polygon points="50,33 65,41.6 50,50.2 35,41.6" fill="#059669"/>
                <polygon points="35,41.6 50,50.2 50,67.4 35,58.8" fill="#0F172A"/>
                <polygon points="65,41.6 65,58.8 50,67.4 50,50.2" fill="#0284C7"/>
              </svg>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Nunca remova o Hub Central.</div>
          </div>

          <!-- Don't 4: Round dot instead of Square Dot -->
          <div class="dont-card">
            <div class="dont-stage">
              <div style="font-family:var(--font-display);font-weight:900;font-size:28px;letter-spacing:-0.06em;color:#0F172A;">
                CESIC<span style="color:#059669;">•</span>LABS
              </div>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não use ponto redondo na Wordmark.</div>
          </div>

          <!-- Don't 5: Drop Shadow / Neon Glow -->
          <div class="dont-card">
            <div class="dont-stage">
              <div style="width:88px;height:88px;filter:drop-shadow(0 10px 12px rgba(236,72,153,0.75));">${assetsMap['symbols/cesic-master-light.svg']}</div>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não aplique sombras ou brilhos neon.</div>
          </div>

          <!-- Don't 6: Off-brand Colors -->
          <div class="dont-card">
            <div class="dont-stage">
              <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
                <polygon points="50,10 83,29 50,47 17,29" fill="#EC4899"/>
                <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="#8B5CF6"/>
                <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="#EAB308"/>
                <polygon points="50,27 70,38.5 70,61.5 50,73 30,61.5 30,38.5" fill="#F8FAFC"/>
                <circle cx="50" cy="50.2" r="10" fill="#EC4899"/>
              </svg>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não altere as cores institucionais.</div>
          </div>

          <!-- Don't 7: Photo/Pattern Masking -->
          <div class="dont-card">
            <div class="dont-stage">
              <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="badStripes" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#0F172A" stroke-width="4" />
                  </pattern>
                </defs>
                <polygon points="50,10 83,29 50,47 17,29" fill="url(#badStripes)"/>
                <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" fill="url(#badStripes)"/>
                <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" fill="url(#badStripes)"/>
              </svg>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não preencha com fotos ou texturas.</div>
          </div>

          <!-- Don't 8: Thin Outline Only -->
          <div class="dont-card">
            <div class="dont-stage">
              <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
                <polygon points="50,10 83,29 50,47 17,29" stroke="#0F172A" stroke-width="1"/>
                <polygon points="15,32.5 48,51.5 48,89.5 15,70.5" stroke="#0F172A" stroke-width="1"/>
                <polygon points="85,32.5 85,70.5 52,89.5 52,51.5" stroke="#0F172A" stroke-width="1"/>
                <circle cx="50" cy="50.2" r="5" stroke="#0F172A" stroke-width="1"/>
              </svg>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não use contorno vazado sem preenchimento.</div>
          </div>

          <!-- Don't 9: Low-Res Blurry Raster -->
          <div class="dont-card">
            <div class="dont-stage">
              <div style="width:88px;height:88px;filter:blur(2.5px);opacity:0.75;">${assetsMap['symbols/cesic-master-light.svg']}</div>
            </div>
            <div class="dont-caption"><span class="dont-x">X</span> Não use imagens borradas de baixa resolução.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 09. TESTE DE ESCALA EXTREMA (16PX A 512PX) -->
    <!-- ================================================================== -->
    <section id="sec-scale" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">09 // SCALE &amp; FAVICON STRESS TEST</span>
        <h2 class="sec-heading">Escala de Precisão (De 16px ao Formato Monumental)</h2>
        <div class="sec-copy">
          <p>
            A geometria sólida da Opção B foi desenhada para manter legibilidade total desde uma aba de navegador (<code>16×16px</code>) até empenas de prédios e estandes de eventos.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>TESTE ÓPTICO EM TAMANHO REAL (16PX • 24PX • 32PX • 48PX • 96PX • 160PX)</strong>
            <span>OPTICAL SCALING</span>
          </div>
          <div class="plate-body" style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-around;gap:24px;background:#090D16;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:16px;height:16px;">${assetsMap['symbols/cesic-favicon-16.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">16px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:24px;height:24px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">24px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:32px;height:32px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">32px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:48px;height:48px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">48px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:96px;height:96px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">96px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div style="width:150px;height:150px;">${assetsMap['symbols/cesic-master-dark.svg']}</div>
              <span style="font-family:var(--font-mono);font-size:11px;color:#94A3B8;">150px</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!-- 10. CENTRAL DE DOWNLOAD DE ASSETS (33 ARQUIVOS SVG) -->
    <!-- ================================================================== -->
    <section id="sec-downloads" class="brand-section">
      <div class="sec-meta">
        <span class="sec-index">10 // MASTER SVG ASSET VAULT</span>
        <h2 class="sec-heading">Central de Download dos 33 SVGs Mestres</h2>
        <div class="sec-copy">
          <p>
            Todos os 33 arquivos vetoriais oficiais estão disponíveis na pasta <code>assets/</code> deste repositório ou para download/cópia direta abaixo.
          </p>
        </div>
      </div>

      <div class="plates-col">
        <div class="plate">
          <div class="plate-header">
            <strong>PACOTE COMPLETO DE SÍMBOLOS, WORDMARKS E LOCKUPS (.SVG)</strong>
            <span>CLICK TO DOWNLOAD OR COPY SVG</span>
          </div>
          <div class="plate-body">
            <div class="grid-3">
              ${Object.entries(assetsMap)
                .map(([key, svgCode]) => {
                  const isDark = key.includes('dark') || key.includes('mono-light') || key.includes('favicon');
                  const filename = key.split('/')[1];
                  const encoded = Buffer.from(svgCode, 'utf8').toString('base64');
                  return `
                  <div style="border:1px solid #E4E4E7;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;background:#FFFFFF;">
                    <div style="height:120px;padding:18px;display:flex;align-items:center;justify-content:center;background:${isDark ? '#090D16' : '#FAFAFA'};border-bottom:1px solid #E4E4E7;">
                      <div style="max-width:100%;max-height:84px;display:flex;align-items:center;justify-content:center;">
                        ${svgCode.replace('<svg ', '<svg style="max-height:80px;max-width:210px;width:auto;height:auto;" ')}
                      </div>
                    </div>
                    <div style="padding:12px 14px;display:flex;align-items:center;justify-content:space-between;gap:8px;">
                      <span style="font-family:var(--font-mono);font-size:10.5px;color:#334155;word-break:break-all;">${filename}</span>
                      <a class="btn-action" download="${filename}" href="data:image/svg+xml;base64,${encoded}">Baixar</a>
                    </div>
                  </div>`;
                })
                .join('\n')}
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</div>

<script>
  function copyText(txt) {
    navigator.clipboard?.writeText(txt);
    const toast = document.getElementById('toast');
    toast.textContent = 'Copiado: ' + txt;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 1800);
  }
</script>
</body>
</html>`;

fs.writeFileSync(path.join(WEB_DIR, 'index.html'), html, 'utf8');
console.log('Generated interactive Brand Book web app at c:\\cesic\\cesic-brand\\brandbook-web\\index.html');
