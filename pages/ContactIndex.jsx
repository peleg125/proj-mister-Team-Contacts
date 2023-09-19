import { loadContact, setFilterBy } from '../store/actions/contact.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ContactList } from '../cmps/ContactList.jsx'
import { ContactSort } from '../cmps/ContactSort.jsx'
import { ContactFilter } from '../cmps/ContactFilter.jsx'

const { useEffect, useState } = React
const { useSelector } = ReactRedux

export function ContactIndex() {
  const contacts = useSelector((storeState) => storeState.contactModule.contacts)
  const filterBy = useSelector((storeState) => storeState.contactModule.filterBy)
  const [sortBy, setSortBy] = useState({ type: '', desc: -1 })

  useEffect(() => {
    loadContact(sortBy).catch((err) => {
      console.log('err:', err)
      showErrorMsg('Cannot load contacts')
    })
  }, [filterBy, sortBy])

  function onSetFilterBy(filterBy) {
    setFilterBy(filterBy)
  }

  return (
    <section className='contact-index'>
      {!contacts.length && <div className='loading'>Loading...</div>}
      <ContactFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
      <ContactSort sortBy={sortBy} setSortBy={setSortBy} />
      {contacts && <ContactList contacts={contacts} />}
    </section>
  )
}
