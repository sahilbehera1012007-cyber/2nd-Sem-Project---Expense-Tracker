/* Push 4 — Uttkarsh | Add transaction logic */
const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");

let editIndex = null;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    transactions.push({ desc, amount, type });

    saveData();
    renderTransactions();
    form.reset();
});


// Push 7 - Sahil | Render Transaction
function renderTransactions() {

  list.innerHTML = "";

  transactions.forEach((t, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${t.type}">
        ${t.desc} - ₹${t.amount.toFixed(2)}
        (${t.type})
      </span>

      <span>
        <button onclick="editTransaction(${index})">
          Edit
        </button>

        <button onclick="deleteTransaction(${index})">
          Delete
        </button>
      </span>
    `;

    list.appendChild(li);
  });

  updateSummary();
}
/* Push 5 — Alok | Edit transaction logic */

function editTransaction(index) {

    const t = transactions[index];

    document.getElementById("desc").value =
        t.desc;

    document.getElementById("amount").value =
        t.amount;

    document.getElementById("type").value =
        t.type;

    editIndex = index;
}

/* push 13 - alok | Implement delete transaction */

function deleteTransaction(index) {

    transactions.splice(index, 1);

    if (editIndex === index) {
        clearInputs();
    } else if (editIndex !== null && index < editIndex) {
        editIndex--;
    }

    saveData();
    renderTransactions();
}



//abhi
const form =
document.getElementById("transaction-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const desc =
  document.getElementById("desc").value;

  const amount =
  parseFloat(
    document.getElementById("amount").value
  );

  const type =
  document.getElementById("type").value;

  transactions.push({
    desc,
    amount,
    type
  });

  saveData();
  renderTransactions();

  form.reset();
});
