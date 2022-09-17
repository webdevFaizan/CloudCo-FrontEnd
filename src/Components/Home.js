import React, { useContext, useEffect, useRef,useState } from 'react'
import Notes from './Notes';
import Addnote from './Addnote';
import NoteContext from '../Context/Note/NoteContext';





const Home = () => {
  const context = useContext(NoteContext);
  const { notes, clearNotesList, editNote, fetchNotes } = context;
  const ref = useRef(null);
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  
  // *****************For Modal************
  const [title,setTitle] = useState('');  
    const [description,setDescription] = useState('');
    const [tag,setTag] = useState('');
    const [id,setId] = useState('');

    const onTitleChange=(e)=>{
        setTitle(e.target.value);     
        // console.log(e.target.value);
    }

    const onDescriptionChange=(e)=>{
        setDescription(e.target.value);
        // console.log(description);
    }

    const onTagChange=(e)=>{
        setTag(e.target.value);
        // onsole.log(tag);
    }


    const fireOnSubmit=(e)=>{
      // console.log(id);
      e.preventDefault();     //This will prevent the event to be query also it will stop the button to submit. 
      let obj={};
      obj.title=title;
      obj.description=description;
      obj.tag=tag;
      // console.log(obj);
      document.getElementById('edit-formTitle').value="";
      document.getElementById('edit-formDescription').value="";
      document.getElementById('edit-formTag').value="";
      document.getElementById('closeButton').click();
      editNote(id,obj);       //This is the global context api variable and it will be called using this parameter.
  }
    // ******************************



    const updateOnClick = (note) => {
      // console.log("inside ref with note id as -");
      // console.log(note);
      document.getElementById('edit-formTitle').value=note.title;
      document.getElementById('edit-formDescription').value=note.description;
      document.getElementById('edit-formTag').value=note.tag;
      setId(note._id);
      ref.current.click();
    }

  return (
    <>
      <Addnote />
      {/* <!-- Button trigger modal --> */}
      <button style={{display : 'none'}}ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <div className="form-group">
                  <label htmlFor="edit-formTitle">Title</label>
                  <input type="text" className="form-control" name="edit-title" id="edit-formTitle" onChange={onTitleChange} aria-describedby="emailHelp" placeholder="Enter Title" />
                  {/* onChange is the method that can be used to track the change in this field, it always sends in an event object, this event object is being received in the method and we use it to track the changes. This is exactly how we are able to create a state variable out of 'title' which on change will keep on updating the states. */}
                </div>
                <div className="form-group">
                  <label htmlFor="edit-formDescription">Description</label>
                  <input type="text" className="form-control" name="edit-description" onChange={onDescriptionChange} id="edit-formDescription" placeholder="Post..." />
                </div>
                <div className="form-group">
                  <label htmlFor="edit-formTag">Tag</label>
                  <input type="text" className="form-control" name="edit-tag" onChange={onTagChange} id="edit-formTag" placeholder="Tag" />
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" style ={{display : 'none'}}id='closeButton' data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={fireOnSubmit}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      {
        notes.length && (
          <div className="notes container">
            <h1>Your Saved Notes <button className='btn btn-danger' onClick={clearNotesList}>Clear Notes</button></h1>
            {
              notes.length && <Notes notes={notes} updateOnClick={updateOnClick} />
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
