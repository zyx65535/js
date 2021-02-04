


function task1() {

    //С помощью цикла while вывести все простые числа в промежутке от 0 до 100
    
    var arr = [];

    nextPrime:
    for (var i = 2; i <= n; i++) { // Для всех i...
    
      for (var j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
      }
    
      arr.push(i); // простое число
    }

        arr.forEach(element => {
        console.log(element);
        
    });
}



function task2() {

    /*
    С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров
                     
        Товары в корзине хранятся в массиве. Задачи:
        a) Организовать такой массив для хранения товаров в корзине;
        b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

*/

    var goods = [
        {
            title: "good 1",
            price: 100,
            quantity: 2
        },
        {
            title: "good 2",
            price: 200,
            quantity: 2
        },
        {
            title: "good 3",
            price: 300,
            quantity: 2
        }
    ];


      
    var sum = 0;
        goods.forEach(function countBasketPrice(q) {
            sum = sum + parseInt(q.price) * parseInt(q.quantity);
          });
          console.log( 'Итоговая сумма=' + sum );

}
function task3() {

        // 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
    // for(…){// здесь пусто}



    for (var i=0; i<=9; console.log(i++)) {

    }


}

function task4() {

    var arr = '';

    function printer(a) {
        
        arr = '';
        for (var j = 1; j <= a; j++) {
            arr += '*';
        }
        console.log(arr);
    }


    for (var i=1; i<=25; i++) {
        printer(i);
    }


}