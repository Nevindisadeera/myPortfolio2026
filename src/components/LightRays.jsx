import { useEffect, useRef } from 'react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

const vertex = /* glsl */ `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uMouse;
  uniform vec3 uColor;
  uniform float uIntensity;

  float ray(vec2 src, vec2 dir, vec2 coord, float seedA, float seedB, float speed) {
    vec2 toCoord = coord - src;
    float cosAngle = dot(normalize(toCoord), dir);
    return clamp(
      (0.45 + 0.15 * sin(cosAngle * seedA + uTime * speed)) +
      (0.3 + 0.2 * cos(-cosAngle * seedB + uTime * speed)),
      0.0, 1.0
    );
  }

  void main() {
    vec2 coord = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
    vec2 src = vec2(uRes.x * 0.5, -uRes.y * 0.2);
    vec2 dir = normalize(vec2(uMouse.x * 0.35, 1.0));

    float r1 = ray(src, dir, coord, 36.2214, 21.11349, 1.1);
    float r2 = ray(src, dir, coord, 22.3991, 18.0234, 0.8);

    vec2 toCoord = coord - src;
    float cone = pow(max(dot(normalize(toCoord), dir), 0.0), 5.0);
    float fade = 1.0 - smoothstep(0.0, uRes.y * 1.15, length(toCoord));

    float a = (r1 * 0.55 + r2 * 0.45) * cone * fade * uIntensity;
    gl_FragColor = vec4(uColor, a);
  }
`

export default function LightRays({ color = '#f97316', intensity = 0.55, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 1.5), alpha: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)

    const n = parseInt(color.replace('#', ''), 16)
    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uRes: { value: [1, 1] },
        uMouse: { value: [0, 0] },
        uColor: { value: [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255] },
        uIntensity: { value: intensity },
      },
    })
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      program.uniforms.uRes.value = [gl.canvas.width, gl.canvas.height]
    }
    window.addEventListener('resize', resize)
    resize()

    const target = [0, 0]
    const onMove = (e) => {
      target[0] = (e.clientX / window.innerWidth) * 2 - 1
      target[1] = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)

    let frame
    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(frame)
      if (visible && !reduceMotion) frame = requestAnimationFrame(update)
    })
    io.observe(container)

    const update = (t) => {
      if (!visible) return
      frame = requestAnimationFrame(update)
      const m = program.uniforms.uMouse.value
      m[0] += (target[0] - m[0]) * 0.04
      m[1] += (target[1] - m[1]) * 0.04
      program.uniforms.uTime.value = t * 0.001
      renderer.render({ scene: mesh })
    }

    if (reduceMotion) renderer.render({ scene: mesh })

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} className={`[&>canvas]:block [&>canvas]:size-full ${className}`} />
}
