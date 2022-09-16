import React from 'react'
import NotesItem from './NotesItem'

export default function Notes(props) {
    
  return (
    <>
        <div style={{display : 'flex', flexWrap : "wrap"}}>
            {                
                props.notes.length>0?props.notes.map((note)=>{return <NotesItem key={note.title} note={note}/>}):""
            }
        </div>
    </>
  )
}
