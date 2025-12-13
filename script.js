const form = document.getElementById("reservationForm");
const errorBox = document.getElementById("errorBox");

// Pola
const fields = {
    fullname: v => v.length > 3,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    email2: v => v === document.getElementById("email").value,
    checkin: v => v.trim() !== "",
    checkout: v => v.trim() !== "",
    country: v => v.trim().length > 2,
    city: v => v.trim().length > 2,
    postcode: v => /^[0-9]{2}-[0-9]{3}$/.test(v),
    street: v => v.length > 3 && v.length <= 30,
    cardnum: v => /^[0-9]{16}$/.test(v),
    exp: v => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v),
    cvv: v => /^[0-9]{3}$/.test(v)
};

// Podłączamy walidację onblur
//for (let id in fields) {
//    console.log(id)
//    document.getElementById(id).addEventListener("blur", e => validateField(id));
//}


function validateField(id) {
//     const el = document.getElementById(id);
//     const err = el.nextElementSibling;

//     if (!fields[id](el.value)) {
//         el.classList.add("invalid");
//         // err.style.visibility = "visible";
//         return false;
//     } else {
//         el.classList.remove("invalid");
//         // err.style.visibility = "hidden";
//         return true;
//     }
//
}

// ====================== TABLE =============================

const table = document.getElementById("guestTable").querySelector("tbody");
const addRowBtn = document.getElementById("addRow");
const rowCount = document.getElementById("rowCount");

function updateCount() {
    rowCount.textContent = table.children.length;
}

function createRow(name = "", age = "", guardian = "") {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td><input value="${name}"></td>
        <td>
            <select>
                <option value="">-- wybierz --</option>
                <option value="adult" ${age === "adult" ? "selected" : ""}>dorosły</option>
                <option value="child" ${age === "child" ? "selected" : ""}>dziecko</option>
            </select>
        </td>
        <td><input ${age !== "child" ? "disabled" : ""} value="${guardian}"></td>
        <td>
            <button class="up">↑</button>
            <button class="down">↓</button>
            <button class="delete">Usuń</button>
        </td>
    `;

    // Logika edycji opiekuna
    const ageSel = tr.querySelector("select");
    const guardianInput = tr.querySelector("td:nth-child(3) input");

    ageSel.addEventListener("change", () => {
        if (ageSel.value === "child") {
            guardianInput.disabled = false;
        } else {
            guardianInput.disabled = true;
            guardianInput.value = "";
        }
    });

    // Usuwanie
    tr.querySelector(".delete").addEventListener("click", () => {
        tr.remove();
        updateCount();
    });

    // Sortowanie
    tr.querySelector(".up").addEventListener("click", () => {
        if (tr.previousElementSibling) {
            table.insertBefore(tr, tr.previousElementSibling);
        }
    });

    tr.querySelector(".down").addEventListener("click", () => {
        if (tr.nextElementSibling) {
            table.insertBefore(tr.nextElementSibling, tr);
        }
    });

    return tr;
}

addRowBtn.addEventListener("click", () => {
    table.appendChild(createRow());
    updateCount();
});