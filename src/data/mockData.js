export const mockRecipes = [
  {
    id: 1,
    name: "Creamy Garlic Parmesan Pasta",
    description: "A rich and creamy pasta dish with garlic and parmesan that comes together in just 20 minutes.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    // ✅ REVISI 1: Mengubah string menjadi array
    categories: ["Pasta", "Dinner", "Vegetarian", "Easy"],
    ingredients: [
      "8 oz fettuccine pasta",
      "2 tbsp butter",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup grated parmesan cheese",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "In a large skillet, melt butter over medium heat. Add garlic and sauté until fragrant.",
      "Pour in heavy cream and bring to a simmer.",
      "Stir in parmesan cheese until melted and sauce is smooth.",
      "Drain pasta and add to the sauce, tossing to coat.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh parsley and serve immediately."
    ],
    notes: "For extra flavor, add cooked chicken or shrimp to this dish."
  },
  {
    id: 2,
    name: "Avocado Toast with Poached Egg",
    description: "A healthy and delicious breakfast option packed with protein and good fats.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
    time: 15,
    servings: 2,
    difficulty: "Easy",
    // ✅ REVISI 2: Mengubah string menjadi array
    categories: ["Breakfast", "Healthy", "Easy"],
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp vinegar",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)"
    ],
    instructions: [
      "Toast the bread until golden and crisp.",
      "Mash the avocado and spread evenly on toast.",
      "Bring a pot of water to a gentle simmer and add vinegar.",
      "Crack eggs into separate small cups, then gently slide into water.",
      "Poach for 3-4 minutes until whites are set but yolks are still runny.",
      "Remove eggs with slotted spoon and place on avocado toast.",
      "Season with salt, pepper, and red pepper flakes if desired."
    ],
    notes: "For extra flavor, add crumbled feta cheese or cherry tomatoes."
  },
  {
    id: 3,
    name: "Chicken Katsu",
    description: "A healthy and delicious breakfast option packed with protein and good fats.",
    image: "./assets/Chicken Katsu.jpeg",
    time: 20,
    servings: 2,
    difficulty: "Easy",
    // ✅ REVISI 2: Mengubah string menjadi array
    categories: ["Breakfast", "Easy", "Dinner"],
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp vinegar",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)"
    ],
    instructions: [
      "Toast the bread until golden and crisp.",
      "Mash the avocado and spread evenly on toast.",
      "Bring a pot of water to a gentle simmer and add vinegar.",
      "Crack eggs into separate small cups, then gently slide into water.",
      "Poach for 3-4 minutes until whites are set but yolks are still runny.",
      "Remove eggs with slotted spoon and place on avocado toast.",
      "Season with salt, pepper, and red pepper flakes if desired."
    ],
    notes: "For extra flavor, add crumbled feta cheese or cherry tomatoes."
  }
];