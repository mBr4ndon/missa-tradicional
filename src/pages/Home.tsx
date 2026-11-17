import { Link } from 'react-router-dom'
import { Button, Wave, usePageTitle } from '../components/ui'
import { home, missa, routes } from '../content'
import { img, type ImageKey } from '../images'

const strip: { key: ImageKey; alt: string }[] = [
  { key: 'galeria02', alt: 'Cardeal em oração durante a Missa tradicional' },
  { key: 'galeria04', alt: 'Bispo com mitra e incenso durante a Missa tradicional' },
  { key: 'galeria05', alt: 'Sacerdote e cardeal com o turíbulo durante a Missa tradicional' },
]

export default function Home() {
  usePageTitle('Principal')
  return (
    <>
      <section className="hero relative isolate flex min-h-[84svh] md:min-h-[92svh] items-center justify-center overflow-hidden bg-navy text-white">
        <img
          src={img('heroMonstrancia', 1800)}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/40" />
        <div className="mx-auto max-w-4xl px-6 pb-28 pt-40 text-center">
          <h1 className="hero-in text-5xl leading-[1.05] sm:text-7xl">{home.title}</h1>
          <p className="hero-in hero-in-2 mx-auto mt-6 max-w-[48ch] text-lg text-white/90 sm:text-xl">
            {home.subtitle}
          </p>
          <div className="hero-in hero-in-3 mt-10">
            <Button to={routes.porque}>{home.cta}</Button>
          </div>
        </div>
        <Wave />
      </section>

      <section className="relative bg-cream pb-28 pt-12 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:gap-0">
          <div className="md:pr-8">
            <h2 className="text-3xl leading-tight sm:text-4xl">{home.pillarsTitle}</h2>
            <Link
              to={routes.porque}
              className="accent-t mt-5 inline-block text-sm font-semibold text-accent underline underline-offset-8"
            >
              {home.pillarsLink}
            </Link>
          </div>
          {home.pillars.map((p) => (
            <div key={p.title} className="border-t border-gold/60 pt-6 md:border-l md:border-t-0 md:px-8 md:pt-0">
              <h3 className="accent-t text-xl font-bold text-accent">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-navy/85">{p.body}</p>
            </div>
          ))}
        </div>
        <Wave fill="var(--color-ivory)" />
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.5fr] md:py-24">
          <div className="self-center">
            <h2 className="text-4xl">{home.explore.title}</h2>
            <p className="mt-5 max-w-[48ch] leading-relaxed text-navy/85">{missa.paragraphs[0]}</p>
            <div className="mt-8">
              <Button to={routes.missa}>{home.explore.link}</Button>
            </div>
          </div>
          <ul className="grid grid-cols-3 gap-3 md:gap-5">
            {strip.map((s) => (
              <li key={s.key}>
                <Link to={routes.galeria} className="block overflow-hidden">
                  <img
                    src={img(s.key, 700)}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[3/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
