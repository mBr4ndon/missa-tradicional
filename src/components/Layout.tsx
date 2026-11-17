import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { nav, routes, site } from '../content'
import { img } from '../images'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block py-2 text-sm tracking-wide hover:underline underline-offset-8 decoration-white/70 ${
    isActive ? 'underline' : ''
  }`

function Header() {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setSub(false)
  }, [pathname])

  return (
    <header className="hero absolute inset-x-0 top-0 z-20 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link to={routes.home} className="flex shrink-0 items-center gap-3" aria-label={`${site.name} — início`}>
          <img src={img('brasao', 300)} alt="" className="h-10 w-auto sm:h-12" />
          <span className="font-display text-lg leading-tight">
            Missa Tradicional
            <br />
            <span className="text-sm opacity-80">Portugal</span>
          </span>
        </Link>

        <button
          className="rounded border border-white/50 px-3 py-2 text-sm xl:hidden"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu"
          aria-label="Principal"
          className={`${
            open ? 'absolute inset-x-0 top-full flex bg-navy/95 px-6 pb-6' : 'hidden'
          } flex-col gap-1 xl:static xl:flex xl:flex-row xl:items-center xl:gap-6 xl:bg-transparent xl:p-0`}
        >
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setSub(true)}
                onMouseLeave={() => setSub(false)}
              >
                <button
                  className="py-2 text-sm tracking-wide hover:underline underline-offset-8 decoration-white/70"
                  aria-expanded={sub}
                  aria-haspopup="true"
                  onClick={() => setSub((v) => !v)}
                >
                  {item.label} <span aria-hidden="true">▾</span>
                </button>
                {sub && (
                  <ul className="z-30 min-w-56 bg-navy/95 px-4 py-2 xl:absolute xl:left-0 xl:top-full">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to} className={linkClass}>
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2">
        <div className="flex items-start gap-4">
          <img src={img('brasao', 300)} alt="" className="h-16 w-auto" />
          <div>
            <p className="font-display text-xl">{site.name}</p>
            <p className="text-sm text-white/70">{site.location}</p>
          </div>
        </div>
        <div className="text-sm sm:justify-self-end">
          <p className="font-display text-lg">Contacto</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block break-all underline underline-offset-4">
            {site.email}
          </a>
        </div>
      </div>
      <p className="border-t border-white/15 px-6 py-5 text-center text-sm text-white/60">
        © {site.year} {site.name}
      </p>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
