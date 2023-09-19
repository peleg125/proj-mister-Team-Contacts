const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className='app-header'>
      <Link className='logo' to='/'>
        <h2>Mister Contacts</h2>
      </Link>
      <nav className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contacts</NavLink>
      </nav>
    </header>
  )
}
