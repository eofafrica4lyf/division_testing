function divide(firstNumber, secondNumber){
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number'){
        return 'only numbers are allowed';
    }
    if(secondNumber === 0 || isNaN(secondNumber)){
        return 'you are not allowed';
    }
}

module.exports = divide;