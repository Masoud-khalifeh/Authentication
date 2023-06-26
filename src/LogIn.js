import React, { useState, useContext, useEffect } from "react";
import { userContext } from './UserHandleContext';
import { Link, useNavigate } from "react-router-dom";
import './LogIn.css';
import { Alert, AlertTitle } from '@mui/material';


export function LogIn() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [changeHappen, setChangeHappen] = useState(false)

    const sharedData = useContext(userContext);

    const navigate = useNavigate();

    //after submitting the form, it checks if the login was successful,then navigate to "dashboard"
    useEffect(() => {
        if (sharedData.currentUser) {
            navigate("/dashboard")
        }
    }, [changeHappen])



    function changeHandler(evt) {
        setChangeHappen(false);
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }

    function submitHandler(evt) {
        evt.preventDefault();
        sharedData.login(user);
        setUser({ email: '', password: '' });
        setChangeHappen(true)
    }

    return (
        <div className="login">
            <div className="error">
                {changeHappen &&
                    <Alert severity="error" >
                        <AlertTitle>Error</AlertTitle>
                        WRONG EMAIL OR PASSWORD
                    </Alert>
                }
            </div>
            <form onSubmit={submitHandler}>
                <p>
                    <input type="text" name="email" id="email" value={user.email} onChange={changeHandler} placeholder="Email" required />
                </p>
                <p>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeHandler} placeholder="PASSWORD" required />
                </p>

                <button>LOGIN</button>
                <p>Not a Member? <Link to="/signin" onClick={()=>sharedData.resetErrorMsg()} className="linkStyle">Sign In</Link ></p>
            </form>

        </div>
    )
}