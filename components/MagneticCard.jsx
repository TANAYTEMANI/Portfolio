import { useRef, useState, useCallback } from 'react'

export default function MagneticCard({ children, className = '', intensity = 6 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.1s ease-out',
    })
  }, [intensity])

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    })
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  )
}
