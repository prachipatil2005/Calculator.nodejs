// script.js
let displayValue = '';
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
        // Store the calculation in history
        history.push({ expression: displayValue, result: result });
        updateHistory();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    // Clear previous history
    historyList.innerHTML = '';
    // Append new history items
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.expression} = ${item.result}`;
        historyList.appendChild(li);
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}
