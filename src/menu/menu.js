export function Menu() {
    const parent = document.querySelector("div#content");
    
    const para = document.createElement("p");
    para.textContent = "I'm the Menu component!";
    
    parent.appendChild(para);
}