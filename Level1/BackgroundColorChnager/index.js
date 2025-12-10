const btn = document.querySelector('#btn');

const nameOfColor = document.querySelector('#colorName');

const body = document.body;

const colors = ['red','green','blue','orange','brown','yellow','purple','lightpink'];


body.style.backgroundColor = colors[7];

btn.addEventListener("click",changeBackground);


function changeBackground(){
  const randomIndex = Math.floor(Math.random()*colors.length);

  const getRandomColor = colors[randomIndex];



body.style.backgroundColor = getRandomColor; // actually change background


let title =  nameOfColor.innerText = `Background color changed to: ${getRandomColor}` 

nameOfColor.style.color = getRandomColor
  
  
  
}

