const { useNavigate } = ReactRouterDOM

export function ContactPreview({ contact }) {
  const navigate = useNavigate()
  return (
    <article
      className='contact-preview'
      onClick={() => {
        navigate(`/contact/details/${contact._id}`)
      }}
    >
      <div className='contact-name'>
        {contact.firstName} {contact.lastName}
      </div>
      <div className='contact-phone'>{contact.phone}</div>
    </article>
  )
}
