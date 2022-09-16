import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/Note/NoteState";

const App = () => {
  return (
    <>
      <NoteState>
          <Router>
            <Navbar/>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/about' element={<About/>}/>
              </Routes>
            </div>
          </Router>
      </NoteState>
    </>
  )
}
export default App