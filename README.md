# 💰 Budget Tracker

A lightweight, fast, and elegant personal finance tracker built with vanilla JavaScript. Track your income and expenses in real-time with persistent local storage.

## ✨ Features

- **Add Transactions** - Quickly log income and expense transactions
- **Real-time Balance** - Automatically calculates total income, expenses, and balance
- **Transaction History** - View detailed transaction list with timestamps
- **Persistent Storage** - Data automatically saves locally in your browser
- **Delete Transactions** - Remove individual transactions or clear all data
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI** - Modern, intuitive interface with smooth animations

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedElghazzawy/Budget-Tracker.git
   cd budget-tracker
   ```

2. Open in your browser:
   ```bash
   open index.html
   # or double-click index.html
   ```

3. Start tracking:
   - Enter transaction description
   - Input amount
   - Select Income or Expense
   - Click "Add Transaction"

## 📁 Project Structure

```
budget-tracker/
├── index.html      # HTML markup
├── styles.css      # Styling
├── script.js       # Application logic
├── .gitignore      # Git ignore rules
└── README.md       # Documentation
```

## 💻 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Flexbox, Grid)
- **JavaScript (ES6+)** - Core functionality
- **localStorage API** - Data persistence

## 🎯 Key Features Explained

### Real-time Calculations
The app automatically updates your balance whenever you add or remove a transaction.

### Data Persistence
Your transactions are saved to browser localStorage, so they persist even after closing the page.

### Responsive Design
Optimized for all screen sizes - desktop, tablet, and mobile.

## 📋 Usage

### Adding a Transaction
1. Fill in the description field
2. Enter the transaction amount
3. Select whether it's Income or Expense
4. Click "Add Transaction"

### Viewing Transactions
- All transactions appear in chronological order
- Income shows in green, Expenses in red
- Balance updates instantly

### Deleting Transactions
- Click the "Delete" button on any transaction
- Use "Clear All" to remove all transactions at once

## 🔄 How It Works

**Form Submission** → **Add to Array** → **Calculate Totals** → **Update Display** → **Save to localStorage**

## 🛣️ Roadmap

- [ ] Category tags
- [ ] Date filtering
- [ ] Chart visualization
- [ ] Budget limits
- [ ] Export to CSV
- [ ] Dark mode
- [ ] Multiple accounts

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

MIT License - feel free to use this project for personal or commercial use.

## 👤 Author

Ahmed Elghazzawy

---

**Built with ❤️ in vanilla JavaScript**
