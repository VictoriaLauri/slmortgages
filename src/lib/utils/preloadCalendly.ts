export function preloadCalendlyScript() {
  const scriptId = 'calendly-widget-script'

  // If script already exists → do nothing
  if (document.getElementById(scriptId)) return

  const script = document.createElement('script')
  script.id = scriptId
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
}
