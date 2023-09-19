export function ContactPreview({ contact }) {
  return (
    <article className='contact=preview'>
      {contact.firstName}
      {contact.lastName}
      {contact.email}
      {contact.phone}
    </article>
  )
}
