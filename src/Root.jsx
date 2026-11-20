import React from 'react';
import { Composition } from 'remotion';
import { DURATION, FPS } from './components/Transitions.jsx';
import { MotionScene } from './projects/MotionScene.jsx';

// Final 4K composition. Preview mode overrides --width/--height at render time.
const WIDTH = 3840;
const HEIGHT = 2160;

// IDs may only contain a-z, A-Z, 0-9 and hyphens (-)
export const COMPOSITIONS = [
  { id: 'I01-ApiTertiup', sceneKey: '01-api-tertiup-angin', motion: 'sway' },
  { id: 'I02-LilinDitiup', sceneKey: '02-lilin-ditiup', motion: 'drift' },
  { id: 'I03-OborMalam', sceneKey: '03-obor-malam-cerah', motion: 'pulse' },
  { id: 'I04-DaunTertiup', sceneKey: '04-daun-tertiup-angin', motion: 'sway' },
  { id: 'I05-Dandelion', sceneKey: '05-dandelion-tertiup', motion: 'drift' },
  { id: 'I06-Bendera', sceneKey: '06-bendera-berkibar', motion: 'sway' },
  { id: 'I07-KipasAngin', sceneKey: '07-kipas-angin', motion: 'pulse' },
  { id: 'I08-Balon', sceneKey: '08-balon-ditiup', motion: 'rise' },
  { id: 'I09-KertasTerbang', sceneKey: '09-kertas-terbang', motion: 'drift' },
  { id: 'I10-GelombangSuara', sceneKey: '10-gelombang-suara', motion: 'pulse' },
  { id: 'I11-PolaAliran', sceneKey: '11-pola-aliran', motion: 'drift' },
];

export const RemotionRoot = () => (
  <>
    {COMPOSITIONS.map(({ id, sceneKey, motion }) => (
      <Composition
        key={id}
        id={id}
        component={() => <MotionScene sceneKey={sceneKey} motion={motion} />}
        durationInFrames={DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    ))}
  </>
);
