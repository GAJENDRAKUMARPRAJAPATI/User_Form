import Login from './Login';
import './Style.css';
export default function Register()
{ 
    
    function handleRegister(){
       alert("Register Success Fully");
    }
    return(
        <>
         <form className='form'>
            <h2>Register Here</h2>
            <dl>
                <label>User Name</label>
                <dd><input type="text"/></dd>
                <lable>User Id</lable>
                <dd><input type="text"/></dd>
                <label>Email</label>
                <dd><input type="email"/></dd>
                <label>Password</label>
                <dd><input type="password"/></dd>
            </dl>
            <button className='Reg' onClick={handleRegister}>Register</button>
         </form>
         <br/> <br/>
         <Login/>
        </>
    )
}