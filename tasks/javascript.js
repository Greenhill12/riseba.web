function showMyName(){
    var name;
    var surname;

    name = document.getElementById("name");
    surname = document.getElementById("surname");


    //izvada konsulē:
    //consule.log("rezultāts");

    //izvada brīdinajumu:
    /*
    alert("brīdinājums 1");
    alert('brīdinājums 2');
    */

    var result = 'Mani sauc ' + name.value + ' ' + surname.value;
    document.getElementById('result').innerHTML = '<b>' + result + '</b>';
}

function goToDelfi(){
    window.open('http://www.delfi.lv');
}