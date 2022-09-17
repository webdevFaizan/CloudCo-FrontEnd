import React from 'react'
import NotesItem from './NotesItem'

export default function Notes(props) {
    
  return (
    <>
        <div style={{display : 'flex', flexWrap : "wrap", justifyContent : 'space-around', border : "0px solid red"}}>
            {                
                props.notes.map((note)=>{return <NotesItem key={note._id} updateOnClick={props.updateOnClick} note={note}/>})
            }
        </div>
    </>
  )
}
