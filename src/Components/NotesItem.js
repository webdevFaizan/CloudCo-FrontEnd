import React, {useContext} from 'react';
import NoteContext  from '../Context/Note/NoteContext'

export default function NotesItem(props) {

    const context = useContext(NoteContext);
    const {deleteNote} = context;

    let {title,description} = props.note;

    const deleteFunction = ()=>{
        let id=props.note._id;
        console.log(props.note._id);
        deleteNote(id);
    }

  return (
    <>
        <div className="card mx-3 my-3" style={{width: "300px"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="delete-icon my-3" style = {{alignItems: 'right', cursor: 'pointer'}} >
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1160/1160119.png" className='mx-3' width ="30px" alt="..." />
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" onClick={deleteFunction} className='mx-3' width ="30px" alt="..." />
                </div>
            </div>
        </div>
    </>
  )
}
