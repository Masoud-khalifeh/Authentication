import React, {useState} from "react";

export function LogIn (){
const[user,setUser]=useState([])


function changeHandler(evt){
    setUser({...user,
        [evt.target.name]:evt.target.value
    })
}
    return(
        <div>
            <form>
                <label htmlFor="userName">User Name : </label>
            <input type="text" name="userName" id="userName" value={user.userName} onChange={changeHandler}/>
            <label htmlFor="passWord">Password : </label>
            <input type="password" name="password" id="password" value={user.passWord} onChange={changeHandler}/>
            <button>Log In</button>

            </form>
        </div>
    )
}