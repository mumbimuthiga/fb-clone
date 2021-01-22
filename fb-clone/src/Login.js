import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import fbimg from "./images/fbimg.png"
import {auth ,provider} from "./Firebase"
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    const [state,dispatch]=useStateValue();
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,

            })

        


            //console.log(result)
        })
        .catch((error)=>alert(error.message))

    }
    return (
        
        <div className="login">
        <div className="login__logo">
        
       <img src="https://img.icons8.com/color/256/000000/facebook-circled--v4.png" alt="facebook">
       </img>
       <img src={fbimg} className="fb_name" alt=""></img>
       
        </div>
        <div className="btn__login">
<Button type="submit"onClick={signin}>Sign In</Button>
      </div>  
     
            
        </div>
    )
}

export default Login
