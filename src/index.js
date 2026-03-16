import "./reset.css"
import "./styles.css";
import { Home } from "./home/home.js";
import { Menu } from "./menu/menu.js";
import { About } from "./about/about.js";

(function(doc) {
    const navBtns = Array.from(doc.querySelectorAll("nav>button"));
    const content = doc.querySelector("div#content");
    const components = {
        home: Home,
        menu: Menu,
        about: About
    }

    navBtns.forEach(btn => btn.addEventListener('click', (e) => {
        activate(e.target.textContent);
    }));

    function activate(nextEl) {
        nextEl = nextEl.toLowerCase();
        content.replaceChildren();
        navBtns.forEach(el => {
            el.classList.remove('active');
            if (el.textContent.toLowerCase() === nextEl) {
                el.classList.add('active');
            }
                
        });
        content.appendChild(components[nextEl]());
    }

    activate("home");
})(document)