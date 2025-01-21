import { icons } from "../assets/icons";
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
    path: "/bloglist"
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
    recipeImage: images.fruitSalad,
    isLiked: true,
    description: "Mixed Tropical Fruit Salad with Superfood Boosts"
  },
  {
    recipeImage: images.wagyuBeef,
    isLiked: false,
    description: "Big and Juicy Wagyu Beef Cheeseburger"
  },
  {
    recipeImage: images.asparagus,
    isLiked: true,
    description: "Healthy Japanese Fried Rice with Asparagus"
  },
  {
    recipeImage: images.tacoMeat,
    isLiked: false,
    description: "Cauliflower Walnut Vegetarian Taco Meat"
  },
  {
    recipeImage: images.mustard,
    isLiked: true,
    description: "Rainbow Chicken Salad with Almond Honey Mustard Dressing"
  },
  {
    recipeImage: images.sandwich,
    isLiked: false,
    description: "Barbeque Spicy Sandwiches with Chips"
  },
  {
    recipeImage: images.firecracker,
    isLiked: false,
    description: "Firecracker Vegan Lettuce Wraps - Spicy!"
  },
  {
    recipeImage: images.soup,
    description: "Chicken Ramen Soup with Mushroom - the best"
  }
]

export const nutritionInformation = [
  {
    nutrientsName: "Calories",
    amount: "219.9 kal"
  },
  {
    nutrientsName: "Total Fat",
    amount: "10.7 g"
  },
  {
    nutrientsName: "Protein",
    amount: "7.9 g"
  },
  {
    nutrientsName: "Carbohydrate",
    amount: "22.3 g"
  },
  {
    nutrientsName: "Calories",
    amount: "37.4 mg"
  },
]

export const directionsData = [
  {
    id: 1,
    title: "1. Lorem ipsum dolor sit amet",
    description: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.tempora incidunt ut labore et dolore liquam quaerat voluptatem.tempora incidunt ut labore et voluptatem",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.tempora incidunt ut labore et dolore liquam quaerat voluptatem.tempora incidunt ut labore et voluptatem",
    ],
    image: images.femaleChef,
  },
  {
    id: 2,
    title: "2. Lorem ipsum dolor sit amet",
    description: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    ],
    image: null,
  },
  {
    id: 3,
    title: "3. Lorem ipsum dolor sit amet",
    description: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    ],
    image: null,
  },
];

export const otherFoodRecipe = [
  {
    otherImage: images.meat,
    title: "Chicken Meatball with Creamy Chees...",
    author: "Andreas Paula"
  },
  {
    otherImage: images.spag,
    title: "The Creamiest Creamy Chicken an...",
    author: "Andreas Paula"
  },
  {
    otherImage: images.fish,
    title: "The Best Easy One Pot Chicken and Rice",
    author: "Andreas Paula"
  },
]

export const blogListData = [
  {
    BlogImage: images.noodles,
    title: "Crochet Projects for Noodle Lovers",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim ",
    profile: icons.wade,
    username: "Wade Warren",
    date: "12 November 2021"
  },
  {
    BlogImage: images.foxSalad,
    title: "10 Vegetarian Recipes To Eat This Month",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim",
    profile: icons.robert,
    username: "Robert Fox",
    date: "12 November 2021"
  },
  {
    BlogImage: images.chefGuide,
    title: "Full Guide to Becoming a Professional Chef",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim",
    profile: icons.russell,
    username: "Dianne Russell",
    date: "12 November 2021"
  },
  {
    BlogImage: images.lasagna,
    title: "Simple & Delicious Vegetarian Lasagna",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim",
    profile: icons.leslie,
    username: "Leslie Alexander",
    date: "12 November 2021"
  },
  {
    BlogImage: images.plantain,
    title: "Plantain and Pinto Stew with Aji Verde",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim",
    profile: icons.henry,
    username: "Courtney Henry",
    date: "12 November 2021"
  },
  {
    BlogImage: images.hiring,
    title: "We're Hiring a Communications Assistant!",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim dolore dolore magna aliqut enim",
    profile: icons.albert,
    username: "Albert Flores",
    date: "12 November 2021"
  },
]