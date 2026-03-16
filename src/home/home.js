export function Home() {
    const parent = document.querySelector("div#content");
    
    const para = document.createElement("p");
    para.textContent = "I'm the Home component!";
    
    parent.appendChild(para);
}