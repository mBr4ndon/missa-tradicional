import { PageHero, Prose, Section, usePageTitle } from '../components/ui'
import { onde, site } from '../content'

export default function OndeAssistir() {
  usePageTitle(onde.title)
  return (
    <>
      <PageHero title={onde.title} image="heroPorque" />
      <Section tone="cream">
        <Prose>
          <p>{onde.intro}</p>
        </Prose>
      </Section>
      <Section>
        {onde.locais.length > 0 ? (
          <ul className="grid gap-10 md:grid-cols-3">
            {onde.locais.map((l) => (
              <li key={l.igreja} className="border-t border-gold/60 pt-6">
                <p className="text-sm text-navy/70">{l.cidade}</p>
                <h2 className="accent-t text-2xl text-accent">{l.igreja}</h2>
                {l.morada && <p className="mt-1 text-sm">{l.morada}</p>}
                <dl className="mt-4 space-y-1">
                  {l.horarios.map((h) => (
                    <div key={h.dia} className="flex gap-3">
                      <dt className="font-bold">{h.dia}</dt>
                      <dd>{h.hora}</dd>
                    </div>
                  ))}
                </dl>
                {l.contacto && <p className="mt-4 text-sm">{l.contacto}</p>}
                <p className="mt-4 text-xs text-navy/60">Confirmado em {l.confirmadoEm}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="max-w-[60ch]">
            <h2 className="text-3xl">{onde.empty.title}</h2>
            <p className="mt-4 text-lg">{onde.empty.body}</p>
            <a
              href={`mailto:${site.email}?subject=Missa tradicional: informação sobre local e horário`}
              className="accent-t mt-6 inline-block bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-white hover:brightness-110"
            >
              {onde.empty.cta}
            </a>
          </div>
        )}
        <p className="mt-14 text-sm text-navy/80">
          {onde.directory.text}{' '}
          <a
            href={onde.directory.href}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            {onde.directory.label}
          </a>
        </p>
      </Section>
    </>
  )
}
