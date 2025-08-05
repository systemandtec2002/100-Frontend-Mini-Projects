const form = document.getElementById('feedbackForm');

const reseBtn =  document.getElementById("resetBtn");

form.addEventListener("submit",(e) =>{
e.preventDefault();

const name = document.getElementById("name").value;

const email =  document.getElementById("email").value;

const feedBack = document.getElementById("feedback").value;

 alert(`Thank you!\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
})

resetBtn.addEventListener("click", function() {
  form.reset();
});