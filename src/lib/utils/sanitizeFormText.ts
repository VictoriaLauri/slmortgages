/**
 * Sanitizes user input for form submission so that stored/emailed content
 * is safe when viewed as HTML (e.g. in Netlify dashboard or email notifications).
 * Strips HTML tags and limits length to reduce XSS and payload abuse.
 */
const DEFAULT_MAX_LENGTH = 50_000

export function sanitizeFormText(
  value: string,
  maxLength: number = DEFAULT_MAX_LENGTH
): string {
  if (typeof value !== 'string') return ''
  const stripped = value.replace(/<[^>]*>/g, '')
  return stripped.length > maxLength ? stripped.slice(0, maxLength) : stripped
}
