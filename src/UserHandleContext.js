import React, { useState, createContext, useEffect } from "react";

export const userContext = createContext();


export function UserHandleContext(props) {

    const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")));
    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem("currentUser")))

    function addUser(newUser) {
        setUsers([...users, { ...newUser, logStatus: true }]);
    }

    useEffect(() => {
        window.localStorage.setItem("users", JSON.stringify(users))
    }, [users]);
    
    useEffect(() => {
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }, [currentUser])


    function login(userInfo) {
        const updatedUser = users.map(x => {
            if (x.userName === userInfo.userName) {
                if (x.password === userInfo.password) {
                    setCurrentUser(x);
                    return { ...x, logStatus: true }

                } else {
                    return x;
                }
            } else {
                return x
            }
        });
        setUsers(updatedUser);

    }


    function logout() {
        setCurrentUser("")
    }

    return (
        <userContext.Provider value={{ users, addUser, login, currentUser, logout }}>
            {props.children}
        </userContext.Provider>
    )

}