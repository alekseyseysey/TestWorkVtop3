
let enLanguageId = document.getElementById('enLanguageId')
let b = document.getElementsByClassName(".enLanguage")

console.log(enLanguageId)

let textLanguage = document.getElementById('textLanguageId')
console.log(textLanguage)

function textRussian(){
    if(textLanguage.textContent === "EN"){
        textLanguage.textContent ='RU'
        enLanguageId.classList.remove('enlanguage')
        enLanguageId.classList.add('enLanguageSwitch')
    }
    else{
        textLanguage.textContent ='EN'
        enLanguageId.classList.remove('enLanguageSwitch')
        enLanguageId.classList.add('enlanguage')
    }
}

enLanguageId.addEventListener('click', textRussian);


$(document).ready(function() {
    $('.headerBurger').click(function(event){
        $('.headerBurger, .headerMenu').toggleClass('active');
$('body').toggleClass('Lock')
    });
});