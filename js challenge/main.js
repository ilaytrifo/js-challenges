
const splitter = "\n\n*****************************************************************************************\n"

//---------------------------------------------- Question 1 ----------------------------------------------//
// Create an object called "person" with properties "name" and "age".
// Write a function "getPersonInfo" that updates the DOM with the person's information when a button is clicked.

var person = {
    name: "John",
    age: 30
};

var updatePerson = function() {
    const personName = document.getElementById('personName').value;
    const personAge = document.getElementById('personAge').value;
    if (personName) person.name = (personName);
    if (personAge) person.age = parseInt(personAge);
    console.log(person)
}




//---------------------------------------------- Question 2 ----------------------------------------------//
// Create an object called "car" with properties "make", "model", and "year".
// Add an input field for the year and a button to update the "year" property of the car object.

var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

var updateCarMake = function() {
    const newMake = document.getElementById('carMakeInput').value;
    if(newMake) {
        car.make = newMake;  
    }else {
        alert('Please enter a valid car');
    }
    
}

var updateCarModel = function() {
    const newModel = document.getElementById('carModelInput').value;
    if(newModel) {
        car.model = newModel;  
    }else {
        alert('Please enter a valid Model');
    }

}



var updateCarYear = function() {
    const newYear = document.getElementById('carYearInput').value;
            
    if (newYear >= 2026){
        alert("error not a vaild year")
        return
    }else if(newYear) {
        car.year = newYear;  
    }else {
        alert('Please enter a valid year');
    }
     
    // Get the input value and update the car object
    console.log(car)
};


//---------------------------------------------- Question 3 ----------------------------------------------//
// Create an object called "product" with properties "name", "price", and "quantity".
// Write a function "updateQuantity" to update the product's quantity using input from a text field.

var product = {
    name: "Laptop",
    price: 1500,
    quantity: 10
};

var updateQuantity = function() {
    const newQuantity = document.getElementById('yourQuantity').value
    product.quantity = parseInt(newQuantity);
    // Update the product quantity using input.value
    console.log(product)
};

//---------------------------------------------- Question 4 ----------------------------------------------//
// Create an object called "student" with properties "name" and "grade".
// Write a function "updateGrade" that will update the student's grade using an input field.

var student = {
    name: "Alice",
    grade: 90
};

var updateGrade = function() {
    const newGrade = document.getElementById('yourGrade').value
    student.grade = parseInt(newGrade)
    if(newGrade > 100 || newGrade < 0 ){
        alert("error")
    }else
    console.log(student)
    // Update the student's grade using input.value
};

//---------------------------------------------- Question 5 ----------------------------------------------//
// Create an object called "movie" with properties "title", "rating".
// Write a function "updateRating" to change the rating of the movie when a user enters a new rating in an input.

var movie = {
    title: "Inception",
    rating: 8.8
};

var updateRating = function() {
    const newRating = document.getElementById("toRate").value
    movie.rating = parseInt(newRating)
    if(newRating > 10 || newRating < 0) {
        alert("error")
    }else
    console.log(movie)
    // Update movie rating using input.value
};

//---------------------------------------------- Question 6 ----------------------------------------------//
// Create an object called "game" with properties "name", "score".
// Write a function "updateScore" to change the score when the user enters a new score in an input field.

var game = {
    name: "Chess",
    score: 100
};

var updateScore = function() {
    const newScore = document.getElementById("gameScore").value
    game.value = parseInt(newScore)
    if(newScore > 100 || newScore < 0) {
        alert("error")
    }else
    console.log(game)
    // Update the game's score using input.value
};

//---------------------------------------------- Question 7 ----------------------------------------------//
// Create an object called "pet" with properties "name" and "type".
// Write a function "renamePet" that will update the pet's name using an input field and a button.

var pet = {
    name: "Buddy",
    type: "Dog"
};

var renamePet = function() {
    const newName = document.getElementById("crateName").value
    pet.name = newName
    console.log(pet)
    // Update the pet's name using input.value
};


//---------------------------------------------- Question 8 ----------------------------------------------//
// Create an object called "phone" with properties "brand", "model", and "price".
// Write a function "updatePrice" that updates the phone's price using an input field.

var phone = {
    brand: "Apple",
    model: "iPhone 12",
    price: 999
};

var updatePrice = function() {
    const newPrice = document.getElementById("rePrice").value
    phone.price = parseInt(newPrice)
    console.log(phone)
    // Update the phone's price using input.value
};

//---------------------------------------------- Question 9 ----------------------------------------------//
// Create an object called "laptop" with properties "brand", "ram", and "storage".
// Write a function "updateStorage" to update the laptop's storage property using an input field.
// Add a "turbo" function to the laptop object, which will return a number of the turbo speed
// Which will be calculated by laptop.ram * laptop.storage
// Example: ( laptop.ram is equal to 16 ) * ( laptop.storage is equal to 512 )

var laptop = {
    brand: "Dell",
    ram: "16GB",
    storage: "512GB"
};

var turbo = function() {
    return this.ram * this.storage;
}


function updateStorage() {
    const input = document.getElementById('storageInput').value;
    if (input) {
        laptop.storage = parseInt(input);
    }
    // Update the laptop storage using input.value
}

//---------------------------------------------- Question 10 ----------------------------------------------//
// Create an object called "book" with properties "title", "author", and "pages".
// Write a function "updatePages" to change the number of pages in the book using an input field.

var book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 350
};

var updatePages = function() {
    const newPages = document.getElementById("newPage").value
    book.pages = parseInt(newPages)
    console.log(book)
    // Update the book's pages using input.value
};