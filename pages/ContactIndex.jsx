import { saveContact, loadContact } from "../store/actions/contact.actions.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { contactService } from "../services/contact.service.js"
const { useEffect, useState } = React
const { useSelector } = ReactRedux

export function ContactIndex() {
  const contact = useSelector((storeState) => storeState.contactModule.contact)
  const [contactToAdd, setContactToAdd] = useState(contactService.getEmptyContact())

  useEffect(() => {
    loadContact().catch((err) => {
      console.log("err", err)
      showErrorMsg("Cannot load contacts")
    })
  }, [])

  function onAddContact(ev) {
    ev.preventDefault()
    saveContact(contactToAdd)
      .then(() => {
        showSuccessMsg("Todo added")
        setContactToAdd(todoService.getEmptyTodo())
      })
      .catch((err) => {
        console.log("Cannot add todo", err)
        showErrorMsg("Cannot add todo")
      })
  }

  return (
    <section className='contact-index'>
      <h1>hey</h1>
    </section>
  )
}
