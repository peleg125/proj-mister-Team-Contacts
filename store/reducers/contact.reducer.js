// import { contactService } from '../../services/contact.service.js'

export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  contacts: [],
  filterBy: '',
}

export function contactReducer(state = initialState, action = {}) {
  // Contacts
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts }

    case REMOVE_CONTACT:
      contacts = state.contacts.filter((contact) => contact._id !== action.contactId)
      return { ...state, contacts }

    case ADD_CONTACT:
      contacts = [...state.contacts, action.contact]
      return { ...state, contacts }

    case UPDATE_CONTACT:
      contacts = state.contacts.map((contact) => (contact._id === action.contact._id ? action.contact : contact))
      return { ...state, contacts }

    default:
      return state
  }
}
