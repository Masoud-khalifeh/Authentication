import React,{ useState,createContext} from "react";

export const userContext=createContext();


export  function UserHandleContext (props) {

const [user,setUser]=useState([]);

function addUser(newUser){
setUser([...user,{...newUser,logStatus:true}])
}

return(
    <userContext.Provider value={{...user,addUser}}>
        {props.children}
    </userContext.Provider>
)

}