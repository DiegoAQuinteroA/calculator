class ShowDisplay{
    constructor(ShowValueOne, ShowValueTwo){
        this.ShowValueOne = ShowValueOne;
        this.ShowValueTwo = ShowValueTwo;
        this.firstValue = '';
        this.secondValue = '';
        this.typeOperate = undefined;
        this.signs = {
            addition: '+',
            subtract: '-',
            division: '/',
            multiplication: 'x',
        }
        this.math = new MathCalculate();
    }

    operate(type){
        this.typeOperate !== 'equal' && this.calculate();
        this.typeOperate = type;
        this.firstValue = this.secondValue || this.firstValue;
        this.secondValue = '';
        this.printValue();
    };

    addNumber(number){
        if(number === '.' && this.secondValue.includes('.')) return
        this.secondValue = this.secondValue.toString() + number.toString();
        this.printValue();
    };

    printValue(){
        this.ShowValueTwo.textContent = this.secondValue;
        this.ShowValueOne.textContent = `${this.firstValue} ${this.signs[this.typeOperate] || ''}`;
    };

    calculate(){
        const firstValue = parseFloat(this.firstValue);
        const secondValue = parseFloat(this.secondValue);
        if(isNaN(secondValue) || isNaN(firstValue)) return
        this.secondValue = this.math[this.typeOperate](firstValue, secondValue);
    };

    delet(){
        this.secondValue = this.secondValue.toString().slice(0,-1);
        this.printValue();
    };

    deletAll(){
        this.secondValue = '';
        this.firstValue = '';
        this.typeOperate = undefined;
        this.printValue();
    };
};

