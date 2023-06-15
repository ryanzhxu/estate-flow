import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/userSlice";
import "./Login.css";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email: email,
                password: password,
                loggedIn: true,
            })
        );

        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Estate Flow</h1>
                <input type="email" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-btn">Log in</button>
            </form>
        </div>
    );
};

export default LoginScreen;