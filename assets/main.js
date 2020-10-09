let rolldiceInput = document.querySelector("#diceroller");
let rolldice = document.querySelector("#rolldice");
let showAllRolls = document.querySelector("#showAllRolls");
let rollResults = document.querySelector("#allRolls");
let allRolls = [];
let resetButtton = document.querySelector("#reset");
let total = document.querySelector("#total");

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
// console.log(rolldiceInput);
// console.log(rolldice);

rolldice.addEventListener("click", function () {
  //   console.log(rolldiceInput.value);
  let maxRolls = Number(rolldiceInput.value);
  let count = 0;
  allRolls = [];
  //   rolldiceInput.value = "";

  while (count < maxRolls) {
    allRolls.push(randomNumber());
    // console.log(allRolls);
    // console.log(count);
    count++;
  }
  total.innerHTML = allRolls.reduce((a, b) => a + b, 0);
  console.log(allRolls.reduce((a, b) => a + b, 0));
  //   total.innerHTML = allRolls;
  console.log(allRolls);
});

showAllRolls.addEventListener("click", function () {
  rollResults.innerHTML = "";
  let count = 0;
  while (count < allRolls.length) {
    // console.log(AllRolls[count]);
    rollResults.innerHTML += "<li>" + allRolls[count] + "</li>";
    count++;
  }
});

reset.addEventListener("click", function () {
  rolldiceInput.value = "";
  rollResults.innerHTML = "";
  total.innerHTML = "";
  //   showAllRolls.innerHTML = "";
  //   rolldiceInput.innerHTML = 0;
  //   console.log(reset);
});
