import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
    } else if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Add logic for user registration (e.g., API call)
      console.log("User registered successfully!");
      setError(""); // Clear any previous errors
      // You might want to redirect the user to the login page or another page
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="w-96 bg-white p-8 rounded-md shadow-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              name="username"
              className="border border-gray-300 p-2 w-full rounded-md"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 p-2 w-full rounded-md"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="border border-gray-300 p-2 w-full rounded-md"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
