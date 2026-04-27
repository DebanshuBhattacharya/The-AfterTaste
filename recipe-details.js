const recipes = {
  "classic-italian-pizza": {
    title: "Classic Italian Pizza",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    description: "Freshly baked pizza topped with mozzarella cheese, tomato sauce, olives, and basil leaves. A timeless favorite loved worldwide.",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Olives", "Fresh basil", "Olive oil"],
    steps: ["Preheat oven to 240°C.", "Roll out dough and spread tomato sauce.", "Top with cheese and olives.", "Bake 10–12 minutes.", "Finish with basil and olive oil."],
  },
  "loaded-cheese-burger": {
    title: "Loaded Cheese Burger",
    category: "Fast Food",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop",
    description: "Juicy grilled beef patty layered with cheddar cheese, lettuce, onions, and sauces inside toasted buns.",
    ingredients: ["Burger buns", "Beef patty", "Cheddar cheese", "Lettuce", "Onion slices", "Burger sauce"],
    steps: ["Season and grill the patty.", "Toast buns lightly.", "Melt cheese over patty.", "Assemble with lettuce, onion, and sauce.", "Serve hot."],
  },
  "creamy-alfredo-pasta": {
    title: "Creamy Alfredo Pasta",
    category: "Creamy",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    description: "Smooth creamy pasta tossed with herbs, mushrooms, garlic, and parmesan cheese for a rich, flavorful meal.",
    ingredients: ["Pasta", "Butter", "Garlic", "Mushrooms", "Cream", "Parmesan"],
    steps: ["Cook pasta until al dente.", "Sauté garlic and mushrooms in butter.", "Add cream and simmer.", "Mix in pasta and parmesan.", "Season and garnish."],
  },
  "royal-chicken-biryani": {
    title: "Royal Chicken Biryani",
    category: "Spicy",
    image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=1200&auto=format&fit=crop",
    description: "Aromatic basmati rice cooked with spices and tender chicken pieces. A true celebration of flavor.",
    ingredients: ["Basmati rice", "Chicken", "Yogurt", "Biryani masala", "Fried onions", "Saffron milk"],
    steps: ["Marinate chicken with spices and yogurt.", "Cook rice to 70%.", "Layer rice and chicken.", "Steam on low heat.", "Top with fried onions and serve."],
  },
  "chocolate-lava-cake": {
    title: "Chocolate Lava Cake",
    category: "Dessert",
    image: "https://plus.unsplash.com/premium_photo-1723507349136-09a2ee63721d?q=80&w=1200&auto=format&fit=crop",
    description: "Warm chocolate cake with a molten center, served best alongside a scoop of vanilla ice cream.",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla ice cream"],
    steps: ["Melt chocolate with butter.", "Whisk eggs and sugar.", "Fold in flour and chocolate.", "Bake in ramekins 10–12 minutes.", "Serve immediately."],
  },
  "signature-sushi-platter": {
    title: "Signature Sushi Platter",
    category: "Japanese",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1200&auto=format&fit=crop",
    description: "Fresh salmon, tuna, and avocado rolls paired with wasabi and soy for a balanced bite of flavor and texture.",
    ingredients: ["Sushi rice", "Nori sheets", "Salmon", "Tuna", "Avocado", "Soy sauce"],
    steps: ["Prepare seasoned sushi rice.", "Place rice on nori sheet.", "Add fish and avocado.", "Roll tightly and slice.", "Serve with soy and wasabi."],
  },
  "street-style-chicken-tacos": {
    title: "Street-Style Chicken Tacos",
    category: "Mexican",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    description: "Soft tortillas loaded with spiced chicken, pico de gallo, lime crema, and cilantro for a vibrant street-food experience.",
    ingredients: ["Tortillas", "Chicken", "Taco seasoning", "Pico de gallo", "Cilantro", "Lime crema"],
    steps: ["Cook chicken with taco seasoning.", "Warm tortillas.", "Fill with chicken and toppings.", "Add lime crema.", "Serve fresh."],
  },
  "mediterranean-power-bowl": {
    title: "Mediterranean Power Bowl",
    category: "Healthy",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
    description: "A colorful bowl of quinoa, chickpeas, roasted vegetables, olives, and feta drizzled with a lemon herb dressing.",
    ingredients: ["Quinoa", "Chickpeas", "Roasted vegetables", "Olives", "Feta", "Lemon herb dressing"],
    steps: ["Cook quinoa and roast vegetables.", "Assemble all ingredients in a bowl.", "Top with olives and feta.", "Drizzle dressing generously.", "Serve chilled or warm."],
  },
  "blueberry-pancake-stack": {
    title: "Blueberry Pancake Stack",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    description: "Fluffy pancakes layered with fresh blueberries, maple syrup, and whipped cream for a comforting breakfast treat.",
    ingredients: ["Flour", "Eggs", "Milk", "Blueberries", "Maple syrup", "Whipped cream"],
    steps: ["Whisk pancake batter until smooth.", "Cook pancakes on medium heat.", "Stack and layer with blueberries.", "Drizzle maple syrup.", "Top with whipped cream and serve."],
  },
  "garlic-butter-grilled-salmon": {
    title: "Garlic Butter Grilled Salmon",
    category: "Seafood",
    image: "https://plus.unsplash.com/premium_photo-1664472670740-76504463a146?w=600&auto=format&fit=crop&q=60",
    description: "Tender salmon fillet grilled with garlic butter, lemon zest, and herbs for a bright and savory weeknight meal.",
    ingredients: ["Salmon fillets", "Butter", "Garlic", "Lemon zest", "Parsley", "Salt and pepper"],
    steps: ["Season salmon with salt and pepper.", "Brush with garlic butter.", "Grill skin-side down first.", "Flip once and finish cooking.", "Top with lemon zest and parsley."],
  },
  "thai-coconut-veggie-curry": {
    title: "Thai Coconut Veggie Curry",
    category: "Vegan",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    description: "Aromatic coconut curry loaded with colorful vegetables, tofu, and basil served over steamed jasmine rice.",
    ingredients: ["Coconut milk", "Red curry paste", "Tofu", "Bell peppers", "Carrots", "Thai basil"],
    steps: ["Sauté curry paste briefly.", "Add coconut milk and simmer.", "Add tofu and vegetables.", "Cook until vegetables are tender.", "Finish with basil and serve with rice."],
  },
};

