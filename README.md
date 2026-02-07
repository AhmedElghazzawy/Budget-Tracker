# 💰 Budget Tracker

A simple, elegant web application to track your income and expenses. Built with vanilla HTML, CSS, and JavaScript to help you learn fundamental web development concepts.

## Features

✅ **Add Transactions** - Record income and expense transactions  
✅ **Real-time Summary** - View total income, expenses, and balance  
✅ **Transaction List** - See all your transactions with details  
✅ **Persistent Data** - Data is saved locally using localStorage  
✅ **Delete Transactions** - Remove individual transactions  
✅ **Clear All** - Delete all transactions at once  
✅ **Responsive Design** - Works on desktop and mobile devices  

## Learning Objectives

This project teaches:

- **HTML**: Semantic structure, forms, and elements
- **CSS**: Flexbox, Grid, gradients, and responsive design
- **JavaScript**: 
  - DOM manipulation and selection
  - Event handling
  - Array methods (filter, reduce, map)
  - Object creation
  - localStorage API
  - Form validation

## Project Structure

```
budget-tracker/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── script.js       # Application logic
├── .gitignore      # Git ignore file
└── README.md       # Documentation (this file)
```

## How to Use

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Add a transaction**:
   - Enter a description (e.g., "Salary", "Groceries")
   - Enter the amount
   - Select Income or Expense
   - Click "Add Transaction"
4. **View your summary** - Updates automatically
5. **Delete transactions** - Click the Delete button on any transaction

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6)** - Modern JavaScript features
- **localStorage** - Client-side data persistence

## Key Code Concepts

### Array Methods
```javascript
// Filter: Get only income transactions
transactions.filter(t => t.type === 'income')

// Reduce: Calculate total
transactions.reduce((sum, t) => sum + t.amount, 0)
```

### DOM Manipulation
```javascript
// Select elements
const element = document.getElementById('id')

// Create and append
const div = document.createElement('div')
parent.appendChild(div)
```

### localStorage
```javascript
// Save
localStorage.setItem('key', JSON.stringify(data))

// Load
const data = JSON.parse(localStorage.getItem('key'))
```

## Future Enhancements

- 📊 Charts and graphs for visual analytics
- 🏷️ Category filtering
- 📅 Date range filtering
- 📱 Progressive Web App (PWA)
- 🎨 Dark mode
- 📤 Export to CSV
- 🔐 User authentication

## Learning Tips

1. **Read the comments** - Code is heavily commented for learning
2. **Modify and experiment** - Change colors, add features, break things and fix them
3. **Use browser DevTools** - Open Inspector (F12) to inspect HTML and CSS
4. **Check the Console** - Open Console tab (F12) to see JavaScript output
5. **Build on it** - Add new features like categories, budgets, or charts

## Troubleshooting

**Transactions not saving?**
- Check if localStorage is enabled in your browser
- Open DevTools → Application tab → Local Storage to verify

**Form not submitting?**
- Check the browser console for errors (F12)
- Ensure all form fields are filled

**Styling looks wrong?**
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache

## Resources to Learn More

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

**Happy Learning! 🚀**
