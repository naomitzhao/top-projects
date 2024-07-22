export default function loadMenu() {
    const menu = document.createElement("div");
    menu.id = "menu-container";
    menu.classList.add("content-page");

    const menuBackground = document.createElement("div");
    menuBackground.id = "menu-background";

    const menuCard = document.createElement("div");
    menuCard.id = "menu";

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "menu";
    menuCard.appendChild(menuHeader);

    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";

    const foodContainer = document.createElement("div");
    foodContainer.classList.add("menu-column");
    

    const foodHeader = document.createElement("h3");
    foodHeader.textContent = "food";
    foodContainer.appendChild(foodHeader);

    const foodNames = ["food1", "food2", "food3"];
    const foodDescriptions = ["very yummy food", "very real dish", "wow, amazing!"];
    const foodPrices = [100.00, 299.99, 159.99];

    for (let i = 0; i < foodNames.length; i ++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

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

    itemContainer.appendChild(foodContainer);

    const drinkContainer = document.createElement("div");
    drinkContainer.classList.add("menu-column");

    const drinksHeader = document.createElement("h3");
    drinksHeader.textContent = "drinks";
    drinkContainer.append(drinksHeader);

    const drinkNames = ["drink1", "drink2", "drink3"];
    const drinkDescriptions = ["very yummy drink", "very real drink", "wow, amazing!"];
    const drinkPrices = [100.00, 299.99, 159.99];

    for (let i = 0; i < drinkNames.length; i ++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

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

    itemContainer.appendChild(drinkContainer);

    menuCard.appendChild(itemContainer);
    menuBackground.appendChild(menuCard);
    menu.appendChild(menuBackground);
    return menu;
}