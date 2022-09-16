import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name" : "Faizan",
        "roll" : "33"
    }   
    
    const [state, setState] = useState(s1);
    const updateState =()=>{
        setTimeout(() => {            
            setState({
                "name" : "Zaifan",
                "roll" : "57"
            });
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state,updateState}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;