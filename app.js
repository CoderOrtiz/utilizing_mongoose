const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    // This is mongoose Validation
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "Peaches are yummy"
});

// Fruit.deleteOne({name: "Peaches"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(Fruit);
//     }
// });

// Fruit.updateOne({_id: "62d73e3387845449a5553b0b"}, {name: "Peach"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log(fruit.name);
//     }
// });

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favorateFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit ({
    name: "Mango",
    score: 6,
    review: "Okay Fruit."
});

mango.save();

// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favorateFruit: pineapple
// });

Person.updateOne({name: "John"}, {favorateFruit: mango}, function(err){
    if (err){
        console.log(err);
    } else {
        mongoose.connection.close();
        console.log("Succeesfully Updated the Document");
    }
});





// Person.deleteMany({name: "John"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         console.log("Successfully deleted all the document");
//     }
// });

// // More Fruits
// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 1Many0,
//     review: "The best fruit"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird Tecture"
// });


// Fruit.find(function(err, fruits){
//     if (err) {
//         console.log(err);
//     } else {

//         // Closes mongoose / kills node in the terminal
//         mongoose.connection.close()

//         fruits.forEach(function(fruit) {
//             console.log(fruit.name);
//         });
//     }
// });



// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to fruitsDB");
//     }
// });

// person.save();
// fruit.save();
