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

    bufferPush(item) {
        this.buffer.push(item);
    }

    clearBuffer() {
        this.buffer = [];
    }

    getResult(isCals = true) {
        let parsed = this.buffer.join("");
        const result = eval(parsed);
        this.setInput(result);
        if(isCals){
            this.clearBuffer();
        }
        this.pushInputToBuffer();
        return result;
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

    reset() {
        this.clearInput();
        this.clearBuffer();
    }


}

const calculator = new Calculator();
const displayTextDOM = document.querySelector(".display__text");
const operations = ['=', '+', '-', '*', '/', 'ac'];

function addDisplayText(text) {
    displayTextDOM.textContent += text;
}

function clearDisplayText() {
    displayTextDOM.textContent = '';
}


document.addEventListener('DOMContentLoaded', e => {
    displayTextDOM.textContent = calculator.getDisplay();
});


const buttons = document.querySelectorAll(".buttons__item");

buttons.forEach(b => {
    b.addEventListener('click', e => {
        const action = b.getAttribute('data-action');

        switch (action) {
            case "=":
                clearDisplayText();
                addDisplayText(calculator.getResult());
                break;
            case "ac":
                clearDisplayText();
                addDisplayText('0');
                calculator.reset();
                break;
            default:
                if(displayTextDOM.textContent === '0') {
                    clearDisplayText();
                }
                calculator.setInput(action);
                addDisplayText(action);
                calculator.pushInputToBuffer();
                break;
        }
    })
});
