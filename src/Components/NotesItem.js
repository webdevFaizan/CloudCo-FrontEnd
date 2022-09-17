import React, {useContext} from 'react';
import NoteContext  from '../Context/Note/NoteContext';
import AlertContext from '../Context/Alert/AlertContext';

export default function NotesItem(props) {

    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const alertContext = useContext(AlertContext);
    const {alertChange }= alertContext;
    

    let {title,description,user} = props.note;
    let {updateOnClick}=props;

    const deleteFunction = ()=>{
        let id=props.note._id;
        // console.log(props.note._id);
        if(!window.confirm("Are you sure you want to delete this note, you will not be able to retrieve it.")){
            return;
          }
        deleteNote(id);
        alertChange({
            message : "Note Deleted successfully.",
            type : "danger",
            id : ''
          });
    }

  return (
    <>
        <div className="card mx-3 my-3" style={{width: "300px"}}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <strong className="card-text">Author - {user.name}</strong>
            </div>
            <div className="delete-icon my-3" style = {{alignItems: 'right', cursor: 'pointer'}} >
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1160/1160119.png" onClick={()=>{updateOnClick(props.note)}}className='mx-3' width ="30px" alt="..." />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" onClick={deleteFunction} className='mx-3' width ="30px" alt="..." />
                </div>
            </div>
        </div>
    </>
  )
}
