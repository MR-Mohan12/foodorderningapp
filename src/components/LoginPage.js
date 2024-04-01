import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      // Successful login logic (you can redirect to another page)
      console.log("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="w-96 bg-white p-8 rounded-md shadow-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 m-4 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
        <Link  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none" to="login/register">Resigter</Link>
      </div>
    </div>
  );
};

export default LoginPage;
