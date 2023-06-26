import React, { useState, createContext, useEffect, } from "react";

export const userContext = createContext();

export function UserHandleContext(props) {
    const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")));
    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem("currentUser")));


    let timeoutId; // Declare the timeout identifier variable

    function startTimer() {
        // Clear previous timeout if it exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Start a new timeout
        timeoutId = setTimeout(() => {
            // Timeout logic
            logout()
        }, 300000); // 5 seconds
    }




    window.addEventListener("keydown", startTimer);
    window.addEventListener("mousemove", startTimer)


    function addUser(newUser) {
        setUsers([...users, { ...newUser, logStatus: true }]);
        setCurrentUser(newUser);
    }

    useEffect(() => {
        window.localStorage.setItem("users", JSON.stringify(users));
    }, [users]);


    useEffect(() => {
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);


    function login(userInfo) {
        const updatedUser = users.map((x) => {
            if (x.userName === userInfo.userName) {
                if (x.password === userInfo.password) {
                    setCurrentUser({ ...x, logStatus: true });
                    return { ...x, logStatus: true };
                } else {
                    return x;
                }
            } else {
                return x;
            }
        });
        setUsers(updatedUser);
    }

    function logout() {
        setCurrentUser("");
    }

    return (
        <userContext.Provider value={{ users, addUser, login, currentUser, logout }}>
            {props.children}
        </userContext.Provider>
    );
}
