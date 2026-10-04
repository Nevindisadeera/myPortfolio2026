import { useEffect, useRef } from 'react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

const vertex = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

// Flowing silk-like folds, shaded in a single colour with a little film grain.
const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uRes;
  uniform vec3 uColor;
  uniform float uScale;
  uniform float uRotation;
  uniform float uNoise;

  varying vec2 vUv;

  float grain(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  vec2 rotate(vec2 uv, float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, -s, s, c) * uv;
  }

  void main() {
    vec2 uv = vUv;
    uv.x *= uRes.x / uRes.y;
    vec2 tex = rotate(uv * uScale, uRotation);

    float t = uTime;
    tex.y += 0.03 * sin(8.0 * tex.x - t);
    float pattern = 0.6 + 0.4 * sin(
      5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * t) +
      sin(20.0 * (tex.x + tex.y - 0.1 * t))
    );

    vec3 col = uColor * pattern - grain(gl_FragCoord.xy) / 15.0 * uNoise;
    gl_FragColor = vec4(col, 1.0);
  }
`

export default function Silk({
  color = '#7c2d12',
  speed = 1.4,
  scale = 1.1,
  rotation = 0.35,
  noise = 1.2,
  className = '',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 1.5) })
    const gl = renderer.gl
    container.appendChild(gl.canvas)

    const n = parseInt(color.replace('#', ''), 16)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uRes: { value: [1, 1] },
        uColor: { value: [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255] },
        uScale: { value: scale },
        uRotation: { value: rotation },
        uNoise: { value: noise },
      },
    })
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      program.uniforms.uRes.value = [gl.canvas.width, gl.canvas.height]
    }
    window.addEventListener('resize', resize)
    resize()

    let frame
    let visible = true
    const update = (t) => {
      if (!visible) return
      frame = requestAnimationFrame(update)
      program.uniforms.uTime.value = t * 0.001 * speed
      renderer.render({ scene: mesh })
    }

    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(frame)
      if (visible && !reduceMotion) frame = requestAnimationFrame(update)
    })
    io.observe(container)

    if (reduceMotion) renderer.render({ scene: mesh })

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', resize)
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} className={`[&>canvas]:block [&>canvas]:size-full ${className}`} />
}
