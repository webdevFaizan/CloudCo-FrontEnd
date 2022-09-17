import React,{useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AlertContext from '../Context/Alert/AlertContext'

function Signup(){
    let navigate = useNavigate();
    let context = useContext(AlertContext);
    let {alertChange} =context;

    const host='http://localhost:5000';
    // All the below function could have been combined into once json object, but I prefer to add them by this way.
    const [email, setEmail] = useState('');  
    const [name, setName] = useState('');  
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const onNameChange=(e)=>{
        setName(e.target.value);
        // console.log(e.target.value);
    }

    const onEmailChange=(e)=>{
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    
    const onPasswordChange=(e)=>{
        setPassword(e.target.value);     
        // console.log(description);
    }

    const onConfirmPasswordChange=(e)=>{
        setConfirmPassword(e.target.value);     
        // console.log(description);
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        if(confirmpassword!==password){
            console.log("Incorrrect Password");
            window.alert("Password did not match")
            return;
        }        
        let obj={
            name:name,
            email:email,
            password: password
        }
        console.log(obj);
        let url = `${host}/api/auth/createuser`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'            
        },
            body : JSON.stringify(obj)
        });

        const data =await response.json();
        console.log(data);
        if(data.success===true){            
            localStorage.setItem('auth_token', data.auth_token)
            console.log("auth token in local storage is");
            console.log(localStorage.getItem('auth_token'));
            navigate('/'); 
            alertChange({
                message : "Sign Up Successful, Logged In",
                type : "success",
                id : ''
            });
        }
        else{
            window.alert("Invalid credentials")
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleOnSubmit}>
                    {/* There is benefit of using the onSubmit method, we can add the following checks on individual components like the minLength and required, this will check for the minimum requirement criteria in the front end only, even the password and confirm password are same of not this could be checked in the front end, and we could notify the user about its status.*/}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={onNameChange} aria-describedby="emailHelp" minLength={1} required/>               
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={onEmailChange} aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" className="form-control" onChange={onPasswordChange} id="exampleInputPassword1" minLength={1} required/>
                    </div>       
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" onChange={onConfirmPasswordChange} id="exampleInputPassword2" minLength={1} required/>
                    </div>                
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Signup
