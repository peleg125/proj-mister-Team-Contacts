const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
import { contactService } from '../services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { removeContact } from '../store/actions/contact.actions.js'

export function ContactDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [currContact, setCurrContact] = useState(null)

  useEffect(() => {
    contactService
      .getById(params.contactId)
      .then((contact) => {
        if (!contact) return navigate('/contact')
        setCurrContact(contact)
      })
      .catch((err) => {
        console.log('Had issues loading contact', err)
      })
  }, [])

  function onRemoveContact() {
    removeContact(params.contactId)
      .then(() => {
        showSuccessMsg('Contact removed')
        navigate('/contact')
      })
      .catch((err) => {
        console.log('Cannot remove contact', err)
        showErrorMsg('Cannot remove contact')
      })
  }

  if (!currContact) return <h4>loading</h4>
  const { _id, firstName, lastName, email, phone, desc } = currContact

  return (
    <section className='contact-details'>
      <div className='contact-data-container'>
        <h1>Id: {_id}</h1>
        <h1>First Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>
        <h2>email: {email}</h2>
        <h2>phone: {phone}</h2>
        <h2>description: {desc}</h2>
        <div className='form-btns'>
          <button className='del-btn' onClick={() => onRemoveContact()}>
            Delete Contact
          </button>
          <button className='back-btn' onClick={() => navigate('/contact')}>
            Back to contacts
          </button>
          <button
            className='nav-edit-btn'
            onClick={() => {
              navigate(`/contact/edit/${params.contactId}`)
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </section>
  )
}
