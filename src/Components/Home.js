import React,{useContext} from 'react'
import Notes from './Notes';
import NoteContext from '../Context/Note/NoteContext';




const Home = () => {

  const context = useContext(NoteContext);
  const {notes, updateNotesList} = context;
  return (
    <>
      <div>
        <div className="container my-3">
          <h1>Add a note</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      {
        notes.length && (
          <div className="notes container">
            <h1>Your Saved Notes <button className='btn btn-danger' onClick={updateNotesList}>Clear Notes</button></h1>            
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
