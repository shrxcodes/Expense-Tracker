let income = 0;
let totalExpense = 0;

function setIncome() {
    const incomeInput = document.getElementById("income").value;

    if (incomeInput === "") {
        alert("Please enter income");
        return;
    }

    income = Number(incomeInput);
    document.getElementById("totalIncome").innerText = income;
    updateBalance();
}

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span><span>₹${amount}</span>`;
    document.getElementById("expenseList").appendChild(li);

    totalExpense += Number(amount);
    document.getElementById("totalExpense").innerText = totalExpense;

    updateBalance();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function updateBalance() {
    const balance = income - totalExpense;
    document.getElementById("balance").innerText = balance;
}
