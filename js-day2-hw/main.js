//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let exercise1 = document.getElementById('exercise1');
let exercise2 = document.getElementById('exercise2');
let exercise3 = document.getElementById('exercise3');

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function outputFood(obj) {
    let pizza1 = obj.pizza[0];
    let pizza2 = obj.pizza[1];
    let taco = obj.tacos;
    let burger = obj.burgers;
    let ice_cream1 = obj.ice_cream[0];
    let ice_cream2 = obj.ice_cream[1];
    let ice_cream3 = obj.ice_cream[2];
    let shake1 = obj.shakes[0].oberwise;
    let shake2 = obj.shakes[0].dunkin;
    let shake3 = obj.shakes[0].culvers;
    let shake4 = obj.shakes[0].mcDonalds;
    let shake5 = obj.shakes[0].cupids_candies;

    let text = `Pizza #1: ${pizza1}\nPizza #2: ${pizza2}\nTaco: ${taco}\nBurger: ${burger}\nIce Cream #1: ${ice_cream1}\nIce Cream #2: ${ice_cream2}\n`;
    text += `Ice Cream #3: ${ice_cream3}\nShake from Oberwise: ${shake1}\nShake from Dunkin: ${shake2}\nShake from Culvers: ${shake3}\n`;
    text += `Shake from McDonalds: ${shake4}\nShake from Cupid Candies: ${shake5}`;
    console.log(text);
    exercise1.innerText = text;
}

outputFood(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        let text = `Name: ${this.name}, Age: ${this.age}\n`;
        console.log(text);
        exercise2.innerText += text;
        return 'Nothing';
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = (increment=1) => {
        this.age += increment;

        let text = `${this.name}'s new age is ${this.age}\n`;
        console.log(text);
        exercise2.innerText += text;
        return 'Nothing';
    }

}

const person1 = new Person('John', 28);
const person2 = new Person('Jessica', 37);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve('Big word');
        } else if (str.length <= 10) {
            resolve('Small word');
        } else {
            reject('Not a string');
        }
    });
}

checkLength('Hello')
.then((result) => { console.log(result); exercise3.innerText += '"Hello" is a ' + result.toLowerCase() + '\n'; })
.catch((error) => { console.log(error); exercise3.innerText += '"Hello" is ' + error.toLowerCase() + '\n'; });

checkLength('Existential')
.then((result) => { console.log(result); exercise3.innerText += '"Existential" is a ' + result.toLowerCase() + '\n'; })
.catch((error) => { console.log(error); exercise3.innerText += '"Existential" is ' + error.toLowerCase() + '\n'; });

checkLength(32)
.then((result) => { console.log(result); exercise3.innerText += '32 is a ' + result.toLowerCase() + '\n'; })
.catch((error) => { console.log(error); exercise3.innerText += '32 is ' + error.toLowerCase() + '\n'; });
