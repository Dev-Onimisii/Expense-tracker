const form = document.getElementById("expense-form");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const tableBody = document.getElementById("expense-table-body");
const totalAmount = document.getElementById("total-amount");

let expense = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const date = dateInput.value;
  const category = categoryInput.value;
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (!date || !category || !description || isNaN(amount) || amount <= 0) {
    alert(`Please, fill in all fields all fields correctly before submitting!`);
  }
});
