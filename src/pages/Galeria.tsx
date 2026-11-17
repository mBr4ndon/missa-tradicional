import { useEffect, useRef, useState } from 'react'
import { PageHero, Section, usePageTitle } from '../components/ui'
import { galeria } from '../content'
import { img } from '../images'

export default function Galeria() {
  usePageTitle(galeria.title)
  const [current, setCurrent] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const total = galeria.images.length

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (current !== null && !d.open) d.showModal()
    if (current === null && d.open) d.close()
  }, [current])

  useEffect(() => {
    if (current === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent((c) => (c === null ? c : (c + 1) % total))
      if (e.key === 'ArrowLeft') setCurrent((c) => (c === null ? c : (c - 1 + total) % total))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, total])

  return (
    <>
      <PageHero title={galeria.title} image="heroMundo" />
      <Section tone="cream">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {galeria.images.map((key, i) => (
            <li key={key}>
              <button
                onClick={() => setCurrent(i)}
                className="block w-full overflow-hidden"
                aria-label={`Abrir fotografia ${i + 1} de ${total}`}
              >
                <img
                  src={img(key, 600)}
                  alt={`Fotografia ${i + 1} da Missa tradicional`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <dialog
        ref={dialog}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialog.current && setCurrent(null)}
        aria-label="Fotografia ampliada"
        className="m-auto max-h-[94svh] max-w-[94vw] bg-transparent p-0 backdrop:bg-navy/90"
      >
        {current !== null && (
          <div className="relative">
            <img
              src={img(galeria.images[current], 1600)}
              alt={`Fotografia ${current + 1} da Missa tradicional`}
              className="max-h-[88svh] max-w-[94vw] object-contain"
            />
            <div className="mt-3 flex items-center justify-between text-white">
              <button className="px-3 py-2" onClick={() => setCurrent((current - 1 + total) % total)}>
                Anterior
              </button>
              <span className="text-sm">
                {current + 1} / {total}
              </span>
              <button className="px-3 py-2" onClick={() => setCurrent((current + 1) % total)}>
                Seguinte
              </button>
              <button className="px-3 py-2" onClick={() => setCurrent(null)}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
