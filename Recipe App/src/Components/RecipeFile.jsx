import React, { useState, useEffect } from "react";
import "./Recipe.css";
import { useParams } from "react-router-dom";

const RecipeFile = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Define loading state

  // Simulate fetching the data
  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => {
      const data = {
        recipes: [
          {
            id: 16,
            name: "Japanese Ramen Soup",
            ingredients: [
              "Ramen noodles",
              "Chicken broth",
              "Soy sauce",
              "Mirin",
              "Sesame oil",
              "Shiitake mushrooms, sliced",
              "Bok choy, chopped",
              "Green onions, sliced",
              "Soft-boiled eggs",
              "Grilled chicken slices",
              "Norwegian seaweed (nori)",
            ],
            instructions: [
              "Cook ramen noodles according to package instructions and set aside.",
              "In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.",
              "Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.",
              "Divide the cooked noodles into serving bowls and ladle the hot broth over them.",
              "Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.",
              "Serve hot and enjoy the authentic Japanese ramen!",
            ],
            prepTimeMinutes: 20,
            cookTimeMinutes: 25,
            servings: 2,
            difficulty: "Medium",
            cuisine: "Japanese",
            caloriesPerServing: 480,
            tags: ["Ramen", "Japanese", "Soup", "Asian"],
            userId: 85,
            image: "https://cdn.dummyjson.com/recipe-images/16.webp",
            rating: 4.9,
            reviewCount: 38,
            mealType: ["Dinner"],
          },
        ],
        total: 50,
        skip: 0,
      };
      setRecipes(data.recipes);
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Simulate a delay of 2 seconds
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex" id="recipe">
      <h1>Recipes</h1>
      <div className="recipe-flex-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card" style={{ width: "18rem" }}>
            <img
              src={recipe.image}
              className="card-img-top"
              alt={recipe.name}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-title px-2"> Instruction</p>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFile;
