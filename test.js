sliderEl = document.getElementById('formControlRange');
console.log(sliderEl)
sliderDisplayEl = document.getElementById('sliderDisplay');
console.log(sliderDisplayEl);
// passwordLength = sliderEl.value;
passwordLength = "9"
console.log(passwordLength);
passwordString = passwordLength.valueOf(); 

function changeSlider() {
    sliderDisplayEl.innerHTML = sliderEl.value;
}

sliderEl.addEventListener("click", function(){
    changeSlider();
})