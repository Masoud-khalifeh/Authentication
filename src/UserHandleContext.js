import React, { useState, createContext, useEffect, } from "react";

export const userContext = createContext();

export function UserHandleContext(props) {
    const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem("users")));
    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem("currentUser")));
    const [errorMessage, setErrorMessage] = useState("");


    let timeoutId; // Declare the timeout identifier variable

    function startTimer() {
        // Clear previous timeout if it exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            logout()
        }, 300000);
    }


    function resetErrorMsg(text) {
        setErrorMessage(text)
    }



    window.addEventListener("keydown", startTimer);
    window.addEventListener("mousemove", startTimer)


    function addUser(newUser) {
        if (users) {
            const foundUser = users.find((item) => item.email === newUser.email);
            if (foundUser) {
                setErrorMessage("This Email Address Already Exists!")
            } else {
                setUsers([...users, { ...newUser, logStatus: true }]);
                setCurrentUser(newUser);
            }
        } else {
            setUsers([{ ...newUser, logStatus: true }]);
            setCurrentUser(newUser);
        }

    }

    useEffect(() => {
        window.localStorage.setItem("users", JSON.stringify(users));
    }, [users]);


    useEffect(() => {
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);


    function login(userInfo) {
        if (users) {
            const updatedUser = users.map((x) => {
                if (x.email === userInfo.email) {
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

    }

    function logout() {
        setCurrentUser("");
    }

    return (
        <userContext.Provider value={{ users, addUser, login, currentUser, logout, errorMessage, resetErrorMsg }}>
            {props.children}
        </userContext.Provider>
    );
}
