import React, {useContext} from 'react';
import NoteContext  from '../Context/Note/NoteContext';
import AlertContext from '../Context/Alert/AlertContext';

export default function NotesItem(props) {

    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const alertContext = useContext(AlertContext);
    const {alertChange }= alertContext;
    

    let {title,description,user,createdAt,updatedAt} = props.note;
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


    function dateDisplay(publishedAt){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      // let str = "Published On : "+ s[0];
      return s[0];
    }
    
    function timeDisplay(publishedAt){
      let s = publishedAt.slice(0,publishedAt.length-1).split("T");
      // "Published On :  "+ 
      // let str = "Time : "+ s[1];
      return s[1];
    }

  return (
    <>
        <div className="card mx-3 my-3" style={{width: "300px"}}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>                
                <strong className="card-text">Author - {user.name}</strong>
                <br/>
                {"Last Modified -"}     
                <br/>           
                {dateDisplay(updatedAt)}
                <br/>
                {timeDisplay(updatedAt)}
                <br/>
                <br/>
                {"Created At - "}           
                <br/>
                {dateDisplay(createdAt)}
                <br/>
                {timeDisplay(createdAt)}                
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
