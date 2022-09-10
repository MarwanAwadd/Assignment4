class Calculator{
    constructor(previousOpText, currentOpText){
        this.previousOpText = previousOpText;
        this.currentOpText = currentOpText;
        this.clear();
    }

    clear(){
        this.currentOp = '';
        this.previousOp = '';
        this.operand = undefined;
    }
    delete(){}
    addNum(number){
        this.currentOp = number;
    }
    selectOp(operand){}
    calculate(){}
    updateScreen(){
        this.currentOpText.innerText = this.currentOp;
    }
}

const numberButtons = document.querySelectorAll('[data-numbers]');
const operationButtons = document.querySelectorAll('[data-operators]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const ACButton = document.querySelectorAll('[data-ac]');
const previousOpText = document.querySelectorAll('[data-previousOp]');
const currentOpText = document.querySelectorAll('[data-currentOp]');



console.log(numberButtons)
const calculator = new Calculator(previousOpText, currentOpText)
Array.prototype.forEach.call(numberButtons, number => {
    console('test') 
});