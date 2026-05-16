import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function useTypingEffect(texts: string[], speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)

        if (charIndex <= 1) {
          setIsDeleting(false)
          setTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return displayText
}

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView(0.3)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return { count, ref }
}
