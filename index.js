let num1El = document.getElementById('input1')
let num2El = document.getElementById('input2')
let resultEl = document.getElementById('result')



function getValues(){
  return [Number(num1El.value), Number(num2El.value)];
}


function add(){
  const [num1,num2] = getValues()
  if(isNaN(num1) || isNaN(num2)){
    resultEl.value = "Please enter valid numbers"
    return;
  }
  let sum = num1 + num2;
  resultEl.value = sum;
}

function mul(){
  const [num1,num2] = getValues()
  if(isNaN(num1) || isNaN(num2)){
    resultEl.value = "Please enter valid numbers"
    return;
  }
  let mul = num1 * num2;
  resultEl.value = mul;
}

function sub(){
 const [num1,num2] = getValues()
 if(isNaN(num1) || isNaN(num2)){
    resultEl.value = "Please enter valid numbers"
    return;
  }
  let diff = num1 - num2;
  resultEl.value = diff;
}

function div(){
  const [num1,num2] = getValues()
  if(num2 === 0){
    resultEl.value = "Can't divide by 0 bro"
    return;
  }
  if(isNaN(num1) || isNaN(num2)){
    resultEl.value = "Please enter valid numbers"
    return;
  }
  let div = num1 / num2;
  resultEl.value = div;
}

function mod(){
  const [num1,num2] = getValues()
  if(isNaN(num1) || isNaN(num2)){
    resultEl.value = "Please enter valid numbers"
    return;
  }
  let mod = num1 % num2;
  resultEl.value = mod;
}

function clearResult(){
  resultEl.value = ''
  num1El.value = ''
  num2El.value = ''
}
