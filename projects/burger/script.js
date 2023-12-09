document.addEventListener("DOMContentLoaded", function () {
  const moreButtons = document.getElementsByClassName("more");
  const ingredientContainer = document.getElementById("ingredients");
  for (let index = 0; index < moreButtons.length; index++) {
    const element = moreButtons[index];
    element.addEventListener("click", clickMore);
  }

  function clickMore(event) {
    console.log(event);
    const id = event.target.parentElement.id;


    /* =========== Update your code here =========== */
    

    /* ===========          END         =========== */

  }

  function getHTMLById(id) {
    switch (id) {
      case "patty":
        return `
          <div id="toppingPatty" data-height="25" class="burg-topping-container"><svg
                                                  id="svgPatty" viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#patty" class="topping"></use>
                                              </svg></div>`;
      case "mustard":
        return `
          <div id="toppingMustard" data-height="10" class="burg-topping-container"
                                              style="transform: scaleY(1); height: 10px;"><svg id="svgMustard"
                                                  viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#mustard" class="topping"></use>
                                              </svg></div>`;
      case "ketchup":
        return `
          <div id="toppingKetchup" data-height="10" class="burg-topping-container"
                                              style="transform: scaleY(1); height: 10px;"><svg id="svgKetchup"
                                                  viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#ketchup" class="topping"></use>
                                              </svg></div>`;
      case "cheese":
        return `
          <div id="toppingCheese" data-height="10" class="burg-topping-container"
                                              style="transform: scaleY(1); height: 10px;"><svg id="svgCheese"
                                                  viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#cheese" class="topping"></use>
                                              </svg></div>`;
      case "lettuce":
        return `
          <div id="toppingLettuce" data-height="15" class="burg-topping-container"
                                              style="transform: scaleY(1); height: 15px;"><svg id="svgLettuce"
                                                  viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#lettuce" class="topping"></use>
                                              </svg></div>`;
      case "tomato":
        return `
          <div id="toppingTomato" data-height="10" class="burg-topping-container"
                                              style="transform: scaleY(1); height: 10px;"><svg id="svgTomato"
                                                  viewBox="0 0 155 45" class="burg-topping-img">
                                                  <use xlink:href="#tomato" class="topping"></use>
                                              </svg></div>`;
      default:
        break;
    }
  }
});
