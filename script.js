//your code here
 

	
let inputBox = document.getElementById('evaluatedText')
let letterCount = document.getElementById('letterCount')


letterCount.innerText = "0";

inputBox.addEventListener('input', () => {
	letterCount.innerText = inputBox.value.length.toString();
})