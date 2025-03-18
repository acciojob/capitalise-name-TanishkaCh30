let input = document.getElementById("fname");

input.addEventListener("blur",()=>{
	let result = input.value.toUpperCase();
	input.value = result;
})
