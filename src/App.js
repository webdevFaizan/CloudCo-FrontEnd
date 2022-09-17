import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";
import NoteState from "./Context/Note/NoteState";
import AlertState from "./Context/Alert/AlertState";



const App = () => {  
  const [token, setToken] = useState(localStorage.getItem('auth_token'));
  const tokenChange =(auth_token)=>{
    setToken(auth_token);
  }
  return (
    <>
      <NoteState>
        <AlertState>
          <Router>
            <Navbar token={token} />
            <div className="alert container" style={{minHeight : '70px', position: 'relative'}}>
            <Alert />
            </div>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/about' element={<About/>}/>                             
                <Route exact path='/login' element={<Login tokenChange={tokenChange}/>}/>
                <Route exact path='/signup' element={<Signup tokenChange={tokenChange}/>}/>
                <Route exact path='/logout' element={<Logout tokenChange={tokenChange}/>}/>
              </Routes>
            </div>
          </Router>
        </AlertState>          
      </NoteState>
    </>
  )
}
export default App