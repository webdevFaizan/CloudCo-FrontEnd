import { useState } from "react";
import NoteContext from "./NoteContext";
// import { useState } from "react";
const NoteState = (props) =>{    
    const initialNotes = [
        {
          "_id": "6323a3cc615159d7f9264757",
          "user": "63237c087a7c6b4dcf4c5883",
          "title": "Updated Lore and Legends",
          "description": "Updated This book is the prequel of the 2018 god of war gameplay, read it to understand the lore and legends of midgard and upcoming game of 2022 god of war ragnarok",
          "tag": "Updated Novel",
          "date": "2022-09-15T22:14:36.712Z",
          "createdAt": "2022-09-15T22:14:36.724Z",
          "updatedAt": "2022-09-15T23:14:07.434Z",
          "__v": 0
        },
        {
          "_id": "6323a8ad10de2984b92538ce",
          "user": "63237c087a7c6b4dcf4c5883",
          "title": "Double Updated Lore and Legends",
          "description": "Double Updated This book is the prequel of the 2018 god of war gameplay, read it to understand the lore and legends of midgard and upcoming game of 2022 god of war ragnarok",
          "tag": "Double Updated Novel",
          "date": "2022-09-15T22:35:25.337Z",
          "createdAt": "2022-09-15T22:35:25.349Z",
          "updatedAt": "2022-09-15T23:38:00.236Z",
          "__v": 0
        },
        {
          "_id": "6323a3cc615159d7f9264757",
          "user": "63237c087a7c6b4dcf4c5883",
          "title": "Updated Lore and Legends",
          "description": "Updated This book is the prequel of the 2018 god of war gameplay, read it to understand the lore and legends of midgard and upcoming game of 2022 god of war ragnarok",
          "tag": "Updated Novel",
          "date": "2022-09-15T22:14:36.712Z",
          "createdAt": "2022-09-15T22:14:36.724Z",
          "updatedAt": "2022-09-15T23:14:07.434Z",
          "__v": 0
        },
        {
          "_id": "6323a8ad10de2984b92538ce",
          "user": "63237c087a7c6b4dcf4c5883",
          "title": "Double Updated Lore and Legends",
          "description": "Double Updated This book is the prequel of the 2018 god of war gameplay, read it to understand the lore and legends of midgard and upcoming game of 2022 god of war ragnarok",
          "tag": "Double Updated Novel",
          "date": "2022-09-15T22:35:25.337Z",
          "createdAt": "2022-09-15T22:35:25.349Z",
          "updatedAt": "2022-09-15T23:38:00.236Z",
          "__v": 0
        }
      ];
    const [notes, setNotes] = useState(initialNotes);
    function clearNotesList(){
        setNotes({});
    }

    const addNote=(obj)=>{
        setNotes(notes.concat(obj));    //Concat updates an array, where as push updates an array. Here we can only concat the new notes, if we try to push the new notes, then this will not work fine. As the concat function takes the old notes and adds the new notes and then updates the whole state variable, but push does not do this.
    }

    return (
        // <NoteContext.Provider value={{state : state, updateState: updateState}}>{/* We can even use the ES6 command here basically passing only {state, updateState} */}
        <NoteContext.Provider value={{notes, clearNotesList, addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;