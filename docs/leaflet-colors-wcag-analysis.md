# Leaflet Colors WCAG Compliance Analysis

## Original Leaflet Colors

- **Orange**: `#eb5813` (vibrant warm orange from leaflet)
- **Blue/Teal**: `#27546b` (deep blue-teal from leaflet)

---

## WCAG Contrast Ratio Analysis

### ✅ PASSING Combinations

#### 1. White Text on Blue/Teal (#FFFFFF on #27546b)
- **Contrast Ratio**: ~6.8:1
- **WCAG AA Status**: ✅ **PASSES** (Normal & Large text)
- **WCAG AAA Status**: ✅ **PASSES** for large text (needs 4.5:1)
- **Usage**: Safe for all text sizes on teal backgrounds

#### 2. Dark Text on White (#1f2937 on #FFFFFF)
- **Contrast Ratio**: ~14.8:1
- **WCAG AA Status**: ✅ **PASSES** (Normal & Large)
- **WCAG AAA Status**: ✅ **PASSES**
- **Usage**: Primary text color - excellent contrast

---

### ⚠️ CAUTION: Requires Large Text Only

#### 1. White Text on Original Orange (#FFFFFF on #eb5813)
- **Contrast Ratio**: ~3.0:1
- **WCAG AA Status**: ❌ **FAILS** for normal text (needs 4.5:1)
- **WCAG AA Status**: ✅ **PASSES** for large text only (meets 3:1 threshold)
- **Usage Restriction**: 
  - ✅ Can use for headings 18pt+ or 14pt bold+
  - ❌ Cannot use for body text or normal-sized text
  - ✅ Can use for decorative elements, icons, graphics

---

## Color Variants Created for Compliance

### Orange Variants

1. **Primary Orange** (`#eb5813`)
   - Original leaflet color
   - Use only for large headings (18pt+ or 14pt bold+) with white text
   - Can use for orange text on white backgrounds

2. **Orange Muted** (`#c4490f`)
   - Darker variant for WCAG AA compliance
   - Contrast: ~4.5:1 with white text
   - ✅ Use for all text sizes with white text

3. **Orange Dark** (`#a13d0c`)
   - Darkest variant for hover states and depth
   - Use for interactive elements

### Teal Variants

1. **Teal** (`#27546b`)
   - Original leaflet color
   - ✅ Fully WCAG AA compliant (6.8:1)
   - Safe for all text sizes

2. **Teal Dark** (`#1e3f52`)
   - Darker variant for gradients and hover states
   - Maintains excellent contrast

---

## Usage Guidelines

### ✅ Safe Combinations (WCAG AA Compliant)

```css
/* These combinations always pass WCAG AA */
.white-on-teal { background: #27546b; color: white; }        /* ✅ 6.8:1 */
.white-on-orange-muted { background: #c4490f; color: white; } /* ✅ 4.5:1 */
.dark-on-white { background: white; color: #1f2937; }        /* ✅ 14.8:1 */
```

### ⚠️ Conditional Combinations

```css
/* Only for large text (18pt+ or 14pt bold+) */
.white-on-orange-large { 
  background: #eb5813; 
  color: white; 
  font-size: 18pt; /* or font-weight: bold with 14pt+ */
} /* ⚠️ 3.0:1 - passes only for large text */
```

### ❌ Avoid These Combinations

```css
/* These fail WCAG AA for normal text */
.white-on-orange-normal { background: #eb5813; color: white; } /* ❌ 3.0:1 */
```

---

## Implementation in Tailwind

### Available Color Classes

**Orange:**
- `bg-primary-orange` - Original leaflet orange (use carefully)
- `bg-primary-orange-muted` - WCAG compliant variant ✅
- `bg-primary-orange-dark` - Dark variant for hover states
- `text-primary-orange` - Orange text (safe on white)

**Teal:**
- `bg-teal` - Original leaflet teal ✅
- `bg-teal-dark` - Dark variant
- `text-teal` - Teal text (safe on white)

### Custom Utility Classes

- `.btn-primary` - Uses muted orange (WCAG compliant)
- `.btn-primary-large` - Uses original orange (for large buttons only)
- `.hero-gradient` - Uses muted orange + teal (WCAG compliant)
- `.hero-gradient-original` - Uses original colors (large text only)
- `.card-orange` - Uses muted orange (WCAG compliant)
- `.card-teal` - Uses teal (WCAG compliant)
- `.warning-box` - Styled like leaflet disclaimer boxes

---

## Recommendations

1. **For Hero Sections**: Use `.hero-gradient` (compliant) or `.hero-gradient-original` with large headings only

2. **For Buttons**: Use `.btn-primary` (always compliant) or `.btn-primary-large` for prominent CTAs

3. **For Cards**: Use `.card-orange` or `.card-teal` (both compliant)

4. **For Body Text**: Always use `text-text-dark` or `text-text-light` on white backgrounds

5. **When Using Original Orange**: 
   - Only with white text on large headings (18pt+ or 14pt bold+)
   - For decorative elements
   - For orange text on white backgrounds (perfectly safe)

---

## Testing

Use these tools to verify contrast ratios:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Contrast Checker](https://colorffy.com/contrast-checker)
- Browser DevTools (Lighthouse accessibility audit)

---

## Summary

✅ **Fully Compliant**: Teal (#27546b) - safe for all uses
⚠️ **Conditional Compliance**: Orange (#eb5813) - large text only
✅ **Compliant Variant Available**: Orange Muted (#c4490f) - safe for all uses

**Best Practice**: Use `primary-orange-muted` for backgrounds with white text in normal sizes, and reserve `primary-orange` for large headings or decorative elements.

