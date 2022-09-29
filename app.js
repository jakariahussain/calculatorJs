let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let result = document.querySelector('.result')


//Math Calculator function
function action(operator) {
    let a = parseFloat(num1.value)
    let b = parseFloat(num2.value)

    switch (operator) {
        case '+':
            result.innerHTML = ('Result = ' + (a + b));
            break;
        case '-':
            result.innerHTML = ('Result = ' + (a - b));
            break;
        case '*':
            result.innerHTML = ('Result = ' + (a * b));
            break;
        case '/':
            result.innerHTML = ('Result = ' + (a / b));
            break;
        case 'clear':
            result.innerHTML = null;
            num1.value = null;
            num2.value = null;
            break;
    }
}