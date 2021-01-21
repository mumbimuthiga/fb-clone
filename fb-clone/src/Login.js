import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import fbimg from "./images/fbimg.png"
function Login() {
    const signin=(e)=>{
        e.preventDefault();

    }
    return (
        
        <div className="login">
        <div className="login__logo">
        
       <img src="https://img.icons8.com/color/256/000000/facebook-circled--v4.png" alt="facebook">
       </img>
       <img src={fbimg} className="fb_name" alt=""></img>
       
        </div>
        <div class="btn__login">
<Button type="submit"onClick={signin}>Sign In</Button>
      </div>  
     
            
        </div>
    )
}

export default Login