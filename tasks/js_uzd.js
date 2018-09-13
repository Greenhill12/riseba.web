function plus(){
    var a;
    var b;

    a = document.getElementById('skaitlis1').value;
    b = document.getElementById('skaitlis2').value;

    a = parseInt(a);
    b = parseInt(b);

    var c = a + b;

    document.getElementById('result').innerHTML = 'Rezultāts: ' + c;
}

function minus(){
    var a;
    var b;

    a = document.getElementById('skaitlis1').value;
    b = document.getElementById('skaitlis2').value;

    a = parseInt(a);
    b = parseInt(b);

    var c = a - b;

    document.getElementById('result').innerHTML = 'Rezultāts: ' + c;
}

function multiply(){
    var a = document.getElementById('skaitlis1').value;
    var b = document.getElementById('skaitlis2').value;
    
    a = parseInt(a);
    b = parseInt(b);

    var c = a * b;

    document.getElementById('result').innerHTML = 'Rezultāts: ' + c;
}

function divide(){
    var a = document.getElementById('skaitlis1').value;
    var b = document.getElementById('skaitlis2').value;
    
    a = parseInt(a);
    b = parseInt(b);

    var c = a / b;

    document.getElementById('result').innerHTML = 'Rezultāts: ' + c;
}

function check(){
    var a;

    a = document.getElementById('skaitlis').value;

    a = parseInt(a);

    var b;

    if(a >= 50 && a <= 100) {
        b='OK';
    } else {
        b='NEDER';
    }

    document.getElementById('result').innerHTML = 'Rezultāts: ' + b;
}

function fahrenheit(){
    var a;

    a = document.getElementById('gradi').value;

    a = parseInt(a);

    var fahr = a*(9/5)+32;

    document.getElementById('result').innerHtml = 'Rezultāts: ' + fahr;
}

function celsius(){
    var a;

    a = document.getElementById('gradi').value;

    a = parseInt(a);

    var cels = (a-32)*(5/9);

    document.getElementById('result').innerHtml = 'Rezultāts: ' + cels;
}

var attempt = 3;

function login(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user == 'admin' && pass == 'pass123') {
        alert ('Pieslēgšanās bija veiksmīga');
        window.open('js_uzd1.html');
        return false;
    } else {
        alert ('Lietotāvārds vai parole bija neapareizi');
    }
}