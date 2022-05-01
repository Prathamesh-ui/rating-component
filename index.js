let buttons = document.querySelectorAll('li');
let submit = document.querySelector(".btn");
let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let value = document.querySelector("span");
let rating = 0;


submit.addEventListener("click", onSubmit);

buttons.forEach((element)=>{
  element.addEventListener("click", handleButton);
});

function onSubmit(){
  main2.classList.remove("hide");
  main1.classList.add("hide");
}

function handleButton(event){
  buttons.forEach((button)=>{
    button.classList.remove("after");
  });
  event.target.classList.add("after");
  rating = event.target.innerHTML;

  value.innerHTML = rating;
  
}

