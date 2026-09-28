"use client"

import { Calendar, MapPin, Users, Github, Twitter, Mail, ExternalLink, Send, Copy, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"
import { SiteNavbar } from "@/components/ui/site-navbar"
import { PoaPilot } from "@/components/poa-pilot"
import Image from "next/image"

export default function Component() {
  const multisigAddress = "0xe6FA00D3aB17C619bC6A2CFc24994fB844aBdF96" // Placeholder address

  const socialLink =
    "text-ink/60 hover:text-[var(--accent)] transition-colors"

  return (
    <div className="min-h-screen overflow-x-clip bg-paper">
      <SiteNavbar
        homeHref="#"
        items={[
          { href: "#partners", label: "Partners" },
          { href: "#about", label: "About" },
          { href: "#meetings", label: "Meetings" },
          { href: "#poa-pilot", label: "Pilot" },
          { href: "/past-meetups", label: "Past Meetups" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Logo variant="mark" size={72} />
          </div>
          <h1 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.9] text-4xl sm:text-5xl md:text-7xl text-ink mb-6">
            Decentral Park
          </h1>
          <p className="font-body text-xl md:text-2xl text-grey-2 mb-10 leading-relaxed">
            Imagining a post-capitalist world in the heart of NYC.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center items-center mb-14">
            <Button size="lg" asChild>
              <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                Join Our Next Meeting
              </a>
            </Button>
            <Button size="icon" asChild>
              <a href="https://t.me/+guHaqo9XXpk5ZmNk" target="_blank" rel="noopener noreferrer" title="Join Telegram">
                <Send className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" asChild>
              <a href="https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u" target="_blank" rel="noopener noreferrer" title="Join Signal">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </Button>
            <Button size="icon" asChild>
              <a href="https://www.instagram.com/decentralparknyc/" target="_blank" rel="noopener noreferrer" title="Follow on Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm uppercase tracking-tight text-grey-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--accent)]" />
              <span>New York City</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--accent)]" />
              <span>Regular Meetings</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[var(--accent)]" />
              <span>Open Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="scroll-mt-20 bg-paper-0 border-y border-ink py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-ink mb-10">Partners</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://ethereum.foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-paper border border-ink shadow-hard-sm p-3 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <img
                    src="/ethereum-foundation-logo.png"
                    alt="Ethereum Foundation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 font-body text-sm text-grey-2 font-medium group-hover:text-ink">
                  Ethereum Foundation
                </span>
              </a>
              <a
                href="https://www.radicalxchange.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-paper border border-ink shadow-hard-sm p-3 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <img
                    src="/radicalxchange-rxc-logo.jpg"
                    alt="RadicalxChange"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 font-body text-sm text-grey-2 font-medium group-hover:text-ink">
                  RadicalxChange
                </span>
              </a>
              <a
                href="https://greenpill.network"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-paper border border-ink shadow-hard-sm p-3 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <img
                    src="/greenpill-network-logo-green-pill.jpg"
                    alt="GreenPill Network"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 font-body text-sm text-grey-2 font-medium group-hover:text-ink">
                  GreenPill Network
                </span>
              </a>
              <a
                href="https://bread.coop"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-paper border border-ink shadow-hard-sm p-3 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <img
                    src="/bread-cooperative-logo.png"
                    alt="Bread Cooperative"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 font-body text-sm text-grey-2 font-medium group-hover:text-ink">
                  Bread Cooperative
                </span>
              </a>
              <a
                href="https://poa.box/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-paper border border-ink shadow-hard-sm p-3 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <img
                    src="/poa-logo.png"
                    alt=""
                    width={1007}
                    height={756}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 font-body text-sm text-grey-2 font-medium group-hover:text-ink">
                  Poa
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-paper py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold uppercase tracking-[-0.025em] leading-none text-4xl md:text-5xl text-center text-ink mb-14">
              Reimagining Finance for the People
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold uppercase tracking-tight text-xl text-[var(--accent)] mb-4">About Us</h3>
                  <p className="font-body text-grey-2 leading-relaxed">
                    Decentral Park is a NYC-based progressive tech collective convening organizers, professionals, and
                    civic stakeholders to advance cooperative economics and implement civic tools.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold uppercase tracking-tight text-xl text-[var(--accent)] mb-4">Our Mission</h3>
                  <p className="font-body text-grey-2 leading-relaxed">
                    We build alternatives to capitalism through community organizing, concrete tools, and radical
                    imagination. Together, we create social and digital infrastructure that prioritizes people and planet
                    over profit.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mb-14">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold uppercase tracking-tight text-xl text-[var(--accent)] mb-4">What We Do</h3>
                  <p className="font-body text-grey-2 leading-relaxed">
                    We work across three areas: developing progressive policy frameworks that reframe how technology can
                    serve the public good; building tools for grassroots organizations; and fostering community through
                    regular events, monthly in-person workshops, and coalition building.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="font-body text-lg text-ink max-w-3xl mx-auto">
                We work directly with NYC mutual aid and grassroots organizations to build tools that protects sensitive information and coordinates action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="meetings" className="bg-paper py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-5xl text-ink mb-8">Regular Gatherings</h2>
            <p className="font-body text-lg text-grey-2 mb-10 max-w-2xl mx-auto">
              Check out our calendar for upcoming events, workshops, and community calls.
            </p>
            <div className="w-full max-w-3xl mx-auto">
              <iframe
                src="https://lu.ma/embed/calendar/cal-LTmdzQUVscVHodG/events"
                title="Decentral Park events calendar"
                className="w-full h-[600px] border border-ink shadow-hard bg-paper-0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>

      <PoaPilot />

      {/* Park Activities Section */}
      <section className="bg-paper-1 border-y border-ink py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/images/park-activities.jpg"
                alt="Let's go to the park! - An illustration showing various activities like de-centering capitalism, basking in the sun, wisdom sharing, financial inclusion, doing nothing, ecosystem repair, giggling, and resting"
                className="mx-auto max-w-full h-auto border border-ink shadow-hard bg-paper-0"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-tight text-grey-2 mb-2">
                Artwork by{" "}
                <a
                  href="https://zora.co/collect/zora:0x7c6035dcf9846074dd5e18af1a36fd88651ba892/1?referrer=0x1eff547e423a315d75f490c6b3a481bec8389648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  Mia Winther Tamaki
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <p className="font-body text-lg text-ink max-w-2xl mx-auto">
              At Decentral Park, we believe in the power of community, rest, and radical imagination. From deep
              conversations to simple moments of joy, we're creating space for all the ways we can build a better world
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-paper-0 border-t border-ink py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold uppercase tracking-tight text-4xl md:text-5xl text-ink mb-8">Get Involved</h2>
            <p className="font-body text-lg text-grey-2 mb-10 max-w-2xl mx-auto">
              Join our community of organizers, dreamers, and experimenters working toward a post-capitalist world
              rooted in justice and sustainability.
            </p>
            <div className="flex justify-center mb-14">
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/decentralparknyc/decentralparknyc" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://x.com/decentralparkny" target="_blank" rel="noopener noreferrer" className={socialLink}>
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/decentralparknyc/" target="_blank" rel="noopener noreferrer" className={socialLink} title="Follow on Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/decentral-park/" target="_blank" rel="noopener noreferrer" className={socialLink} title="Follow on LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/decentralparknyc/decentralparknyc" target="_blank" rel="noopener noreferrer" className={socialLink}>
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:nycryptoleft@gmail.com" className={socialLink}>
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://t.me/+guHaqo9XXpk5ZmNk" target="_blank" rel="noopener noreferrer" className={socialLink} title="Join Telegram">
                <Send className="w-6 h-6" />
              </a>
              <a href="https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u" target="_blank" rel="noopener noreferrer" className={socialLink} title="Join Signal">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
              <a href="https://farcaster.xyz/decentralpark" target="_blank" rel="noopener noreferrer" className={socialLink} title="Follow on Farcaster">
                <svg className="w-6 h-6" viewBox="0 0 1000 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" />
                  <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
                  <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.445H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-paper-1 border-t border-ink py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-paper-0 p-8 border border-ink shadow-hard">
            <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-ink mb-4">Support Our Work</h2>
            <p className="font-body text-grey-2 mb-6">
              Your contributions help us fund community projects and organize events. Donate to our multisig wallet.
            </p>
            <div className="flex justify-center mb-6">
              <div className="border border-ink shadow-hard-sm bg-paper-0 p-1">
                <Image
                  src="/images/multisig-qr-code.png"
                  alt="Multisig Wallet QR Code"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-mono text-xs uppercase tracking-tight text-grey-2 mb-2">Or copy the address:</p>
              <div className="flex items-center justify-between bg-paper border border-ink p-2">
                <code className="font-mono text-sm text-ink break-all">{multisigAddress}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => navigator.clipboard.writeText(multisigAddress)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between bg-paper border border-ink p-2 mt-2">
                <code className="font-mono text-sm text-ink">decentralparknyc.eth</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => navigator.clipboard.writeText("decentralparknyc.eth")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Logo variant="lockup" color="white" size={52} />
          </div>
          <p className="font-body text-paper-2 mb-4 max-w-2xl mx-auto">NYC-based progressive tech collective convening organizers, professionals, and civic stakeholders to advance cooperative economics and implement civic tools.</p>
          <p className="font-mono text-xs uppercase tracking-tight text-paper-2/70">© 2026 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
