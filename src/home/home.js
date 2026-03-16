export function Home() {
    const parent = document.createElement("div");
    
    const para = document.createElement("p");
    para.textContent = "I'm the Home component!";
    
    parent.appendChild(para);
    return parent;
}