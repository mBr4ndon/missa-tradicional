// Descarrega todas as imagens do CDN do Wix para public/images
// e liga o site às cópias locais. Correr uma vez: npm run images
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(join(root, 'src/images.json'), 'utf8'))
const outDir = join(root, 'public/images')
await mkdir(outDir, { recursive: true })

let failed = 0
for (const [key, { id, ext }] of Object.entries(manifest)) {
  const url = `https://static.wixstatic.com/media/${id}/v1/fit/w_1800,h_1800,q_82/f.${ext}`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await writeFile(join(outDir, `${key}.${ext}`), Buffer.from(await res.arrayBuffer()))
    console.log('ok  ', key)
  } catch (e) {
    failed++
    console.error('ERRO', key, String(e))
  }
}

if (failed === 0) {
  const file = join(root, 'src/images.ts')
  const src = await readFile(file, 'utf8')
  await writeFile(file, src.replace('LOCAL_IMAGES = false', 'LOCAL_IMAGES = true'))
  console.log('\nTodas descarregadas. O site passa a usar public/images.')
} else {
  console.error(`\n${failed} falharam. O site continua a usar o CDN do Wix.`)
  process.exitCode = 1
}
