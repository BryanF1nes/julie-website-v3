export const ReCAPTCHA = (() => {
    const onSuccess = () => {
        const submitButton = document.getElementById("contact-submit");
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove("disabled");
        }
    };

    const onExpired = () => {
        const submitButton = document.getElementById("contact-submit");
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add("disabled");
        }
    };

    const onloadCallback = () => {
        grecaptcha.render('html-element', {
            'sitekey': '6LcpfiosAAAAAP0PKx2RYX6ANB_h4plBYHQLTvJQ',
            callback: onSuccess,
            'expired-callbcak': onExpired
        });
    }

    return { onloadCallback }

})()
