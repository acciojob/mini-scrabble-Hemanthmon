//your code here
 

	
let inputBox = document.getElementById('evaluatedText')
let letterCount = document.getElementById('letterCount')

inputBox.addEventListener('input', () => {
	letterCount.innerText = inputBox.value.length
})