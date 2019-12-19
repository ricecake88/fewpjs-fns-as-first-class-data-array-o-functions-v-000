function wakeDog(dogName, dogBreed) {
  str = "Wake ${dogName} the ${dogBreed}";
  console.log(str);
  return str;
}

function leashDog(dogName, dogBreed) {
  str = "Leash ${dogName} the ${dogBreed}";
  console.log(str);
  return str;
}

function walkToPark(dogName, dogBreed) {
  str = "Walk to the park with ${dogName} the ${dogBreed}";  
  console.log(str);
  return str;
}

function throwFrisbee(dogName, dogBreed) {
  str = "Throw the frisbee for ${dogName} the ${dogBreed}"; 
  console.log(str);
  return str;
}

function walkHome(dogName, dogBreed) {
  str = "Walk home with ${dogName} the ${dogBreed}";
  console.log(str);
  return str;
}

function unleashDog(dogName, dogBreed) {
  str = "Unleash ${dogName} the ${dogBreed}";
  console.log(str);
  return str;
}

function exerciseDog(dogName, dogBreed) {
  let routine = ["wakeDog", "leashDog", "walkToPark", "throwFrisbee", "walkHome", "unleashDog"];  
  let result = [];
  result.push(routine.forEach(item(dogName, dogBreed)));
  return push;
}

