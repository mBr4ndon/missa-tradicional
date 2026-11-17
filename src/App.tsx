import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './content'
import AMissa from './pages/AMissa'
import Documentacao from './pages/Documentacao'
import Galeria from './pages/Galeria'
import Home from './pages/Home'
import OndeAssistir from './pages/OndeAssistir'
import OsPapas from './pages/OsPapas'
import Porque from './pages/Porque'
import TradicaoNoMundo from './pages/TradicaoNoMundo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.missa} element={<AMissa />} />
          <Route path={routes.papas} element={<OsPapas />} />
          <Route path={routes.porque} element={<Porque />} />
          <Route path={routes.mundo} element={<TradicaoNoMundo />} />
          <Route path={routes.galeria} element={<Galeria />} />
          <Route path={routes.onde} element={<OndeAssistir />} />
          <Route path={routes.docs} element={<Documentacao />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
