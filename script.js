/* Push 4 — Uttkarsh | Add transaction logic */
const form = document.getElementById("transaction-form");

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
