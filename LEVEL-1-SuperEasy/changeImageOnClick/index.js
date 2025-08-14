
const imageList = [
  "images/image-2.jpg",
  "images/image-3.jpg",
  "images/image-4.jpg",
  "images/image-5.jpg"
];

let currentIndex = 0;

const imageElement = document.getElementById("clickImage");

imageElement.addEventListener("click",() =>{
  currentIndex = (currentIndex + 1) % imageList.length;
  imageElement.src = imageList[currentIndex];
})


