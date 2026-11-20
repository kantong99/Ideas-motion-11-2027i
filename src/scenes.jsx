import React from 'react';
const W = 1920, H = 1080;
const Defs = () => (
  <defs>
    <filter id="bl" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="16" /></filter>
    <filter id="sm" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" /></filter>
    <linearGradient id="fl" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stopColor="#dc2626" />
      <stop offset="0.4" stopColor="#f97316" />
      <stop offset="0.75" stopColor="#fde047" />
      <stop offset="1" stopColor="#fffbeb" />
    </linearGradient>
  </defs>
);
const flame = (cx, cy, h, w, lean, fill = 'url(#fl)') => (
  <path fill={fill} d={`M ${cx - w} ${cy} C ${cx - w * 1.25} ${cy - h * 0.45} ${cx + lean - w * 0.35} ${cy - h * 0.7} ${cx + lean} ${cy - h} C ${cx + lean + w * 0.35} ${cy - h * 0.62} ${cx + w * 1.15} ${cy - h * 0.4} ${cx + w} ${cy} Z`} />
);
const streak = (y, c, amp = 80, op = 0.55, w = 6) => (
  <path d={`M 1920 ${y} C 1500 ${y - amp} 1250 ${y + amp} 950 ${y} S 420 ${y - amp * 0.8} 0 ${y + 20}`} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" opacity={op} />
);
const leaf = (x, y, rot, s, c) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <path d="M 0 0 C 60 -90 170 -70 210 0 C 170 70 60 90 0 0 Z" fill={c} />
    <path d="M 0 0 L 190 0" stroke="#14532d" strokeWidth={6} opacity={0.5} />
    {[60, 110, 150].map((t) => (
      <g key={t}><path d={`M ${t} 0 L ${t + 30} -38`} stroke="#14532d" strokeWidth={4} opacity={0.4} /><path d={`M ${t} 0 L ${t + 30} 38`} stroke="#14532d" strokeWidth={4} opacity={0.4} /></g>
    ))}
  </g>
);
const embers = (n, x0, y0, dx, dy, c) => Array.from({ length: n }, (_, k) => {
  const t = k / n;
  return <circle key={k} cx={x0 + dx * t + Math.sin(k * 2.3) * 40} cy={y0 + dy * t} r={3 + (k % 4)} fill={c} opacity={1 - t * 0.7} />;
});

