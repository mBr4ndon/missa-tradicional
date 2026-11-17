import { PageHero, Prose, Section, usePageTitle } from '../components/ui'
import { docs } from '../content'

export default function Documentacao() {
  usePageTitle(docs.title)
  return (
    <>
      <PageHero title={docs.title} image="heroPapas" />
      <Section tone="cream">
        <Prose>
          <p>{docs.intro}</p>
        </Prose>
      </Section>
      <Section>
        <ol className="divide-y divide-gold/50 border-y border-gold/50">
          {docs.items.map((d) => (
            <li key={d.titulo} className="grid gap-3 py-8 md:grid-cols-[4fr_7fr] md:gap-12">
              <div>
                <h2 className="text-2xl leading-snug">{d.titulo}</h2>
                <p className="accent-t mt-1 font-bold text-accent">{d.data}</p>
                <p className="text-sm text-navy/70">{d.autor}</p>
              </div>
              <div>
                <p className="max-w-[60ch] text-lg">{d.resumo}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {d.links.map((l) => (
                    <li key={l.label}>
                      {l.href ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="accent-t font-semibold text-accent underline underline-offset-4"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <span className="text-navy/70">{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
