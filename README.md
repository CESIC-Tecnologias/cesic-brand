# CESIC Tecnologias — Official Brand System & Assets

**Single Source of Truth (SSOT) for the visual identity, 4D Hypercube symbols, architectural wordmarks, and design tokens of CESIC Tecnologias.**

- **Organization:** [https://github.com/CESIC-Tecnologias](https://github.com/CESIC-Tecnologias)
- **Origin Acronym:** *Centro de Software de Inteligencia e Inovacao em Computacao*
- **Design Language:** Light Editorial Tech (`#FAFAFA`) & Infrastructure Obsidian (`#090D16`)

---

## Repository Structure

```text
cesic-brand/
├── brandbook-web/
│   └── index.html               # Interactive Brand Book Web Portal (IBM + Speedrun Edition)
├── BRAND_BOOK.md                # Complete Technical Brand Manual in Markdown
├── tokens/
│   ├── brand-tokens.json        # W3C Design Tokens (HEX, RGB, CMYK, PMS, OKLCH)
│   └── brand-variables.css      # Ready-to-import CSS Custom Properties
├── assets/
│   ├── symbols/                 # 13 Master 4D Hypercube SVG Icons (Light, Dark, Mono, 16px)
│   ├── wordmarks/               # 10 Architectural Inline Wordmarks (CESIC.TECH, CESIC.LABS...)
│   └── lockups/                 # 10 Horizontal Corporate & Product Lockups
└── scripts/
    ├── generate-assets.mjs      # Deterministic SVG mathematical generator
    └── verify-brand-repo.mjs    # Automated geometric & token verification suite
```

## Quick Start

```bash
# Regenerate all 33 SVG master assets from exact mathematical coordinates
npm run generate

# Run the automated verification suite
npm test
```

To inspect the interactive Brand Book in your browser, open `brandbook-web/index.html`.
