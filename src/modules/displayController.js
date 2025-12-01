import { Header } from "./header.js";
import { HomePage } from "./homepage.js";
import { Navigation } from "./navigation.js";

export const DisplayController = (() => {
    const init = () => {
        HomePage.init();
    }

    return { init }
})();
