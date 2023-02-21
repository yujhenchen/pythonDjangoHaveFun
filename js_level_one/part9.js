const userName = prompt("Please enter your name", "Jarry Jotter");
const nameMatches = isNameMatches(userName);

const age = prompt("Please enter your age", "21");
const ageMatches = 20 < +age < 30;

const height = prompt("Please enter your height", "171");
const heightMatches = 170 < +height;

const petName = prompt("Please enter your pet's name", "Amy");
const petMatches = petName.charAt(petName.length - 1) === "y";

function isNameMatches(name) {
  const nameLs = name.split(" ");
  if (nameLs.length < 2) {
    alert("name is incorrect!");
    return false;
  }
  if (nameLs[0].charAt(0) === "J" && nameLs[1].charAt(0) === "J") {
    return true;
  }
  return false;
}

if (nameMatches && ageMatches && heightMatches && petMatches) {
  alert("good job");
} else {
  alert("noooooooooooo!");
}
