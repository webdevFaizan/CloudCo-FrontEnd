import { useState } from "react";
import NoteContext from "./NoteContext";
// import { useState } from "react";
const NoteState = (props) =>{  

    const host = 'http://localhost:5000';
    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);
    const [flag, setFlag] =useState(true)
    function clearNotesList(){
        if(flag===false){          
          // setNotes(notes);
          setFlag(true)
        }
        else if(flag===true){          
         // setNotes(notes);
          setFlag(false);
        }
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


    const deleteNote=async(id)=>{
      // console.log(id);
      // Here if we write, only confirm(message) this is not going to work, so we have to add the window.confirm.
      if(!window.confirm("Are you sure you want to delete this note, you will not be able to retrieve it.")){
        return;
      }
      let url = `${host}/api/notes/deletenote/${id}`;      
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyMzdjMDg3YTdjNmI0ZGNmNGM1ODgzIiwiaWF0IjoxNjYzMjY5ODk2fQ.d1M5fCrGVqorV6ePpqL3DkOz5ot7KKt3QeXeE3kBp8U'
        }
      });
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      const newNotes = notes.filter((note)=>{return note._id!==id});    //The filter function will check for the condition and if the condition matches then it will be added to the newNotes array, this will be useful just like map method where we could get the actual array returned
      setNotes(newNotes);
    }

    const fetchNotes=async ()=>{
      // A top loading bar could easily be used here, this is just like the api call of the newsMonkey application, but the only difference is that we have created our own api here.
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



    const editNote=async(id,obj)=>{
      let url = `${host}/api/notes/updatenote/${id}`;      
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyMzdjMDg3YTdjNmI0ZGNmNGM1ODgzIiwiaWF0IjoxNjYzMjY5ODk2fQ.d1M5fCrGVqorV6ePpqL3DkOz5ot7KKt3QeXeE3kBp8U'
        },
        body: JSON.stringify(obj) //This body is to be sent, this is why this field had to be included, this is the payload, in the fetchNotes method there is no payload to be added, this is why in that function we do not need to add payoload.
      });
      // IMPORTANT : After updating the document, calling the fetch notes is the best and optimised approach, since fetchnote is will only track the changes in notes, just like git only stores the changes from the previous commit. Harry added a manual loop to track the changes which was inefficient. There is one problem with my appraoch tough, we are hitting the data base twice, first while updating and then while fetching notes. I have addded the harry notes in our docs file, to better understand the approach, harry is only hitting the db once and the changes are being tracked in the front end only.
      fetchNotes();   //After the document being updated, we were not able to display it without the page refresh, but when we call this method it will only update the changes, so we got what we wanted.
      
    }

    return (
        // <NoteContext.Provider value={{state : state, updateState: updateState}}>{/* We can even use the ES6 command here basically passing only {state, updateState} */}
        <NoteContext.Provider value={{notes, flag, clearNotesList, addNote, deleteNote, fetchNotes, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;