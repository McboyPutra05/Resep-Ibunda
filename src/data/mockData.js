export const mockRecipes = [
  {
    id: 1,
    name: "Creamy Garlic Parmesan Pasta",
    description: "A rich and creamy pasta dish with garlic and parmesan that comes together in just 20 minutes.",
    image: "/assets/Creamy Garlic Parmesan Pasta.jpeg",
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
    image: "/assets/Avocado Toast with Poached Egg.jpg",
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
    image: "/assets/ChickenKatsu.jpeg",
    time: 20,
    servings: 2,
    difficulty: "Easy",
    categories: ["Breakfast", "Easy", "Dinner"],
    ingredients: [
      "2 pieces of boneless chicken breast (about 300-400 grams)",
      "Salt to taste",
      "Black pepper to taste",
      "1 egg",
      "50 grams of wheat flour",
      "100 grams of breadcrumbs (panko)",
      "Enough cooking oil (for frying)"
    ],
    instructions: [
      "Flatten the chicken breast using a meat mallet or the back of a knife until it is an even thickness (about 1 cm).",
      "Sprinkle both sides of the chicken with a little salt and black pepper. Let sit for 10 minutes.",
      "Coat the chicken pieces with flour, making sure they are evenly coated, then pat to remove excess flour.",
      "Dip the chicken into the beaten egg until completely coated.",
      "Finally, coat the chicken with breadcrumbs (panko), pressing gently so that the panko sticks well.",
      "Heat cooking oil in a pan over medium heat (the oil should be enough for deep frying, about 2-3 cm).",
      "AnRemove and drain on oil paper to remove excess oil.",
      "Potong ayam katsu menjadi irisan setebal 1-2 cm."
    ],
    notes: "Serve on a plate with shredded cabbage, white rice, and tonkatsu sauce on the side."
  }
];