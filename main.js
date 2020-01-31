/*main menu */
const menu = document.querySelector('.menu');
menu.addEventListener('click', function() {
    menu.classList.toggle('menu__clicked');
}
    
);


/*date insertion under the pricelist table*/

let date = new Date();
const date_placeholder = document.querySelector('.inserted__date');

let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

date_placeholder.textContent = day + '.' + month+1 + '.' + year + ' r.';