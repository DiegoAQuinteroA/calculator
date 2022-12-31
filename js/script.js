//traemos las variables de nustro HTML 'DOM'
const ShowValueOne = document.getElementById('valueOne');
const ShowValueTwo = document.getElementById('valueTwo');
const buttonsNumber = document.querySelectorAll('.number');
const buttonsOperator = document.querySelectorAll('.operator');
const deletAll = document.getElementById('deletAll');
const delet = document.getElementById('delet');

const display = new ShowDisplay(ShowValueOne, ShowValueTwo);//crear instancia de un objeto, class ShowDisplay, para poder utilizar aquí.

buttonsNumber.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));//delegacion de eventos para escuchar el clik de los botones con la clase number
});
buttonsOperator.forEach(button => {
    button.addEventListener('click', () => display.operate(button.value));//delegacion de eventos para escuchar el clik de los botones con la clase operate
})
deletAll.addEventListener('click', () => display.deletAll);
delet.addEventListener('click', () => display.delet);



