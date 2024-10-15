// src/Components/Navbar.jsx
import React, { useState } from "react";
import "./../Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase"; // Ensure the correct path to your firebase.js file
import { signOut } from "firebase/auth"; // Import signOut

const Navbar = ({ recipes, setFilteredRecipes, user }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filteredRecipes); // Pass the filtered recipes to the parent
  };

  const handleLogout = async () => {
    await signOut(auth); // Sign out the user
  };
  {
    user ? (
      <li className="nav-item">
        <button className="nav-link" onClick={handleLogout}>
          Logout
        </button>
      </li>
    ) : (
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    );
  }
  const Navbar = ({ user }) => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/RecipeList">Recipes</Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/upload-recipe">Upload Recipe</Link>{" "}
                {/* Only show this if user is logged in */}
              </li>
              <li>
                <button onClick={() => auth.signOut()}>Logout</button>{" "}
                {/* Log out button */}
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mx-2 orange-text" href="#" id="logo">
        Recipe Verse
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isCollapsed ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/RecipeList">
              Recipe
            </Link>
          </li>
          <li className="nav-item">
            {user ? ( // Check if user is logged in
              <a
                className="nav-link"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={handleSearchSubmit}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
