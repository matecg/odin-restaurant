export function Menu() {
    const parent = document.createElement("div");
    
    const para = document.createElement("p");
    para.textContent = "I'm the Menu component!";
    
    parent.appendChild(para);
    return parent;
}