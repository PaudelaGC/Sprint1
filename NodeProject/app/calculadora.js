//Nivell 1: Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
function operacio(tipus, arrayOfNumbers){
    let result = 0;
    if (Array.isArray(arrayOfNumbers)) {
        if (arrayOfNumbers.length === 1) {
            return arrayOfNumbers[0]
        } else {
            result = arrayOfNumbers[0];
            for (let i = 1; i < arrayOfNumbers.length; i++) {
                switch(tipus){
                    case '+':
                        result = result + arrayOfNumbers[i];
                        break;
                    case '-':
                        result = result - arrayOfNumbers[i];
                        break;
                    case '*':
                        result = result * arrayOfNumbers[i];
                        break;
                    case '/':
                        if(arrayOfNumbers[i] === 0){
                            return "Not possible"
                        }
                        result = result / arrayOfNumbers[i];
                        break;
                    default:
                        break;
                }
            }
            if (isNaN(result)) {
                if (result != undefined) {
                    return "NaN"
                } else {
                    return 0
                }
            } else {
                return result
            }
        }
    } else {
        if (arrayOfNumbers != undefined) {
            return arrayOfNumbers;
        } else {
            return 0;
        }
    }
}

function suma(arrayOfNumbers) {
    return operacio('+', arrayOfNumbers);
}

function resta(arrayOfNumbers) {
    return operacio('-', arrayOfNumbers);
}

function multiplicar(arrayOfNumbers) {
    return operacio('*', arrayOfNumbers);
}

function dividir(arrayOfNumbers) {
    return operacio('/', arrayOfNumbers);
}

module.exports = { suma, resta, multiplicar, dividir }
