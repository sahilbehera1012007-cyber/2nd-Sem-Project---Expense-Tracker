let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const balanceEl = document.getElementById("balance");

let editIndex = null;

//Disha RAi
function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

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

/* Push 4 — Uttkarsh | Add transaction logic */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (editIndex !== null) {
      // Replace the record at editIndex
      transactions[editIndex] = { desc, amount, type };
      editIndex = null; // reset after update
    } else {
      // Add new record
      transactions.push({ desc, amount, type });
    }

    saveData();
    renderTransactions();
    form.reset();
});


/* Push 5 — Alok | Edit transaction logic */

function editTransaction(index) {

    const t = transactions[index];

    document.getElementById("desc").value = t.desc;
    document.getElementById("amount").value = t.amount;
    document.getElementById("type").value = t.type;

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

//Disha rai
const cancelBtn = document.getElementById("cancel-btn");

cancelBtn.addEventListener("click", clearInputs);

function clearInputs() {

  form.reset();

  editIndex = null;
}

// Sahil- Update the summary
function updateSummary() {
  const income = transactions
    .filter(t => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  totalIncomeEl.textContent = "₹" + income.toFixed(2);
  totalExpenseEl.textContent = "₹" + expense.toFixed(2);
  balanceEl.textContent = "₹" + (income - expense).toFixed(2);
}

// Initial render on page load
renderTransactions();
