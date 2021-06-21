class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })


/*   --------THEME SWITCHER------- */

function themeTwoAdd() {
  var body = document.body;
  var input = document.querySelector('.calculator-input')
  var panel = document.querySelector('.calculator-panel')
  var equalButton = document.querySelector('.equal-btn')
  var delButton = document.querySelector('.del-btn')
  var resButton = document.querySelector('.reset-btn')
  document.querySelectorAll('.btn').forEach(button=> {
    button.classList.add('theme-two-buttons', 'theme-two-font')
  });
  document.querySelectorAll('.h2-element, .h3-element, .previous-operand, .current-operand').forEach(header => {
    header.classList.add('theme-two-font')
  })
  body.classList.add('theme-two-body')
  input.classList.add('theme-two-calculator-input')
  panel.classList.add('theme-two-calculator-panel')
  delButton.classList.add('theme-two-del-btn')
  resButton.classList.add('theme-two-reset-btn')
  equalButton.classList.add('theme-two-equal-button')
}

function themeTwoRemove() {
  var body = document.body;
  var input = document.querySelector('.calculator-input')
  var panel = document.querySelector('.calculator-panel')
  var equalButton = document.querySelector('.equal-btn')
  var delButton = document.querySelector('.del-btn')
  var resButton = document.querySelector('.reset-btn')
  document.querySelectorAll('.btn').forEach(button=> {
    button.classList.remove('theme-two-buttons', 'theme-two-font')
  });
  document.querySelectorAll('.h2-element, .h3-element, .previous-operand, .current-operand').forEach(header => {
    header.classList.remove('theme-two-font')
  })
  body.classList.remove('theme-two-body')
  input.classList.remove('theme-two-calculator-input')
  panel.classList.remove('theme-two-calculator-panel')
  delButton.classList.remove('theme-two-del-btn')
  resButton.classList.remove('theme-two-reset-btn')
  equalButton.classList.remove('theme-two-equal-button')
}

function themeThreeAdd() {
  var body = document.body;
  var input = document.querySelector('.calculator-input')
  var panel = document.querySelector('.calculator-panel')
  var equalButton = document.querySelector('.equal-btn')
  var delButton = document.querySelector('.del-btn')
  var resButton = document.querySelector('.reset-btn')
  document.querySelectorAll('.btn').forEach(button=> {
    button.classList.add('theme-three-buttons', 'theme-three-font')
  });
  document.querySelectorAll('.h2-element, .h3-element, .previous-operand, .current-operand').forEach(header => {
    header.classList.add('theme-three-font')
  })
  body.classList.add('theme-three-body')
  input.classList.add('theme-three-calculator-input')
  panel.classList.add('theme-three-calculator-panel')
  delButton.classList.add('theme-three-del-btn')
  resButton.classList.add('theme-three-reset-btn')
  equalButton.classList.add('theme-three-equal-button')
}

function themeThreeRemove() {
  var body = document.body;
  var input = document.querySelector('.calculator-input')
  var panel = document.querySelector('.calculator-panel')
  var equalButton = document.querySelector('.equal-btn')
  var delButton = document.querySelector('.del-btn')
  var resButton = document.querySelector('.reset-btn')
  document.querySelectorAll('.btn').forEach(button=> {
    button.classList.remove('theme-three-buttons', 'theme-three-font')
  });
  document.querySelectorAll('.h2-element, .h3-element, .previous-operand, .current-operand').forEach(header => {
    header.classList.remove('theme-three-font')
  })
  body.classList.remove('theme-three-body')
  input.classList.remove('theme-three-calculator-input')
  panel.classList.remove('theme-three-calculator-panel')
  delButton.classList.remove('theme-three-del-btn')
  resButton.classList.remove('theme-three-reset-btn')
  equalButton.classList.remove('theme-three-equal-button')
}

document.querySelector('#one').onclick = () => {
  themeTwoRemove()
  themeThreeRemove()
}

document.querySelector('#two').onclick = () => {
  themeTwoAdd()
  themeThreeRemove()
  } 

  document.querySelector('#three').onclick = () => {
    themeTwoRemove()
    themeThreeAdd()
  }


