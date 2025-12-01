import aboutMe from '../assets/about-me.png';
import books from '../assets/books.png';
import contactMe from '../assets/contact-me.png';
import events from '../assets/events.png';
import parents from '../assets/parents.png';

export const Navigation = (() => {
    const pages = ['aboutMe', 'parents', 'books', 'contactMe', 'events'];
    const images = { aboutMe, books, contactMe, events, parents }
    const el = {
        linkContainer: () => document.querySelector('.link-container'),
    }

    const init = () => {
        createLinks(pages);
    }

    const createLinks = (links) => {
        links.forEach((link) => {
            const button = document.createElement('button');
            const img = document.createElement('img');
            button.className = 'link';
            button.id = link;

            img.src = images[link]
            button.appendChild(img);
            el.linkContainer().appendChild(button);
        });
    }

    return { init }
})()
