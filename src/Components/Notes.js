import React from 'react'
import NotesItem from './NotesItem'

export default function Notes(props) {
    
  return (
    <>
        <div>
            {
                // props.notes.map((note)=>{return <NotesItem key={note.title} title={note.title} description={note.description}/>})
                // props.notes.map((note)=>{return <h1 key={note.title}>{note.title}</h1>})
                props.notes.map((note)=>{return <NotesItem key={note.title} note={note}/>})
            }
        </div>
    </>
  )
}
