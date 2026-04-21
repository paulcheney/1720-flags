// Store the selected elements that we are going to use. 
const gridButton = document.querySelector('#btn-grid')
const listButton = document.querySelector('#btn-list')
const layout = document.querySelector('#showFlags')

//Assign Grid Class
gridButton.addEventListener('click', () => {
    gridButton.className = 'show';
    listButton.className = '';
    layout.className = 'grid';
})

//Assign List Class
listButton.addEventListener('click', () => {
    gridButton.className = '';
    listButton.className = 'show';
    layout.className = 'list';
})