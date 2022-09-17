import React, { useContext, useEffect, useRef,useState } from 'react'
import Notes from './Notes';
import Addnote from './Addnote';
import NoteContext from '../Context/Note/NoteContext';





const Home = () => {
  const context = useContext(NoteContext);
  const { notes, flag, clearNotesList, editNote, fetchNotes } = context;
  const ref = useRef(null);
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  
  // *****************For Modal************
  const [title,setTitle] = useState('');      //These are the local state variables and it will be used to track the modal variables. The add note component has its own local variable that is being used to set the local variable value.
  const [description,setDescription] = useState('');
  const [tag,setTag] = useState('');
  const [id,setId] = useState('');  //I had to set the id, or else I was not able to select which id was being clicked.

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
    document.getElementById('edit-formTitle').value="";   //These lines are not required. As this value is automatically updated when we click on a different note.
    document.getElementById('edit-formDescription').value="";
    document.getElementById('edit-formTag').value="";
    document.getElementById('closeButton').click();
    editNote(id,obj);       //This is the global context api variable and it will be called using this parameter. This is also where the global id state is being used up.
  }
    // ******************************



    const updateOnClick = (note) => {
      // console.log("inside ref with note id as -");
      // console.log(note);
      document.getElementById('edit-formTitle').value=note.title;   //As soon as we click on the edit icon of each note, we will be clicking on the updateOnClick method, then we will set the values inside this hidden form with the value from notes, then we will allow the user to edit the already present data in the form.
      document.getElementById('edit-formDescription').value=note.description;
      document.getElementById('edit-formTag').value=note.tag;
      setId(note._id);    //This is actually being used to track the id of the form, on which we have clicked, if we had not made the id as a state variable, then we have lost which id was being called and which note is being edited.
      ref.current.click();    //This is the main function that is using the reference of the click button, without this the useRef hook cannot track various the changes in the hook. And thus it will not be able to track the change in when you click on the modal.
    }

  return (
    <>
      <Addnote />
      {/* <!-- Button trigger modal --> */}
      {/* This button has been hidden, its functionality is required, but it should not be shown since, we are using this as ref object, when ever we click on any update icon in each note, then the updateOnClick method is being run and thus it will be able to track if this button is being clicked or not. */}
      <button style={{display : 'none'}}ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Modal is hidden.
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
                  {/* All the ids of this form has been changed, the main add note component had id as formTitle this form has a title of edit-formTitle, this is to ensure we are targetting the correct element for our changes, also the id must be unique in general.*/}
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
              {/* IMPORTANT : Right now this button of close is being clicked by selecting this element in the fireOnSubmit method and this is being clicked usign the click method, but this could have been done with the help of useRef. Here this close button is going to have a ref which will track the click functionality of this button and inside the fireOnSubmit we will attach this refhook, if you want a better view of this functionality simply watch video 67. */}
              <button type="button" className="btn btn-primary" onClick={fireOnSubmit}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      {
        notes.length && (
          <div className="notes container">
            <h1>Your Saved Notes <button className='btn btn-danger' onClick={clearNotesList}>Show/Hide Notes</button></h1>
            {
              flag && notes.length && <Notes notes={notes} updateOnClick={updateOnClick} />
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
