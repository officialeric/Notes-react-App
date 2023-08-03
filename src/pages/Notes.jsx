import {CiSearch} from 'react-icons/ci'
import {GrClose} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'
import NoteItem from '../components/NoteItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Notes = ({notes}) => {
  const [showSearch,setShowsearch] = useState(false)
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSeach=()=>{
       setFilteredNotes(notes.filter((note) =>{
        if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
          return note;
        }
       }));
  }

  useEffect(handleSeach,[text]);

  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>My Notes</h2>}
            {showSearch && <input type="search" autofocus placeholder='keyword...' value={text} onChange={(e)=> { setText(e.target.value); handleSeach();} }/>}
            <button className='btn' onClick={()=> setShowsearch(!showSearch)}>{!showSearch ? <CiSearch /> : <GrClose/>}</button>
        </header>
        <div className="notes__container">
           {filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)}
        </div>
        <Link className='btn add__btn' to='/create-note'><AiOutlinePlus /></Link>
    </section>
  )
}

export default Notes