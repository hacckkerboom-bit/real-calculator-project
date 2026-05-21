const calculatorDisplay=document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
let firstValue= 0;

function addnumber(number){
  calculatorDisplay.innerText=number
}



inputBtns.forEach((inputBtn)=>{
  if (inputBtn.classList.length===0){
    inputBtn.addEventListener('click',()=>addnumber(inputBtn.value))
  }
})
