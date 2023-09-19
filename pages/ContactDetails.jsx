const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { contactService } from '../services/contact.service.js'

export function ContactDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [currContact, setCurrContact] = useState(null)

  useEffect(() => {
    contactService
      .getById(params.id)
      .then((contact) => {
        if (!contact) return navigate('/contact')
        setCurrContact(contact)
      })
      .catch((err) => {
        console.log('Had issues loading contact', err)
      })
  }, [])

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
        <button className='back-btn' onClick={() => navigate('/contact')}>
          Back to contacts
        </button>
      </div>
    </section>
    // <section>
    //   <h1>Contact Name</h1>
    //   <h3>contact info</h3>
    //   <p>contact number</p>
    //   <p>contact email</p>
    //   <p>contact </p>
    // </section>
  )
}