/* ── Load Recipe ────────────────────────────────── */
const recipeKey = new URLSearchParams(window.location.search).get("recipe");
const recipe = recipes[recipeKey] || recipes["classic-italian-pizza"];

document.title = `${recipe.title} | The AfterTaste`;
document.getElementById("recipeImage").src = recipe.image;
document.getElementById("recipeImage").alt = recipe.title;
document.getElementById("recipeCategory").textContent = recipe.category;
document.getElementById("recipeTitle").textContent = recipe.title;
document.getElementById("recipeMeta").textContent = "by The AfterTaste · April 20, 2026";
document.getElementById("recipeDescription").textContent = recipe.description;

recipe.ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("ingredientsList").appendChild(li);
});

recipe.steps.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("stepsList").appendChild(li);
});

Object.entries(recipes)
  .filter(([key]) => key !== recipeKey)
  .slice(0, 3)
  .forEach(([key, r]) => {
    const card = document.createElement("a");
    card.className = "related-card";
    card.href = `recipe-details.html?recipe=${key}`;
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}" loading="lazy">
      <div>
        <h3>${r.title}</h3>
        <p>${r.category}</p>
      </div>
    `;
    document.getElementById("relatedGrid").appendChild(card);
  });

/* ── Save / Bookmark ─────────────────────────────── */
const favorites = new Set(JSON.parse(localStorage.getItem("afterTasteFaves") || "[]"));
const saveBtn = document.getElementById("pageSaveBtn");

function syncSave() {
  const saved = favorites.has(recipe.title);
  saveBtn.classList.toggle("saved", saved);
  saveBtn.querySelector("i").className = saved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark";
  saveBtn.querySelector("span").textContent = saved ? "Saved" : "Save Recipe";
}

syncSave();
saveBtn.addEventListener("click", () => {
  favorites.has(recipe.title) ? favorites.delete(recipe.title) : favorites.add(recipe.title);
  localStorage.setItem("afterTasteFaves", JSON.stringify([...favorites]));
  syncSave();
});

/* ── Dark / Light Theme ──────────────────────────── */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem("afterTasteTheme") === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("afterTasteTheme", isDark ? "light" : "dark");
  applyTheme(!isDark);
});

/* ── Scroll Reveal ───────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .zoom-reveal")
  .forEach((el) => observer.observe(el)); 

/* ── Back to Top ─────────────────────────────────── */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
