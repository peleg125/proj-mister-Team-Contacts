const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { store } from './store/store.js'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='main-layout app'>
          <AppHeader />
          <main>
            <Routes>
              <Route element={<HomePage />} path='/' />
              <Route element={<AboutUs />} path='/about' />
            </Routes>
          </main>
          <AppFooter />
        </section>
      </Router>
    </Provider>
  )
}
