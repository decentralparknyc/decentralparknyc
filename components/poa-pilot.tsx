import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const joinUrl = "https://poa.box/join/?org=Decentral+Park"
const textLink = "font-medium text-ink underline underline-offset-4 decoration-ink/40 hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"

export function PoaPilot() {
  return (
    <section id="poa-pilot" aria-labelledby="poa-pilot-title" className="scroll-mt-20 border-y border-ink bg-paper-0 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-grey-2 mb-4">A Decentral Park pilot</p>
            <h2 id="poa-pilot-title" className="font-display font-bold uppercase tracking-tight text-3xl md:text-4xl text-ink mb-6">
              Community governance<br className="hidden sm:block" /> &amp; paid bounties
            </h2>
            <p className="font-body text-lg text-grey-2 leading-relaxed mb-4">
              We&apos;re putting community ownership into practice with{" "}
              <a href="https://poa.box/" className={textLink}>Poa (poa.box)</a>, open-source software for community-run organizations.
              Decentral Park is piloting Poa to share a treasury, organize projects, propose and vote on decisions,
              and reward the people doing the work.
            </p>
            <p className="font-body text-grey-2 leading-relaxed">
              The aim is simple: let our community and contributors collectively direct our resources and what we build next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="font-display font-bold uppercase tracking-tight text-xl text-ink mb-3">Paid work. A shared voice.</h3>
                <p className="font-body text-grey-2 leading-relaxed mb-4">
                  Bounties in this pilot are paid in BREAD from{" "}
                  <a href="https://bread.coop/" className={textLink}>Bread Cooperative</a>.
                  Approved bounty contributions also earn voting power.
                </p>
                <p className="font-body text-grey-2 leading-relaxed">
                  Voting combines membership and completed bounties, so you can still have a say without doing bounty work.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="font-display font-bold uppercase tracking-tight text-xl text-ink mb-3">Join as a Neighbor</h3>
                <ol className="list-decimal pl-5 space-y-2 font-body text-grey-2 leading-relaxed mb-6">
                  <li>Open Decentral Park on Poa using the link below.</li>
                  <li>Select <strong className="font-medium text-ink">Create account</strong>, or sign in if you already have one.</li>
                  <li>Join with the <strong className="font-medium text-ink">Neighbor</strong> role.</li>
                  <li>Once you&apos;ve joined, view and claim available tasks.</li>
                </ol>
                <Button asChild className="w-full sm:w-auto whitespace-normal text-center px-5">
                  <a href={joinUrl}>Join Decentral Park on Poa <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <h3 className="font-display font-bold uppercase tracking-tight text-2xl text-ink mb-6">What we&apos;re working on</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="border-t border-ink pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-grey-2 mb-3">Research + prototype</p>
              <h4 className="font-display font-bold uppercase tracking-tight text-xl text-ink mb-3">NYRENT</h4>
              <p className="font-body text-grey-2 leading-relaxed">
                Researching and prototyping a tool linked to NYC-area rents, exploring whether it could help renters
                preserve purchasing power for future housing costs. This is an experiment, not a finished financial product.
              </p>
            </article>
            <article className="border-t border-ink pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-grey-2 mb-3">Coordination bot</p>
              <h4 className="font-display font-bold uppercase tracking-tight text-xl text-ink mb-3">NYC Food Rescue</h4>
              <p className="font-body text-grey-2 leading-relaxed">
                Prototyping a bot to connect food-rescue chats, combine duplicate offers, and suggest matches using
                pickup patterns and vehicle availability, with opt-in pickup alerts.
              </p>
            </article>
            <article className="border-t border-ink pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-grey-2 mb-3">User testing + design</p>
              <h4 className="font-display font-bold uppercase tracking-tight text-xl text-ink mb-3">Colive.fun &amp; Mutualaid.fun</h4>
              <p className="font-body text-grey-2 leading-relaxed">
                Help test Decentral Park&apos;s Colive.fun and Mutualaid.fun projects and share design feedback
                that makes them more useful to the communities they serve.
              </p>
            </article>
          </div>
          <p className="font-body text-sm text-grey-2 leading-relaxed mt-8">
            Task availability changes. Check the organization on Poa for current bounties and their requirements.
            Need help joining or have feedback? <a href="#contact" className={textLink}>Get in touch with us</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
