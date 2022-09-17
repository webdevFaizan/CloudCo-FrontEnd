import React,{useState} from 'react'

function Login() {

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
        console.log(obj);

        let url = `${host}/api/auth/login`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            
        },
        body : JSON.stringify(obj)
    });

        const data =await response.json();
        console.log(data);

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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login
