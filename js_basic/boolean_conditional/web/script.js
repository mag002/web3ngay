document.addEventListener("DOMContentLoaded", function () {
  let outputContainer = document.getElementById("output-container");

  //   let change = 3.5;
  //   let price = 2.5;

  let change = 3.5;
  let price = 2.5;
  outputContainer.innerHTML +=
    "<p>Me: Hi JavaScript, do I have enough change to buy chips?</p>";
  // If correct print: Javascript: "Yes, you have enough change."
  // If not print: Javascript: No, you don't have enough change."
  // Example:
  //   if (change >= price) {
  //     outputContainer.innerHTML +=
  //       "<p>JavaScript: Yes, you have enough change.</p><br>";
  //   } else {
  //     outputContainer.innerHTML +=
  //       "<p>JavaScript: No, you don't have enough change.</p><br>";
  //   }

  let capacity = 12;
  let people = 15;
  console.log("Me: Hi JavaScript, can the elevator hold everyone?");
  // If correct print: Javascript: "Yes, the elevator can hold everyone."
  // If not print: Javascript: "No, the elevator cannot hold everyone."

  let request = "PS5";
  let purchase = "Toy car";
  outputContainer.innerHTML +=
    "<p>Me: Hi JavaScript, can the elevator hold everyone?</p>";
  // If correct print: Javascript: "Yes, your friend will be happy."
  // If not print: Javascript: "No, your friend will not be happy."

  let space = 9;
  let guests = 8;
  outputContainer.innerHTML +=
    "<p>Me: Hi JavaScript, can everyone attend my dinner party?</p>";
  // If correct print: Javascript: "Yes, everyone can attend your dinner party."
  // If not print: Javascript: "No, not everyone can attend your dinner party."

  let yourVotes = 24;
  let competitorVotes = 43;
  outputContainer.innerHTML +=
    "<p>Me: Hi JavaScript, will I win the election?</p>";
  // If correct print: Javascript: "Yes, you will win the election."
  // If not print: Javascript: "No, you will not win the election."
});
