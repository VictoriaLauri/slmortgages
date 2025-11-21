import { useCallback, useEffect, useId, useRef, useState } from 'react'

interface TooltipProps {
  text: string
}

const VIEWPORT_PADDING = 16
const TOOLTIP_WIDTH_DESKTOP = 400
const TOOLTIP_WIDTH_MOBILE = 320
const DESKTOP_BREAKPOINT = 640

export default function Tooltip({ text }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({})
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipId = useId()

  // Find form or container element for alignment
  const findContainer = useCallback((): HTMLElement | null => {
    if (!buttonRef.current) return null

    const form = buttonRef.current.closest('form')
    if (form) return form

    let parent = buttonRef.current.parentElement
    while (parent && parent !== document.body) {
      const style = window.getComputedStyle(parent)
      if (
        parseFloat(style.paddingLeft) > 0 ||
        ['MAIN', 'SECTION'].includes(parent.tagName)
      ) {
        return parent
      }
      parent = parent.parentElement
    }
    return null
  }, [])

  // Calculate tooltip position
  const calculatePosition = useCallback(
    (tooltipWidth?: number): React.CSSProperties => {
      if (!buttonRef.current) return { left: 0, right: 'auto' }

      const buttonRect = buttonRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const width =
        tooltipWidth ||
        (viewportWidth >= DESKTOP_BREAKPOINT
          ? TOOLTIP_WIDTH_DESKTOP
          : Math.min(TOOLTIP_WIDTH_MOBILE, viewportWidth - 32))

      const tooltipRight = buttonRect.left + width
      const wouldOverflow = tooltipRight > viewportWidth - VIEWPORT_PADDING
      const container = findContainer()

      if (wouldOverflow && container) {
        const containerRect = container.getBoundingClientRect()
        return { left: containerRect.left - buttonRect.left, right: 'auto' }
      }

      return { left: 0, right: 'auto' }
    },
    [findContainer]
  )

  // Check if coordinates are within button bounds
  const isWithinBounds = (x: number, y: number): boolean => {
    if (!buttonRef.current) return false
    const rect = buttonRef.current.getBoundingClientRect()
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    )
  }

  // Handle button click
  const handleClick = (e: React.MouseEvent) => {
    const { clientX, clientY } = e.nativeEvent
    if (!isWithinBounds(clientX, clientY)) {
      e.stopPropagation()
      return
    }

    e.stopPropagation()
    e.preventDefault()
    e.nativeEvent.stopPropagation()

    if (!open) {
      setTooltipStyle(calculatePosition())
    }
    setOpen((prev) => !prev)
  }

  // Handle mouse hover
  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovered(isWithinBounds(e.nativeEvent.clientX, e.nativeEvent.clientY))
  }

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTooltipStyle({})
    }
  }, [open])

  // Calculate and refine position when opening
  useEffect(() => {
    if (!open || !buttonRef.current) return

    // Set initial position
    setTooltipStyle(calculatePosition())

    // Refine with actual width after render
    const refine = () => {
      if (!tooltipRef.current) return
      const actualWidth = tooltipRef.current.getBoundingClientRect().width
      const refined = calculatePosition(actualWidth)
      setTooltipStyle((current) => {
        const currentLeft = parseFloat(String(current.left || 0))
        const refinedLeft = parseFloat(String(refined.left || 0))
        return Math.abs(currentLeft - refinedLeft) > 1 ? refined : current
      })
    }

    const timeoutId = setTimeout(() => requestAnimationFrame(refine), 0)
    return () => clearTimeout(timeoutId)
  }, [open, calculatePosition])

  // Close on outside click
  useEffect(() => {
    if (!open) return

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        buttonRef.current?.contains(target) ||
        tooltipRef.current?.contains(target)
      ) {
        return
      }
      setOpen(false)
    }

    document.addEventListener('click', handleOutsideClick, true)
    return () => document.removeEventListener('click', handleOutsideClick, true)
  }, [open])

  // Close on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <span className='relative inline pointer-events-none'>
      <button
        ref={buttonRef}
        type='button'
        className={`ml-0.5 inline-flex items-center justify-center 
             w-4 h-4 text-xs font-bold leading-none
             text-teal bg-blue-light border border-teal 
             rounded-full transition-colors pointer-events-auto relative
             ${isHovered ? 'bg-teal text-white' : ''}`}
        onMouseEnter={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onMouseDown={(e) => e.stopPropagation()}
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
      >
        <span className='flex items-center justify-center h-full mt-px ml-px'>
          ?
        </span>
        {open && (
          <div
            ref={tooltipRef}
            id={tooltipId}
            role='tooltip'
            className='
          absolute top-full left-0 mt-2 z-50
          max-w-[calc(100vw-2rem)] sm:max-w-md
          w-[min(320px,calc(100vw-2rem))] sm:w-[400px]
          rounded-md 
          border border-gray-200 
          bg-white p-3 shadow-md 
          text-[13px] text-blue-dark leading-relaxed
          pointer-events-auto
        '
            style={tooltipStyle}
          >
            {text}
          </div>
        )}
      </button>
    </span>
  )
}
