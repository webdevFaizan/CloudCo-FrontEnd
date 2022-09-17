import React, {useEffect} from 'react'

import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  useEffect(()=>{
    // console.log(location.pathname);
  },[location])
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
                <li className={`nav-item`}>
                  <button className="btn btn-sm btn-primary mx-1" style={{color:'#000'}}>
                    <Link className="nav-link active" to="/login">Login <span className="sr-only">(current)</span></Link>
                  </button>
                </li>
                <li className={`nav-item`}>              
                  <button className="btn btn-sm btn-primary mx-1">
                      <Link className="nav-link active" to="/signup">Signup <span className="sr-only">(current)</span></Link>                
                  </button>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
