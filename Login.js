import React, { useState } from 'react';
import users from ".//Name";
import "../Login.css"

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );
    
        if (foundUser) {
            alert("Login succesful");
            setError("");
        }else {
            alert("Invalid username or password");
            setError("Invalid login")
        }
    };

    return (
        <div className="Login container">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="Login">Login</button> 
                </form>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
}
export default Login;