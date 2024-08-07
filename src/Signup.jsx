import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "./firebase/firebaseconfig"
import { Link, useNavigate } from "react-router-dom"

function Signup(){
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [pwd,setPwd] = useState()

    let navigate = useNavigate()

    async function register(e){
        e.preventDefault()
        console.log(name,email,pwd)

        let userCredentials = await createUserWithEmailAndPassword(auth,email,pwd)
        await updateProfile(auth.currentUser,{
            displayName : name
        })

        navigate("/signin")
    }

    return (
        <form class="signup">
            <h1>Sign Up</h1>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name:" />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email:" />
            <input onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="Password:" />

            <button type="submit" onClick={register}>Sign Up</button>
            <Link to="/signin">Are You An Existing User? Sign In</Link>
        </form>
    )
}

export default Signup