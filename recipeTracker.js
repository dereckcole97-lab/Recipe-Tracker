/*
In this workshop, you will create a recipe tracker using JavaScript objects.

1 - Start by creating an empty array named recipes. This is the array you'll push the recipe objects into later.

2 - Create an object named recipe1. Inside the recipe1 object, create a name property with the value "Spaghetti Carbonara".

Also inside the recipe1 object, create an ingredients property with an array as the value. The array should have spaghetti, Parmesan cheese, pancetta, and black pepper inside it.

3 - Add the following properties to the recipe1 object:

Key	Value
cookingTime	22
totalIngredients	null
difficultyLevel	""
The properties with null and empty string values will be updated later after you calculate them

4 - Create a recipe2 object with the following properties and values:

Key	Value
name	Chicken Curry
ingredients	["chicken breast", "coconut milk", "curry powder", "onion", "garlic"]
cookingTime	42
totalIngredients	null
difficultyLevel	""

5 - Create a recipe3 object with the following properties and values:

Key	Value
name	Vegetable Stir Fry
ingredients	["broccoli", "carrot", "bell pepper"]
cookingTime	15
totalIngredients	null
difficultyLevel	""

6 - Before you move on, you should practice how to access properties from an object.

You can use either dot (.) or bracket ([]) notation to do this. Here's an example:

Example Code
const person = {
  name: "John",
  age: 30,
  job: "Software Engineer"
};

console.log(person.name); // John
console.log(person['age']);  // 30
Access the name property of recipe1, and assign it to the variable recipe1Name.

Next, access the cookingTime property of recipe2 and assign it to the variable recipe2CookingTime.

Finally, access the ingredients property of recipe3 and assign it to the variable recipe3Ingredients.

Make sure all the variables you created are logged to the console.

7 - You should now push the three objects into the recipes array. To do this, you can use the push() method.

Use the push() method to push all the recipe objects into the recipes array. Make sure to push recipe1, recipe2, and recipe3 in that order.

Also delete the recipe1Name, recipe2CookingTime and recipe3Ingredients variables, and the console.log statements which log those variables.

8 - Create a getTotalIngredients function that takes a single argument, representing an array with ingredients, and returns the number of ingredients from the array passed to the function.

9 - Create a getDifficultyLevel function that takes a number indicating the cooking time as a parameter.

If the cooking time is less than or equal to 30, the function should return "easy". If it is less than or equal to 60, the function should return "medium". Otherwise, the function should return "hard".

10 - It's time to test each of the functions. You can use any of the recipes for this, but this tutorial will start with recipe1.

Create two new variables: recipe1TotalIngredients and recipe1DifficultyLevel. Assign them the values by calling the corresponding function for each variable and passing in the appropriate recipe1 property.

Finally, log each variable to the console to see the results.

11 - You can now fill in each item of the recipes array with values for the totalIngredients and difficultyLevel properties.

For now, access the totalIngredients and difficultyLevel of recipe1 and set them to the appropriate results of function calls and arguments.

12 - Repeat the process for the totalIngredients and difficultyLevel properties of recipe2 and recipe3.

13 - Now, log the recipes array to the console to see all its items filled with the updated values.

With that, your recipes tracker project is complete. 

*/
const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);