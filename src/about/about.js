export function About() {
    const parent = document.createElement("div");

    const para = document.createElement("p");
    para.textContent = "I'm the About component!";

    parent.appendChild(para);
    return parent;
}