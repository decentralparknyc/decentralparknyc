"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

export interface NavItem {
  href: string
  label: string
}

export interface SiteNavbarProps {
  /** Where the logo links to. Default "/". */
  homeHref?: string
  items: NavItem[]
}

/**
 * Site navigation — adapts the UI kit's Navbar: the brand lockup on the left,
 * inline links on desktop, and a full-screen slide-in panel on mobile. Square
 * edges, ink hairline, accent-green hover.
 */
export function SiteNavbar({ homeHref = "/", items }: SiteNavbarProps) {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const desktopLink =
    "font-body text-sm font-medium uppercase tracking-wide text-ink/70 hover:text-[var(--accent)] transition-colors"

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-ink bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href={homeHref} aria-label="Decentral Park — home" className="shrink-0">
          {/* Mark only on mobile; full lockup from sm up. */}
          <span className="sm:hidden">
            <Logo variant="mark" size={32} />
          </span>
          <span className="hidden sm:inline-flex">
            <Logo variant="lockup" size={34} />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className={desktopLink}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-ink lg:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>
    </header>

      {/* Mobile panel — rendered OUTSIDE the header: a backdrop-filter ancestor
          would otherwise become the containing block for this fixed element and
          confine it to the header strip. Mounted only while open. */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-paper px-4 py-4 lg:hidden">
          <div className="flex items-center justify-between border-b border-ink pb-4">
            <Logo variant="lockup" size={34} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-ink"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-bold uppercase tracking-tight text-ink transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
