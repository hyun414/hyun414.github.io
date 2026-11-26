import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

// Reuse Astro's installed image processor without adding a second dependency.
const require = createRequire(import.meta.url);
const astroRequire = createRequire(require.resolve('astro/package.json'));
const sharp = astroRequire('sharp');
const portrait = await readFile(new URL('../public/images/profile.jpg', import.meta.url));

// Keep the original portrait intact; compose a separate landscape sharing card.
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="#ffffff" stroke="#dce1e5" stroke-width="2"/>
  <defs><clipPath id="portrait"><rect x="72" y="145" width="320" height="320" rx="12"/></clipPath></defs>
  <image href="data:image/jpeg;base64,${portrait.toString('base64')}" x="72" y="145" width="320" height="320" clip-path="url(#portrait)"/>
  <rect x="72" y="145" width="320" height="320" rx="12" fill="none" stroke="#d4e1f2" stroke-width="2"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <text x="450" y="220" font-size="64" font-weight="700" letter-spacing="-2" fill="#192b40">Nahyun Kim</text>
    <text x="453" y="275" font-size="30" font-weight="600" letter-spacing="2" fill="#1E5AA8">AI for Biology</text>
    <path d="M453 311H1100" stroke="#dce1e5"/>
    <text x="453" y="358" font-size="26" fill="#5c6570">KAIST · University of Washington</text>
    <text x="453" y="401" font-size="24" fill="#5c6570">Seoul, South Korea</text>
    <text x="453" y="476" font-size="24" fill="#1E5AA8">hyun414.github.io</text>
  </g>
</svg>`;

await writeFile(
  new URL('../public/images/nahyun-kim-social.jpg', import.meta.url),
  await sharp(Buffer.from(card)).jpeg({ quality: 92, mozjpeg: true }).toBuffer(),
);
console.log('Created public/images/nahyun-kim-social.jpg (1200 × 630).');
