import "./menu.css";
import MenuData from "./menu.json";

export function Menu() {
    const parent = document.createElement("div");
    parent.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.classList.add("menu-title");
    h2.textContent = "Our Menu";
    parent.appendChild(h2);

    const pricePara = document.createElement("p");
    pricePara.textContent = "All our prices are charged in gold coins 🪙! (We do not accept silver or copper ones, but Bitcoin might be good as well)"
    pricePara.classList.add("price-para");
    parent.appendChild(pricePara);

    Object.keys(MenuData.menu).forEach(key => {
        const section = createMenuSection(key, MenuData.menu[key]);
        parent.appendChild(section);
    });
    
    return parent;
}

function createMenuSection(name, items) {
    const parent = document.createElement("div");
    parent.classList.add("menu-section");

    const h3 = document.createElement("h3");
    h3.textContent = name.replaceAll("_", " ");

    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("menu-container");
    items.forEach(item => {
        const itemCard = document.createElement("div");
        const itemTitle = document.createElement("p");
        const itemPrice = document.createElement("p");
        const itemDescription = document.createElement("p");

        itemCard.classList.add("menu-card");
        itemTitle.textContent = item.title;
        itemPrice.textContent = `🪙 ${item.price} g.c.`;
        itemDescription.textContent = item.description;

        itemCard.appendChild(itemTitle);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(itemDescription);
        itemsContainer.appendChild(itemCard);
    });

    parent.appendChild(h3);
    parent.appendChild(itemsContainer);

    return parent;
}