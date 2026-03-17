import AboutData from "./about.json";
import "./about.css";
import MapImg from "./map.png"

export function About() {
    const parent = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "About Us";
    parent.appendChild(h2);

    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add('about-container');
    AboutData.about_page.about_sections.forEach(({title, content}) => {
        const img = title === "Finding the Feast" ? MapImg : null;
        const aboutSection = createAboutSection(title, content, img);
        sectionContainer.appendChild(aboutSection);
    });
    parent.appendChild(sectionContainer);

    return parent;
}

function createAboutSection(title, content, img = null) {
    const container = document.createElement("div");
    const h3 = document.createElement("h3");
    const contentPara = document.createElement("p");

    h3.textContent = title;
    contentPara.textContent = content;
    container.appendChild(h3);

    if (img) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("about-img");
        const imgTag = document.createElement("img");
        imgTag.src = img;
        imgContainer.appendChild(imgTag);
        imgContainer.appendChild(contentPara);
        container.appendChild(imgContainer);
        return container;
    }
    
    container.appendChild(contentPara);

    return container;
}