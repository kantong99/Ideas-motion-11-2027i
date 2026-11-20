import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { SCENES } from '../scenes.jsx';
import { DURATION, clampTween } from '../components/Transitions.jsx';

// Pembungkus umum: scene SVG + gerakan dasar yang dikendalikan frame + fade masuk/keluar
const DESIGN_W = 1920;
const DESIGN_H = 1080;
const MOTIONS = {
  sway: (f) => `rotate(${Math.sin(f / 40) * 2.5} 960 1080)`,
  drift: (f) => `translate(${Math.sin(f / 60) * 30} 0)`,
  rise: (f) => `translate(0 ${Math.sin(f / 50) * -18})`,
  pulse: (f) => `translate(960 540) scale(${1 + Math.sin(f / 30) * 0.015}) translate(-960 -540)`,
};

export const MotionScene = ({ sceneKey, motion = 'sway' }) => {
  const frame = useCurrentFrame();
  const fadeIn = clampTween(frame, [0, 30], [0, 1]);
  const fadeOut = clampTween(frame, [DURATION - 30, DURATION], [1, 0]);
  const transform = MOTIONS[motion](frame);
  return (
    <AbsoluteFill style={{ background: '#ffffff', opacity: fadeIn * fadeOut }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${DESIGN_W} ${DESIGN_H}`} preserveAspectRatio="xMidYMid meet">
        <g transform={transform}>{SCENES[sceneKey]}</g>
      </svg>
    </AbsoluteFill>
  );
};
