import { useState } from "react"


type AuthUser = {
    name:string,
    email:string
}
export default function Users() {
    // const [user,setUser] = useState<AuthUser | null>(null);
    const [user,setUser] = useState<AuthUser>({} as AuthUser);
    const handleLoggedIn = () => {
        setUser({
            name:"yash",
            email:"yashsolanki1622@gmail.com"
        })
    }
    // const handleLougout = () => {
    //     setUser(null)
    // }
    return(
        <div>
            <button onClick={handleLoggedIn}>Login</button>
            {/* <button onClick={handleLougout}>Logout</button> */}
            <div>
                {/* <h1>User name {user?.name}</h1> If we use the first useState then it should tell use ? if is not null then acccess that */}
                {/* With using the second useState */}
                <h1>User name {user.name}</h1>

                <h1>User email {user?.email}</h1>
            </div>
        </div>
    )
}