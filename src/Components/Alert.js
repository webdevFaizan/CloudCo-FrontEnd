import React,{useContext} from 'react';
// import AlertState from '../Context/Alert/AlertState';
import AlertContext from '../Context/Alert/AlertContext';

const Alert = (props) => {
  const context  = useContext(AlertContext);
  const {alert} =context;

  const capitalise = (word) =>{
      const temp = word.toLowerCase();
      return temp.charAt(0).toUpperCase() + temp.slice(1);
  }  

  return (
    <div className="alertMessage container" style={{position :'absolute'}}>
        {
            alert.message.length>0?(<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(alert.type+ " : ")}</strong>{alert.message}        
            </div>):''
        }
    </div>
  )
}
export default Alert