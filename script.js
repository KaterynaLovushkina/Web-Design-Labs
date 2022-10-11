var row = null


function Create(){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);


    if (dataEntered === false){
        msg.innerHTML = "Please Enter Data!";
    }
    else{
            if(checkValidationCountry(dataEntered) &&
                checkValidationDuration(dataEntered) &&
                checkValidationPrice(dataEntered)
            ){
                insert(readData);
                msg.innerHTML="";
            }
            else{
                msg.innerHTML='Please enter correct data';
            }

            }
}
function Update(){
    update();
}
function Delete(){
    removeAll();
}
function SortPrice(){
    let tab = document.getElementById("table");
    let trs = document.getElementsByTagName("tr");
    let button = document.getElementById('btn-sort');

    button.addEventListener('click',function (){
        let sorted = [...trs].sort(function (a,b){

            return a.children[3].innerHTML - b.children[3].innerHTML;
        });

        for (let tr of sorted){
            tab.appendChild(tr);
        }
    });
}
function CountPrice(){
    calculate();
}

function retrieveData(){
    var country = document.getElementById("country-name").value;
    var duration = document.getElementById("duration-in-days").value;
    var price = document.getElementById("price").value;

    var arr = [country, duration, price];
    if (arr.includes("")){
        return false;
    }
    else{
        return arr;

    }

}

function readingDataFromLocalStorage(dataEntered){
    var country_1 = Storage.setItem("Country",dataEntered[0]);
    var duration_1 = Storage.setItem("Duration",dataEntered[1]);
    var price_1 = Storage.setItem("Price",dataEntered[2]);

    var country__1 = localStorage.getItem("Country",country_1);
    var duration__1 = localStorage.getItem("Duration",duration_1);
    var price__1 = localStorage.getItem("Price",price_1);

    return [country__1,duration__1, price__1]
}

function insert(readData){
    var row = table.insertRow()
    row.insertCell(0).innerHTML = '';
    row.insertCell(1).innerHTML = readData[0];
    row.insertCell(2).innerHTML = readData[1];
    row.insertCell(3).innerHTML = readData[2];
    row.insertCell(4).innerHTML = "<tg onclick='edit(this)' ><i  class=\"fas fa-edit btn-edit\"></i></tg>";
    row.insertCell(5).innerHTML = "<tg onclick='remove(this)'><i class=\"fas fa-trash-alt btn-delete\"></i></tg>";
}

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("country-name").value = row.cells[1].innerHTML;
    document.getElementById("duration-in-days").value= row.cells[2].innerHTML;
    document.getElementById("price").value = row.cells[3].innerHTML;

}
function update(){
    row.cells[1].innerHTML = document.getElementById("country-name").value;
    row.cells[2].innerHTML = document.getElementById("duration-in-days").value;
    row.cells[3].innerHTML = document.getElementById("price").value;
}

function remove(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
}
function removeAll(td){
    var myTable = document.getElementById("table");
    var rowCount = myTable.rows.length;
    for (var x=rowCount-1; x>0; x--) {
        myTable.deleteRow(x);
    }
}

function checkValidationCountry(dataEntered)
{

    var letters = /\b[^\d\W]+\b/;
    if(dataEntered[0].match(letters))
    {
        return true;
    }
    else
    {
        msg.innerHTML='Please use only alphabetic symbols';
        alert('Please use only alphabetic symbols');
        return false;
    }

}
function checkValidationDuration(dataEntered){
    if (dataEntered[1] >2 && dataEntered[1]<=100){
        return true;
    }
    else
    {

        alert('Please use data in range 3 to 100');
        return false;
    }
}
function checkValidationPrice(dataEntered){
    if (dataEntered[2] >6999 && dataEntered[1]<=300000){
        return true;
    }
    else
    {
        alert('Please use data in range 7000 to 300000');
        return false;
    }
}

function searchCountry(){
    let filter = document.getElementById("search-bar").value.toUpperCase();

    let table = document.getElementById("table");
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
function calculate(){
    var table = document.getElementById("table"), sumVal = 0;
    for (var i = 1; i <table.rows.length; i++){
         sumVal= sumVal + parseInt(table.rows[i].cells[3].innerHTML);
    }
    document.getElementById("total-sum").innerHTML = "Total Price is "+ sumVal;
    console.log(sumVal);

}


