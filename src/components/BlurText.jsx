// Letters fade in from a blur one after another (stagger in ms).
export default function BlurText({ text, delay = 0, stagger = 60 }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split('').map((ch, i) => (
          <span
            key={i}
            className="inline-block animate-blur-in motion-reduce:animate-none"
            style={{ animationDelay: `${delay + i * stagger}ms` }}
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </span>
    </>
  )
}
