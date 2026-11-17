import { useEffect, useState } from 'react'
import { colours, hero, nav, pending, porque, site } from './content'

const STORAGE_KEY = 'missa-trad-cor'

function useLiturgicalColour() {
  const [id, setId] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? 'branco'
    } catch {
      return 'branco'
    }
  })

  useEffect(() => {
    const c = colours.find((x) => x.id === id) ?? colours[0]
    document.documentElement.style.setProperty('--accent', c.value)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      /* sem armazenamento disponível: ignorar */
    }
  }, [id])

  return [id, setId] as const
}

function ColourPicker({ id, onChange }: { id: string; onChange: (id: string) => void }) {
  return (
    <div role="radiogroup" aria-label="Cor litúrgica" className="flex items-center gap-3">
      <span className="text-sm text-ink/70">Cor litúrgica</span>
      <div className="flex gap-2">
        {colours.map((c) => (
          <button
            key={c.id}
            role="radio"
            aria-checked={id === c.id}
            aria-label={c.label}
            title={c.label}
            onClick={() => onChange(c.id)}
            className="h-5 w-5 rounded-full border border-ink/30 transition-transform hover:scale-110 aria-checked:ring-2 aria-checked:ring-ink aria-checked:ring-offset-2 aria-checked:ring-offset-stone"
            style={{ background: c.value }}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [colour, setColour] = useLiturgicalColour()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-stone"
      >
        Saltar para o conteúdo
      </a>

      <header className="sticky top-0 z-10 border-b border-ink/15 bg-stone/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-3">
          <a href="#principal" className="font-display text-lg font-bold">
            {site.name}
          </a>
          <nav aria-label="Principal">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {nav.slice(1).map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="py-1 hover:text-accent hover:underline underline-offset-4">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section id="principal" className="mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-6 py-24">
          <h1 className="hero-in font-display text-[clamp(3rem,10vw,8.5rem)] italic leading-[0.95] tracking-tight">
            {hero.latin}
          </h1>
          <p className="hero-in hero-in-2 mt-8 font-display text-[clamp(1.5rem,3.5vw,2.75rem)] text-accent accent-bar">
            {hero.portuguese}
          </p>
          <div className="hero-in hero-in-3 mt-14 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-ink/75">{hero.note}</p>
            <ColourPicker id={colour} onChange={setColour} />
          </div>
        </section>

        {/* Porquê */}
        <section id="porque" className="border-t border-ink/15 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">{porque.title}</h2>
            <p className="mt-10 max-w-[68ch] font-display text-xl leading-relaxed">{porque.intro}</p>

            <div className="mt-20 divide-y divide-ink/15 border-y border-ink/15">
              {porque.points.map((p) => (
                <article key={p.title} className="grid gap-4 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
                  <h3 className="text-2xl font-bold leading-snug text-accent accent-bar sm:text-3xl">{p.title}</h3>
                  <p className="max-w-[62ch]">{p.body}</p>
                </article>
              ))}
            </div>

            <p className="mt-20 max-w-[68ch] text-ink/80">{porque.premise}</p>

            <figure className="mt-10 border-l-4 border-accent pl-6 accent-bar sm:pl-10">
              <blockquote className="max-w-[40ch] text-3xl italic leading-snug sm:text-4xl">
                «{porque.quote}»
              </blockquote>
              <figcaption className="mt-6 max-w-[60ch] text-sm text-ink/70">{porque.quoteSource}</figcaption>
            </figure>
          </div>
        </section>

        {/* Secções por migrar */}
        {pending.map((s) => (
          <section key={s.id} id={s.id} className="border-t border-ink/15 py-20">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-3xl font-bold sm:text-4xl">{s.title}</h2>
              {s.sub && <p className="mt-2 text-ink/70">{s.sub}</p>}
              <p className="mt-6 max-w-[55ch] text-ink/60">
                Conteúdo por migrar do site actual.
              </p>
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-ink/15 bg-ink text-stone">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xl font-bold">{site.name}</p>
            <p className="text-sm text-stone/70">{site.location}</p>
          </div>
          <div className="text-sm sm:text-right">
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-white">
              {site.email}
            </a>
            <p className="mt-1 text-stone/70">© {site.year} {site.name}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
