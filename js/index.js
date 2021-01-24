var age = +prompt('Введите свой возраст');

if (age < 19){
    console.log('Вы еще молоды. Вам нужно учится');
    alert('Вы еще молоды. Вам нужно учится');
} else if (age < 51){
    console.log('Вам нужно работать');
    alert('Вам нужно работать');
} else if (age < 60){
    console.log('Вам скоро на пенсию');
    alert('Вам скоро на пенсию');
} else if (age < 150 || age == 150){
    console.log('Вы пенсионер');
    alert('Вы пенсионер');
} else {
    alert('Error 404 Something goes wrong');
    console.log('Error 404 Something goes wrong');
}
