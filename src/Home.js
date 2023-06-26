import React, { useContext } from "react";
import { userContext } from './UserHandleContext';
import { Link } from "react-router-dom";
import "./Home.css";


export function Home() {
    const sharedData = useContext(userContext);



    return (
        <div className="home">
            <p>
                Welcome to This Website.
                Please Login!
            </p>
            <p className="link">
                    <Link to="/login" >LOG IN</Link> /
                    <Link to="/signin" >SIGN IN</Link>
            </p>

        </div>
    )
}