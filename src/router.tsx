import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
// import IndexPage from './pages/IndexPage'
// import FavoritesPage from './pages/FavoritesPage'

const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))
const IndexPage = lazy(() => import('./pages/IndexPage'))

const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' index element={
                  <Suspense fallback='Cargando...'>
                    <IndexPage />
                  </Suspense>
                }/>
                <Route path='/favoritos' element={
                  <Suspense fallback='Cargando...'>
                    <FavoritesPage/>
                  </Suspense>
                }/>
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default AppRouter