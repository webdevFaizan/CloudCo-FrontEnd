import React, {useContext, useEffect}from 'react';
import NoteContext from '../Context/Note/NoteContext';
// import NoteState from '../Context/Note/NoteState';

const About = () => {
  const a=useContext(NoteContext);
  useEffect(()=>{
    a.updateState();
    // eslint-disable-next-line
  },[])
  return (
    <>
      This is About {a.state.name} and he is in class {a.state.roll}
    </>
  )
}

export default About
