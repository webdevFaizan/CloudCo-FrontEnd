import React from "react";
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
import NoteState from "./Context/Note/NoteState";

const App = () => {
  return (
    <>
      <NoteState>
          <Router>
            <Navbar/>
            <div className="alert container" style={{minHeight : '70px', position: 'relative'}}>
              <Alert message={"No message for now"}/>
            </div>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/signup' element={<Signup/>}/>                
              </Routes>
            </div>
          </Router>
      </NoteState>
    </>
  )
}
export default App