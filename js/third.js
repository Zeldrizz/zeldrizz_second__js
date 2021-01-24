var firstNum = +prompt('Введите любое число');
var secondNum = +prompt('Введите любое число (еще раз)');
var thirdNum = +prompt('Введите любое число (еще раз)');

alert('Хотите найти среднее число?');

if (firstNum < secondNum && firstNum > thirdNum){
   console.log('Среднее число ' + firstNum);
   alert('Среднее число ' + firstNum);
} else if (firstNum > secondNum && firstNum < thirdNum){
    console.log('Среднее число ' + firstNum);
    alert('Среднее число ' + firstNum);
} else if (secondNum < firstNum && secondNum > thirdNum){
    console.log('Среднее число ' + secondNum);
    alert('Среднее число ' + secondNum);
} else if (secondNum > firstNum && secondNum < thirdNum){
    console.log('Среднее число ' + secondNum);
    alert('Среднее число ' + secondNum);
} else if (thirdNum < firstNum && thirdNum > secondNum){
    console.log('Среднее число ' + thirdNum);
    alert('Среднее число ' + thirdNum);
} else if (thirdNum > firstNum && thirdNum < secondNum){
    console.log('Среднее число ' + thirdNum);
    alert('Среднее число ' + thirdNum);
}

//алгоритм среднего числа 





























































































// создан Маратом