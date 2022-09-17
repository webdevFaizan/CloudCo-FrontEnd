import React, {useEffect,useContext} from 'react'

import {Link,useLocation} from 'react-router-dom'
import AlertContext from "../Context/Alert/AlertContext"


const Navbar = (props) => {
  const context=useContext(AlertContext);
  const {alertChange} =context;
  
  const location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname);
  },[location]);
  const logoutFunction=()=>{
    localStorage.removeItem('authToken');
    props.tokenChange(null)   //This is telling back the parent element that the authToken has been deleted, this will be used to display the correct buttons among logout, login, signup.
    alertChange({
      message : "Logged Out Successfully",
      type : "success",
      id : ''
    });
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${location.pathname==="/"?"active":""}`}>
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className={`nav-item ${location.pathname==="/about"?"active":""}`}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="credentials d-flex">
            <div className="collapse navbar-collapse " >
              <ul className="navbar-nav mr-auto">
                {
                  !props.token?
                      (<li className={`nav-item`}>
                        <button className="btn btn-sm btn-primary mx-1" style={{color:'#000'}}>
                          <Link className="nav-link active" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </button>
                      </li>):''
                }
                { 
                  !props.token?    
                      (<li className={`nav-item`}>              
                        <button className="btn btn-sm btn-primary mx-1">
                            <Link className="nav-link active" to="/signup">Signup <span className="sr-only">(current)</span></Link>                
                        </button>
                      </li>):''
                }
                {
                  props.token?(
                      <li className={`nav-item`}>              
                        <button className="btn btn-sm btn-primary mx-1">
                            <Link className="nav-link active" to="/login" onClick={logoutFunction}>Logout <span className="sr-only">(current)</span></Link>                
                        </button>
                      </li>):''
                }
              </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
