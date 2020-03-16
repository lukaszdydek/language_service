/*main menu */
const menu = document.querySelector('.menu');
menu.addEventListener('click', function () {
    menu.classList.toggle('menu__clicked');
}

);


/*scroll progress bar*/
const progress__bar = document.querySelector('.progress__bar');


window.addEventListener('scroll', function() {

    let scrolled = (document.documentElement.scrollTop/document.documentElement.scrollHeight) * 112;
    progress__bar.style.width = scrolled + '%';
    
    
})


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

/*query details summary*/
/*query service*/
const query__service = document.querySelector('.summary__window--service');

query__service.textContent = 'Wybrana usługa to ' + query_data.form__service.toLowerCase() + '.';

/*query wordcount*/
const query__wordcount = document.querySelector('.summary__window--wordcount');

if (query_data.form__service === "Napisy") {
    query__wordcount.textContent = 'Czas trwania filmu wynosi: ' + query_data.form__captions + '.'
} else {query__wordcount.textContent = 'Liczba słów wynosi: ' + query_data.form__wordcount + '.';
}

/*query direction*/
const query__direction = document.querySelector('.summary__window--direction');

if (query_data.form__direction === 'angielski > polski') {
    query__direction.textContent = 'Zlecenie będzie wykonywane z języka angielskiego na polski.';
} else if (query_data.form__direction === 'polski > angielski') {
    query__direction.textContent = 'Zlecenie będzie wykonywane z języka polskiego na angielski.';
} else {
    query__direction.textContent = '';
}

/*query complexity*/
const query__complexity = document.querySelector('.summary__window--complexity');

if (complexity__general.checked) {
    query__complexity.textContent = 'Jako stopień zaawansowania tekstu wybrano Tekst ogólny.'
} else if (complexity__specialized.checked) {
    query__complexity.textContent = 'Jako stopień zaawansowania tekstu wybrano Tekst specjalistyczny.'
} else {
    query__complexity.textContent = '';
}

/*query speed*/
const query__speed = document.querySelector('.summary__window--speed');
if (query_data.form__speed === 'Normalny') {
    query__speed.textContent = 'Wybrany został standardowy tryb realizacji zlecenia. Wybiera się go, jeżeli nie jest wymagane nazwyczajnie szybkie wykonanie usługi.';
} else if (query_data.form__speed === 'Ekspresowy') {
    query__speed.textContent = 'Wybrany został ekspresowy tryb realizacji zlecenia. Wybiera się go, jeżeli wymagane jest nazwyczajnie szybkie wykonanie usługi.';
} else {
    query__speed.textContent = '';
}

/*query deadline*/
const query__deadline = document.querySelector('.summary__window--deadline');

query__deadline.textContent = 'Żądany termin wykonania usługi to ' + query_data.form__deadline + '.';

/*query file*/
const query__file = document.querySelector('.summary__window--file');

if (query_data.form__file === '') {
    query__file.textContent = '';
} else {
    query__file.textContent = 'Załączony został plik: ' + form__file.files[0].name + '.'; 
}

/*query remarks*/
const query__remarks = document.querySelector('.summary__window--remarks');

if (query_data.form__remarks === '') {
    query__remarks.textContent = '';
} else {
    query__remarks.textContent = 'Dodatkowe uwagi: ' + query_data.form__remarks; 
}

/*query calculation value*/
const submitter__price = document.querySelector('.summary__window--price');

submitter__price.textContent = 'Wartość twojej wyceny to: ' + queryCalculate() + ' PLN';

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



