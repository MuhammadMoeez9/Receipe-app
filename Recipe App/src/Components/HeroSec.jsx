import styled from "styled-components";
import "./HeroSec.css";
import RecipeList from "./Recipies";
import React, { useState, useEffect } from "react";
import "./Recipe.css";

const Header = () => {
  const [recipes, setRecipes] = useState([]);

  // Simulate fetching the data
  useEffect(() => {
    const data = {
      recipes: [
        {
          id: 9,
          name: "Caprese Salad",
          ingredients: [
            "Tomatoes, sliced",
            "Fresh mozzarella cheese, sliced",
            "Fresh basil leaves",
            "Balsamic glaze",
            "Extra virgin olive oil",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
            "Tuck fresh basil leaves between the slices.",
            "Drizzle with balsamic glaze and extra virgin olive oil.",
            "Season with salt and pepper to taste.",
            "Serve immediately as a refreshing salad.",
          ],
          prepTimeMinutes: 10,
          cookTimeMinutes: 0,
          servings: 2,
          difficulty: "Easy",
          cuisine: "Italian",
          caloriesPerServing: 200,
          tags: ["Salad", "Caprese"],
          userId: 128,
          image: "https://cdn.dummyjson.com/recipe-images/9.webp",
          rating: 4.6,
          reviewCount: 82,
          mealType: ["Lunch"],
        },
        {
          id: 10,
          name: "Shrimp Scampi Pasta",
          ingredients: [
            "Linguine pasta",
            "Shrimp, peeled and deveined",
            "Garlic, minced",
            "White wine",
            "Lemon juice",
            "Red pepper flakes",
            "Fresh parsley, chopped",
            "Salt and pepper to taste",
          ],
          instructions: [
            "Cook linguine pasta according to package instructions In a skillet, sauté minced garlic in olive oil until fragrant Add shrimp and cook until pink and opaque Pour in white wine and lemon juice. Simmer until the sauce slightly thickens Season with red pepper flakes, salt, and pepper Toss cooked linguine in the shrimp scampi sauce Garnish with chopped fresh parsley before serving.",
          ],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          servings: 3,
          difficulty: "Medium",
          cuisine: "Italian",
          caloriesPerServing: 400,
          tags: ["Pasta", "Shrimp"],
          userId: 114,
          image: "https://cdn.dummyjson.com/recipe-images/10.webp",
          rating: 4.3,
          reviewCount: 5,
          mealType: ["Dinner"],
        },
        {
          id: 11,
          name: "Chicken Biryani",
          ingredients: [
            "Basmati rice",
            "Chicken, cut into pieces",
            "Onions, thinly sliced",
            "Tomatoes, chopped",
            "Yogurt",
            "Ginger-garlic paste",
            "Biryani masala",
            "Green chilies, sliced",
            "Fresh coriander leaves",
            "Mint leaves",
            "Ghee",
            "Salt to taste",
          ],
          instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt In a pot, sauté sliced onions until golden brown. Remove half for later use Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onionsCover and cook on low heat until the rice is fully cooked and aromatic Serve hot, garnished with additional coriander and mint leaves.",
          ],
          prepTimeMinutes: 30,
          cookTimeMinutes: 45,
          servings: 6,
          difficulty: "Medium",
          cuisine: "Pakistani",
          caloriesPerServing: 550,
          tags: [
            "Biryani",
            "Chicken",
            "Main course",
            "Indian",
            "Pakistani",
            "Asian",
          ],
          userId: 133,
          image: "https://cdn.dummyjson.com/recipe-images/11.webp",
          rating: 5,
          reviewCount: 32,
          mealType: ["Lunch", "Dinner"],
        },
        {
          id: 12,
          name: "Chicken Karahi",
          ingredients: [
            "Chicken, cut into pieces",
            "Tomatoes, chopped",
            "Green chilies, sliced",
            "Ginger, julienned",
            "Garlic, minced",
            "Coriander powder",
            "Cumin powder",
            "Red chili powder",
            "Garam masala",
            "Cooking oil",
            "Fresh coriander leaves",
            "Salt to taste",
          ],
          instructions: [
            "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
            "Add chicken pieces and cook until browned on all sides.",
            "Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.",
            "Cover and simmer until the chicken is tender and the oil separates from the masala.",
            "Garnish with fresh coriander leaves and serve hot with naan or rice.",
          ],
          prepTimeMinutes: 20,
          cookTimeMinutes: 30,
          servings: 4,
          difficulty: "Easy",
          cuisine: "Pakistani",
          caloriesPerServing: 420,
          tags: [
            "Chicken",
            "Karahi",
            "Main course",
            "Indian",
            "Pakistani",
            "Asian",
          ],
          userId: 49,
          image: "https://cdn.dummyjson.com/recipe-images/12.webp",
          rating: 4.8,
          reviewCount: 68,
          mealType: ["Lunch", "Dinner"],
        },
        {
          id: 13,
          name: "Aloo Keema",
          ingredients: [
            "Ground beef",
            "Potatoes, peeled and diced",
            "Onions, finely chopped",
            "Tomatoes, chopped",
            "Ginger-garlic paste",
            "Cumin powder",
            "Coriander powder",
            "Turmeric powder",
            "Red chili powder",
            "Cooking oil",
            "Fresh coriander leaves",
            "Salt to taste",
          ],
          instructions: [
            "In a pan, heat cooking oil and sauté chopped onions until golden brown. Add ginger-garlic paste and sauté until fragrant.Add ground beef and cook until browned. Drain excess oil if needed. Add diced potatoes, chopped tomatoes, and spices. Mix well.Cover and simmer until the potatoes are tender and the masala is well-cooked., Garnish with fresh coriander leaves and serve hot with naan or rice.",
          ],
          prepTimeMinutes: 25,
          cookTimeMinutes: 35,
          servings: 5,
          difficulty: "Medium",
          cuisine: "Pakistani",
          caloriesPerServing: 380,
          tags: ["Keema", "Potatoes", "Main course", "Pakistani", "Asian"],
          userId: 152,
          image: "https://cdn.dummyjson.com/recipe-images/13.webp",
          rating: 4.6,
          reviewCount: 53,
          mealType: ["Lunch", "Dinner"],
        },
        {
          id: 14,
          name: "Chapli Kebabs",
          ingredients: [
            "Ground beef",
            "Onions, finely chopped",
            "Tomatoes, finely chopped",
            "Green chilies, chopped",
            "Coriander leaves, chopped",
            "Pomegranate seeds",
            "Ginger-garlic paste",
            "Cumin powder",
            "Coriander powder",
            "Red chili powder",
            "Egg",
            "Cooking oil",
            "Salt to taste",
          ],
          instructions: [
            "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well Add an egg to bind the mixture and form into round flat kebabs Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides Serve hot with naan or mint chutney.",
          ],
          prepTimeMinutes: 30,
          cookTimeMinutes: 20,
          servings: 4,
          difficulty: "Medium",
          cuisine: "Pakistani",
          caloriesPerServing: 320,
          tags: ["Kebabs", "Beef", "Indian", "Pakistani", "Asian"],
          userId: 152,
          image: "https://cdn.dummyjson.com/recipe-images/14.webp",
          rating: 4.7,
          reviewCount: 98,
          mealType: ["Lunch", "Dinner", "Snacks"],
        },
        {
          id: 15,
          name: "Saag (Spinach) with Makki di Roti",
          ingredients: [
            "Mustard greens, washed and chopped",
            "Spinach, washed and chopped",
            "Cornmeal (makki ka atta)",
            "Onions, finely chopped",
            "Green chilies, chopped",
            "Ginger, grated",
            "Ghee",
            "Salt to taste",
          ],
          instructions: [
            "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown Add the greens paste and cook until it thickens Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads)  Cook the rotis on a griddle until golden brown Serve hot saag with makki di roti and a dollop of ghee.",
          ],
          prepTimeMinutes: 40,
          cookTimeMinutes: 30,
          servings: 3,
          difficulty: "Medium",
          cuisine: "Pakistani",
          caloriesPerServing: 280,
          tags: ["Saag", "Roti", "Main course", "Indian", "Pakistani", "Asian"],
          userId: 43,
          image: "https://cdn.dummyjson.com/recipe-images/15.webp",
          rating: 4.3,
          reviewCount: 86,
          mealType: ["Breakfast", "Lunch", "Dinner"],
        },
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
            "Cook ramen noodles according to package instructions and set aside In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender Divide the cooked noodles into serving bowls and ladle the hot broth over them Top with green onions, soft-boiled eggs, grilled chicken slices, and nori Serve hot and enjoy the authentic Japanese ramen!",
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
  }, []);

  return (
    <div>
      <HeroSection>
        <div className="heroInner">
          <span>
            <h1 id="Hero-Heading">Meal Planning Made Easy</h1>
            {/* Set href to the id of the target section */}
            <a href="#recipe" className="btn btn-light">
              Explore Now
            </a>
          </span>
        </div>
      </HeroSection>

      <br />
      <br />

      {/* Add id="loop" here so the button can scroll to this section */}

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
                <p>
                  {recipe.instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

// Styled-components for the Hero section
const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url("https://images.unsplash.com/photo-1521305916504-4a1121188589?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 20vh; /* Ensures the hero section takes the full viewport height */
  color: #fafafc;
  padding: 15rem 3rem 6rem;

  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }

  span {
    max-width: 50%;
  }

  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  a.btn {
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    background-color: orange;
    color: #333;
    border-radius: 5px;
  }

  a.btn:hover {
    background-color: #e9e9e9;
    color: #333;
  }

  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url("https://images.unsplash.com/photo-1521305916504-4a1121188589?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww");
    background-position: center;
    background-size: cover;
    padding-top: 7.5rem;
    height: 75vh;
  }
`;
