function result(INT219, INT222, CSE100) {
  if (INT219 >= 40 && INT222 >= 50 && CSE100 > 50) {
    console.log("You are pass in all Subject.");
    let sum = (INT219 + INT222 + CSE100) / 300;
    if (sum >= 80) {
      console.log("you are topper");
    } else {
      console.log("You are average");
    }
  } else {
    console.log(
      "You are failed. Motivation quote: A piece of paper cannot decide by future"
    );
  }
}

result(98, 80, 75);
