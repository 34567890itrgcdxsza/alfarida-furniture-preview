---
name: Artisanal Luxury Living
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#51443c'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#83746b'
  outline-variant: '#d6c3b8'
  surface-tint: '#825331'
  primary: '#2e1200'
  on-primary: '#ffffff'
  primary-container: '#4a2506'
  on-primary-container: '#c28a63'
  inverse-primary: '#f8b98f'
  secondary: '#625f4d'
  on-secondary: '#ffffff'
  secondary-container: '#e8e3cc'
  on-secondary-container: '#686553'
  tertiary: '#241800'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f2b00'
  on-tertiary-container: '#b5914c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc6'
  primary-fixed-dim: '#f8b98f'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#673c1c'
  secondary-fixed: '#e8e3cc'
  secondary-fixed-dim: '#ccc7b1'
  on-secondary-fixed: '#1e1c0e'
  on-secondary-fixed-variant: '#4a4737'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 68px
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '500'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  editorial-caption:
    fontFamily: Playfair Display
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an upscale, tactile, and bespoke digital flagship experience for high-end furniture retail and contract B2B architectural procurement. The brand balances heritage woodworking, factory precision, and contemporary interior minimalism. It is designed to inspire high-net-worth residential homeowners, interior architects, commercial specifiers, and hospitality developers.

The aesthetic fuses **Minimalist Luxury** with **Tactile Craftsmanship**:
- **Bilingual architectural harmony**: Grounded in native Right-to-Left (RTL) Arabic typography and spatial flow, paired with high-contrast serif typography for European model codes, specifications, and editorial subtitles.
- **Warm materiality**: Replacing stark cold tech whites and greys with layered cream surfaces, deep espresso accents, and brushed brass details reminiscent of rich walnut, travertine, and architectural hardware.
- **Generous negative space**: Large canvas paddings, editorial framing, and uncrowded object showcases that elevate furniture pieces to gallery artworks.

## Colors

The palette draws directly from fine joinery, natural stone, and artisanal gilding:

- **Primary (`#4A2506`) — Deep Espresso Brown**: Represents dark stained walnut and hand-rubbed timber. Used for primary typography, authoritative brand headers, active interaction states, and signature button fills.
- **Secondary (`#F9F3DC`) — Warm Cream / Soft Alabaster**: Represents raw bouclé, unbleached linen, and natural ivory stone. Used for subtle component fills, pill badges, active category indicators, and selected panel states.
- **Tertiary (`#C5A059`) — Brushed Brass / Warm Gold**: Accents metallic joinery, luxury tier badges, star ratings, price tags, and focal CTA hover lines.
- **Neutral Canvas (`#FAF8F5`) — Sand White & Canvas Surface**: Creates gentle separation between full `#FFFFFF` product exhibition cards and section containers.
- **Supportive Neutrals**:
  - Text Muted: `#7A6C60` (warm sepia slate for secondary body copy, dimensions, and breadcrumbs).
  - Subtle Border: `#EADBCE` (soft warm outline that avoids sterile cool grey divides).

## Typography

The typography strategy balances cultural resonance with global prestige:

- **Arabic Typography System**: For Arabic viewport renders, standard sans typography falls back systematically to **Cairo** or **Tajawal**, maintaining an open x-height, clear optical counters, and legibility for architectural material names and catalog numbering.
- **Editorial Latin Display**: **Playfair Display** introduces editorial authority for European model names (e.g., *Sedia Chesterfield*, *Atelier Lounge Table*), quotes, and large showcase titles.
- **Functional Interface & B2B Data**: **Plus Jakarta Sans** delivers humanist, soft geometry that fits seamlessly alongside Arabic letterforms, handling spec tables, price breakdowns, filter dimensions, and SKU codes without visual fatigue.
- In bilingual settings, Arabic headlines take precedence with medium weights (`fontWeight: 600`), accompanied by Playfair Display in secondary roman script.

## Layout & Spacing

A structured 12-column responsive fluid grid gives the product catalog an editorial showroom balance:

- **Desktop (1200px+)**: 12 columns, 24px (`1.5rem`) gutters, and dynamic outer margins capped at 48px (`3rem`) with a max container width of 1440px. Hero showcases and category showcases use asymmetrical spans (e.g., 7 columns for imagery, 5 columns for narrative specs).
- **Tablet (768px - 1199px)**: 8 columns with 16px (`1rem`) gutters and 32px margins. Product catalogs shift to a balanced 2-column card grid.
- **Mobile (< 768px)**: 4 columns with 12px gutters and 20px (`1.25rem`) margins. Filter chips scroll horizontally along the top edge, and actions dock to a floating bottom summary drawer.
- **RTL Geometry**: Margin and padding directional tokens invert naturally under `dir="rtl"`. Visual leads, price tags, and primary catalog badges anchor to the right margin.

