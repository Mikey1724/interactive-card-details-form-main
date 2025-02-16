
let cardNumber = document.getElementById("ipt_2")
let cardHolderName = document.getElementById("ipt_1")
let expDateMonth = document.getElementById("ipt_3a")
let expDateYear = document.getElementById("ipt_3b")
let cvc = document.getElementById("ipt_4")

let btn = document.getElementById("form")

let validBloc = document.getElementById("content_2")
let currentBloc = document.getElementById("sct_2")

let cardNumberOutput = document.getElementById("rlt_1")
let cardHolderNameOutput = document.getElementById("rlt_2")
let expDateOutput = document.getElementById("rlt_3")
let cvcOutput = document.getElementById("rlt_4");


btn.addEventListener('submit', e =>{
    e.preventDefault();
    verify_form();
})

function verify_form(){
    const cardNumberValue = cardNumber.value.trim();
    const cardHolderNameValue = cardHolderName.value.trim();
    const expDateMonthValue = expDateMonth.value.trim();
    const expDateYearValue = expDateYear.value.trim();
    const cvcValue = cvc.value.trim();

    let validName = false;
    let validNumber = false;
    let validMonth = false;
    let validYear = false;
    let validCVC = false;

    
    
    if(cardHolderNameValue == ""){
        let message = "Can't be blank";
        afficher_erreur(cardHolderName, message);
    }else if(!cardHolderNameValue.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        let message = "Wrong format, letters only";
        afficher_erreur(cardHolderName, message);
    }else{
        validName = true;
    }

    if(cardNumberValue == ""){
        let message = "Can't be blank";
        afficher_erreur(cardNumber, message);
    }else if (!cardNumberValue.match(/^[0-9]{4,4}\ [0-9]{4,4}\ [0-9]{4,4}\ [0-9]{4,4}$/)){
        let message = "Wrong format, number only";
        afficher_erreur(cardNumber, message);
    }else{
        validNumber = true;
    }

    if(expDateMonthValue == ""){
        let message = "Can't be blank";
        afficher_erreur(expDateMonth, message);
    }else if(!expDateMonthValue.match(/^[0-9]{2,2}$/) || !(expDateMonthValue >= 1 && expDateMonthValue <= 12)){
        let message = "Wrong format";
        afficher_erreur(expDateMonth, message);
    }else{
        validMonth = true;
    }

    if(expDateYearValue == ""){
        let message = "Can't be blank";
        afficher_erreur(expDateYear, message);
    }else if(!expDateYearValue.match(/^[0-9]{2,2}$/) || !(expDateYearValue >= 70 || expDateYearValue <= 26)){
        let message = "Wrong format";
        afficher_erreur(expDateYear, message);
    }else{
        validYear = true;
    }

    if(cvcValue == ""){
        let message = "Can't be blank";
        afficher_erreur(cvc, message);
    }else if(!cvcValue.match(/^[0-9]{3,3}$/)){
        let message = "Wrong format";
        afficher_erreur(cvc, message);
    }else{
        validCVC = true;
    }

    if(validName == true && validNumber == true && validMonth == true && validYear == true && validCVC == true){
        currentBloc.style.display = "none";
        validBloc.style.display = "block";  
        cardHolderNameOutput.innerText = cardHolderNameValue.toUpperCase();
        cardNumberOutput.innerText = cardNumberValue;
        expDateOutput.innerText = `${expDateMonthValue}/${expDateYearValue}`
        cvcOutput.innerText = cvcValue;
    }

}


function afficher_erreur(blocName, message){
    const blocControl = blocName.parentElement;
    const blocControl2 = blocControl.parentElement;
    const small = blocControl2.querySelector('small');

    small.innerText = message;
    blocControl.className = "wrapper error";
    blocControl2.className = "wrapper2 error";
}
