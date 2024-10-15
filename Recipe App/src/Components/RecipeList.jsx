import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Listen for real-time updates from Firestore
    const unsubscribe = onSnapshot(
      collection(firestore, "recipes"),
      (snapshot) => {
        const recipeList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(recipeList); // Update state with fetched recipes
      },
      (error) => {
        console.error("Error fetching recipes: ", error);
      }
    );

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }} // Set size for images
              />
              <h2>{recipe.name}</h2>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instructions.join(". ")}
              </p>
            </div>
          ))
        ) : (
          <p>No recipes available.</p> // Handle the case where no recipes exist
        )}
      </div>
    </div>
  );
};

export default RecipeList;
