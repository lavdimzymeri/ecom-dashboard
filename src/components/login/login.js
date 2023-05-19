import Header from "../Header/header"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/add');
        }
    }, [])

    async function login() {
        console.warn(email, password);
        let item = { email, password };

        let result =  await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/add');

    }

    return (
        <>
            <div>
                <Header />
                <div className="col-sm-6 offset-sm-3">
                    <h1>Login Page</h1><br />

                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    <button onClick={login} className="btn btn-primary">Log In</button>
                </div>
            </div>
        </>
    )
}

export default Login;
