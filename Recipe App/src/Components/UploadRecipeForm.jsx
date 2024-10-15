import React, { useState, useEffect } from "react";
import { firestore, storage, auth } from "./Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UploadRecipeForm = ({ onRecipeUpload }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load data from localStorage if it exists
    const savedRecipe = JSON.parse(localStorage.getItem("uploadedRecipe"));
    if (savedRecipe) {
      setRecipe(savedRecipe.recipe);
      setImageFile(savedRecipe.imageFile);
      setImageUrl(savedRecipe.imageUrl);
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Save recipe state to localStorage whenever it changes
    localStorage.setItem(
      "uploadedRecipe",
      JSON.stringify({ recipe, imageFile, imageUrl })
    );
  }, [recipe, imageFile, imageUrl]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setImageUrl(""); // Clear the URL if a file is uploaded
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageFile(null); // Clear the file if a URL is provided
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let finalImageUrl = imageUrl;

      if (imageFile) {
        const storageRef = ref(storage, `recipes/${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      }

      const recipeData = {
        ...recipe,
        ingredients: recipe.ingredients.split(","),
        instructions: recipe.instructions.split(". "),
        image: finalImageUrl || recipe.image,
        userId: user?.uid || "anonymous",
      };

      const docRef = await addDoc(collection(firestore, "recipes"), recipeData);
      console.log("Document written with ID: ", docRef.id);

      onRecipeUpload(recipeData);
      alert("Recipe uploaded successfully");
      localStorage.removeItem("uploadedRecipe"); // Clear localStorage on successful upload
      navigate("/RecipeList");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error uploading recipe: " + error.message);
    }
  };

  return user ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (comma separated)"
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />
      <textarea
        name="instructions"
        placeholder="Instructions (separate by full stop)"
        value={recipe.instructions}
        onChange={handleChange}
        required
      />

      <div>
        <label>Upload Image File:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}
      </div>

      <div>
        <label>or Enter Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleUrlChange}
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}
      </div>

      <button type="submit">Upload Recipe</button>
    </form>
  ) : (
    <p>Please log in to upload a recipe.</p>
  );
};

export default UploadRecipeForm;
