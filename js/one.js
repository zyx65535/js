/*   task1          Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
                Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/


function сalculateFahrenheitTemp() {

var celsiusTemp = parseInt(prompt('Введите температуру в градусах Цельсия'));

var fahrenheitTemp =  (9 / 5) * celsiusTemp + 32;
console.log('Температура в градусах Фарингейта=' + fahrenheitTemp);

alert('Температура в градусах Фарингейта=' + fahrenheitTemp)

return(fahrenheitTemp)

}




/*  task2          Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. 
Вывести admin (должно вывести «Василий»).*/


function replaceVariable() {

    var name = "Василий";
    
    var admin = name;

    console.log('Значение переменной admin=' + admin);
    
    alert('Значение переменной admin=' + admin)
    
    return(admin)
    
    }
    
    
    
/*      task3  *Чему будет равно JS-выражение 1000 + "108"/
*/

    function calculate() {

        var myVarOne = 1000;
        
        var myVarTwo = "108";

        var myVarThree = myVarOne + myVarTwo;
    
        console.log('JS-выражение 1000 + "108"= ' + myVarThree);
        
        alert('JS-выражение 1000 + "108"= ' + myVarThree)
        
        return(myVarThree)
        
        }
        
        