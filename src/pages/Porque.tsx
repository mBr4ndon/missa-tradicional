import { PageHero, Prose, Quote, Section, usePageTitle } from '../components/ui'
import { porque } from '../content'

export default function Porque() {
  usePageTitle(porque.title)
  return (
    <>
      <PageHero title={porque.title} image="heroPorque" />
      <Section tone="cream">
        <Prose>
          <p>{porque.intro}</p>
        </Prose>
      </Section>
      <Section>
        <div className="divide-y divide-gold/50 border-y border-gold/50">
          {porque.points.map((p) => (
            <article key={p.title} className="grid gap-4 py-10 md:grid-cols-[5fr_7fr] md:gap-16">
              <h2 className="accent-t text-2xl font-bold leading-snug text-accent sm:text-3xl">{p.title}</h2>
              <p className="max-w-[62ch] text-lg">{p.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-14 max-w-[68ch] text-lg text-navy/85">{porque.premise}</p>
        <Quote source={porque.quoteSource}>{porque.quote}</Quote>
      </Section>
    </>
  )
}
