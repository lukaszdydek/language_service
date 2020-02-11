/*main menu */
const menu = document.querySelector('.menu');
menu.addEventListener('click', function () {
    menu.classList.toggle('menu__clicked');
}

);


/*date insertion under the pricelist table*/

let date = new Date();
const date_placeholder = document.querySelector('.inserted__date');

let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

date_placeholder.textContent = date.toLocaleDateString() + ' r.';





/*quote generation*/


let formTable = document.querySelector('.query__table');

/*input fields*/
let formTextNodes = formTable.querySelectorAll('input');

/*service dropdown*/
let service = document.getElementById('form__service');
/*service speed dropdown*/
let speed = document.getElementById('form__speed');

/*radio inputs*/
let complexity__general = document.getElementById('form__complexity--general')
let complexity__specialized = document.getElementById('form__complexity--specialized')
/*textarea field*/
let remarks = document.getElementById('form__remarks');

/*query Object*/
let query_data = {};

const button = document.querySelector('.form__button');

button.addEventListener('click', function() {

/* let name = document.getElementById('form__name').value;
let surname = document.getElementById('form__surname').value;
let email = document.getElementById('form__email').value;

let phone = document.getElementById('form__phone');
let service = document.getElementById('form__service');
let wordcount = document.getElementById('form__wordcount');
let captions = document.getElementById('form__captions');
let complexity__general = document.getElementById('form__complexity--general')
let complexity__specialized = document.getElementById('form__complexity--specialized')
let speed = document.getElementById('form__speed');
let deadline = document.getElementById('form__deadline');
let file = document.getElementById('form__file');
let remarks = document.getElementById('form__remarks'); 



*/



for (i = 0; i < formTextNodes.length - 1; i++) {

    /* validating the form
    if (formTextNodes[i].required && formTextNodes[i].value === '') {
        alert('Wypełnij wymagane pola!');
        return;
    };
*/
    /*populating the "query_data" object with form data*/

    let formTextNodesIds = formTextNodes[i].getAttribute('id');
    let formTextNodeValues = formTextNodes[i].value;
    query_data[formTextNodesIds] = formTextNodeValues;
    query_data[service.id] = service.value;
    query_data[speed.id] = speed.value;
    query_data[remarks.id] = remarks.value;

    if (complexity__general.checked) {
        query_data[complexity__general.id] = complexity__general.value;
        delete query_data['form__complexity--specialized'];
    }

    if (complexity__specialized.checked) {
        query_data[complexity__specialized.id] = complexity__specialized.value;
        delete query_data['form__complexity--general'];

    }
};

/*Popup window on clicking form submit button - formatting & content*/

let submitter = document.querySelector('.summary__window--submitter');
submitter.textContent = 'Dokonujesz wyceny jako ' + query_data.form__name + ' ' + query_data.form__surname + '. Twój adres e-mail to ' + query_data.form__email + ', a numer telefonu to ' + query_data.form__phone + '.';

/*Displaying the pop-up window on clicking form submit button*/

const summary__window = document.querySelector('.summary__window');
summary__window.classList.toggle('summary__window__visible');
}

);

/*Button closing the pop-up window*/

const summary__window = document.querySelector('.summary__window')
const summary__button = document.querySelector('.summary__window--button');

summary__button.addEventListener('click', function() {
summary__window.classList.replace('summary__window__visible', 'summary__window');}
);



