const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

let recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "/images/spaghetti-carbonara.jpg",
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
    image: "/images/chicken-tikka-masala.jpg",
  },
  {
    title: "Beef Stroganoff",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
    image: "/images/beef-stroganoff.jpg",
  },
];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.post("/api/recipes", upload.single("image"), (req, res) => {
  const { title, description } = req.body;
  const image = `/uploads/${req.file.filename}`;

  const newRecipe = { title, description, image };
  recipes.push(newRecipe);

  res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});