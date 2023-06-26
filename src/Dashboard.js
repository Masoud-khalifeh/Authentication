import React, { useContext, useEffect } from "react";
import { userContext } from './UserHandleContext';
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";


export function Dashboard() {
    const sharedData = useContext(userContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if (!sharedData.currentUser) {
            navigate('/login',{ replace: true })
        }
    },)
    

    return (
        <div className="Dashboard">
            <div className="left"></div>
            <div className="center">
                <div className="centerTop"></div>
                <div className="centerButtom"></div>
            </div>
            <div className="right">
                <div className="rightTop">
                    {sharedData.currentUser ?
                        <div className="link">
                            <p>Welcome {sharedData.currentUser.name}</p>
                            <p>
                                <Link onClick={sharedData.logout}>Log Out</Link>
                            </p>
                        </div>
                        :
                        null
                    }
                </div>
                <div className="rightButtom"></div>
            </div>




        </div>
    )
}