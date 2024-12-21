const item = document.querySelector('#item')
const item2 = document.querySelector('#item2')
const icon = document.querySelector('.video__icons')
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.close__popup')
function deleteItem() {
	item.style.display = 'none'
}
function deleteItem2() {
	item2.style.display = 'none'
}
icon.addEventListener('click',()=>{
	popup.style.display = 'flex'
})
closePopup.addEventListener('click',()=>{
	popup.style.display = 'none'
})







