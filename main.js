// Bracket and dot notation

const person = {
    firstName: "Sumaya",// property goes first then insert value, object within property
    lastName: 'Said',
    age: 24
}

// console.log(person.firstName) dot notation (will get Sumaya)
// console.log(person['lastName']) bracket notation (will get Said)

// Destructuring

const meal = {
    appetizer: "Firecracker Shrimp",
    entree: "Beef Medallion",
    dessert: "Tiramisu",
    drink: "Mango Lemonade"
}

// Making a new variable called dessert, whose value comes from the dessert property on the meal object.
const {dessert} = meal
//console.log(dessert) will see "Tiramisu". Same as saying const dessert = meal.dessert

const {appetizer, entree} = meal
//console.log(dessert, appetizer, entree) will see "Tiramisu", "Firecracker Shrimp", "Beef Medallion"


// Aliasing
// const {drink: myDrink} = meal when you do this, you're saying dont call this drink but myDrink
//console.log(myDrink) youll see "Mango Lemonade" same as const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal
// destructuring multiple things and giving them all aliases
// console.log(myDessert, myEntree, myAppetizer, myDrink) youll see everything you wrote on here

// For In Loops

const person = {
    firstName: "Sumaya",// property goes first then insert value, object within property
    lastName: 'Said',
    age: 24
}

//for (const key(property or attribute) in person){
//console.log(key) will show firstname, lastname, and age

// for (const key in person){
// console.log(person[key]) will let you access values in properties(sumaya, said, 24)

//Console.log these two things to see both the values and the property names.
//console.log(key, person[key])
//access property name = key, access value with is person[key], 

//checking the object values
//if(person[key] === "Said"){
//console.log('this is the last name;', person[key])
// } when you know what the value is, specific last name

//checking the object properties
//if(key === 'lastName'){
//console.log('this is the last name;', person[key])

// }
// } to find out the last name property


//Adding Properties

const person = {
    firstName: "Sumaya",// property goes first then insert value, object within property
    lastName: 'Said',
    age: 24
}

person.job = 'Unemployed';
//console.log(person) will add job to firstName, lastName, and age

person['pet'] = 'Tabby'
//console.log(person) will add pet to firstName, lastName, age, and job

delete person.pet
//will delete pet

//Classes
    /*
        let this = {}
    */

class Dog {    
    constructor(dogName, dogBreed, dogAge){
        console.log('Dog class', dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;

        this.toys = []
    }// every single dog will have a toy property that will start out as an empty array no matter the dog

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }// method added
    // lassie.greeting() will see Hi, my name is Lassie and I am a 10 year old Collie

    addToy(toy){
        this.toys.push(toy)
    }
}// another method added that takes in parameter (included in parenthases)
// console.log(lassie) will show Dog {name: 'Lassie', breed: 'Collie', age: 10, toys: []}
// lassie.addToy('rubber bone')
// console.log(lassie) will show Dog {name: 'Lassie', breed: 'Collie', age: 10, toys: ['rubber bone']}


class Dog {    
    constructor(dogName, dogBreed, dogAge){
        console.log('Dog class', dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;

// const lassie = new Dog('Lassie', 'Collie', 10)
// console.log(lassie) will show Dog {name: 'Lassie', breed: 'Collie', age: 10}
// console.log(lassie.breed) will show collie (specific value)

// const beethoven = new Dog('Beethoven', 'St. Bernard', 12)
// beethoven.greeting() will see Hi, my name is Beethoven and I am a 12 year old St. bernard


// Extending classes

/* This is the parent class */ 
class Dog {    
    constructor(dogName, dogBreed, dogAge){
        console.log('Dog class', dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;

        /* this.toys = [] */
        // not referencing this in puppies because its hard coded in parent and is not dynamic
        // name, breed, and age varies depending on dog but toys is added

/* This is the child class associated with the parent class*/
class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, puppyTrainingLevel){
        console.log("Puppy class",dogName, dogBreed, dogAge, puppyTrainingLevel)
        super(dogName, dogBreed, dogAge)

        this.trainingLevel = puppyTrainingLevel
    } //only puppies will have this

    levelUp(num){
        this.trainingLevel += num
    }// increase training level of puppy by using this method

    greeting(){
        super.greeting()
        console.log("And I am a puppy!")
    }// will see Hi, my name is Leo and I am a 1 year old Labradoodle and I am a puppy
}// want to change greeting for puppies with out getting rid of parent greeting

const leo = new Puppy("Leo", 'Labradoodle', 1, 0)// puppy info
// console.log(leo) will see puppy { name: 'Leo', breed: 'Labradoodle', age: 1, toys [], trainingLevel: 0}

// leo.greeting() will see Hi, my name is Leo and I am a 1 year old Labradoodle

// leo.levelUp(2)
// console.log(leo) will see trainingLevel: 2 instead of the 0 that it originally was