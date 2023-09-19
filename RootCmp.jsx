const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { HomePage } from "./pages/HomePage.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"

export function App() {
  return (
    <Router>
      <section className='main-layout app'>
        <main>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<ContactIndex />} path='/contact' />
            <Route element={<AboutUs />} path='/about' />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
