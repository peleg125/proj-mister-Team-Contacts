const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { ContactDetails } from './pages/ContactDetails.jsx'
import { ContactIndex } from './pages/ContactIndex.jsx'

import { store } from './store/store.js'
import { AppHeader } from './cmps/AppHeader.jsx'
import { ContactEdit } from './pages/ContactEdit.jsx'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppHeader />

        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<ContactDetails />} path='/contact/details/:contactId' />
          <Route element={<ContactEdit />} path='/contact/edit/:contactId' />
          <Route element={<ContactIndex />} path='/contact' />
          <Route element={<AboutUs />} path='/about' />
        </Routes>
      </Router>
    </Provider>
  )
}
