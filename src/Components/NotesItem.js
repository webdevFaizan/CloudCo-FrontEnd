import React from 'react'

export default function NotesItem(props) {
    let {title,description} = props.note;
  return (
    <>
        <div className="card mx-3 my-3" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>            
            </div>
        </div>
    </>
  )
}
