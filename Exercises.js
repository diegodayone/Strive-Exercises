
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/


console.log(2+5);


/* EXERCISE 2
Create a variable named X containing the number 12
*/

var X = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

var name = "John Doe";

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

console.log(12-X);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

var name1, name2;
name1 = "john";
name2 = "John";
console.log(name1 === name2);

/* EXERCISE 6
Create and array with the first 5 positive numbers
*/

var array=[1, 2, 3, 4, 5];


/* EXERCISE 7
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

var X=5;
var array=['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
console.log(array[X-1]);


/* EXERCISE 8 
Insert a value in a variable based on the resut of a ternary if
*/

var value = "yes";
var house = value === "yes" ? "you have an house" : "you're homeless";


/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/

var mySelf = {
    name: "Michele",
    surname: "Lunati",
    email: "lunatimichele@gmail.com",
    address: "Via Pasquale fiore 37",
    age: 23
};


/* EXERCISE 10
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

mySelf.driveLicense = true;

/* EXERCISE 11
Remove to the previously created object the age
*/

delete mySelf.age


/* EXERCISE 12
Create a second object with name, surname, email address and verify that this object has a different email address
*/
var yourSelf = {
    name: "Marco",
    surname: "Lunati",
    email: "anyemail@libero.it",
    address: "Via Pasquale fiore 37",
    age: 23
};

console.log(mySelf.email === yourSelf.email);

/* EXERCISE 13 
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

var totalShoppingCart, totalCost, shipping=10;
if (totalShoppingCart > 50){
    totalCost = totalShoppingCart;
}else{
     totalCost = totalShoppingCart + shipping;
}


/* EXERCISE 14
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

var totalShoppingCart, totalCost, shipping= 10, discount= 20;
totalShoppingCart -= (totalShoppingCart * discount)/100;
console.log(totalShoppingCart);
if (totalShoppingCart > 50){
    totalCost = totalShoppingCart;
}else{
     totalCost = totalShoppingCart + shipping;
}


/* EXERCISE 15
You writing a very simple anti spam filter for your mailbox. In the variable emailContent you have the content of the email you are checking.
Check if the email is valid using regular expression. The email (in this example) if the words SPAM and SCAM does not appear.
*/


var emailContent = "blal lsad blasn sflaf ffdd sddsM";
if (emailContent.indexOf("SPAM") === -1 && emailContent.indexOf("SCAM") === -1) {
    console.log("Your mail is safe");
} else {
    console.log("Your mail has SPAM or SCAM");
    
}


/* EXERCISE 16 & EXERCISE 17
Create an object rapresenting an car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars. 
Create a new array called carsForRent containing all the cars from the previous exercise
*/
var car = {
    brand: "Fiat",
    model: "Panda",
    licensePlate: "MZ8AYW"
};

    car2 = JSON.parse(JSON.stringify(car));
    car3 = JSON.parse(JSON.stringify(car));
    car4 = JSON.parse(JSON.stringify(car));
    car5 = JSON.parse(JSON.stringify(car));

var carsForRent = [ car2, car3, car4, car5 ];
var licensePlateArray =["AB8AYW", "CDZ8AYW", "EFZ8AYW", "HG8AYW"]    
for(var i = 0; i < licensePlateArray.length; i++){
     carsForRent[i].licensePlate = licensePlateArray[i];
     console.log(carsForRent[i]);
 }

 //E' legale fare questa cosa? O megliot trasferire l'oggetto car prima in un array?
 //var carsForRentTot = carsForRent.concat(car);

 


/* EXERCISE 18
Remove the first and the last car from the carsForRent array.
*/

var carsForRentTot = [car, car2, car3, car4, car5];
carsForRentTot.splice((carsForRentTot.length -1) , 1);


/* EXERCISE 19
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

var i=0;
   for (i in carsForRentTot){
    console.log(JSON.stringify(carsForRentTot[i], null, 4));

   }
    


/* EXERCISE 20
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

var carsForSale = [car, car2, car3];
var totalCars = {
    nCarsInSale: carsForSale.length, 
    nTotalCars: carsForRentTot.length
}

//Or, using arrays
var totCars = [carsForSale.length, carsForRentTot.length];

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/