
import SignOut from "./SignOut";
import { useState } from "react";



export default function Login()
{  
    const[data, setData] = useState()
    
    function handleLogin(){
        var userid = document.getElementById("UserId").value;
        var password = document.getElementById("Password").value;
        if(userid==data && password==data){
            alert("Login Success Fully");
        }
    }
    return(
        <> 
         <form className="form">
            <h2>Login Here</h2>
            <dl>
                <lable>User Id</lable>
                <dd><input type="text" id="UserId"/></dd>
                <label>Password</label>
                <dd><input type="password" id="Password" /></dd>
            </dl>
            <button className="Login" onClick={handleLogin}>Login</button>
            <button className="btn"><SignOut/></button>
         </form>
        </>
    )
}