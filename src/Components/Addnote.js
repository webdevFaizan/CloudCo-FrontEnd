import React,{useState, useContext} from 'react'
import NoteContext from "../Context/Note/NoteContext";      //This is only imported when we have to update a global state, which in this case is the notes array, it is being updated using context api, why is it global so that the state change in notes array could affect different components, while avoiding the props drilling.
import AlertContext from '../Context/Alert/AlertContext';

export default function Addnote(){
    const context = useContext(NoteContext);      //This is the useContext hook to handle the global objects.
    const {addNote} = context;      //These are the state function and variables which will be changed.
    const alertContext = useContext(AlertContext);
    const {alertChange }= alertContext;

    //The following state variables are hooked using the normal local state variable, hence it can only be accessed in this file. Or its children components, but this file does not have any children components.
    const [title,setTitle] = useState('');  
    const [description,setDescription] = useState('');
    const [tag,setTag] = useState('');

    const onTitleChange=(e)=>{
        setTitle(e.target.value);     
        // console.log(e.target.value);
    }

    const onDescriptionChange=(e)=>{
        setDescription(e.target.value);
        // console.log(description);
    }

    const onTagChange=(e)=>{
        setTag(e.target.value);
        // onsole.log(tag);
    }

    //COMMENT written when the notes array was not being fetched from db, it was hard coded. The state variables of title has been tracked over and the title and description are now changed, now when we click, on submit, we collect those state variables and put in an object and insert it into the hard coded array and display it on the front end side, note we have not hit the database, this is why we do not have an id for this notes item. Thus we will not be able to track it. But in real scenario we will insert this into db, and then get an id and then show it to the front end. So basically addition will require 2 different db hits. Read the second version of this function.
    const fireOnSubmit=(e)=>{
        e.preventDefault();     //This will prevent the event to be query also it will stop the button to submit. 
        let obj={};
        obj.title=title;
        obj.description=description;
        obj.tag=tag;
        // console.log(obj);
        document.getElementById('formTitle').value="";
        document.getElementById('formDescription').value="";
        document.getElementById('formTag').value="";
        addNote(obj);       //This is the global context api variable and it will be called using this parameter.
        alertChange({
            message : "Note Added Successfully.",
            type : "success",
            id : ''
        });
    }


    //Another implementation of this fireOnSubmit method is added in the harry.docs file, and he has done it differently, this is from lecutre number 63. You may watch it if you want a different approach.


    return (
        <>
            <div>
                <div className="container my-3">
                    <h1>Add a note</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formTitle">Title</label>
                            <input type="text" className="form-control" name="title" id="formTitle" onChange={onTitleChange} aria-describedby="emailHelp" placeholder="Enter Title" />
                            {/* onChange is the method that can be used to track the change in this field, it always sends in an event object, this event object is being received in the method and we use it to track the changes. This is exactly how we are able to create a state variable out of 'title' which on change will keep on updating the states. */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="formDescription">Description</label>
                            <input type="text" className="form-control" name="description" onChange={onDescriptionChange} id="formDescription" placeholder="Post..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formTag">Tag</label>
                            <input type="text" className="form-control" name="tag" onChange={onTagChange} id="formTag" placeholder="Tag" />
                        </div>
                        <button type="submit" onClick={fireOnSubmit} className="btn btn-primary">Add note</button>
                    </form>
                </div>
            </div>
        </>
    )
}
