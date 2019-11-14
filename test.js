sliderEl = document.getElementById('formControlRange');
console.log(sliderEl)
sliderDisplayEl = document.getElementById('sliderDisplay');
console.log(sliderDisplayEl);
passwordLength = sliderEl.value;
// passwordLength = "9"
// console.log(passwordLength);
// https://www.java67.com/2012/10/best-way-to-convert-numbers-to-string-in-java-example.html
passwordString = passwordLength.valueOf(); 

function changeSlider() {
    sliderDisplayEl.innerHTML = sliderEl.value;
}

sliderEl.addEventListener("click", function(){
    changeSlider();
})