/*  var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

*/


function task1() {

    var a = 1, b = 1, c, d;

    с = ++a; 
    
    console.log(' var a = 1, b = 1, c, d;')
    console.log('++a; alert(c);');
    console.log('c='+c+";Префиксная форма инкремента. Инкремент происходит перед выводом");
    console.log('');

    d = b++; 
    
    console.log('d = b++;');
    console.log('d='+d+";Постфиксная форма инкремента. Инкремент происходит после вывода");
    console.log('');

    
    c = (2+ ++a); 

    console.log('c = (2+ ++a); alert(c);');
    console.log('c='+c+";a=2 перед коммандой; Префиксная форма инкремента. Инкремент происходит перед выводом, итого 2+3=5");
    console.log('');

    d = (2+ b++); 

    console.log('(2+ b++); alert(d); ');
    console.log('d='+d+";b=2 перед коммандой; Постфиксная форма инкремента. Инкремент происходит после вывода, итого 2+2=4");
    console.log('');

    
    console.log('a = 1;++a;++a');
    console.log('Последовательность комманд приводит к результату=3 ');
    console.log('');

    
    console.log('b = 1;b++;b++');
    console.log('Последовательность комманд приводит к результату=3 ');
    console.log('');

}


function task2() {


    console.log('var a = 2;var x = 1 + (a *= 2);');
    console.log(' a=5 ');
    console.log('');


}

function task3() {

    var a = +((Math.random() * 100).toFixed(0));
    var b = +((Math.random() * 100).toFixed(0));
    var znakA = +((Math.random() * 100).toFixed(0));
    var znakB = +((Math.random() * 100).toFixed(0));
    if (znakA >= 50) {
        a = -a;
    }

    if (znakB >= 50) {
        b = -b;
    }
    

    console.log('a='+a);
    console.log('b='+b);


/*Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
var x = 1 + (a *= 2);
*/


    if ((a > 0) && (b > 0)) {
        console.log('a-b=',a-b);
    }
    else if ((a < 0) && (b < 0)) {
        console.log('a*b='+a*b);
    } else {
        console.log('a+b=',a+b);
    }

}


function task4() {

    /*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

   if (a == undefined) {
    var a = +(Math.random() * 15).toFixed(0);
    console.log('a='+a);
   }

    function displayAto15(b) {
        // console.log('b=',b);
        switch  (b>0) {
            case (b>0 && b<16) :
                console.log(b);
                b++;
                displayAto15(b);
                break;
            }

    }
    
    displayAto15(a); 

}

function sum(a,b) {

    var result = a+b;
    console.log('result='+result);
    var text = document.getElementById('task5text');
    console.log(text);
    text.value = a + '+' + b + '=' + result;
    return(result);


}


function sub(a,b) {

    var result = a-b;
    console.log('result='+result);
    var text = document.getElementById('task5text');
    console.log(text);
    text.value = a + '-' + b + '=' + result;
    return(result);


}



function multiplication(a,b) {

    var result = a*b;
    console.log('result='+result);
    var text = document.getElementById('task5text');
    console.log(text);
    text.value = a + '*' + b + '=' + result;
    return(result);


}


function division(a,b) {

    if (b != 0) {
    
    var result = a/b;
    console.log('result='+result);
    var text = document.getElementById('task5text');
    console.log(text);
    text.value = a + '/' + b + '=' + result;
    return(result);
    } else {
        alert('деление на 0 невозможно!');
    }


}

function mathematicOperation(a,b,operation) {

    switch (document.getElementById('task6text').value) {
        case '*' :
            console.log ('*');
            return (multiplication(a,b));
        case '/' :
            console.log ('/');
            return (division(a,b));

        case '+' :
            console.log ('+');
            return (sum(a,b));

        case '-' :
            console.log ('-');
            return (sub(a,b));

        

    }


}


function randomNumbers() {

    

    var a = +((Math.random() * 100).toFixed(0));
    var b = +((Math.random() * 100).toFixed(0));
    var znakA = +((Math.random() * 100).toFixed(0));
    var znakB = +((Math.random() * 100).toFixed(0));
    if (znakA >= 50) {
        a = -a;
    }

    if (znakB >= 50) {
        b = -b;

    }

    document.getElementById('varA').value = a;
    document.getElementById('varB').value = b;

}

function comparison() {
    var varG = null;
    if (varG > 0) {
    console.log('Null > чем 0, тк Null это бесконечно малое число');
    } else if (varG < '0') {
        console.log(' Null Меньше чем 0');
    } else if (varG = '0') {
        console.log(' Сравнение x == y, где x и y являются значениями, возвращает true или false. Такое сравнение производится следующим образом:');
        console.log('1. Если Тип(x) отличается от Типа(y) - переход на шаг 14.');
        console.log('14. Если x равно null, а y равно undefined - вернуть true.');
        console.log('22. Вернуть false.');
        document.getElementById('task7Result').value = 'Сравнение x == y, где x и y являются значениями, возвращает true или false. Такое сравнение производится следующим образом'
        + '1. Если Тип(x) отличается от Типа(y) - переход на шаг 14.' + '14. Если x равно null, а y равно undefined - вернуть true.' + '2. Вернуть false.';
    } else if (isNaN(varG)) {
        console.log(' null isNaN');
    }
}
    

function power(val,pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }        
}
