function divide(firstNumber, secondNumber){
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number'){
        return 'only numbers are allowed';
    }
}

module.exports = divide;