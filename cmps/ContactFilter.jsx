import { utilService } from '../services/util.service.js'

const { useState, useEffect, useRef } = React

export function ContactFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  onSetFilterBy = useRef(utilService.debounce(onSetFilterBy))

  useEffect(() => {
    onSetFilterBy.current(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilterBy(filterByToEdit)
  }

  const { firstName } = filterByToEdit

  return (
    <section className='contact-filter'>
      <form onSubmit={onSubmitFilter}>
        <div className='filter-input-wrapper'>
          <input onChange={handleChange} value={firstName} type='text' placeholder='Search' name='firstName' />
          <div className='fa search'></div>
        </div>
      </form>
    </section>
  )
}
