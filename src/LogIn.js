import React, { useState, useContext } from "react";
import { userContext } from './UserHandleContext';
import { Link,useNavigate } from "react-router-dom";

export function LogIn() {
    const [user, setUser] = useState([]);

    const sharedData = useContext(userContext);

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

    function submitHandler(evt) {
        evt.preventDefault();
        sharedData.login(user);
        setUser({ userName: '', password: '' });
              
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="userName">User Name : </label>
                <input type="text" name="userName" id="userName" value={user.userName} onChange={changeHandler} />
                <label htmlFor="passWord">Password : </label>
                <input type="password" name="password" id="password" value={user.password} onChange={changeHandler} />
                <button>Log In</button>

            </form>
            <p>Not a Member? <Link to="/signin">Sign In</Link></p>
        </div>
    )
}