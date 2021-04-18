import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {auth, provider} from "./firebase.js"
import { actionTypes } from './reducer.js';
import { useStateValue } from './StateProvider.js';


import "./Login.css"

function Login()
{
   const [ {user}, dispatch] = useStateValue();

    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(result=> {
        dispatch({
       type: actionTypes.SET_USER,
       user: result.user,
     });



        console.log(result);
      }).catch(error => alert(error.message))
    }



    return (
      <div className= "login">
          <div className = "login_logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
           alt="" />
          <img src="http://www.ismj.in/wp-content/uploads/2019/11/FB-logo_equitypandit.gif"
           alt="" />
          </div>


            <Button type = "submit" onClick = {signIn}>
            sign In

            </Button>
      </div>

    );

}

export default Login;
