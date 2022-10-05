let table = document.getElementById("table");


function SortPrice(){
    let trs = document.getElementsByTagName("tr");
    let button = document.getElementById('btn-sort');
     let tbody = document.getElementById("tbody");
    button.addEventListener('click',function (){
        let sorted = [...trs].sort(function (a,b){

            return a.children[3].innerHTML - b.children[3].innerHTML;
        });

        for (let tr of sorted){
            tbody.appendChild(tr);
        }
    });
}
function searchCountry(){
    let filter = document.getElementById("search-bar").value.toUpperCase();
    let tr = table.getElementsByTagName("tr");

    for(var i = 0; i <tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = '';
            } else{
                tr[i].style.display = 'none';
            }

        }
    }

}
function CountPrice(){
    var sumVal = 0;
    let trs = document.getElementsByTagName("tr");
    for (var i = 1; i <trs.length; i++){
         sumVal= sumVal + parseInt(trs[i].cells[3].innerHTML);
    }
    document.getElementById("total-sum").innerHTML = "Total Price for all Trips is "+ sumVal + " UAH";
    console.log(sumVal);
}
const setSuccess = element => {
    const  inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}
const setError = (element, message) => {
    const  inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
// ---------------------Validation input -----------------------------------
const myform = document.querySelector("#myform");
const countryEl= document.querySelector('#country');
const durationEl = document.querySelector('#duration');
const priceEl= document.querySelector('#price');

myform.addEventListener('input', (function (e) {
    switch (e.target.id) {
        case 'country':
            checkCountryName();
            break;
        case 'duration':
            checkDuration();
            break;
        case 'price':
            checkPrice();
            break;

    }
}));
const checkCountryName = () => {
    let letters = /\b[^\d\W]+\b/;
    const min = 3,
        max = 50;

    const country = countryEl.value.trim();

    if (country === '') {
        setError(countryEl, 'Country cannot be blank.');
    } else if  (country.length <min || country.length >max) {
        setError(countryEl, `Country must be between ${min} and ${max} characters.`)
    }  else if (!(country.match(letters))){
        setError(countryEl, `Please use only alphabetic symbols`)
    }
    else {
        setSuccess(countryEl);
    }
};

const checkDuration = () => {
     const min = 3,
        max = 50;
     const duration = durationEl.value.trim();
     if (duration === '') {
        setError(durationEl, 'Duration cannot be blank.');
    } else if  (duration <min || duration >max) {
        setError(durationEl, `Duration must be between ${min} and ${max} days.`)
    }
    else {
        setSuccess(durationEl);
    }
}
const checkPrice = () => {
     const min = 7000,
        max = 150000;
     const price = priceEl.value.trim();
     if (price === '') {
        setError(priceEl, 'Price cannot be blank.');
    } else if  (price <min || price >max) {
        setError(priceEl, `Price must be between ${min} and ${max} UAH.`)
    }
    else {
        setSuccess(priceEl);
    }
}
