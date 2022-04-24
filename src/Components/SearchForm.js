import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadSearch } from '../actions'
import './SearchForm.css'


function SearchForm() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='SearchForm'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(loadSearch(query))
                }}
            >
                <h4>Search:</h4>
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchForm;