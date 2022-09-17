import React,{useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import AlertContext from '../Context/Alert/AlertContext';

function Login(props) {

    const context = useContext(AlertContext);
    const {alertChange} = context;
    let navigate = useNavigate();       //useHistory was replaced by useNavigate in react router dom package, this will be used to take your page from page to another.

    const host='http://localhost:5000'

    const [email,setEmail] = useState('');  
    const [password,setPassword] = useState('');

    const onEmailChange=(e)=>{
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    
    const onPasswordChange=(e)=>{
        setPassword(e.target.value);     
        // console.log(description);
    }

    const onSubmit=async (e)=>{        
        e.preventDefault();
        
        let obj={
            email:email,
            password: password
        }        
        let url = `${host}/api/auth/login`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'            
        },
        body : JSON.stringify(obj)
    });

        const data =await response.json();
        if(data.success===true){
            // localStorage.auth_token = data.auth_token;
            localStorage.setItem('auth_token', data.auth_token)
            console.log("auth token in local storage is");
            console.log(localStorage.getItem('auth_token'));
            props.tokenChange(localStorage.getItem('auth_token'));
            navigate('/');      //This navigate functionality is taken from useNavigate, it will take your react based application to different pages, this is useful in the case of login is complete, or if the login has failed, or if the user is trying to signin but the email id does not exist and he needs to sign up.
            alertChange({
                message : "Logged In",
                type : "success",
                id : ''
            });
        }
        else{
            // window.alert("Invalid credentials");
            alertChange({
                message : "Invalid Credentials",
                type : "danger",
                id : ''
            });
        }
    }

    return (
    <>
        <div>
            {/* We could have integrated the onClick handler when we click the button of type submit, or we could handle the onSubmit on the form because the form gets submitted. */}
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={onEmailChange} aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input type="password" className="form-control" onChange={onPasswordChange} id="exampleInputPassword1 "/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </>
  )
}

export default Login
