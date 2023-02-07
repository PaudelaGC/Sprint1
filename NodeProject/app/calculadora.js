function operacions(tipus, arrayOfNumbers) {
    let result = 0;
    let NaN = false;
    switch (tipus) {
        case '+':
            if (arrayOfNumbers) {
                for (let i = 0; i < arrayOfNumbers.length; i++) {
                    if (isNaN(arrayOfNumbers[i]) && !NaN) {
                        NaN = true;
                    }
                    if (!NaN) {
                        result = result + arrayOfNumbers[i];
                    } else {
                        return 'NaN';
                    }
                }
                return result
            } else {
                return 0
            }
        case '-':
            if (arrayOfNumbers && arrayOfNumbers.length != 0) {
                result = arrayOfNumbers[0];
                if (isNaN(result)) {
                    NaN = true;
                }
                for (let i = 1; i < arrayOfNumbers.length; i++) {
                    if (isNaN(arrayOfNumbers[i]) && !NaN) {
                        NaN = true;
                    }
                    if (!NaN) {
                        result = result - arrayOfNumbers[i];
                    } else {
                        return 'NaN';
                    }
                }
                return result
            } else {
                return 0
            }
        case '*':
            if (arrayOfNumbers && arrayOfNumbers.length != 0) {
                result = arrayOfNumbers[0];
                if (isNaN(result)) {
                    NaN = true;
                }
                for (let i = 1; i < arrayOfNumbers.length; i++) {
                    if (isNaN(arrayOfNumbers[i]) && !NaN) {
                        NaN = true;
                    }
                    if (!NaN) {
                        result = result * arrayOfNumbers[i];
                    } else {
                        return 'NaN';
                    }
                }
                return result
            } else {
                return 0
            }
        case '/':
            if (arrayOfNumbers && arrayOfNumbers.length != 0) {
                result = arrayOfNumbers[0];
                if (isNaN(result)) {
                    NaN = true;
                }
                for (let i = 1; i < arrayOfNumbers.length; i++) {
                    if (isNaN(arrayOfNumbers[i]) && !NaN) {
                        NaN = true;
                    }
                    if (!NaN) {
                        result = result / arrayOfNumbers[i];
                    } else {
                        return 'NaN';
                    }
                }
                if(Number.isFinite(result)){
                    return result
                }else{
                    return "Not possible"
                }
            } else {
                return 0
            }
        default:
            break;
    }
}

module.exports = operacions;
