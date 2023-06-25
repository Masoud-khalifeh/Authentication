import React, { useContext } from "react";
import { userContext } from './UserHandleContext';
import { Link } from "react-router-dom";


export function Home() {
    const sharedData = useContext(userContext);
    


    return (
        <div>
            {sharedData.currentUser?
                <div>
                    <p>You are in {sharedData.currentUser.userName}</p>
                    <a onClick={sharedData.logout}>Log Out</a>
                </div>
                :
                <div>
                 <p>You are out</p>
                 <Link to="/login" >lOGIN</Link>
                </div>
            }
           
        </div>
    )
}