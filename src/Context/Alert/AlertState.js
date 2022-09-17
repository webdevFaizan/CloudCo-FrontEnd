import AlertContext from "./AlertContext";

import React, { useState } from 'react'

function AlertState(props) {

  let [alert, setAlert] =useState({
        type : 'success',
        message : '',
        id : ''
    });

  const alertChange=(obj)=>{    
    // console.log(obj);
    setAlert(obj);
    setTimeout(()=>{
        setAlert({
            type : 'success',
            message : '',
            id : ''
        })
    },2000);
  }

  return (
    // <NoteContext.Provider value={{state : state, updateState: updateState}}>{/* We can even use the ES6 command here basically passing only {state, updateState} */}
    <AlertContext.Provider value={{alert, alertChange}}>
        {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState