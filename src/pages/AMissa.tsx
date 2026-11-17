import { PageHero, Prose, Section, usePageTitle } from '../components/ui'
import { missa } from '../content'
import { img } from '../images'

export default function AMissa() {
  usePageTitle(missa.title)
  return (
    <>
      <PageHero title={missa.title} image="heroMonstrancia" />
      <Section tone="cream">
        <Prose>
          {missa.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Prose>
      </Section>
      <Section>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {missa.timeline.map((t) => (
            <li key={t.name} className="flex flex-col">
              <img
                src={img(t.image, 600)}
                alt={t.alt}
                loading="lazy"
                className="aspect-[200/324] w-full object-cover"
              />
              <p className="mt-4 text-sm text-navy/70">{t.pre || ' '}</p>
              <h2 className="text-2xl leading-tight">{t.name}</h2>
              <p className="accent-t text-lg font-bold text-accent">{t.dates}</p>
              <p className="mt-1 text-sm italic text-navy/70">{t.credit}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
