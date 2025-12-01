export function usePartnerLogos() {
  // Vite scans src/assets at build time and returns modules with default export = resolved URL
  const logoModules = import.meta.glob<string>(
    '../../assets/logos/*.{png,jpg,jpeg,svg}',
    { eager: true, import: 'default' }
  )

  // Transform into array: { src, alt }
  const parsed = Object.entries(logoModules).map(([path, src]) => {
    const fileName = path.split('/').pop() || ''
    const alt = fileName
      .replace(/\.[^/.]+$/, '') // remove extension
      .replace(/^partner_\d+_/, '') // remove partner_###_ prefix
      .replace(/[_-]+/g, ' ') // convert underscores/dashes to spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()) // Capitalise words
      .trim()

    return { src, alt }
  })

  return parsed
}
