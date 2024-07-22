export default function loadMenu() {
    // div within content, holds background image
    const menuContent = document.createElement("div");
    menuContent.id = "menu-container";
    menuContent.classList.add("content-page");

    // overlay on background image
    const menuOverlay = document.createElement("div");
    menuOverlay.id = "menu-overlay";

    // centered card, the actual menu
    const menu = document.createElement("div");
    menu.id = "menu";

    // "menu"
    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "menu";
    menu.appendChild(menuHeader);

    // everything on menu except the header
    // separated into two columns
    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    // left column, contains food only
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("menu-column");
    
    // "food"
    const foodHeader = document.createElement("h3");
    foodHeader.textContent = "food";
    foodContainer.appendChild(foodHeader);

    const foodNames = ["food1", "food2", "food3"];
    const foodDescriptions = ["very yummy food", "very real dish", "wow, amazing!"];
    const foodPrices = [100.00, 299.99, 159.99];

    // iterate over every food item
    for (let i = 0; i < foodNames.length; i ++) {
        // contains name, description, price
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        // contains name, description
        const menuText = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = foodNames[i];

        const description = document.createElement("p");
        description.textContent = foodDescriptions[i];

        menuText.append(name, description);
        menuItem.append(menuText);

        const price = document.createElement("p");
        price.textContent = foodPrices[i];

        menuItem.append(price);
        foodContainer.append(menuItem);
    }

    // right column, contains drinks only
    const drinkContainer = document.createElement("div");
    drinkContainer.classList.add("menu-column");

    // "drinks"
    const drinksHeader = document.createElement("h3");
    drinksHeader.textContent = "drinks";
    drinkContainer.append(drinksHeader);

    const drinkNames = ["drink1", "drink2", "drink3"];
    const drinkDescriptions = ["very yummy drink", "very real drink", "wow, amazing!"];
    const drinkPrices = [100.00, 299.99, 159.99];

    // iterate over every drink item
    for (let i = 0; i < drinkNames.length; i ++) {
        // contains name, description, price
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        // contains name, description
        const menuText = document.createElement("div");

        const name = document.createElement("h4");
        name.textContent = drinkNames[i];
        const description = document.createElement("p");
        description.textContent = drinkDescriptions[i];
        menuText.append(name, description);
        menuItem.append(menuText);

        const price = document.createElement("p");
        price.textContent = drinkPrices[i];
        menuItem.append(price);

        drinkContainer.append(menuItem);
    }

    itemContainer.append(foodContainer, drinkContainer);

    menu.appendChild(itemContainer);
    menuOverlay.appendChild(menu);
    menuContent.appendChild(menuOverlay);
    return menuContent;
}