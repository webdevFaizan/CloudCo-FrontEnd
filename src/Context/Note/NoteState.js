import { useState } from "react";
import NoteContext from "./NoteContext";
// import { useState } from "react";
const NoteState = (props) =>{  

    const host = 'http://localhost:5000';
    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);
    function clearNotesList(){
        setNotes({});
    }

    const addNote=async (obj)=>{
      console.log(obj);

      let url = `${host}/api/notes/addnote`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyMzdjMDg3YTdjNmI0ZGNmNGM1ODgzIiwiaWF0IjoxNjYzMjY5ODk2fQ.d1M5fCrGVqorV6ePpqL3DkOz5ot7KKt3QeXeE3kBp8U'
        },
        body: JSON.stringify(obj)
      });
      const jsonResponse = await response.json();
      setNotes(notes.concat(jsonResponse));    //Concat updates an array, where as push updates an array. Here we can only concat the new notes, if we try to push the new notes, then this will not work fine. As the concat function takes the old notes and adds the new notes and then updates the whole state variable, but push does not do this.
    }


    const deleteNote=(id)=>{
      // console.log(id);
      const newNotes = notes.filter((note)=>{return note._id!==id});    //The filter function will check for the condition and if the condition matches then it will be added to the newNotes array, this will be useful just like map method where we could get the actual array returned
      setNotes(newNotes);
    }

    const fetchNotes=async ()=>{
      let url = `${host}/api/notes/fetchnotes`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyMzdjMDg3YTdjNmI0ZGNmNGM1ODgzIiwiaWF0IjoxNjYzMjY5ODk2fQ.d1M5fCrGVqorV6ePpqL3DkOz5ot7KKt3QeXeE3kBp8U'
        }
      });
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      setNotes(jsonResponse);
    }

    return (
        // <NoteContext.Provider value={{state : state, updateState: updateState}}>{/* We can even use the ES6 command here basically passing only {state, updateState} */}
        <NoteContext.Provider value={{notes, clearNotesList, addNote, deleteNote, fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;