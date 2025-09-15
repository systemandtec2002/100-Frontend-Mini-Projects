const slider = document.querySelector('.slider');
const prevBtn =  document.getElementById("prev");
const nextBtn  = document.getElementById("next"); 

prevBtn.disabled = true;

const images = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/2188630082/photo/diablo-lake-wraps-around-thick-forest-covered-hills-leading-to-colonial-peak.jpg?s=612x612&w=0&k=20&c=FTBjE7SECJ2oSHNtLW-mBruC0o6_AS69H-hA71H4UR8=",
  "https://media.istockphoto.com/id/2166282428/photo/a-beautiful-and-lush-green-forest-canopy-illuminated-by-warm-sunlight-streaming-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=pAbM-TaCjxMefRxZBp3uQp27lwlEFFqni5yJnrzpPho=",
  "https://plus.unsplash.com/premium_vector-1716874671235-95932d850cce?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"

];


let currentIndex = 0;

const imageTag = document.createElement('img');
imageTag.src = images[0];
imageTag.width = 600;
imageTag.height = 350;
slider.append(imageTag);

nextBtn.addEventListener("click",() =>{
currentIndex++;
if(currentIndex >= images.length-1){
nextBtn.disabled = true
}else{
  nextBtn.disabled = false
  prevBtn.disabled = false
}
imageTag.src = images[currentIndex];
console.log(currentIndex, "next");
});

prevBtn.addEventListener("click",() =>{
currentIndex--;
if(currentIndex <= 0){
prevBtn.disabled = true
}else{
  nextBtn.disabled = false
  prevBtn.disabled = false
}
imageTag.src = images[currentIndex];
console.log(currentIndex, "prev");
});