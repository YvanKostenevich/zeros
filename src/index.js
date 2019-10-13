const countMultipliersInFactorial = (number, multiplier) => {
    let result = 0;

    while (number > 0) {
        number = Math.floor(number / multiplier);

        result += number;
    }

    return result;
};

const countEvenFactorialTwos = number => {
    if (number % 2 === 1) {
        return 0;
    }

    return countMultipliersInFactorial(number, 2);
};

const countEvenFactorialFives = number => {
    const roundingFunc = number % 2 === 0 ? Math.floor : Math.ceil;
    let result = 0;

    while (number > 0) {
        number = Math.floor(number / 5);

        result += roundingFunc(number / 2);
    }

    return result;
};

const zeros = st => {
    let twosCount = 0;
    let fivesCount = 0;

    const multipliers = st.split("*");

    for (let multiplier of multipliers) {
        const isEvenFactorial = multiplier.endsWith("!!");
        const number = Number.parseInt(multiplier);

        if (isEvenFactorial) {
            twosCount += countEvenFactorialTwos(number);
            fivesCount += countEvenFactorialFives(number);
        } else {
            twosCount += countMultipliersInFactorial(number, 2);
            fivesCount += countMultipliersInFactorial(number, 5);
        }
    }

    return Math.min(twosCount, fivesCount);
};

module.exports = zeros;

