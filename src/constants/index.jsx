import { images } from "../assets/images";


export const navLinks = [
  {
    id: "home_id",
    title: "Home",
    path: "/"
  },
  {
    id: "recipes_id",
    title: "Recipes",
    path: "/recipes"
  },
  {
    id: "blog_id",
    title: "Blog",
    path: "/blog"
  },
  {
    id: "contact_id",
    title: "Contact",
    path: "/contact"
  },
  {
    id: "about_id",
    title: "About Us",
    path: "/about"
  },
];

export const foodCategories = [
  {
    id: 'breakfast_id',
    emoji: images.breakfast,
  },
  {
    id: 'vegan_id',
    emoji: images.vegan,
  },
  {
    id: 'meat_id',
    emoji: images.beefmeat,
  },
  {
    id: 'dessert_id',
    emoji: images.dessert,
  },
  {
    id: 'lunch_id',
    emoji: images.lunch,
  },
  {
    id: 'chocolate_id',
    emoji: images.chocolate,
  },
];


export const tastyFoodOptions = [
  {
    TastyImage: images.hamburger,
    isLiked: true,
    description: "Big and Juicy Wagyu Beef Cheeseburger",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.fish,
    isLiked: false,
    description: "Fresh Lime Roasted Salmon with Ginger Sauce",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.straw,
    isLiked: false,
    description: "Strawberry Oatmeal Pancake with Honey Syrup",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.mayonnasie,
    isLiked: true,
    description: "Fresh and Healthy Mixed Mayonnaise Salad",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.meatBall,
    isLiked: false,
    description: "Chicken Meatballs with Cream Cheese",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.maaria,
    isLiked: true,
    description: "Asparagus with Lemon Garlic Butter",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.orangeFruit,
    isLiked: true,
    description: "Fruity Pancake with Orange & Blueberry",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.riceFish,
    isLiked: false,
    description: "The Best Easy One Pot Chicken and Rice",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  },
  {
    TastyImage: images.spag,
    isLiked: false,
    description: "The Creamiest Creamy Chicken and Bacon Pasta",
    clock: "Timer.svg",
    fork: "ForkKnife.svg"
  }
]

export const foodieSocialsCard = [
  {
    name: "Foodieland.",
    location: "Tokyo, Japan",
    likes: "44,686",
    date: "September 19",
    images: [
      images.vegetables,
      images.onions,
      images.strawberry
    ],
    description: "The vegetables dishes need to have certain vitamins for those people"

  },
  {
    name: "Foodieland.",
    location: "Tokyo, Japan",
    likes: "44,686",
    date: "September 19",
    images: [
      images.strawberry,
      images.meat,
      images.onions
    ],
    description: "Sweet food can bring someone into happiness as long as they don't eat too much"
  },
  {
    name: "Foodieland.",
    location: "Tokyo, Japan",
    likes: "44,686",
    date: "September 19",
    images: [
      images.onions,
      images.vegetables,
      images.meat
    ],
    description: " What are you doing before start cooking? prepare the tools or ingredients?"
  },
  {
    name: "Foodieland.",
    location: "Tokyo, Japan",
    likes: "44,686",
    date: "September 19",
    images: [
      images.meat,
      images.strawberry,
      images.vegetables
    ],
    description: "Steak never be wrong, it's suitable for you who want romatic dinner"
  }
]

export const moreRecipes = [
  {
    recipeImage: "../src/assets/images/fruit-salad.jpg",
    isLiked: true,
    description: "Mixed Tropical Fruit Salad with Superfood Boosts"
  },
  {
    recipeImage: "../src/assets/images/wagyu-beef.jpg",
    isLiked: false,
    description: "Big and Juicy Wagyu Beef Cheeseburger"
  },
  {
    recipeImage: "../src/assets/images/asparagus.jpg",
    isLiked: true,
    description: "Healthy Japanese Fried Rice with Asparagus"
  },
  {
    recipeImage: "../src/assets/images/taco-meat.jpg",
    isLiked: false,
    description: "Cauliflower Walnut Vegetarian Taco Meat"
  },
  {
    recipeImage: "../src/assets/images/mustard.jpg",
    isLiked: true,
    description: "Chicken Meatballs with Cream Cheese"
  },
  {
    recipeImage: "../src/assets/images/sandwich.jpg",
    isLiked: false,
    description: "Barbeque Spicy Sandwiches with Chips"
  },
  {
    recipeImage: "../src/assets/images/firecracker.jpg",
    isLiked: false,
    description: "Firecracker Vegan Lettuce Wraps - Spicy!"
  },
  {
    recipeImage: "../src/assets/images/soup.jpg",
    isLiked: true,
    description: "Chicken Ramen Soup with Mushroom"
  }
]