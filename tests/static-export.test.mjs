import assert from "node:assert/strict"
import { existsSync, readFileSync, readdirSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import test from "node:test"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const out = join(root, "out")
const html = readFileSync(join(out, "index.html"), "utf8")
const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
const pilot = markup.match(/<section\b[^>]*id="poa-pilot"[^>]*>([\s\S]*?)<\/section>/)?.[1]

test("the pilot is present in initial HTML without running JavaScript", () => {
  assert.ok(pilot, "Expected a server-rendered Poa pilot section")
  assert.match(pilot, /Community governance/)
  assert.match(pilot, /paid bounties/)
  assert.match(pilot, /open-source software for community-run organizations/)
  assert.match(pilot, /Neighbor/)
  assert.match(pilot, /NYRENT/)
  assert.match(pilot, /NYC Food Rescue/)
  assert.match(pilot, /Colive\.fun/)
  assert.match(pilot, /Mutualaid\.fun/)
  assert.match(pilot, /Task availability changes/)
})

test("Poa has a normal homepage backlink and the correct organization join link", () => {
  const links = [...pilot.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
  const homepage = links.find(([, attributes]) => /href="https:\/\/poa\.box\/"/.test(attributes))
  assert.ok(homepage, "Missing Poa homepage link")
  assert.equal(homepage[2], "Poa (poa.box)")
  assert.doesNotMatch(homepage[1], /nofollow|sponsored/i)
  const joinLink = links.find(([, attributes]) => attributes.includes('href="https://poa.box/join/?org=Decentral+Park"'))
  assert.ok(joinLink, "Join link must retain the exact organization parameter")
  const destination = new URL(joinLink[1].match(/href="([^"]+)"/)[1])
  assert.equal(destination.searchParams.get("org"), "Decentral Park")
  assert.ok(links.some(([, attributes]) => attributes.includes('href="https://bread.coop/"')))
})

test("the homepage has one main heading and valid pilot navigation targets", () => {
  assert.equal((markup.match(/<h1\b/g) || []).length, 1)
  assert.equal((markup.match(/id="poa-pilot"/g) || []).length, 1)
  assert.match(markup, /aria-labelledby="poa-pilot-title"/)
  assert.match(markup, /<h2\b[^>]*id="poa-pilot-title"/)
  assert.match(markup, /href="#poa-pilot"[^>]*>Pilot<\/a>/)
  assert.doesNotMatch(markup, /Explore the Poa pilot/)
  for (const [, id] of markup.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(markup.includes(`id="${id}"`), `Missing anchor target: ${id}`)
  }
})

test("the GitHub Pages domain and existing exported routes are preserved", () => {
  assert.equal(readFileSync(join(out, "CNAME"), "utf8").trim(), "decentralpark.nyc")
  assert.ok(existsSync(join(out, ".nojekyll")))
  assert.ok(existsSync(join(out, "past-meetups/index.html")))
  assert.ok(existsSync(join(out, "404.html")))
})

test("Regular Gatherings appears directly before the pilot", () => {
  const sections = [...markup.matchAll(/<section\b([^>]*)>/g)].map(([, attributes]) => attributes.match(/id="([^"]+)"/)?.[1] || null)
  const pilotIndex = sections.indexOf("poa-pilot")
  assert.ok(pilotIndex > 0)
  assert.equal(sections[pilotIndex - 1], "meetings")
  assert.equal(sections.filter(id => id === "meetings").length, 1)
  assert.match(markup, /https:\/\/lu\.ma\/embed\/calendar\/cal-LTmdzQUVscVHodG\/events/)
})

test("Poa appears as a partner with its logo and a normal homepage link", () => {
  const partners = markup.match(/<section\b[^>]*id="partners"[^>]*>([\s\S]*?)<\/section>/)?.[1]
  assert.ok(partners)
  const poa = [...partners.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].find(([, attributes]) => attributes.includes('href="https://poa.box/"'))
  assert.ok(poa, "Missing Poa partner link")
  assert.doesNotMatch(poa[1], /nofollow|sponsored/)
  assert.match(poa[2], /src="\/poa-logo\.png"/)
  assert.match(poa[2], />Poa<\/span>/)
  assert.ok(existsSync(join(out, "poa-logo.png")))
})

test("every exported page's local asset references resolve", () => {
  function checkDirectory(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) checkDirectory(path)
      else if (entry.name.endsWith(".html")) {
        const page = readFileSync(path, "utf8")
        for (const [, attribute, url] of page.matchAll(/\b(src|href)="(\/[^"?#]*)[^"#]*"/g)) {
          if (attribute === "href" && !url.startsWith("/_next/")) continue
          assert.ok(existsSync(join(out, decodeURIComponent(url))), `${path}: missing ${url}`)
        }
      }
    }
  }
  checkDirectory(out)
})
