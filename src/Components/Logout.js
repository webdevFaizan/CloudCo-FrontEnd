import React, {useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AlertContext from '../Context/Alert/AlertContext'

function Logout(props) {
    // const logoutRender=()=>{
    //     props.tokenChange(localStorage.getItem('auth_token'));
    // }
    let navigate = useNavigate(); 
    const context = useContext(AlertContext);
    const {alertChange}=context;
    
    useEffect(()=>{
        props.tokenChange(localStorage.removeItem('auth_token'));
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
    <div>
        In the logout component
    </div>
  )
}

export default Logout;    