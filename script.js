const input = process.argv.slice(2)

const firstNumber = input[2]

const operator = input [3]

const secondNumber = input[4]

const operatorExpressions = /plus|minus|divided-by|times|[*\/+\-]/im
const numberExpressions = /[0-9]/m

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

let total = []

for (let index = 1; index < input.length; index += 2) {
    const expression = input[index];
    if (operatorExpressions.test(expression)) {
         if (expression === "divided-by" || expression === "/") {
             if(total.length > 0) {
                total[0] = total[0] / parseInt(input[index+1])
             }
            else total.push(parseInt(input[index-1]) / parseInt(input[index+1]))
        }
    }

    if (operatorExpressions.test(expression)) {
        if (expression === "times" || expression === "*") {
            if(total.length > 0) {
               total[0] = total[0] * parseInt(input[index+1])
            }
           else total.push(parseInt(input[index-1]) * parseInt(input[index+1]))
       }
   }
}

console.log("The answer to your calculation is ", total[0]);


// for (const arg of input) {
//     if (numberExpressions.test(arg)) {
//         console.log("This is a number ", arg)
//     }

//     if (operatorExpressions.test(arg)) {
//         console.log("This is an operator ", arg)
//     }
// }