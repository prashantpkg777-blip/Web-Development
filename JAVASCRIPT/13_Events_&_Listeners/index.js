
function changeText(){
  console.log(Event)
  let fdiv=document.getElementById("fdiv");
  fdiv.textContent= "Hello Prashant!";
}

let fdiv=document.getElementById("fdiv");

fdiv.addEventListener("click", changeText);
// fdiv.removeEventListener("click", changeText);

fdiv.addEventListener("mouseover", function(){
  fdiv.style.color="red";
});

fdiv.addEventListener("mouseout", function(){
  fdiv.style.color="black";
});

let fanchore = document.getElementById("fanchore");

fanchore.addEventListener("click", function(event){
  event.preventDefault();
  fanchore.textContent = "Ab chor do bhai ho gaya click";  
});

// let paras = document.querySelectorAll("p");

function alertPara(event){
  alert("You clicked on a paragraph! " + event.target.textContent);
}

// for (let i = 0; i < paras.length; i++){
//   paras[i].addEventListener("click", alertPara);
// }

let sdiv = document.getElementById("sdiv");

sdiv.addEventListener("click", alertPara)
