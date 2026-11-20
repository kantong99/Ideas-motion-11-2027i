# Ideas Motion 11 Tema (Remotion, 4K)

11 komposisi, satu per ide animasi. Setiap komposisi memakai scene SVG dari `src/scenes.jsx`, lalu diberi gerakan dasar lewat `MotionScene`.

| ID | Tema | Gerakan dasar |
|---|---|---|
| I01-ApiTertiup | Api tertiup angin | sway |
| I02-LilinDitiup | Lilin ditiup | drift |
| I03-OborMalam | Obor di malam cerah | pulse |
| I04-DaunTertiup | Daun tertiup angin | sway |
| I05-Dandelion | Dandelion tertiup | drift |
| I06-Bendera | Bendera berkibar | sway |
| I07-KipasAngin | Kipas angin | pulse |
| I08-Balon | Balon ditiup | rise |
| I09-KertasTerbang | Kertas terbang | drift |
| I10-GelombangSuara | Gelombang suara | pulse |
| I11-PolaAliran | Pola aliran | drift |

## Catatan
- Gerakan di sini masih dasar (goyang, geser, naik-turun, denyut). Animasi tiap tema yang sesungguhnya, seperti bara api, daun berputar, atau kertas yang terbang, belum dibuat.
- Pilihan gerakan dasar dapat diubah di `src/Root.jsx`.

## Cara render
1. Upload isi repo ke GitHub (folder `.github/workflows/`, dengan **s**).
2. Tab **Actions** > **Render Motion Video** > **Run workflow**.
3. Isi `composition` dengan ID seperti `I01-ApiTertiup`.
4. Pilih `preview` atau `final-4k`, lalu unduh MP4 dari **Artifacts**.
