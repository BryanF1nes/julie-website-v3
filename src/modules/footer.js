import { AboutMe } from "./aboutMe";
import { ContactMe } from "./contactMe";
import { Books } from "./books";

export const Footer = (() => {

    const el = {
        content: () => document.getElementById('content'),
    }

    const init = () => {
        el.content().appendChild(createFooter());
    }

    const createFooter = () => {
        const footer = document.createElement('footer');

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 1440 200");
        svg.setAttribute("preserveAspectRatio", "none");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "#B495F5");
        path.setAttribute("d", "M0,96 C240,160 480,160 720,130 C960,100 1200,50 1440,90 L1440,320 L0,320 Z");

        svg.appendChild(path);
        footer.appendChild(svg);

        const footerContent = document.createElement('div');
        footerContent.classList.add('footer-content');

        const footerLinks = document.createElement('div');
        footerLinks.classList.add('footer-links');

        const links = [
            { id: "aboutMe", text: "About Me", action: () => AboutMe.init() },
            { id: "books", text: "Books", action: () => Books.init() },
            { id: "contactMe", text: "Contact Me", action: () => ContactMe.init() },
            { id: "followMe", text: "Follow Me", action: () => window.open("https://www.facebook.com/p/Julie-Ann-Garnett-Author-61560804407150/") },
        ];

        links.forEach(link => {
            const button = document.createElement('button');
            button.id = link.id;
            button.textContent = link.text;

            button.addEventListener("click", () => {
                link.action();
            });

            footerLinks.appendChild(button);
        });

        // Icons Section
        const footerIcons = document.createElement('div');
        footerIcons.classList.add('footer-icons');

        const iconData = [
            { href: "https://www.facebook.com/p/Julie-Ann-Garnett-Author-61560804407150/", class: "fa-brands fa-facebook fa-xl" },
            { href: "https://www.instagram.com/julieanngarnett_author/", class: "fa-brands fa-instagram fa-xl" }
        ];

        iconData.forEach(icon => {
            const a = document.createElement('a');
            a.href = icon.href;
            a.target = "_blank";

            const i = document.createElement('i');
            i.className = icon.class;

            a.appendChild(i);
            footerIcons.appendChild(a);
        });

        // Copyright Section
        const footerCopyright = document.createElement('div');
        footerCopyright.classList.add('footer-copyright');

        const copyrightText = document.createElement('p');
        copyrightText.innerHTML = `&copy; Julie Ann Garnett Author | Website Built By Bryan Fines`;

        footerCopyright.appendChild(copyrightText);

        // Put everything together
        footerContent.appendChild(footerLinks);
        footerContent.appendChild(footerIcons);
        footerContent.appendChild(footerCopyright);
        footer.appendChild(footerContent);

        return footer;
    };

    return { init }
})()
