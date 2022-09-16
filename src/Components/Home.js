import React,{useContext} from 'react'
import Notes from './Notes';
import Addnote from './Addnote';
import NoteContext from '../Context/Note/NoteContext';





const Home = () => {

  const context = useContext(NoteContext);
    const {notes, clearNotesList} = context;
  return (
    <>
      <Addnote/>
      {
        notes.length && (
          <div className="notes container">
            <h1>Your Saved Notes <button className='btn btn-danger' onClick={clearNotesList}>Clear Notes</button></h1>            
            {
              notes.length && <Notes notes={notes}/>
            }
            
          </div>
        )
      }
      {
        !notes.length && <strong>Please add some new notes.</strong>
      }
    </>
  )
}

export default Home
