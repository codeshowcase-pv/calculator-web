// модель калькулятора, отвечает за вычисления
class Calculator {

    constructor() {
        this.display = 0;
        this.buffer = [];
        this.input = "";
    }

    getDisplay() {
        return this.display;
    }

    printBuffer() {
        console.log(this.buffer);
    }

    bufferPush(item) {
        this.buffer.push(item);
    }

    getResult() {
        let parsed = this.buffer.join("");
        return eval(parsed);
    }

    setInput(value) {
        this.input = value;
    }

    clearInput() {
        this.input = "";
    }

    pushInputToBuffer() {
        this.bufferPush(this.input);
        this.clearInput();
    }

}

const calculator = new Calculator();

document.addEventListener('DOMContentLoaded', e => {
    document.querySelector(".display__text").textContent = calculator.getDisplay();

    calculator.printBuffer();
    calculator.setInput('542');
    calculator.pushInputToBuffer();
    calculator.setInput('-');
    calculator.pushInputToBuffer();
    calculator.setInput('300');
    calculator.pushInputToBuffer();
    calculator.printBuffer();

    console.log(calculator.getResult());

});


const buttons = document.querySelectorAll(".buttons__item");

buttons.forEach(b => {
    b.addEventListener('click', e => {
        console.log(b.getAttribute('data-action'));
    })
});
