import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'
_createContacts()

export const contactService = {
  query,
  getById,
  save,
  remove,
  getEmptyContact,
  getDefaultFilter,
  getDefaultSort,
}

function query(filterBy = {}, sortBy) {
  return storageService.query(STORAGE_KEY).then((contacts) => {
    let filteredContacts = contacts

    if (filterBy.firstName) {
      const regExp = new RegExp(filterBy.firstName, 'i')
      filteredContacts = filteredContacts.filter((contact) => regExp.test(contact.firstName))
    }

    filteredContacts = utilService.getSortedContacts(filteredContacts, sortBy)

    return filteredContacts
  })
}

function getById(contactId) {
  return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
  return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
  if (contact._id) {
    return storageService.put(STORAGE_KEY, contact)
  } else {
    return storageService.post(STORAGE_KEY, contact)
  }
}
function getDefaultSort() {
  return { type: '', desc: -1 }
}

function getDefaultFilter() {
  return { firstName: '' }
}

function getEmptyContact() {
  return {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    desc: '',
  }
}

function _createContacts() {
  let contacts = utilService.loadFromStorage(STORAGE_KEY)
  if (!contacts || contacts.length) {
    contacts = [
      {
        _id: 'n101',
        firstName: 'Moshe',
        lastName: 'Roll',
        email: 'MosheRoll@gmail.com',
        phone: '052755289',
        desc: 'Idiot',
      },
      {
        _id: 'n102',
        firstName: 'Tal',
        lastName: 'Waters',
        email: 'TalWaters@gmail.com',
        phone: '050185611',
        desc: 'Bestie',
      },
      {
        _id: 'n103',
        firstName: 'Gal',
        lastName: 'Cohen',
        email: 'GalCohen@gmail.com',
        phone: '052831821',
        desc: 'Girlfriend',
      },
      {
        _id: 'n104',
        firstName: 'John',
        lastName: 'Levi',
        email: 'JohnLevi@nana10.co.il',
        phone: '058681588',
        desc: 'Big Brother',
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}
