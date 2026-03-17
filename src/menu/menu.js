import "./menu.css";
import MenuData from "./menu.json";

export function Menu() {
    const parent = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.classList.add("menu-title");
    h2.textContent = "Our Menu";
    parent.appendChild(h2);

    Object.keys(MenuData.menu).forEach(key => {
        const section = createMenuSection(key, MenuData.menu[key]);
        parent.appendChild(section);
    });
    
    return parent;
}

function createMenuSection(name, items) {
    const parent = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = name.replaceAll("_", " ");

    const itemsContainer = document.createElement("div");
    items.forEach(item => {
        const itemTitle = document.createElement("p");
        const itemPrice = document.createElement("p");
        const itemDescription = document.createElement("p");

        itemTitle.textContent = item.title;
        itemPrice.textContent = `🪙 ${item.price} g.c.`;
        itemDescription.textContent = item.description;

        itemsContainer.appendChild(itemTitle);
        itemsContainer.appendChild(itemPrice);
        itemsContainer.appendChild(itemDescription);
    });

    parent.appendChild(h3);
    parent.appendChild(itemsContainer);

    return parent;
}