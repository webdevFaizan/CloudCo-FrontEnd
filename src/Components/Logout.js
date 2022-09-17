import React, {useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AlertContext from '../Context/Alert/AlertContext'

// The main purpose of this function is not to output the logout component, it is simply to run a function just one time that the autorization token is deleted, so that no one use it again, and for that the best method is always the component did mount, since the component did mount method is run only once.
function Logout(props) {  
    let navigate = useNavigate();     //We want to go to the home page if someone has logged out, this is why just after logging out we will go there.
    const context = useContext(AlertContext);
    const {alertChange}=context;
    
    useEffect(()=>{
        props.tokenChange(localStorage.removeItem('authToken'));   //Auth token will be sent from the local storage.
        navigate('/');
        alertChange({
            message : "Logged Out Successfully",
            type : "success",
            id : ''
        });
        // eslint-disable-next-line
    },[]);


  return (
    // logoutRender();    
    // <div>
    //   {/* We need not even return this statement, since we do not want this method to be rendered, instead we just want to run the useEffect hook.*/}
    //     In the logout component
    // </div>
    <>
    </>
  )
}

export default Logout;    