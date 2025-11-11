// AuthLanding.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center w-96">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="mb-6">Open the auth pages for the Odoo Product Card Generator</p>

        <div className="flex flex-col gap-3">
          <Link to="/login" className="block py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
          <Link to="/register" className="block py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">Register</Link>
        </div>
      </div>
    </div>
  );
}
