import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@$*'

// Scrambles the text on mount, then reveals it left to right.
export default function DecryptedText({ text, delay = 0, speed = 45 }) {
  const [shown, setShown] = useState(text)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let revealed = 0
    let tick = 0
    let interval
    const scramble = () =>
      text
        .split('')
        .map((ch, i) => (i < revealed || ch === ' ' ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join('')

    setShown(scramble())
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        tick++
        if (tick % 2 === 0) revealed++
        setShown(scramble())
        if (revealed >= text.length) clearInterval(interval)
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, delay, speed])

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
    </>
  )
}
