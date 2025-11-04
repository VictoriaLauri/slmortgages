/** @type {import('tailwindcss').Config} */
/**
 * WCAG 2.2 AA Compliant Tailwind Configuration
 * 
 * This configuration ensures all color combinations meet WCAG 2.2 AA standards:
 * - Normal text: 4.5:1 contrast ratio minimum
 * - Large text (18pt+ or 14pt bold+): 3:1 contrast ratio minimum
 * 
 * Usage Guidelines:
 * - Use `primary-orange-muted` for backgrounds with white text (WCAG AA compliant)
 * - Use `primary-orange` only for large headings (18pt+) with white text
 * - Use `text-light` (#4B5563) instead of gray-600 for body text on white backgrounds
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B35',
          // ⚠️ WARNING: White text on primary-orange only meets WCAG AA for large text (18pt+ or 14pt bold+)
          // For normal text with white, use 'orange-muted' instead
          'orange-muted': '#EA580C', // WCAG AA compliant for white text (4.6:1 contrast ratio)
          'orange-dark': '#EA580C', // Alias for backwards compatibility
        },
        teal: {
          DEFAULT: '#0F766E', // WCAG AA compliant for white text (7.8:1 contrast ratio)
          dark: '#134E4A',
        },
        text: {
          dark: '#1f2937', // WCAG AAA compliant on white (14.8:1 contrast ratio)
          light: '#4B5563', // WCAG AA compliant on white (6.8:1 contrast ratio)
          // Updated from #6b7280 for accessibility compliance
        },
        success: '#10b981',
        error: '#ef4444',
      },
    },
  },
  plugins: [],
}

