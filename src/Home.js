import React, { useContext } from "react";
import { userContext } from './UserHandleContext';


export function Home() {
    const sharedData = useContext(userContext);
    


    return (
        <div>
            {sharedData.currentUser?
                <div>
                    <p>You are in {sharedData.currentUser.userName}</p>
                    <p onClick={sharedData.logout}>Log Out</p>
                </div>
                :
                <div>
                 <p>You are out</p>
                    <p>Log in</p>
                </div>
            }
           
        </div>
    )
}