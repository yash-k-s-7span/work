
import { useState } from "react"
export default function LoggedIn(){
    const [isLoggedIn,setLoggedIn] = useState(false)
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'Logged In':'Logged OUt'}</div>
        </div>
    )
}