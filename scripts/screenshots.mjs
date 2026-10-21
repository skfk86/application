// Takes screenshots of a running NileBase Studio. Usage: node screenshots.mjs <baseUrl> <outDir>
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const [base = 'http://localhost:3000', out = 'shots'] = process.argv.slice(2)
const pages = [
  ['01-home', '/'],
  ['02-project-home', '/project/default'],
  ['03-table-editor', '/project/default/editor'],
  ['04-sql-editor', '/project/default/sql'],
  ['05-auth-users', '/project/default/auth/users'],
  ['06-storage', '/project/default/storage/files'],
  ['07-settings', '/project/default/settings/general'],
  ['08-not-found', '/this-page-does-not-exist'],
]
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}

fs.mkdirSync(out, { recursive: true })
const browser = await chromium.launch()
const log = []
for (const [vp, size] of Object.entries(viewports)) {
  for (const scheme of ['dark', 'light']) {
    const ctx = await browser.newContext({ viewport: size, colorScheme: scheme })
    const page = await ctx.newPage()
    for (const [name, p] of pages) {
      const file = `${vp}-${scheme}-${name}.png`
      try {
        await page.goto(base + p, { waitUntil: 'load', timeout: 90000 })
        await page.waitForTimeout(4000)
        await page.screenshot({ path: path.join(out, file) })
        log.push(`OK   ${file}`)
      } catch (e) {
        log.push(`FAIL ${file}: ${String(e).split('\n')[0]}`)
      }
    }
    await ctx.close()
  }
}
await browser.close()
fs.writeFileSync(path.join(out, 'log.txt'), log.join('\n') + '\n')
console.log(log.join('\n'))
