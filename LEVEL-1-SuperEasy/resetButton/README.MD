# Feedback Form with Reset Button 📝🔄

A beginner-friendly mini project built using **HTML**, **CSS**, and **JavaScript**.  
This form allows users to enter their name, email, and feedback — and provides a **Reset** button to clear all fields instantly.

---

## ✨ Features

- ✅ Simple feedback form with three fields
- ✅ Submit button shows an alert with the entered values
- ✅ Reset button clears all input fields
- ❌ Prevents form from reloading the page (using `e.preventDefault()`)

---

## 📁 Technologies Used

- HTML
- CSS
- JavaScript

---

## 📷 Screenshot

![App Screenshot](feedback-form(reset-functionality).png)  
*Add a screenshot of your form UI here (optional but recommended)*

---

## 🧠 What I Learned

- Form handling using JavaScript
- Using `addEventListener()` for `submit` and `click` events
- How to use `.reset()` to clear a form
- How to use `e.preventDefault()` to stop form from refreshing the page

---

## 💡 Code Highlights

### JavaScript

```js
const form = document.getElementById('feedbackForm');
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  alert(`Thank you!\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
});

resetBtn.addEventListener("click", function () {
  form.reset(); // Clear all inputs
});
