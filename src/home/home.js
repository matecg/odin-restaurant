import heroImg from "./mead-and-thunder.png";
import "./home.css";

export function Home() {
    const parent = document.createElement("div");
    parent.classList.add('home');

    const textContainer = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = "Welcome, Traveler!";
    
    const img = document.createElement("img");
    img.src = heroImg;
    
    const para = document.createElement("p");
    para.textContent = "To the home of the legendary Thunder Scar mead!";
    
    textContainer.appendChild(h2);
    textContainer.appendChild(para);
    parent.appendChild(img);
    parent.appendChild(textContainer);
    return parent;
}