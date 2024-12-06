import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLogin = true;
  const isAdmin = true;

  return (
    <nav className="flex justify-between items-center h-20 px-5 bg-gray-100">
      <h4 className="text-2xl font-bold">Movie</h4>
      <div className="flex gap-5 text-base">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/movies" className="hover:text-blue-500">
          Movies
        </Link>
        {isLogin ? (
          <>
            <Link to="/profile" className="hover:text-blue-500">
              Profile
            </Link>
            {isAdmin && (
              <Link to="/admin" className="hover:text-blue-500">
                Dashboard
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
            <Link to="/signup" className="hover:text-blue-500">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
