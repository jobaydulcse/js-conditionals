let age = 65;
let isStudent = false;

let ticketFare = 800; // Regular fare
let finalFare;

if (age < 10) {
  finalFare = 0;
} else if (isStudent) {
  finalFare = ticketFare * 0.5; // 50% discount
} else if (age >= 60) {
  finalFare = ticketFare * 0.85; // 15% discount
} else {
  finalFare = ticketFare; // No discount
}

console.log("Your ticket fare is: " + finalFare + " tk");
