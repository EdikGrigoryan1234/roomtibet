const icon = document.querySelector('.open__icon')
const elems = document.querySelector('.location__table')
const countElems = document.querySelector('.count__table')
const text1 = document.querySelector('.item__text')
const text2 = document.querySelector('.item__text2')
const tex = document.querySelector('.str')


let isOpen = false
let countOpen = false
function openList() {
	
	if (isOpen !== true) {	
		icon.style.transform = "rotate(180deg)"
		isOpen = true
			elems.style.display = 'block'

		
	}else{
		icon.style.transform = "rotate(0deg)"
		isOpen = false
			elems.style.display = 'none'
			
		
	}
}
function countValue() {
	let str = String(this.innerText)
	
	text2.innerHTML = str
	console.log(str);	
}

function changeValue() {
	let str = String(this.innerText)
	
	text1.innerHTML = str
	console.log(str);	
}


function openCountList() {
	if (countOpen !== true) {	
		icon.style.transform = "rotate(180deg)"
		countOpen = true
		countElems.style.display = 'block'
		
		
	}else{
		icon.style.transform = "rotate(0deg)"
		countOpen = false
		countElems.style.display = 'none'
		
		
	}
}



