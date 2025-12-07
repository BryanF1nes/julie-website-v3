import emailjs from '@emailjs/browser';

export const EmailJS = (() => {
    const init = () => {
        emailjs.init({ publicKey: "sM1MtyVcU9agXqeHp" });
        onLoad();
    }

    const onLoad = () => {
        const form = document.getElementById("contact-form");
        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            emailjs.sendForm("contact_service", "contact_form", form)
                .then(() => {
                    console.log("SUCCESS!");
                    form.reset();
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                });
        });
    }

    return { init };
})();
