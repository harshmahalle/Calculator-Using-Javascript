document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.querySelector('.keys');
    let currentInput = '';

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target;
            let keyValue = key.textContent;
            const keyType = key.className;

            if (keyType === 'operator') {
                if(keyValue === 'x' ) {
                    keyValue = '*';
                }
                else if (keyValue === '÷') {
                    keyValue =  '/';
                }
                handleOperator(keyValue);
            } 
            else if (keyType === 'equal') {
                handleEqual();
            } 
            else if (keyType === 'clear1') {
                  clear();
            }
            else if (keyType === 'delete') { 
                handleDelete();
            } 
            else {
                currentInput += keyValue;
                display.value = currentInput;
            }
        }
    });

    function handleOperator(operator) {
        currentInput += ` ${operator} `;
        display.value = currentInput;
    }

    function handleEqual() {
        try {
            currentInput = eval(currentInput);
            if (isNaN(currentInput) || !isFinite(currentInput)) {
                throw new Error('Invalid input');
            }
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
            console.error(error);
        }
    }
    

    function clear() {
        display.value = ""; 
        currentInput = ""; 
    }

    function handleDelete() {
        currentInput = currentInput.slice(0, -1); 
        display.value = currentInput;
    }
     
});  

