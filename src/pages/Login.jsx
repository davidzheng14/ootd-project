import { useState } from "react";
import { app } from "../firebase.js";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const auth = getAuth(app);

    async function signUp() {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    }
    
    async function login() {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    }

    return(
        <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            <button onClick={signUp}>Sign Up</button>
            <button onClick={login}>Sign In</button>
        </div>
    );
}