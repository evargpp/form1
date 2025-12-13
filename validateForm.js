// podłaczenie walidacji pod cały formularz

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorBox.innerHTML = "";
    errorBox.style.display = "none";

    let errors = [];

    // Imię i nazwisko
    let el = document.getElementById("fullname");

    if (el.value.length < 3)
        errors.push("Pole Imię i nazwisko powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole Imię i nazwisko powinno mieć długość maksymalnie 50 znaków.");

    // eMail
    el = document.getElementById("email");
    if (!el.checkValidity())
        errors.push("Pole Email nie jest poprawnym emailem.");
    if (el.value.length == 0)
        errors.push("Pole Email jest puste.");

    // eMail2
    let el2 = document.getElementById("email2");
    if (el.value != el2.value)
        errors.push("Pola Email nie mają tej samej wartości.");
    if (el2.value.length == 0)
        errors.push("Pole Powtórz email jest puste.");

    // Data zameldowania
    el = document.getElementById("checkin");
    if (!el.checkValidity())
        errors.push("Pole Data zameldowania nie jest poprawną datą.");
    if (el.value.length == 0)
        errors.push("Pole Data zameldowania jest puste.");

    // Data wymeldowania
    el = document.getElementById("checkout");
    if (!el.checkValidity())
        errors.push("Pole Data wymeldowania nie jest poprawną datą.");
    if (el.value.length == 0)
        errors.push("Pole Data wymeldowania jest puste.");

    // Kraj
    el = document.getElementById("country");
    if (el.value.length < 3)
        errors.push("Pole Kraj powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole Kraj powinno mieć długość maksymalnie 50 znaków.");

    // Miasto
    el = document.getElementById("city");
    if (el.value.length < 3)
        errors.push("Pole Miasto powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole Miasto powinno mieć długość maksymalnie 50 znaków.");

    // Kod pocztowy
    el = document.getElementById("postcode");
    let regex = /^\d{2}-\d{3}$/;
    if (!regex.test(el.value))
        errors.push("Pole kod pocztowy nie jest w formacie XX-XXX.");

    // Ulica
    el = document.getElementById("street");
    if (el.value.length < 3)
        errors.push("Pole Ulica powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole Ulica powinno mieć długość maksymalnie 50 znaków.");

    // Numer karty
    el = document.getElementById("cardnum");
    let num = el.value.replace(/\s+/g, "");
    if (!/^\d{13,19}$/.test(num))
        errors.push("Pole Nr karty nie jest poprawnym numerem karty.");

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

    if (sum % 10 !== 0)
        errors.push("Nie zgadza się cyfra samokontroli.");


    // Data ważności
    el = document.getElementById("exp");
    regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(el.value))
        errors.push("Pole Dane karty karty nie jest w poprawnym formacie MM/RR.");

    // Kod CVV
    el = document.getElementById("cvv");
    regex = /^[0-9]{3}$/;
    if (!regex.test(el.value))
        errors.push("Pole CVV nie jest poprawnym numerem (3 cyfry).");


    if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
        errorBox.style.display = "block";
        console.log(errorBox);
        return;
    }
    alert("Formularz poprawny. Wysłano!");
});
