let arr_rcp = [
    {
        id: 1,
        name: "basket chaat",
        ingredients: ["Chaat Puri", "Vegetables", "Yogurt", "Chutneys"],
        recipe: "Comes together in a jiffy. Like most chaat, once you have the vegetables diced and the chutneys made, the recipe is literally a 10 minute one.Super customizable, make this basket chaat into dahi puri, bhel puri or sev puri. Only a couple ingredients vary in these recipes.This recipe can be served pre-made with all the fixings or served as a make yourself bar. This one works well for parties and get togethers.",
        category: 2     //1 for drink , 2 for eat
    },
    {
        id: 2,
        name: "lichi ice cream",
        ingredients: ["Heavy Cream", "Condensed Milk", "Litchi Fruit", "Milk"],
        recipe: "Peel and deseed the litchi. Add it to a blender jar.Add milk and pocess till smooth. Set aside.In a large bowl add condensed milk and heavy whipping cream.Blend till the mixture thickens using a hand held blender or stand mixer fitted with a balloon whisk.Then add the blended litchi mix and whip it in.Freeze for 10-12 hours.",
        category: 2
    },
    {
        id: 3,
        name: "Rose Thandai",
        ingredients: ["Milk", "Rose Syrup", "Thandai Powder", "Rose Petals"],
        recipe: "To a blender jar add rose syrup and thandai powder.Add milk to the jar.Blend till smooth; about 2-3 minutes.Open and taste for sweetness.In a glass add some rose syrup and swirl it.",
        category: 1
    },
    {
        id: 4,
        name: "Lemon Rice",
        ingredients: ["Basmati Rice", "Lemon", "Peanuts", "Urad and chana dal"],
        recipe: "Cook the rice using a Instant Pot or traditional pressure cooker. Release the pressure and open the cooker. Add salt and lemon juice.Fluff the rice with a fork and set aside.In a wide pan add oil. Add the whole peanuts.Let them fry for a few minutes till they are crisp and brown. Remove and set aside. In the same oil add mustard seeds and asafetida.Once they splutter, add curry leaves, cilantro and green chili. Mix well.Add turmeric powder and turn down the flame.Transfer the tempering along with the fried peanuts, remaining cilantro and lemon zest into the rice.",
        category: 2
    },
];


//store in Local Storage
function store_data(list) {
    try {
        localStorage.setItem("recipe", JSON.stringify(list));      
    } catch (error) {
        console.log("Error while storing Recipe: " + error.message);
    }
}

//get data which stored in local storage
let recipes=get_data();
function get_data() {
    let list = JSON.parse(localStorage.getItem("recipe"));
    return list;
}

//add recipe
function add(add) {
    recipes.push(add);
    store_data(recipes);
    recipes = get_data();
    return recipes;
}

//update recipe
function update(ud) {
    recipes.splice(recipes.findIndex((x) => x.id == ud.id), 1, ud);
    store_data(recipes);
    recipes = get_data();
    return recipes;
}

//category wise
function category() {
    console.log("Category wise:");
    recipes = get_data();
    let eat = recipes.filter(x => x.category == 2);
    console.log("  Eat:", eat);

    let drink = recipes.filter(x => x.category == 1);
    console.log("  Drink:", drink);
}

// //searching
function searching(ingredient) {
    recipes = JSON.parse(localStorage.getItem("recipe"));
    let searched = recipes.filter(x => x.ingredients.includes(ingredient));
    console.log(ingredient,"recipes:", searched);
}

//removing
function remove(rid) {
    recipes.splice(recipes.findIndex((x) => x.id == rid), 1);
    store_data(recipes);
    console.log("After removing", recipes);
}


store_data(arr_rcp);
console.log("First Data :",get_data());

//add this data
let add_rcp = {
    id: 5,
    name: "Hot chocolate",
    ingredients: ["Milk", "Candy Melts", "Sprinkles", "Sugar"],
    recipe: "Add the candy melts in mason jar. Heat milk to a rolling boil.Pour milk into the mason jar and close the lid. Shake well, till the froth forms. Add sugar if required.Pour out into a glass or mug. Top with heart sprinkles and enjoy!!",
    category: 1
};
console.log("After Add recipe:",add(add_rcp));


//edit data-----------
let edit = {
    id: 2,
    name: "ice cream",
    ingredients: ["Heavy Cream", "Condensed Milk", "Litchi Fruit", "Milk"],
    recipe: "Peel and deseed the litchi. Add it to a blender jar.Add milk and pocess till smooth. Set aside.In a large bowl add condensed milk and heavy whipping cream.Blend till the mixture thickens using a hand held blender or stand mixer fitted with a balloon whisk.Then add the blended litchi mix and whip it in.Freeze for 10-12 hours.",
    category: 2
};
console.log("After Update recipe:",update(edit));


//category wise recipe eat/drink
category();

//search recipe ingredient
let ing="Milk";
searching(ing);

// remove recipe by Id
let i=1;
remove(i);
