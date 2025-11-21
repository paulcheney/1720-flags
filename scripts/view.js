// Store the selected elements that we are going to use. 
const viewClass = document.querySelector('#showHere')
const gridBtn = document.querySelector('#grid')
const listBtn = document.querySelector('#list')

//Assign Grid Class
gridBtn.addEventListener('click', () => {
	viewClass.className = 'grid';
    gridBtn.className = 'active';
    listBtn.className = '';
})

//Assign List Class
listBtn.addEventListener('click', () => {
	viewClass.className = 'list';
    gridBtn.className = '';
    listBtn.className = 'active';
})