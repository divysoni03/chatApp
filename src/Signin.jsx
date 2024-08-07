import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase/firebaseconfig"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signin(){

    let [email,setEmail] = useState()
    let [pwd,setPwd] = useState()

    let navigate = useNavigate()

    async function login(e){
        e.preventDefault()
        let userCredentials = await signInWithEmailAndPassword(auth,email,pwd)
        
        navigate("/chatlist")
    }
    return (
        <form class="signin">
            <h1>Sign In</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email:" />
            <input onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="Password:" />

            <button onClick={login}>Sign In</button>
            <Link to="/">Are You A New User? Sign Up</Link>
        </form>
    )
}

export default Signin