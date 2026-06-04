var message = "Hello World"; console.log(message);
var x = 5;
var y=6;
console.log(x+y)

let cart = ['Milk', 1, 'Bread', 4, 'Eggs', 12, 'Candy', 2];
// Item indexes are even
let item = 2;
// Quantities indexes are odd
let quantity = 3;
console.log("Item: " + cart[item]);
console.log("Quantity: " + cart[quantity]);

let attendants = {name: "Jess", location: "Germany", age: 26}
console.log("Present for duty:" + attendants.name);

attendants.age += 1
console.log("Attendant " + attendants.name + "'s new id is " + attendants.age)

attendants.age--
console.log(attendants.age)
console.log(attendants.age % 3)

attendants.age /= 2
console.log(attendants.age)

cart.pop(6)
console.log(cart)

my_number=3
if(my_number==4) console.log("it is equal")
	else console.log("it is not equal")



let candidate = 53;// Auxiliary variable
let is_prime = true; // The first factor to try
let factor = 2;
// Execute the block statement if factor is less than candidate and keep doing it while factor is less than candidate

while ( factor < candidate )
	{
	  if ( candidate % factor == 0 )
	  {
	  // The remainder is zero, so the candidate is not prime
	  is_prime = false;
	  break;
	  }
	  // The next factor to try. Simply
	  // increment the current factor by one
	  factor++;
	}

if ( is_prime )
	{
	  console.log(candidate, "is prime");
	}
	else
	{
	  console.log(candidate, "is not prime");
	}

	// The array of numbers we want to evaluate
let candidates = [111, 139, 293, 327];
// Evaluates every candidate in the array
for (candidate of candidates)
{
  // Auxiliary variable
  let is_prime = true;
  for ( let factor = 2; factor < candidate; factor++ )
  {
  // Skip even factors bigger than two
  if ( factor > 2 && factor % 2 == 0 )
  {
  continue;
  }
  if ( candidate % factor == 0 )
  {
  // The remainder is zero, so the candidate is not prime
  is_prime = false;
  break;
  }
  }
  // Display the result in the console window
  if ( is_prime )
  {
  console.log(candidate, "is prime");
  }
  else
  {
  console.log(candidate, "is not prime");
  }
}

let turnips = [3, 7, 2929, 23];
// Evaluates every candidate in the array
for (turnip of turnips)
{
  // Auxiliary variable
  let is_prime = true;
  for ( let factor = 2; factor < turnip; factor++ )
  {
  // Skip even factors bigger than two
  if ( factor > 2 && factor % 2 == 0 )
  {
  continue;
  }
  if ( turnip % factor == 0 )
  {
  // The remainder is zero, so the candidate is not prime
  is_prime = false;
  break;
  }
  }
  // Display the result in the console window
  if ( is_prime )
  {
  console.log(turnip, "is prime");
  }
  else
  {
  console.log(turnip, "is not prime");
  }
}


function countdown (num) {
  console.log (num); 
  let updatednum = num+1; 
  if (updatednum<=10) {
      countdown(updatednum)
  }
}

countdown (1)

console.log(message); 



