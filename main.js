window.onload = function () {
    const numbers = document.getElementsByClassName("number"); // ARRAY OF ALL NUMERIC VALUES
    const operators = document.getElementsByClassName("operator"); // ARRAY OF ALL OPERATORS
    const screen = document.getElementById("screen");
    const clearBtn = document.getElementById('clear');
    const deleteBtn = document.getElementById('delete');
    const equalsBtn = document.getElementById('equals');
    const allowedCharacters = /[0-9\+\-\*\/\.\b]/;

    // FUNCTIONS
    const calculate = () => {
        screen.innerHTML = eval(screen.innerHTML);
    }

    const clear = () => {
        screen.innerHTML = '';
    }

    const addToCurrentValue = (event) => {
        const value = event.target.value;
        screen.innerHTML = screen.innerHTML.concat(value);
        event.target.blur()
    }

    const backspace = () => {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }

    const captureKeyStroke = (event) => {
        const key = event.key;

        if (key.startsWith('F')) {
            return;
        }
        if (allowedCharacters.test(key)) {
            addToCurrentValue({ target: { value: key } });
        } else if (key == 'Enter' || key == "=") {
            calculate();
        } else if (key == 'Backspace') {
            backspace();
        } else {
            event.preventDefault();
        }
    }


    // EVENT LISTENERS
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', addToCurrentValue);
    }

    for (var i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', addToCurrentValue);
    }

    deleteBtn.addEventListener('click', backspace);
    clearBtn.addEventListener('click', clear);
    equalsBtn.addEventListener('click', calculate);

    window.addEventListener('keyup', captureKeyStroke)
};
