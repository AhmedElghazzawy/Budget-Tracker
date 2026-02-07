// ============================================
// BUDGET TRACKER APPLICATION
// Learning Focus: DOM Manipulation, Events, localStorage
// ============================================

// Global Variables
let transactions = [];

// ============================================
// DOM Elements
// ============================================
const form = document.getElementById('transactionForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionsList = document.getElementById('transactionsList');
const clearAllBtn = document.getElementById('clearAllBtn');
const totalIncomeEl = document.getElementById('totalIncome');
const totalExpenseEl = document.getElementById('totalExpense');
const balanceEl = document.getElementById('balance');

// ============================================
// EVENT LISTENERS
// ============================================

// When form is submitted
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    addTransaction();
});

// Clear all transactions
clearAllBtn.addEventListener('click', function () {
    if (transactions.length > 0 && confirm('Are you sure you want to delete all transactions?')) {
        transactions = [];
        saveToLocalStorage();
        renderTransactions();
        updateSummary();
    }
});

// ============================================
// CORE FUNCTIONS
// ============================================

/**
 * Add a new transaction
 * Learning: Object creation, array methods, DOM updates
 */
function addTransaction() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    // Validation
    if (!description || !amount || amount <= 0 || !type) {
        alert('Please fill in all fields with valid values');
        return;
    }

    // Create transaction object
    const transaction = {
        id: Date.now(), // Unique ID using timestamp
        description: description,
        amount: amount,
        type: type,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    // Add to transactions array
    transactions.push(transaction);

    // Save and update
    saveToLocalStorage();
    renderTransactions();
    updateSummary();

    // Clear form inputs
    form.reset();
    descriptionInput.focus();
}

/**
 * Delete a transaction by ID
 * Learning: Array filtering, re-rendering
 */
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    saveToLocalStorage();
    renderTransactions();
    updateSummary();
}

/**
 * Render all transactions to the DOM
 * Learning: DOM manipulation, conditional rendering, template literals
 */
function renderTransactions() {
    // Clear the list
    transactionsList.innerHTML = '';

    // Check if empty
    if (transactions.length === 0) {
        transactionsList.innerHTML = '<p class="empty-state">No transactions yet. Add one to get started!</p>';
        return;
    }

    // Sort transactions by date (newest first)
    const sortedTransactions = [...transactions].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // Create HTML for each transaction
    sortedTransactions.forEach(transaction => {
        const transactionEl = document.createElement('div');
        transactionEl.className = `transaction-item ${transaction.type}`;

        // Format amount
        const formattedAmount = `${transaction.type === 'income' ? '+' : '-'}$${transaction.amount.toFixed(2)}`;

        transactionEl.innerHTML = `
            <div class="transaction-info">
                <p class="transaction-description">${escapeHtml(transaction.description)}</p>
                <p class="transaction-date">${transaction.date}</p>
            </div>
            <span class="transaction-amount ${transaction.type}">${formattedAmount}</span>
            <button class="btn-delete" onclick="deleteTransaction(${transaction.id})">Delete</button>
        `;

        transactionsList.appendChild(transactionEl);
    });
}

/**
 * Update summary cards (income, expense, balance)
 * Learning: Array reduce, calculations
 */
function updateSummary() {
    // Calculate totals using reduce
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    // Update DOM
    totalIncomeEl.textContent = `$${totalIncome.toFixed(2)}`;
    totalExpenseEl.textContent = `$${totalExpense.toFixed(2)}`;
    balanceEl.textContent = `$${balance.toFixed(2)}`;

    // Color balance based on positive/negative
    if (balance >= 0) {
        balanceEl.style.color = '#667eea';
    } else {
        balanceEl.style.color = '#dc3545';
    }
}

// ============================================
// LOCALSTORAGE FUNCTIONS
// ============================================

/**
 * Save transactions to localStorage
 * Learning: JSON stringify, localStorage API
 */
function saveToLocalStorage() {
    localStorage.setItem('budgetTrackerTransactions', JSON.stringify(transactions));
}

/**
 * Load transactions from localStorage
 * Learning: JSON parse, localStorage API
 */
function loadFromLocalStorage() {
    const saved = localStorage.getItem('budgetTrackerTransactions');
    if (saved) {
        transactions = JSON.parse(saved);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Escape HTML to prevent XSS attacks
 * Learning: Security best practices
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    loadFromLocalStorage();
    renderTransactions();
    updateSummary();
}

// Run when page loads
document.addEventListener('DOMContentLoaded', init);
