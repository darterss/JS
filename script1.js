let inputData = +prompt('Введите, пожалуйста значение:');

if ((typeof (inputData) !== 'number') || String(inputData) === 'NaN')
    console.log('Упс, кажется, вы ошиблись');
else if (inputData % 2 === 0)
    console.log('чётное число');
else
    console.log('нечётное число');

