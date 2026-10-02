function Sidebar() {
  return (
    <div className="flex w-9 shrink-0 flex-col gap-1.5 rounded border border-line bg-surface-2 p-1.5">
      <span className="mb-1 size-3 rounded bg-accent" />
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={`h-1 rounded ${i === 0 ? 'bg-accent/60' : 'bg-line-2'}`} />
      ))}
    </div>
  )
}

function TopBar() {
  return (
    <div className="flex h-4 items-center justify-between rounded border border-line bg-surface-2 px-1.5">
      <span className="h-1 w-10 rounded bg-line-2" />
      <span className="flex gap-1">
        <span className="h-1.5 w-4 rounded bg-line-2" />
        <span className="size-2 rounded-full bg-accent/70" />
      </span>
    </div>
  )
}

function LineChart() {
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full">
      <defs>
        <linearGradient id="pv-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,32 L14,26 L28,28 L42,18 L56,20 L70,10 L84,14 L100,4 L100,40 L0,40 Z" fill="url(#pv-grad)" />
      <path
        d="M0,32 L14,26 L28,28 L42,18 L56,20 L70,10 L84,14 L100,4"
        fill="none"
        stroke="#f97316"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function Donut() {
  const c = 2 * Math.PI * 14
  return (
    <svg viewBox="0 0 40 40" className="size-12">
      <circle cx="20" cy="20" r="14" fill="none" stroke="#262626" strokeWidth="6" />
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke="#f97316"
        strokeWidth="6"
        strokeDasharray={c}
        strokeDashoffset={c * 0.35}
        transform="rotate(-90 20 20)"
      />
    </svg>
  )
}

function DashboardMock() {
  return (
    <>
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded border border-line bg-surface-2 p-1.5">
            <span className="block h-1 w-6 rounded bg-line-2" />
            <span className="mt-1.5 block h-1.5 w-8 rounded bg-neutral-400" />
            <span className="mt-1 block h-1 w-4 rounded bg-accent/70" />
          </div>
        ))}
      </div>
      <div className="flex flex-1 gap-1.5">
        <div className="flex-1 rounded border border-line bg-surface-2 p-1.5">
          <LineChart />
        </div>
        <div className="grid w-16 place-items-center rounded border border-line bg-surface-2">
          <Donut />
        </div>
      </div>
    </>
  )
}

function TableMock() {
  const widths = ['w-10', 'w-6', 'w-8', 'w-5']
  return (
    <div className="flex flex-1 flex-col gap-1 rounded border border-line bg-surface-2 p-1.5">
      <div className="grid grid-cols-4 gap-1 border-b border-line pb-1">
        {widths.map((w, i) => (
          <span key={i} className={`h-1 rounded bg-neutral-500 ${w}`} />
        ))}
      </div>
      {[0, 1, 2, 3, 4, 5].map((r) => (
        <div key={r} className="grid grid-cols-4 items-center gap-1">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-line-2" />
            <span className="h-1 w-6 rounded bg-line-2" />
          </span>
          <span className="h-1 w-6 rounded bg-line-2" />
          <span className="h-1 w-8 rounded bg-line-2" />
          <span
            className={`h-1.5 w-5 rounded-full ${r % 3 === 0 ? 'bg-accent/70' : r % 3 === 1 ? 'bg-green-500/60' : 'bg-line-2'}`}
          />
        </div>
      ))}
    </div>
  )
}

function MapMock() {
  const pins = [
    ['30%', '35%'],
    ['55%', '55%'],
    ['70%', '25%'],
    ['42%', '70%'],
  ]
  return (
    <div className="flex flex-1 gap-1.5">
      <div className="relative flex-1 overflow-hidden rounded border border-line bg-[radial-gradient(#242424_1px,transparent_1px)] bg-[size:9px_9px]">
        {pins.map(([l, t], i) => (
          <span
            key={i}
            style={{ left: l, top: t }}
            className={`absolute size-2 rounded-full bg-accent shadow-[0_0_8px_#f97316] ${i === 1 ? 'animate-ping' : ''}`}
          />
        ))}
      </div>
      <div className="flex w-20 flex-col gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded border border-line bg-surface-2 p-1.5">
            <span className="block h-1 w-10 rounded bg-neutral-500" />
            <span className="mt-1 flex items-center justify-between">
              <span className="h-1 w-6 rounded bg-line-2" />
              <span className={`h-1.5 w-4 rounded-full ${i % 2 ? 'bg-green-500/60' : 'bg-accent/70'}`} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileMock() {
  return (
    <div className="mx-auto flex h-full w-[40%] flex-col gap-1.5 rounded-xl border-2 border-line-2 bg-surface-2 p-1.5">
      <span className="mx-auto h-1 w-6 rounded-full bg-line-2" />
      <div className="rounded-lg bg-linear-to-br from-accent to-orange-700 p-2">
        <span className="block h-1 w-6 rounded bg-white/60" />
        <span className="mt-1.5 block h-2 w-10 rounded bg-white" />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-1.5 rounded border border-line bg-bg p-1">
          <span className="size-3 shrink-0 rounded bg-accent/60" />
          <span className="flex-1">
            <span className="block h-1 w-6 rounded bg-neutral-500" />
            <span className="mt-0.5 block h-1 w-4 rounded bg-line-2" />
          </span>
          <span className="h-1 w-3 rounded bg-neutral-400" />
        </div>
      ))}
    </div>
  )
}

export default function ProjectPreview({ variant }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-[#0c0c0c] p-2.5">
      {variant === 'mobile' ? (
        <MobileMock />
      ) : (
        <div className="flex size-full gap-2">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <TopBar />
            {variant === 'dashboard' && <DashboardMock />}
            {variant === 'table' && <TableMock />}
            {variant === 'map' && <MapMock />}
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/50 to-transparent" />
    </div>
  )
}
