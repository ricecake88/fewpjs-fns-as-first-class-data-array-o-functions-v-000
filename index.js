function wakeDog(dogName, dogBreed) {
  str = "Wake ${dogName} the ${dogBreed}";
  console.log(str);
}

function leashDog(dogName, dogBreed) {
  str = "Leash ${dogName} the ${dogBreed}";
}

function walkToPark(dogName, dogBreed) {
  str = "Walk to the park with ${dogName} the ${dogBreed}";  
}

function throwFrisbee(dogName, dogBreed) {
  str = "Throw the frisbee for ${dogName} the ${dogBreed}"; 
}

function walkHome(dogName, dogBreed) {
  str = "Walk home with ${dogName} the ${dogBreed}";  
}

function unleashDog(dogName, dogBreed) {
  str = "Unleash ${dogName} the ${dogBreed}";  
}

function exerciseDog(dogName, dogBreed) {
  let routine = ["wakeDog", "leashDog", "walkToPark", "throwFrisbee", "walkHome", "unleashDog"];  
  let result = [];
  result.push(routine.forEach(item(dogName, dogBreed)));
  return push;
}

