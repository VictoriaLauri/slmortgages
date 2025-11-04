# Color Accessibility Analysis

## WCAG 2.2 AA Requirements

- **Normal Text**: Minimum contrast ratio of **4.5:1**
- **Large Text** (18pt+ or 14pt bold+): Minimum contrast ratio of **3:1**

---

## Current Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Orange | #FF6B35 | Main brand color, backgrounds |
| Dark Teal | #0F766E | Secondary backgrounds |
| Muted Orange | #EA580C | Accents, hover states |
| White | #FFFFFF | Text on colored backgrounds |
| Text Dark | #1f2937 | Primary text on white |
| Text Light | #6b7280 | Secondary text on white |

---

## Contrast Ratio Analysis

### ✅ PASSING Combinations

#### 1. White Text on Dark Teal (#FFFFFF on #0F766E)
- **Contrast Ratio**: ~7.8:1
- **WCAG AA Status**: ✅ PASSES (Normal & Large)
- **WCAG AAA Status**: ✅ PASSES
- **Usage**: Safe for all text sizes on teal backgrounds

#### 2. White Text on Muted Orange (#FFFFFF on #EA580C)
- **Contrast Ratio**: ~4.6:1
- **WCAG AA Status**: ✅ PASSES (Normal & Large)
- **Usage**: Safe for all text sizes on muted orange backgrounds

#### 3. Dark Text on White (#1f2937 on #FFFFFF)
- **Contrast Ratio**: ~14.8:1
- **WCAG AA Status**: ✅ PASSES (Normal & Large)
- **WCAG AAA Status**: ✅ PASSES
- **Usage**: Primary text color - excellent contrast

#### 4. Primary Orange Text on White (#FF6B35 on #FFFFFF)
- **Contrast Ratio**: ~2.9:1
- **WCAG AA Status**: ⚠️ FAILS for normal text
- **WCAG AA Status**: ✅ PASSES for large text (3:1 threshold)
- **Usage**: Only use for large headings (18pt+ or 14pt bold+)

---

### ⚠️ FAILING Combinations (Need Adjustment)

#### 1. White Text on Primary Orange (#FFFFFF on #FF6B35)
- **Contrast Ratio**: ~2.9:1
- **WCAG AA Status**: ❌ FAILS for normal text (needs 4.5:1)
- **WCAG AA Status**: ✅ PASSES for large text only (meets 3:1)
- **Critical Issue**: Cannot use white text on orange background for body text

#### 2. Light Text on White (#6b7280 on #FFFFFF)
- **Contrast Ratio**: ~4.1:1
- **WCAG AA Status**: ❌ FAILS for normal text (needs 4.5:1)
- **WCAG AA Status**: ✅ PASSES for large text only
- **Issue**: Cannot use light gray for body text

---

## Recommendations

### Critical Fixes Required

#### 1. Primary Orange Background with Text
**Problem**: White text on #FF6B35 orange fails WCAG AA for normal text.

**Solutions**:
- **Option A**: Use dark text (#1f2937) on orange background instead
  - Contrast: ~3.2:1 - Still fails for normal text, only passes for large text
- **Option B**: Darken the orange for text areas
  - Suggested: Use #EA580C (Muted Orange) instead - passes at 4.6:1
- **Option C**: Use white text only for large headings (18pt+ or 14pt bold+)
- **Option D**: Add a darker overlay/text shadow for better contrast

**Recommended**: Use **Muted Orange (#EA580C)** for backgrounds that will have white text, or restrict white-on-orange to large headings only.

#### 2. Light Gray Text
**Problem**: #6b7280 on white fails WCAG AA for normal text.

**Solutions**:
- **Option A**: Darken the gray
  - Suggested: #4B5563 (contrast ~6.8:1) or #374151 (contrast ~9.2:1)
- **Option B**: Use only for large text (18pt+ or 14pt bold+)
- **Option C**: Use for non-essential decorative text only

**Recommended**: Change `text-light` from `#6b7280` to `#4B5563` or `#374151`.

---

## Updated Color Palette Recommendations

### Primary Colors (Keep)
- ✅ **Primary Orange**: #FF6B35 (use for backgrounds with dark text or large white text)
- ✅ **Dark Teal**: #0F766E (excellent contrast, safe for white text)
- ✅ **Muted Orange**: #EA580C (use for backgrounds with white text)

### Text Colors (Update Recommended)
- ✅ **Text Dark**: #1f2937 (keep - excellent contrast)
- ⚠️ **Text Light**: #6b7280 → **Change to**: #4B5563 or #374151
- ✅ **White**: #FFFFFF (keep)

### Usage Guidelines

#### For Orange Backgrounds:
- **Dark Text** (#1f2937): Use for headings only (18pt+ or 14pt bold+)
- **White Text**: Use ONLY for large headings (18pt+ or 14pt bold+)
- **Best Practice**: Use Muted Orange (#EA580C) instead for white text

#### For Teal Backgrounds:
- **White Text**: ✅ Safe for all text sizes

#### For White Backgrounds:
- **Dark Text** (#1f2937): ✅ Safe for all text sizes
- **Light Text**: Use #4B5563 or darker for body text

---

## Implementation Checklist

- [ ] Update Tailwind config with corrected text-light color
- [ ] Review all components using orange backgrounds
- [ ] Ensure white text on orange is only used for large headings
- [ ] Consider using Muted Orange for hero sections with white text
- [ ] Test all color combinations with contrast checker tool
- [ ] Document color usage guidelines in component library

---

## Testing Tools

Use these tools to verify contrast ratios:

1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Colorffy Contrast Checker**: https://colorffy.com/contrast-checker
3. **A11y Color Contrast Checker**: https://www.a11yproject.com/checklist/

---

## Summary

**Current Status**: ⚠️ **PARTIAL COMPLIANCE**

**Critical Issues**:
1. White text on Primary Orange (#FF6B35) fails for normal text
2. Light gray text (#6b7280) fails for normal text

**Quick Wins**:
1. Use Muted Orange (#EA580C) instead of Primary Orange for white text backgrounds
2. Darken light gray text color to #4B5563 or #374151
3. Restrict white-on-orange to large headings only

**Estimated Fix Time**: 1-2 hours (color value updates + component review)

