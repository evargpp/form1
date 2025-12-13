// stałe dla formularza
const form = document.getElementById("reservationForm");
const errorBox = document.getElementById("errorBox");


// stałe dla tabelki
const table = document.getElementById("guestTable").querySelector("tbody");
const addRowBtn = document.getElementById("addRow");
const rowCount = document.getElementById("rowCount");

function updateCount() {
    rowCount.textContent = table.children.length;
}

function createRowOrg(name = "", age = "", guardian = "") {
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

function createRow(name = "", age = "", guardian = "") {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td><input value=""></td>
        <td>
            <select>
                <option value="" selected>-- wybierz --</option>
                <option value="adult">dorosły</option>
                <option value="child">dziecko</option>
            </select>
        </td>
        <td><input disabled value=""></td>
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