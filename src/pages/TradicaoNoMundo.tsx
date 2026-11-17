import { Figure, PageHero, Prose, Section, Source, usePageTitle } from '../components/ui'
import { mundo } from '../content'

function DataTable({
  head,
  rows,
  highlight,
  caption,
}: {
  head?: string[]
  rows: string[][]
  highlight: string
  caption: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        {head && (
          <thead>
            <tr className="border-b-2 border-navy/70">
              {head.map((h) => (
                <th key={h} scope="col" className="px-3 py-3 font-display text-base font-bold sm:text-lg">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((r) => {
            const hl = r[0] === highlight
            return (
              <tr
                key={r[0]}
                className={`border-b border-gold/60 ${hl ? 'accent-t bg-accent font-bold text-white' : ''}`}
              >
                {r.map((c, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-3 py-2.5 font-display text-lg">
                      {c}
                    </th>
                  ) : (
                    <td key={i} className="px-3 py-2.5">
                      {c}
                    </td>
                  ),
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function PhotoRow({ photos }: { photos: { image: import('../images').ImageKey; caption: string }[] }) {
  return (
    <div className="mt-10 grid items-start gap-6 sm:grid-cols-3">
      {photos.map((p) => (
        <Figure key={p.image} image={p.image} caption={p.caption} width={800} />
      ))}
    </div>
  )
}

export default function TradicaoNoMundo() {
  usePageTitle(mundo.title)
  const t = mundo.countryTable
  return (
    <>
      <PageHero title={mundo.title} image="heroMundo" />

      <Section tone="cream">
        <Prose>
          <p>{mundo.intro}</p>
        </Prose>
        <div className="mt-10">
          <DataTable
            head={t.head}
            rows={t.rows}
            highlight={t.highlight}
            caption="Locais com Missa tradicional e população católica, por país"
          />
          <p className="mt-4 max-w-[70ch] text-sm italic text-navy/70">{t.note}</p>
          <Source {...t.source} />
        </div>
      </Section>

      <Section>
        <Prose>
          <p>{mundo.institutes}</p>
        </Prose>
        <h2 className="mt-14 text-3xl">{mundo.mapsTitle}</h2>
        <div className="mt-6 grid items-start gap-6 sm:grid-cols-3">
          {mundo.maps.map((m) => (
            <Figure key={m.image} image={m.image} caption={m.caption} width={800} />
          ))}
        </div>
        <div className="mt-3">
          <Source {...mundo.mapsSource} />
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="text-4xl">{mundo.fssp.title}</h2>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Prose>
            {mundo.fssp.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
          <div>
            <h3 className="text-xl font-bold">{mundo.fssp.seminaristas.title}</h3>
            <p className="mb-3 text-sm text-navy/70">{mundo.fssp.seminaristas.subtitle}</p>
            <DataTable
              rows={mundo.fssp.seminaristas.rows}
              highlight={mundo.fssp.seminaristas.highlight}
              caption="Seminaristas em Wigratzbad por nacionalidade"
            />
            <div className="mt-3">
              <Source {...mundo.fssp.seminaristas.source} />
            </div>
          </div>
        </div>
        <PhotoRow photos={mundo.fssp.photos} />
      </Section>

      <Section>
        <h2 className="text-4xl">{mundo.icrss.title}</h2>
        <div className="mt-6">
          <Prose>
            {mundo.icrss.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </div>
        <PhotoRow photos={mundo.icrss.photos} />
      </Section>

      <Section tone="cream">
        <h2 className="text-4xl">{mundo.ibp.title}</h2>
        <div className="mt-6">
          <Prose>
            {mundo.ibp.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </div>
        <PhotoRow photos={mundo.ibp.photos} />
      </Section>
    </>
  )
}
