import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { colours, nav, routes, site } from '../content'
import { img } from '../images'

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
      /* sem armazenamento: ignorar */
    }
  }, [id])

  return [id, setId] as const
}

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to={routes.home} className="flex items-center gap-3" aria-label={`${site.name} — início`}>
          <img src={img('brasao', 300)} alt="" className="h-12 w-auto" />
          <span className="font-display text-lg leading-tight">
            Missa Tradicional
            <br />
            <span className="text-sm opacity-80">Portugal</span>
          </span>
        </Link>

        <button
          className="rounded border border-white/50 px-3 py-2 text-sm md:hidden"
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
          } flex-col gap-1 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0`}
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
                  <ul className="z-30 min-w-56 bg-navy/95 px-4 py-2 md:absolute md:left-0 md:top-full">
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

function ColourPicker({ id, onChange }: { id: string; onChange: (id: string) => void }) {
  return (
    <div role="radiogroup" aria-label="Cor litúrgica" className="flex items-center gap-3">
      <span className="text-sm text-white/70">Cor litúrgica</span>
      <div className="flex gap-2">
        {colours.map((c) => (
          <button
            key={c.id}
            role="radio"
            aria-checked={id === c.id}
            aria-label={c.label}
            title={c.label}
            onClick={() => onChange(c.id)}
            className="h-5 w-5 rounded-full border border-white/50 transition-transform hover:scale-110 aria-checked:ring-2 aria-checked:ring-white aria-checked:ring-offset-2 aria-checked:ring-offset-navy"
            style={{ background: c.value }}
          />
        ))}
      </div>
    </div>
  )
}

function Footer({ colour, setColour }: { colour: string; setColour: (id: string) => void }) {
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <img src={img('brasao', 300)} alt="" className="h-16 w-auto" />
          <div>
            <p className="font-display text-xl">{site.name}</p>
            <p className="text-sm text-white/70">{site.location}</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-display text-lg">Contacto</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block underline underline-offset-4">
            {site.email}
          </a>
        </div>
        <div>
          <ColourPicker id={colour} onChange={setColour} />
        </div>
      </div>
      <p className="border-t border-white/15 px-6 py-5 text-center text-sm text-white/60">
        © {site.year} {site.name}
      </p>
    </footer>
  )
}

export default function Layout() {
  const [colour, setColour] = useLiturgicalColour()
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
      <Footer colour={colour} setColour={setColour} />
    </>
  )
}
