// document.write('hello world!')

var sliderValue = document.querySelector(".length-slider");
var rangeSlider = document.getElementById("slider");

sliderValue.innerHTML = "Length : " + rangeSlider.value;

const sliderProps = {
  fill: "#0B1EDF",
  background: "rgba(255, 255, 255, 0.214)"
};

rangeSlider.addEventListener("input", function() {
  sliderValue.innerHTML = "Length : " + this.value;

  const percentage = (100 * (this.value - this.min)) / (this.max - this.min);
  const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${
    sliderProps.background
  } ${percentage + 0.1}%)`;
  this.style.background = bg;
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "~!@#$%^&*_+:?.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

///selecting dom elements

// The Viewbox where the result will be shown
const result = document.getElementById("result");

// Checkboxes
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");

// When Generate is clicked Password id generated.
generateBtn.addEventListener("click", () => {
  const length = +rangeSlider.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  result.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
  // console.log(generate(length, hasLower, hasUpper, hasNumber, hasSymbol))
  // result.innerText = generate(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

// Function responsible to generate password and then returning it.
function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );
  // console.log(typesArr)
  if (typesCount === 0) {
    return "CLICK ON GENERATE PASSWORD";
  }
  for (let i = 0; i < length; i++) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  // console.log(generatedPassword)
  return generatedPassword.slice(0, length);
}
/*

for generating random password 
it is not working  

function generate(length , lower , upper , number , symbol){
    let password = "";
    let cnt = lower + upper + numbers + symbol;
    if(cnt===0){
        return "Click here";
	}
	const arr = [ lower , upper , number  , symbol ];
	const key = ['lower' , 'upper' , 'number' , 'symbol' ];
	const a = [];

	for(let i=0 ; i<arr.length ; i++){
		if(arr[i]=='true'){
			a.push(key[i])
		}
	}
	for(let x=0 ; x<length ; x++){
		for(let i=0 ; i<a.length ; i++){
			password+=randomFunc[a[i]]();
		}
	}
	// console.log(password.slice(0 , length))
	return password.slice(0 , length);
}
*/
