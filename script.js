const calculatorScreen = document.querySelector('.calculator-screen')
const operatorScreen = document.querySelector('.operator-screen')

const updateOperator = (operator) =>{
	operatorScreen.value = operator
}
const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === '0'){
		currentNumber  = number
	} else {
		currentNumber += number
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
		updateOperator(calculationOperator) //baru
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
		updateOperator(calculationOperator)
	})
})


/* Batas kalkulasi */

const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = prevNumber - currentNumber
			break
		case '*':
			result = prevNumber * currentNumber
			break
		case '/':
			result = prevNumber / currentNumber
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
	updateOperator(calculationOperator)
})

/* Batas kalkulasi */

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
	calculationOperator=''
	updateOperator(calculationOperator)
})

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
	updateOperator(calculationOperator)
})

//mencari persen

const cariPersen = () => {
	currentNumber/=100
}

const persen = document.querySelector(".percentage")

persen.addEventListener('click', () => {
	cariPersen()
	updateScreen(currentNumber)
	updateOperator(calculationOperator)
})