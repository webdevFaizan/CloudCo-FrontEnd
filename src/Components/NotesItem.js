import React from 'react'

export default function NotesItem(props) {
    let {title,description} = props.note;
    // console.log(props.note);
    // let {title, description} = props;
  return (
    <>
        <div className="card">        
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>            
            </div>
        </div>
    </>
  )
}
