// podłaczenie walidacji pod cały formularz

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorBox.innerHTML = "";
    errorBox.style.display = "none";

    let errors = [];

    // Imię i nazwisko
    let el = document.getElementById("fullname");

    if (el.value.length < 3)
        errors.push("Pole <strong>Imię i nazwisko</strong> powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole <strong>Imię i nazwisko</strong> powinno mieć długość maksymalnie 50 znaków.");

    // eMail
    el = document.getElementById("email");
    if (!el.checkValidity())
        errors.push("Pole <strong>Email</strong> nie jest poprawnym emailem.");
    if (el.value.length == 0)
        errors.push("Pole <strong>Email</strong> jest puste.");

    // eMail2
    let el2 = document.getElementById("email2");
    if (el.value != el2.value)
        errors.push("Pola <strong>Email</strong> nie mają tej samej wartości.");
    if (el2.value.length == 0)
        errors.push("Pole <strong>Powtórz</strong> email jest puste.");

    // Data zameldowania
    el = document.getElementById("checkin");
    let selectedDate = new Date(el.value);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today)
        errors.push("Pole <strong>Data zameldowania</strong> jest datą z przeszłości.");
    if (!el.checkValidity())
        errors.push("Pole <strong>Data zameldowania</strong> nie jest poprawną datą.");
    if (el.value.length == 0)
        errors.push("Pole <strong>Data zameldowania</strong> jest puste.");

    // Data wymeldowania
    el = document.getElementById("checkout");
    selectedDate = new Date(el.value);
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today)
        errors.push("Pole <strong>Data wymeldowania</strong> jest datą z przeszłości.");
    if (!el.checkValidity())
        errors.push("Pole <strong>Data wymeldowania</strong> nie jest poprawną datą.");
    if (el.value.length == 0)
        errors.push("Pole <strong>Data wymeldowania</strong> jest puste.");

    // Sprawdzenie, czy daty są po sobie
    let d1 = new Date(document.getElementById("checkin").value);
    d1.setHours(0, 0, 0, 0);
    let d2 = new Date(document.getElementById("checkout").value);
    d2.setHours(0, 0, 0, 0);
    if (d1 > d2)
        errors.push("Pole <strong>Data wymeldowania</strong> jest datą wcześniejszą niż <strong>Data zameldowania</strong>.");

    // Kraj
    el = document.getElementById("country");
    if (el.value.length < 3)
        errors.push("Pole <strong>Kraj powinno</strong> mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole </strong>Kraj powinno</strong> mieć długość maksymalnie 50 znaków.");

    // Miasto
    el = document.getElementById("city");
    if (el.value.length < 3)
        errors.push("Pole <strong>Miasto</strong> powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole <strong>Miasto</strong> powinno mieć długość maksymalnie 50 znaków.");

    // Kod pocztowy
    el = document.getElementById("postcode");
    let regex = /^\d{2}-\d{3}$/;
    if (!regex.test(el.value))
        errors.push("Pole <strong>Kod pocztowy</strong> nie jest w formacie XX-XXX.");

    // Ulica
    el = document.getElementById("street");
    if (el.value.length < 3)
        errors.push("Pole <strong>Ulica</strong> powinno mieć długość co najmniej 3 znaki.");
    if (el.value.length > 50)
        errors.push("Pole <strong>Ulica</strong> powinno mieć długość maksymalnie 50 znaków.");

    // Numer karty
    el = document.getElementById("cardnum");
    let num = el.value.replace(/\s+/g, "");
    if (!/^\d{13,19}$/.test(num))
        errors.push("Pole <strong>Nr karty</strong> nie jest poprawnym numerem karty.");

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
        errors.push("W polu <strong>Nr karty</strong> nie zgadza się cyfra samokontroli.");


    // Data ważności
    el = document.getElementById("exp");
    regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(el.value))
        errors.push("Pole <strong>Data ważności karty</strong> nie jest w poprawnym formacie MM/RR.");

    // Kod CVV
    el = document.getElementById("cvv");
    regex = /^[0-9]{3}$/;
    if (!regex.test(el.value))
        errors.push("Pole <strong>CVV</strong> nie jest poprawnym numerem (3 cyfry).");


    if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
        errorBox.style.display = "block";
        return;
    }
    alert("Formularz poprawny. Wysłano!");
});
