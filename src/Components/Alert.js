import React from 'react'

function Alert(props) {
  return (
    <>
        {
            props.message.length>0?(
                <div class="alert alert-primary container " style ={{position: 'absolute'}}role="alert">
                        {props.message}
                </div>
                ): ''
        }
    </>
  )
}

export default Alert
