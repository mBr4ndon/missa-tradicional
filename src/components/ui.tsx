import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { img, type ImageKey } from '../images'

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Missa Tradicional Portugal`
  }, [title])
}

/** Onda que liga a fotografia à secção clara, como na referência. */
export function Wave({ fill = 'var(--color-cream)' }: { fill?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[-1px] block h-[50px] w-full md:h-[90px]"
    >
      <path d="M0 90V38C220 -6 420 -6 720 30C1020 66 1240 66 1440 22V90Z" fill={fill} />
    </svg>
  )
}

export function PageHero({ title, image }: { title: string; image: ImageKey }) {
  return (
    <section className="hero relative isolate flex min-h-[46svh] items-end justify-center overflow-hidden bg-navy text-white">
      <img src={img(image, 1600)} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/70" />
      <h1 className="hero-in px-6 pb-24 pt-40 text-center text-4xl leading-tight sm:text-6xl">{title}</h1>
      <Wave />
    </section>
  )
}

export function Button({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="accent-t inline-block bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-white hover:brightness-110"
    >
      {children}
    </Link>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-[68ch] space-y-6 text-lg leading-relaxed">{children}</div>
}

export function Quote({ children, source }: { children: ReactNode; source: string }) {
  return (
    <figure className="accent-t my-10 border-l-4 border-accent pl-6 sm:pl-10">
      <blockquote className="max-w-[44ch] text-2xl italic leading-snug sm:text-3xl">«{children}»</blockquote>
      <figcaption className="mt-4 max-w-[60ch] text-sm text-navy/70">{source}</figcaption>
    </figure>
  )
}

export function Figure({
  image,
  caption,
  alt,
  width = 900,
  className = '',
}: {
  image: ImageKey
  caption?: string
  alt?: string
  width?: number
  className?: string
}) {
  return (
    <figure className={className}>
      <img
        src={img(image, width)}
        alt={alt ?? caption ?? ''}
        loading="lazy"
        className="h-auto w-full"
      />
      {caption && <figcaption className="mt-2 text-sm italic text-navy/70">{caption}</figcaption>}
    </figure>
  )
}

export function Source({ label, href, date }: { label: string; href: string; date: string }) {
  return (
    <p className="text-sm italic text-navy/70">
      Fonte:{' '}
      <a href={href} target="_blank" rel="noreferrer" className="underline underline-offset-4">
        {label}
      </a>{' '}
      {date}
    </p>
  )
}

export function Section({ children, tone = 'ivory' }: { children: ReactNode; tone?: 'ivory' | 'cream' }) {
  return (
    <section className={tone === 'cream' ? 'bg-cream' : 'bg-ivory'}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">{children}</div>
    </section>
  )
}
