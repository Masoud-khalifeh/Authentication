import React, { useState, useContext, useEffect } from "react";
import { userContext } from './UserHandleContext';
import { Link, useNavigate } from "react-router-dom";
import './LogIn.css';

export function LogIn() {
    const [user, setUser] = useState({ userName: '', password: '' });
    const [changeHappen, setChangeHappen] = useState(false)

    const sharedData = useContext(userContext);

    const navigate = useNavigate();

    //after submitting the form, it checks if the login was successful,then navigate to "Home"
    useEffect(() => {
        if (sharedData.currentUser) {
            navigate("/")
        }
    }, [changeHappen])



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
        setChangeHappen(!changeHappen)
    }

    return (
        <div className="login">
            <form onSubmit={submitHandler}>
                <p>
                    <input type="text" name="userName" id="userName" value={user.userName} onChange={changeHandler} placeholder="USERNAME"/>
                </p>
                <p>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeHandler}  placeholder="PASSWORD"/>
                </p>

                <button>LOGIN</button>
                <p>Not a Member? <Link to="/signin" className="linkStyle">Sign In</Link ></p>
            </form>
            
        </div>
    )
}