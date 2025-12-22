const box = document.getElementById("hoverBox");

box.addEventListener('mouseover',() =>{
  box.innerText = "you are hovering on me !"
});

box.addEventListener("mouseout",() =>{
  box.innerText = "Hover over me!";
})