import React, { useState, createContext } from "react";

export const userContext = createContext();


export function UserHandleContext(props) {

    const [user, setUser] = useState([]);
    const [currentUser,setCurrentUser]=useState("")

    function addUser(newUser) {
        setUser([...user, { ...newUser, logStatus: false }])
    }


    function login(userInfo) {
        const updatedUser = user.map(x => {
            if (x.userName === userInfo.userName) {
                if (x.password === userInfo.password) {
                    setCurrentUser(x);
                    return { ...x, logStatus: true }
                    
                }else{
                    return x;
                }
            } else{
                return x
            }
        });
        setUser(updatedUser);

    }


    function logout(){
        setCurrentUser("")
    }

    return (
        <userContext.Provider value={{ user, addUser, login,currentUser,logout }}>
            {props.children}
        </userContext.Provider>
    )

}