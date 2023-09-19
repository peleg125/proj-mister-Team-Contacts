import { contactService } from '../../services/contact.service.js'
import { ADD_CONTACT, SET_FILTER_BY, REMOVE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../reducers/contact.reducer.js'
import { store } from '../store.js'

export function loadContact(sortBy) {
  const { filterBy } = store.getState().contactModule

  return contactService
    .query(filterBy, sortBy)
    .then((contacts) => {
      store.dispatch({ type: SET_CONTACTS, contacts })
    })
    .catch((err) => {
      console.log('contact action -> Cannot load contact', err)
      throw err
    })
}

export function removeContact(contactId) {
  return contactService
    .remove(contactId)
    .then(() => {
      store.dispatch({ type: REMOVE_CONTACT, contactId })
    })
    .catch((err) => {
      console.log('contact action -> Cannot remove contact', err)
      throw err
    })
}

export function saveContact(contact) {
  const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
  return contactService
    .save(contact)
    .then((contactToSave) => {
      store.dispatch({ type, contact: contactToSave })
      return contactToSave
    })
    .catch((err) => {
      console.log('contact action -> Cannot save contact', err)
      throw err
    })
}
export function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy: filterBy })
}
