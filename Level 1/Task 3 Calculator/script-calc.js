const inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let buttonText = button.textContent;

        if (buttonText === '=') {
            try {
                const expression = inputField.value.replace(/÷/g, '/').replace(/×/g, '*');
                const result = eval(expression);
                inputField.value = result;
            }
            catch (error) {
                inputField.value = 'Error';
            }
        }
        else if (buttonText === 'AC') {
            inputField.value = '';
        }
        else if (buttonText === '←') {
            inputField.value = inputField.value.slice(0, -1);
        }
        else if (buttonText === '%') {
            inputField.value += buttonText;
        }
        else if (buttonText === '÷') {
            inputField.value += '÷';
        }
        else if (buttonText === '×') {
            inputField.value += '×';
        }
        else {
            inputField.value += buttonText;
        }
    });
});

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        try {
            const expression = inputField.value.replace(/÷/g, '/').replace(/×/g, '*');
            const result = eval(expression);
            inputField.value = result;
            event.preventDefault();
        }
        catch (error) {
            inputField.value = 'Error';
            event.preventDefault();
        }
    }
});