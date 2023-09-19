const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux


import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { ContactDetails } from './pages/ContactDetails.jsx'
import { ContactIndex } from "./pages/ContactIndex.jsx"


export function App() {
  return (
    <Router>
      <section className='main-layout app'>
        <main>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<ContactDetails />} path='/contact/details/:contactId' />
            <Route element={<ContactIndex />} path='/contact' />   
            <Route element={<AboutUs />} path='/about' />
          </Routes>
        </main>
      </section>
    </Router>
  )
}