export const SCENES = {
  '01-api-tertiup-angin': (
    <g>
      <Defs />
      <radialGradient id="bg1" cx="50%" cy="60%" r="70%"><stop offset="0" stopColor="#fff8dc" /><stop offset="1" stopColor="#ffd27a" /></radialGradient>
      <rect width={W} height={H} fill="url(#bg1)" />
      <ellipse cx={920} cy={600} rx={420} ry={520} fill="#fb923c" opacity={0.45} filter="url(#bl)" />
      {[0, 1, 2, 3, 4].map((k) => <g key={k}>{streak(260 + k * 100, '#fb923c', 60 + k * 8, 0.5, 6)}</g>)}
      <ellipse cx={960} cy={900} rx={380} ry={36} fill="#7c2d12" opacity={0.25} filter="url(#sm)" />
      <rect x={640} y={880} width={600} height={80} rx={40} fill="#78350f" />
      <rect x={700} y={820} width={560} height={70} rx={35} fill="#b45309" transform="rotate(-6 960 850)" />
      <ellipse cx={640} cy={920} rx={40} ry={40} fill="#fcd34d" opacity={0.4} />
      {flame(930, 830, 600, 190, -240)}
      {flame(930, 830, 440, 120, -180, '#fde047')}
      {flame(930, 830, 260, 70, -110, '#fffbe6')}
      {embers(30, 780, 640, -300, -420, '#fde047')}
    </g>
  ),
  '02-lilin-ditiup': (
    <g>
      <Defs />
      <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fde8d2" /><stop offset="1" stopColor="#fbcfe8" /></linearGradient>
      <linearGradient id="wax" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fef3c7" /><stop offset="0.5" stopColor="#ffffff" /><stop offset="1" stopColor="#f5d0a9" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg2)" />
      <circle cx={960} cy={500} r={330} fill="#fde047" opacity={0.4} filter="url(#bl)" />
      <ellipse cx={960} cy={975} rx={300} ry={40} fill="#831843" opacity={0.2} filter="url(#sm)" />
      <ellipse cx={960} cy={960} rx={230} ry={40} fill="#f9a8d4" />
      <rect x={880} y={540} width={160} height={420} rx={18} fill="url(#wax)" />
      <path d="M 1030 545 q 0 70 16 70 q 16 0 16 -70 Z" fill="#fffbeb" />
      <ellipse cx={960} cy={540} rx={80} ry={14} fill="#fef3c7" />
      <line x1={960} y1={540} x2={960} y2={510} stroke="#1f2937" strokeWidth={8} strokeLinecap="round" />
      {flame(960, 520, 170, 46, 0)}
      {flame(960, 520, 120, 26, 0, '#fde047')}
      <path d="M 960 500 C 1000 430 900 380 960 300 S 1040 220 980 150" fill="none" stroke="#64748b" strokeWidth={16} strokeLinecap="round" opacity={0.35} filter="url(#sm)" />
      {[0, 1, 2].map((i) => <circle key={i} cx={1040 + i * 80} cy={250 - i * 70} r={40 + i * 14} fill="#94a3b8" opacity={0.25} filter="url(#sm)" />)}
      <path d="M 1900 420 C 1600 380 1400 470 1180 430" fill="none" stroke="#60a5fa" strokeWidth={12} strokeLinecap="round" opacity={0.7} />
      <path d="M 1900 520 C 1650 500 1450 560 1230 530" fill="none" stroke="#93c5fd" strokeWidth={8} strokeLinecap="round" opacity={0.6} />
    </g>
  ),
  '03-obor-malam-cerah': (
    <g>
      <Defs />
      <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfe6ff" /><stop offset="1" stopColor="#fff3d6" /></linearGradient>
      <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fde047" stopOpacity={0.7} /><stop offset="1" stopColor="#fde047" stopOpacity={0} /></linearGradient>
      <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#a16207" /><stop offset="0.5" stopColor="#d97706" /><stop offset="1" stopColor="#78350f" /></linearGradient>
      <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#86efac" /><stop offset="1" stopColor="#22c55e" /></linearGradient>
      <rect width={W} height={H} fill="url(#sky3)" />
      <circle cx={960} cy={420} r={520} fill="#fde68a" opacity={0.35} filter="url(#bl)" />
      <polygon points="960,420 1560,1080 360,1080" fill="url(#cone)" />
      <path d="M 0 900 Q 600 780 1100 880 T 1920 860 L 1920 1080 L 0 1080 Z" fill="url(#hill)" />
      <rect x={944} y={460} width={32} height={460} fill="url(#wood)" />
      <path d="M 920 470 L 1000 470 L 990 540 L 930 540 Z" fill="#b45309" />
      <circle cx={960} cy={420} r={220} fill="#fde047" opacity={0.5} filter="url(#bl)" />
      {flame(960, 440, 300, 80, -40)}
      {flame(960, 440, 210, 50, -30, '#fde047')}
      {flame(960, 440, 110, 24, -18, '#fffbeb')}
      {embers(18, 940, 360, 120, -220, '#fde047')}
    </g>
  ),
  '04-daun-tertiup-angin': (
    <g>
      <Defs />
      <linearGradient id="bg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ecfdf5" /><stop offset="1" stopColor="#bbf7d0" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg4)" />
      {[0, 1, 2].map((k) => <g key={k}>{streak(260 + k * 220, '#34d399', 60, 0.5, 5)}</g>)}
      <g opacity={0.25}>{leaf(200, 420, -20, 1.3, '#16a34a')}{leaf(600, 640, 10, 1.1, '#15803d')}</g>
      {leaf(300, 420, -20, 1.3, '#22c55e')}
      {leaf(700, 620, 10, 1.1, '#16a34a')}
      {leaf(1100, 360, -40, 1.2, '#4ade80')}
      {leaf(1400, 700, 30, 1.3, '#84cc16')}
      {leaf(1650, 430, 15, 1.0, '#22c55e')}
      {embers(10, 1500, 200, -500, 200, '#16a34a')}
    </g>
  ),
  '05-dandelion-tertiup': (
    <g>
      <Defs />
      <linearGradient id="bg5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e0f2fe" /><stop offset="1" stopColor="#fef9c3" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg5)" />
      <path d="M 960 1080 C 940 900 990 700 960 520" fill="none" stroke="#15803d" strokeWidth={16} strokeLinecap="round" />
      <path d="M 960 900 C 1040 860 1080 820 1100 780 C 1040 800 990 830 960 900 Z" fill="#22c55e" />
      {Array.from({ length: 48 }, (_, i) => {
        const a = (i / 48) * Math.PI * 2;
        return <g key={i}><line x1={960 + Math.cos(a) * 70} y1={470 + Math.sin(a) * 70} x2={960 + Math.cos(a) * 130} y2={470 + Math.sin(a) * 130} stroke="#cbd5e1" strokeWidth={4} /><circle cx={960 + Math.cos(a) * 136} cy={470 + Math.sin(a) * 136} r={9} fill="#ffffff" stroke="#94a3b8" strokeWidth={2} /></g>;
      })}
      <circle cx={960} cy={470} r={72} fill="#f8fafc" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 1180 + i * 88, y = 330 - i * 42 + Math.sin(i) * 20;
        return <g key={i} opacity={1 - i * 0.08}>{Array.from({ length: 8 }, (_, k) => { const a = (k / 8) * Math.PI * 2; return <line key={k} x1={x} y1={y} x2={x + Math.cos(a) * 26} y2={y + Math.sin(a) * 26} stroke="#94a3b8" strokeWidth={2} />; })}<circle cx={x} cy={y} r={6} fill="#ffffff" stroke="#94a3b8" strokeWidth={2} /></g>;
      })}
      {streak(700, '#7dd3fc', 50, 0.6, 5)}
    </g>
  ),
  '06-bendera-berkibar': (
    <g>
      <Defs />
      <linearGradient id="bg6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e0f2fe" /><stop offset="1" stopColor="#f0f9ff" /></linearGradient>
      <linearGradient id="pole" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#94a3b8" /><stop offset="0.5" stopColor="#e2e8f0" /><stop offset="1" stopColor="#64748b" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg6)" />
      <ellipse cx={900} cy={1010} rx={420} ry={34} fill="#0f172a" opacity={0.12} filter="url(#sm)" />
      <rect x={520} y={200} width={22} height={820} fill="url(#pole)" />
      <circle cx={531} cy={190} r={22} fill="#facc15" />
      {Array.from({ length: 40 }, (_, s) => {
        const x = 542 + s * 13, w = 13.5;
        const wave = Math.sin(s * 0.22) * 46 + s * 1.2;
        const top = 250 + wave, bot = 640 + wave * 0.9;
        const shade = 0.5 + 0.5 * Math.cos(s * 0.22);
        return (
          <g key={s}>
            <rect x={x} y={top} width={w + 1} height={(bot - top) / 2} fill="#dc2626" />
            <rect x={x} y={top + (bot - top) / 2} width={w + 1} height={(bot - top) / 2} fill="#ffffff" />
            <rect x={x} y={top} width={w + 1} height={bot - top} fill="#0f172a" opacity={0.22 * (1 - shade)} />
          </g>
        );
      })}
    </g>
  ),
  '07-kipas-angin': (
    <g>
      <Defs />
      <linearGradient id="bg7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fef9c3" /><stop offset="1" stopColor="#fde68a" /></linearGradient>
      <linearGradient id="blade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bae6fd" /><stop offset="1" stopColor="#0284c7" /></linearGradient>
      <linearGradient id="stand" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#64748b" /><stop offset="0.5" stopColor="#cbd5e1" /><stop offset="1" stopColor="#475569" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg7)" />
      <ellipse cx={960} cy={1040} rx={320} ry={40} fill="#78350f" opacity={0.2} filter="url(#sm)" />
      <path d="M 820 1060 L 1100 1060 L 1000 960 L 920 960 Z" fill="url(#stand)" />
      <rect x={940} y={520} width={40} height={460} fill="url(#stand)" />
      <circle cx={960} cy={420} r={300} fill="#38bdf8" opacity={0.18} filter="url(#sm)" />
      {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cx={960} cy={420} rx={70} ry={230} fill="url(#blade)" opacity={0.92} transform={`rotate(${a + 20} 960 420)`} />)}
      <circle cx={960} cy={420} r={270} fill="none" stroke="#94a3b8" strokeWidth={12} />
      {Array.from({ length: 8 }, (_, i) => { const a = (i / 8) * Math.PI * 2; return <line key={i} x1={960} y1={420} x2={960 + Math.cos(a) * 270} y2={420 + Math.sin(a) * 270} stroke="#94a3b8" strokeWidth={5} opacity={0.6} />; })}
      <circle cx={960} cy={420} r={60} fill="#f97316" />
      <circle cx={945} cy={405} r={14} fill="#fff7ed" opacity={0.7} />
      {streak(760, '#0ea5e9', 40, 0.6, 6)}
      {streak(900, '#38bdf8', 30, 0.5, 5)}
    </g>
  ),
  '08-balon-ditiup': (
    <g>
      <Defs />
      <linearGradient id="bg8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff1f7" /><stop offset="1" stopColor="#fbcfe8" /></linearGradient>
      <radialGradient id="bal" cx="35%" cy="30%" r="75%"><stop offset="0" stopColor="#fdf2f8" /><stop offset="0.3" stopColor="#f472b6" /><stop offset="1" stopColor="#be185d" /></radialGradient>
      <rect width={W} height={H} fill="url(#bg8)" />
      <circle cx={960} cy={420} r={480} fill="#fde68a" opacity={0.25} filter="url(#bl)" />
      <ellipse cx={960} cy={1000} rx={260} ry={26} fill="#831843" opacity={0.15} filter="url(#sm)" />
      <path d="M 960 200 C 1200 200 1260 420 1200 560 C 1140 700 1040 720 960 730 C 880 720 780 700 720 560 C 660 420 720 200 960 200 Z" fill="url(#bal)" />
      <ellipse cx={1060} cy={330} rx={36} ry={80} fill="#ffffff" opacity={0.6} transform="rotate(20 1060 330)" />
      <path d="M 945 728 L 975 728 L 960 752 Z" fill="#9d174d" />
      <path d="M 960 752 Q 930 820 975 880 Q 1000 940 955 1000" fill="none" stroke="#9d174d" strokeWidth={5} />
      <ellipse cx={1420} cy={330} rx={90} ry={110} fill="url(#bal)" transform="rotate(-10 1420 330)" />
      <ellipse cx={1600} cy={560} rx={70} ry={86} fill="#60a5fa" />
      <ellipse cx={1520} cy={760} rx={60} ry={74} fill="#fde047" />
      <ellipse cx={1680} cy={820} rx={52} ry={64} fill="#4ade80" />
      {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={1300 + i * 70} cy={180 + (i % 3) * 110} r={12} fill="#ffffff" opacity={0.7} />)}
    </g>
  ),
  '09-kertas-terbang': (
    <g>
      <Defs />
      <linearGradient id="bg9" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eef2ff" /><stop offset="1" stopColor="#f8fafc" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg9)" />
      <path d="M 120 900 C 500 700 700 1000 1000 820 S 1500 700 1860 880" fill="none" stroke="#a5b4fc" strokeWidth={6} strokeDasharray="22 20" strokeLinecap="round" />
      <g transform="translate(560 360) rotate(-14)">
        <rect x={14} y={18} width={360} height={240} fill="#0f172a" opacity={0.12} filter="url(#sm)" />
        <rect width={360} height={240} fill="#ffffff" stroke="#cbd5e1" strokeWidth={4} />
        <path d="M 300 0 L 360 0 L 360 60 Z" fill="#e2e8f0" />
        {[80, 120, 160, 200].map((y, i) => <rect key={i} x={50} y={y} width={i === 3 ? 180 : 260} height={12} rx={6} fill="#38bdf8" opacity={0.8} />)}
      </g>
      <g transform="translate(1040 260) rotate(22)">
        <path d="M 0 0 L 320 50 L 130 220 Z" fill="#fca5a5" />
        <path d="M 0 0 L 130 220 L 90 90 Z" fill="#ef4444" />
        <path d="M 320 50 L 130 220 L 150 110 Z" fill="#fecaca" />
        <line x1={0} y1={0} x2={320} y2={50} stroke="#b91c1c" strokeWidth={3} opacity={0.5} />
      </g>
      <g transform="translate(1180 620) rotate(-30)">
        <path d="M 0 0 L 260 66 L 100 200 Z" fill="#fde047" />
        <path d="M 0 0 L 100 200 L 84 92 Z" fill="#facc15" />
      </g>
    </g>
  ),
  '10-gelombang-suara': (
    <g>
      <Defs />
      <linearGradient id="bg10" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#eef2ff" /><stop offset="1" stopColor="#fdf2f8" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg10)" />
      {[120, 220, 320, 420, 520].map((r) => <circle key={r} cx={960} cy={540} r={r} fill="none" stroke="#c7d2fe" strokeWidth={4} opacity={0.8} />)}
      {[[300, '#6366f1', 120], [460, '#ec4899', 170], [620, '#14b8a6', 110], [780, '#f59e0b', 150]].map(([y, c, a], i) => {
        const d = `M 200 ${y} ${Array.from({ length: 30 }, (_, k) => `L ${200 + k * 53} ${y + Math.sin(k * 0.6 + i) * a}`).join(' ')}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={c} strokeWidth={34} strokeLinecap="round" strokeLinejoin="round" opacity={0.35} filter="url(#sm)" />
            <path d={d} fill="none" stroke={c} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      })}
      {Array.from({ length: 36 }, (_, i) => { const h = 40 + 90 * Math.abs(Math.sin(i * 0.7)); return <rect key={i} x={120 + i * 46} y={900 - h / 2} width={22} height={h} rx={11} fill={i % 2 ? '#818cf8' : '#f472b6'} />; })}
    </g>
  ),
  '11-pola-aliran': (
    <g>
      <Defs />
      <linearGradient id="bg11" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fdf2f8" /><stop offset="1" stopColor="#eef2ff" /></linearGradient>
      <rect width={W} height={H} fill="url(#bg11)" />
      {Array.from({ length: 12 }, (_, r) => Array.from({ length: 8 }, (_, c) => {
        let x = c * 240 + 40, y = r * 90 + 20;
        const pts = [`${x} ${y}`];
        for (let s = 0; s < 22; s++) {
          const a = Math.sin(x / 180) + Math.cos(y / 160) + 0.4 * Math.sin(y / 60);
          x += Math.cos(a) * 12;
          y += Math.sin(a) * 12;
          pts.push(`${x} ${y}`);
        }
        const cols = ['#f472b6', '#818cf8', '#2dd4bf', '#fbbf24', '#fb7185'];
        const col = cols[(r + c) % cols.length];
        return (
          <g key={`${r}-${c}`}>
            <path d={`M ${pts.join(' L ')}`} fill="none" stroke={col} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
            <circle cx={x} cy={y} r={7} fill={col} />
          </g>
        );
      }))}
    </g>
  ),
};

