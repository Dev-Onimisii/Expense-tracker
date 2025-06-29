const form = document.getElementById("expense-form");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const tableBody = document.getElementById("expense-table-body");
const totalAmount = document.getElementById("total-amount");

let expenses = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const date = dateInput.value;
  const category = categoryInput.value;
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (!date || !category || !description || isNaN(amount) || amount <= 0) {
    alert("Please, fill in all fields correctly before submitting!");
    return;
  }

  const newExpense = { date, category, description, amount };
  expenses.push(newExpense);

  form.reset();
  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${expense.date}</td>
      <td>${expense.category}</td>
      <td>${expense.description}</td>
      <td>₦${expense.amount.toFixed(2)}</td>
      <td>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
    total += expense.amount;
  });

  totalAmount.textContent = `${total.toFixed(2)}`;

  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      expenses.splice(index, 1);
      renderTable();
    });
  });
}
renderTable();
