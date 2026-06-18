import { useState } from "react";

export function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();




    return(
        <div>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <div>Login</div>
        </div>
    );
}