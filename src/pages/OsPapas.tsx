import { PageHero, Prose, Quote, Section, usePageTitle } from '../components/ui'
import { papas } from '../content'
import { img } from '../images'

export default function OsPapas() {
  usePageTitle(papas.title)
  return (
    <>
      <PageHero title={papas.title} image="heroPapas" />
      <Section tone="cream">
        <Prose>
          {papas.before.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Prose>
        <Quote source={papas.quoteSource}>{papas.quote}</Quote>
        <Prose>
          {papas.after.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Prose>
      </Section>
      <Section>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {papas.popes.map((p) => (
            <li key={p.name}>
              {p.image ? (
                <img src={img(p.image, 700)} alt={p.alt ?? ''} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-navy">
                  <img src={img('brasao', 300)} alt="" className="h-1/3 w-auto opacity-80" />
                </div>
              )}
              <p className="mt-4 text-sm text-navy/70">Papa</p>
              <h2 className="text-2xl">{p.name}</h2>
              <p className="accent-t text-lg font-bold text-accent">{p.dates}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
