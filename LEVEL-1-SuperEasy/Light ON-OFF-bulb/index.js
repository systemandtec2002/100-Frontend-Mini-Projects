document.getElementById("img").src = "lightOff.jpg";

function btnOn() {
  document.getElementById("img").src = "lightOn.jpg";
  document.getElementById("text").innerHTML = "on";
  document.getElementById("On").style.backgroundColor = "rgba(245, 188, 0)";
  document.getElementById("On").style.color = "white";

  document.getElementById('Of').style.backgroundColor ='white';
  document.getElementById("Of").style.color ='black';
}

function btnOf() {
  document.getElementById("img").src = "lightOff.jpg";
  document.getElementById("text").innerHTML = "Of";

  document.getElementById("Of").style.backgroundColor = "red";

  document.getElementById("Of").style.color = "white";

  document.getElementById('On').style.backgroundColor ='white';
  document.getElementById("On").style.color ='black';

}


document.getElementById("Of").style.backgroundColor = "red";