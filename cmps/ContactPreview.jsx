export function ContactPreview({ contact }) {
  return (
    <article className='contact-preview'>
      <div className='contact-name'>
        {contact.firstName} {contact.lastName}
      </div>
      <div className='contact-phone'>{contact.phone}</div>
    </article>
  )
}
