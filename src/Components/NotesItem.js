import React from 'react'

export default function NotesItem(props) {
    let {title,description} = props.note;
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
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" className='mx-3' width ="30px" alt="..." />
                </div>
            </div>
        </div>
    </>
  )
}
