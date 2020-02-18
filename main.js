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

/*direction dropdown*/
let direction = document.getElementById('form__direction');

/*service speed dropdown*/
let speed = document.getElementById('form__speed');

/*radio inputs*/
let complexity__general = document.getElementById('form__complexity--general')
let complexity__specialized = document.getElementById('form__complexity--specialized')
/*textarea field*/
let remarks = document.getElementById('form__remarks');



/*visibiliy/invisibiliy of form items depending on the chosen service*/

service.addEventListener('change', function() {

    const wordcount__item = document.querySelector('.form__wordcount__invisible');
    const captionsTime__item = document.querySelector('.form__captions__invisible');

    if (service.value === "Tłumaczenie" || service.value === "Korekta") {
        wordcount__item.classList.add("form__wordcount__visible");
        captionsTime__item.classList.remove('form__captions__visible');

    } else if (service.value === "Napisy") {
        captionsTime__item.classList.add("form__captions__visible");
        wordcount__item.classList.remove('form__wordcount__visible');
    } else {
        wordcount__item.classList.remove('form__wordcount__visible');
        captionsTime__item.classList.remove('form__captions__visible');
    }

})




/*query Object*/
let query_data = {};

const button = document.querySelector('.form__button');

button.addEventListener('click', function() {


/*quote calculation*/

function queryCalculate() {

    /*translation job calculation*/
    let wordcount = document.getElementById('form__wordcount');

    if (service.value === "Tłumaczenie" && direction.value === "polski > angielski" && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((wordcount.value * 0.16) + 2) * 1.5);
     }

    if (service.value === "Tłumaczenie" && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((wordcount.value * 0.14) + 2) * 1.5);
     }

     if (service.value === "Tłumaczenie" && direction.value === "polski > angielski" && speed.value === "Ekspresowy") {
        return Math.round((wordcount.value * 0.16) * 1.5);
    }

     if (service.value === "Tłumaczenie" && speed.value === "Ekspresowy") {
        return Math.round((wordcount.value * 0.14) * 1.5);
    }

    if (service.value === "Tłumaczenie" && direction.value === "polski > angielski" && complexity__specialized.checked) {
        return Math.round((wordcount.value * 0.16) + 2);
    }

    if (service.value === "Tłumaczenie" && complexity__specialized.checked) {
       return Math.round((wordcount.value * 0.14) + 2);
    }

    if (service.value === "Tłumaczenie" && direction.value === "polski > angielski") {
        return Math.round(wordcount.value * 0.16);
    }

    if (service.value === "Tłumaczenie") {
        return Math.round(wordcount.value * 0.14);
    }

    /*revision job calculation*/
    if (service.value === "Korekta" && direction.value === "polski > angielski"  && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((wordcount.value * 0.08) + 2) * 1.5);
     }
    
    if (service.value === "Korekta" && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((wordcount.value * 0.07) + 2) * 1.5);
     }

     if (service.value === "Korekta" && direction.value === "polski > angielski" && speed.value === "Ekspresowy") {
        return Math.round((wordcount.value * 0.08) * 1.5);
    }

     if (service.value === "Korekta" && speed.value === "Ekspresowy") {
        return Math.round((wordcount.value * 0.07) * 1.5);
    }

    if (service.value === "Korekta" && direction.value === "polski > angielski" && complexity__specialized.checked) {
        return Math.round((wordcount.value * 0.08) + 2);
     }

    if (service.value === "Korekta" && complexity__specialized.checked) {
       return Math.round((wordcount.value * 0.07) + 2);
    }

    if (service.value === "Korekta" && direction.value === "polski > angielski") {
        return Math.round(wordcount.value * 0.08);
    }

    if (service.value === "Korekta") {
        return Math.round(wordcount.value * 0.07);
    }


    /*subtitling job calculation*/
    let captions = document.getElementById('form__captions');
    let timeToNumber = captions.valueAsNumber/60000;

    if (service.value === "Napisy" && direction.value === "polski > angielski" && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((timeToNumber * 0.67) + 2) * 1.5);
     }

    if (service.value === "Napisy" && complexity__specialized.checked && speed.value === "Ekspresowy") {
        return Math.round(((timeToNumber * 0.58) + 2) * 1.5);
     }

     if (service.value === "Napisy" && direction.value === "polski > angielski" && speed.value === "Ekspresowy") {
        return Math.round((timeToNumber * 0.67) * 1.5);
    }

     if (service.value === "Napisy" && speed.value === "Ekspresowy") {
        return Math.round((timeToNumber * 0.58) * 1.5);
    }

    if (service.value === "Napisy" && direction.value === "polski > angielski" && complexity__specialized.checked) {
        return Math.round((timeToNumber * 0.67) + 2);
     }

    if (service.value === "Napisy" && complexity__specialized.checked) {
       return Math.round((timeToNumber * 0.58) + 2);
    }

    if (service.value === "Napisy" && direction.value === "polski > angielski") {
        return Math.round(timeToNumber * 0.67);
    }

    if (service.value === "Napisy") {
        return Math.round(timeToNumber * 0.58);
    }

    
} 

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
    query_data[direction.id] = direction.value;
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

if (query_data.form__surname === "" && query_data.form__phone === "") {
    submitter.textContent = 'Dokonujesz wyceny jako ' + query_data.form__name + '. Twój adres e-mail to ' + query_data.form__email + '.';
} else if (query_data.form__surname === "") {
    submitter.textContent = 'Dokonujesz wyceny jako ' + query_data.form__name + '. Twój adres e-mail to ' + query_data.form__email + ', a numer telefonu to ' + query_data.form__phone + '.';
} else if (query_data.form__phone === "") {
    submitter.textContent = 'Dokonujesz wyceny jako ' + query_data.form__name + ' ' + query_data.form__surname + '. Twój adres e-mail to ' + query_data.form__email + '.';
} else {
    submitter.textContent = 'Dokonujesz wyceny jako ' + query_data.form__name + ' ' + query_data.form__surname + '. Twój adres e-mail to ' + query_data.form__email + ', a numer telefonu to ' + query_data.form__phone + '.';
};

const submitter__query = document.querySelector('.summary__window--query');
submitter__query.textContent = 'Wartość twojej wyceny to: ' + queryCalculate() + ' PLN';

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



