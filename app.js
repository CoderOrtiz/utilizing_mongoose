const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
});

// More Fruits
const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
});

const orange = new Fruit ({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird Tecture"
});


Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    } else {

        // Closes mongoose / kills node in the terminal
        mongoose.connection.close()

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});



// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// });

// person.save();
// fruit.save();
