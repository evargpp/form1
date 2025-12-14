// podłaczenie walidacji pod pola

document.getElementById("fullname").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("fullname");
        const err = el.nextElementSibling;

        if (el.value.length < 3 || el.value.length > 50) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);

document.getElementById("email").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("email");
        const err = el.nextElementSibling;

        if (!el.checkValidity() || el.value.length == 0) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }
    }
);


document.getElementById("email2").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el2 = document.getElementById("email");
        const el = document.getElementById("email2");
        const err = el.nextElementSibling;

        if (el.value != el2.value || el.value.length == 0) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }
    }
);


document.getElementById("checkin").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("checkin");
        const err = el.nextElementSibling;

        if (!el.checkValidity() || el.value.length == 0) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);


document.getElementById("checkout").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("checkout");
        const err = el.nextElementSibling;

        if (!el.checkValidity() || el.value.length == 0) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);


document.getElementById("country").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("country");
        const err = el.nextElementSibling;

        if (el.value.length < 3 || el.value.length > 50) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);


document.getElementById("city").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("city");
        const err = el.nextElementSibling;

        if (el.value.length < 3 || el.value.length > 50) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);


document.getElementById("postcode").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("postcode");
        const err = el.nextElementSibling;

        const regex = /^\d{2}-\d{3}$/;

        if (!regex.test(el.value)) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }
    }
);


document.getElementById("street").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("street");
        const err = el.nextElementSibling;

        if (el.value.length < 3 || el.value.length > 50) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);


document.getElementById("cardnum").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("cardnum");
        const err = el.nextElementSibling;
        const num = el.value.replace(/\s+/g, "");

        if (!/^\d{13,19}$/.test(num)) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";

            let sum = 0;
            let shouldDouble = false;

            for (let i = num.length - 1; i >= 0; i--) {
                let digit = parseInt(num[i]);

                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }

                sum += digit;
                shouldDouble = !shouldDouble;
            }

            if (sum % 10 === 0) {
                el.classList.remove('error-border');
                err.style.display = "none";
            } else {
                el.classList.add('error-border');
                err.style.display = "block";
            }

        }


    }
);


document.getElementById("exp").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("exp");
        const err = el.nextElementSibling;

        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!regex.test(el.value)) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }
    }
);


document.getElementById("cvv").addEventListener("blur",
    function (e) {
        e.preventDefault();
        const el = document.getElementById("cvv");
        const err = el.nextElementSibling;

        const regex = /^[0-9]{3}$/;

        if (!regex.test(el.value)) {
            el.classList.add('error-border');
            err.style.display = "block";
        }
        else {
            el.classList.remove('error-border');
            err.style.display = "none";
        }

    }
);
