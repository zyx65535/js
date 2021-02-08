


function task1() {

    //Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в
    //  соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
    //  {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и 
    // вернуть пустой объект.

    var obj = {culculateNumbers: function culculateNum(num) {
        var obj = {};

        var num1 = num.toString();
        num1.split('');

        if (num1 > 100) {
            obj.thousands = num1[0];
            obj.twentys =num1[1];
            obj.units =num1[2];
        }
        if ( 10 < num1 < 100 ) {
            obj.thousands = 0;
            obj.twentys =num1[0];
            obj.units =num1[1];
        }
        if (num1 < 10) {
            obj.thousands = 0;
            obj.twentys = 0;
            obj.units = num1[0];
        }

        console.log('сотен ' + obj.thousands + ' десятков ' + obj.twentys + ' единиц ' + obj.units);
        return(num1);
        }
    }


    do {
        num = +prompt('Введите число от 0 до 999. Для выхода наберите -1');
        if (num === -1) {
            break;
            }
        else if  (0 > num) {
            alert('Вы ввели число не соответствующее условию');
        }
        else if  (num >= 1000) {
            alert('Вы ввели число не соответствующее условию');
            return('');
            break;
        }
        else if  (isNaN(num)) {
            alert('Вы ввели не число');
            }
        } while (num >= 1000 || num < 0 || isNaN(num) )  
        

    obj.culculateNumbers(num);
}


function task2() {
    // 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
    
    
}