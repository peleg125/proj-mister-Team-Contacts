import { contactService } from '../services/contact.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'

const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function ContactEdit() {
  const [contactToEdit, setContactToEdit] = useState(contactService.getEmptyContact())
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.contactId) loadContact()
  }, [])

  function loadContact() {
    contactService
      .getById(params.contactId)
      .then(setContactToEdit)
      .catch((err) => {
        console.log('Had issued in contact edit:', err)
        navigate('/contact')
        showErrorMsg('Contact not found!')
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactToEdit({
      ...contactToEdit,
      [name]: value,
    })
  }

  function onSaveContact(ev) {
    ev.preventDefault()
    contactService
      .save(contactToEdit)
      .then(() => navigate('/contact'))
      .catch((err) => {
        showErrorMsg('Cannot save contact', err)
      })
  }

  const { firstName, lastName, email, phone, desc } = contactToEdit

  return (
    <section className='contact-edit'>
      <h2>Edit Contact</h2>

      <form onSubmit={onSaveContact}>
        <div>
          <label>First Name</label>
          <input type='text' name='firstName' value={firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' name='lastName' value={lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='email' value={email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone</label>
          <input type='tel' name='phone' value={phone} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name='desc' value={desc} onChange={handleChange} />
        </div>
        <button type='submit'>{params.contactId ? 'Update' : 'Add'} Contact</button>
      </form>
    </section>
  )
}
