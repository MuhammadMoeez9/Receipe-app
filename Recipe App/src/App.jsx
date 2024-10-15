import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/HeroSec";
import RecipeList from "./Components/Recipies";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import { auth } from "./Components/Firebase";
import UploadRecipeForm from "./Components/UploadRecipeForm";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./Components/Firebase";
import Footer from "./Components/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesCollection = collection(firestore, "recipes");
      const recipeSnapshot = await getDocs(recipesCollection);
      const recipeList = recipeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipeList);
    };

    fetchRecipes();
  }, []); // Fetch recipes on mount

  const handleRecipeUpload = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <Router>
      <Navbar recipes={recipes} user={user} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/RecipeList" element={<RecipeList recipes={recipes} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {user && (
          <Route
            path="/upload-recipe"
            element={<UploadRecipeForm onRecipeUpload={handleRecipeUpload} />}
          />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
