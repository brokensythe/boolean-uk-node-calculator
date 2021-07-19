const input = process.argv

const firstNumber = input[2]

const operator = input [3]

const secondNumber = input[4]

const operatorExpressions = /plus|minus|divided-by|times|[*\/+\-]/igm
const numberExpressions = /[0-9]/gm

function calculate(no1, operation, no2) {
    if (typeof parseInt(no1) !== "number" || typeof parseInt(no2) !== "number" ) {
        console.log("please use numbers to calculate an answer");
    }

    else if (operation === "times" || operation === "*") {
        console.log("I'm multipication");
        return parseInt(no1) * parseInt(no2)
    }

    else if (operation === "plus" || operation === "+") {
        console.log("I'm addition");
        return parseInt(no1) + parseInt(no2)
    }

    else if (operation === "minus" || operation === "-") {
        console.log("I'm subtraction");
        return parseInt(no1) - parseInt(no2)
    }

    else if (operation === "divided-by" || operation === "/") {
        console.log("I'm division");
        return parseInt(no1) / parseInt(no2)
    }

    else{
        console.log("please use times, plus, minus or divided-by between your numeric entries");
    }
}


for (const arg of input) {
    if (numberExpressions.test(arg)) {
        console.log("This is a number ", arg)
    }

    if (operatorExpressions.test(arg)) {
        console.log("This is an operator ", arg)
    }
}