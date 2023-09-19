const { Link, NavLink } = ReactRouterDOM
const { useSelector } = ReactRedux

export function AppHeader() {
  const contacts = useSelector((storeState) => storeState.contactModule.contacts)
  return (
    <header className='app-header'>
      <Link to='/'>
        <h3>Contact</h3>
      </Link>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contacts</NavLink>
      </nav>
    </header>
  )
}
