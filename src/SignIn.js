import React, { useState, useContext } from "react";
import {userContext} from './UserHandleContext';
import {Link,useNavigate} from 'react-router-dom';

export function SignIn() {
    const [user, setUser] = useState({});
    const sharedData= useContext(userContext);


    const navigate=useNavigate();

    if(sharedData.currentUser){
        navigate("/") 
    }

    

   

    function changeHandler(evt) {
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }

function submitHandler (evt){
    evt.preventDefault();
    sharedData.addUser(user);
    setUser({userName:"",email:"",password:""});
    navigate("/", { replace: true });    
}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="userName">User Name : </label>
                    <input type="text" name="userName" id="userName" value={user.userName} onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="userName">Email : </label>
                    <input type="text" name="email" id="email" value={user.email} onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="passWord">Password : </label>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeHandler} />
                </p>
                {/* <p>
                    <label htmlFor="passWord2" >Repeat Your Password : </label>
                    <input type="password" name="password2" id="password2" value={user.passWord} onChange={changeHandler} />
                </p> */}
                <button>Sign IN</button>
            </form>
            <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </div>
    )
}