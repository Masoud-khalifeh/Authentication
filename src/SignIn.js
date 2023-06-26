import React, { useState, useContext } from "react";
import { userContext } from './UserHandleContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertTitle } from '@mui/material';
import './SignIn.css';

export function SignIn() {
    const [user, setUser] = useState({ name: "", email: "", password: "",RPassword:"" });
    const sharedData = useContext(userContext);


    const navigate = useNavigate();

    if (sharedData.currentUser) {
        navigate("/dashboard")
    }





    function changeHandler(evt) {
        sharedData.resetErrorMsg("");
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }

    function submitHandler(evt) {
        evt.preventDefault();
        if(user.password===user.RPassword){
            sharedData.addUser(user);
            setUser({ name: "", email: "", password: "",RPassword:"" });
            navigate("/dashboard", { replace: true });
        }else{
            sharedData.resetErrorMsg("PASSWORDS ARE NOT SAME!");
            setUser({ ...user, password: "",RPassword:"" });
        }
      
    }


    function checkPassword(){

    }


    return (
        <div className="SignIn">
            <div className="error">
                {sharedData.errorMessage &&
                    <Alert severity="error" >
                        <AlertTitle>Error</AlertTitle>
                        {sharedData.errorMessage}
                    </Alert>

                }

            </div>
            <form onSubmit={submitHandler}>
                <p>
                    <input type="text" name="name" id="name" value={user.name} onChange={changeHandler} placeholder="NAME" />
                </p>
                <p>
                    <input type="email" name="email" id="email" value={user.email} onChange={changeHandler} placeholder="EMAIL" />
                </p>
                <p>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeHandler} placeholder="PASSWORD" />
                </p>
                <p>
                    <input type="password" name="RPassword" id="RPassword" value={user.RPassword} onChange={changeHandler}   placeholder="REPEAT PASSWORD" />
                </p>
                
                <button>Sign IN</button>
                <p>Already Have an Account? <Link to="/login" onClick={()=> sharedData.resetErrorMsg("")} className="linkStyle">Login</Link></p>
            </form>
        </div>
    )
}