## Elevation & Depth

Visual hierarchy uses warm, diffuse ambient depth that mirrors ambient gallery spotlighting rather than standard digital drop shadows:

- **Base Level (Canvas)**: Background tone `#FAF8F5` provides grounded warmth.
- **Level 1 (Card & Module Surfaces)**: Pure white `#FFFFFF` panels finished with an ultra-soft perimeter shadow: `0 4px 24px -2px rgba(74, 37, 6, 0.04)` and a delicate 1px border `rgba(74, 37, 6, 0.07)`.
- **Level 2 (Hover & Active States)**: When cards or interactive spec swatches are hovered, shadows expand gently to `0 16px 36px -4px rgba(74, 37, 6, 0.08)`, slightly raising the element by -2px.
- **Level 3 (Modals, Swatch Trays & Drawers)**: High elevation for 3D wood finish selectors and wholesale order carts: `0 24px 60px -8px rgba(74, 37, 6, 0.14)` with an ambient gold-tinted backdrop blur (`backdrop-filter: blur(12px); background: rgba(250, 248, 245, 0.85)`).
- **Borders & Dividers**: Never harsh grey; always translucent espresso or sand tones (`rgba(74, 37, 6, 0.08)` to `#EADBCE`).

## Shapes

The design system adopts a consistent 12px corner radius (`roundedness: 2`), reflecting the smooth bullnose corners of sculpted hardwood tables and tailored upholstery:

- **Buttons & Input Elements**: Set to `0.75rem` (12px) for a contemporary, welcoming touch.
- **Cards & Showcase Containers**: Standardized at `0.75rem` (12px) or `rounded-lg` (16px) for major furniture visual frames.
- **Filter Tags & Navigation Pills**: Configured as pill shapes (`rounded-full`) to contrast against structured furniture card grids.
- **Material Swatches**: Circular (`50%` radius) or smooth squircle tokens (`8px`) with micro gold outlines on selection.

## Components

### Buttons
- **Primary Button**: Solid Deep Espresso (`#4A2506`) background, Crisp White (`#FFFFFF`) label, subtle brass edge highlight (`border: 1px solid rgba(197, 160, 89, 0.3)`), 12px radius, and 14px uppercase/bold label. Hover shifts to `#381A03` with a warm glow.
- **Secondary Button**: Warm Cream (`#F9F3DC`) background with Deep Espresso text, borderless or bordered in `#E6D8B6`.
- **B2B Inquiry / Outline Button**: Transparent fill, 1.5px border of Espresso (`#4A2506`), with an interior hover fill transitioning to `#F9F3DC`.

### Chips & Filter Pills
- Unselected: White canvas, 1px border in `#EADBCE`, muted sepia text (`#7A6C60`).
- Active/Selected: Warm Cream fill (`#F9F3DC`), Espresso text (`#4A2506`), with a solid 1px tertiary brass border (`#C5A059`).

### Product & Catalog Cards
- Crisp white ground (`#FFFFFF`), generous 16px internal padding, and 4:5 editorial aspect ratio for imagery.
- Subtle floating badge in the top corner (right in RTL, left in LTR) for wood tier or stock status (`In Showroom`, `Factory Made`).
- Pricing section displays wholesale / retail toggles cleanly with tertiary brass accents for currency symbols.

### Form Inputs & Search Fields
- 48px height, 12px rounded corners, `#FAF8F5` background, with a 1px border in `#EADBCE`.
- On focus: shifts to `#FFFFFF` background with a 1.5px Deep Espresso border and an ambient gold aura (`box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.2)`).

### Material Finish & Fabric Swatches
- Compact carousel with 32px circular swatches (e.g., Italian Walnut, Cognac Leather, Cream Bouclé, Brushed Gold Trim).
- Selected swatch receives an active ring of `#4A2506` separated by a 2px white gap.

### Wholesale & Dimension Spec Table
- Alternating row fills (`#FFFFFF` and `#FAF8F5`), 1px bottom border in `#EADBCE`.
- Model SKU, technical drawings, CBM volume, and wood grain grade styled in legible monospaced or high-clarity sans numerals.