function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculateResult() {
        var display = document.getElementById('display');
        try {
            // Используем eval для вычисления выражения
            display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
        } catch (e) {
            display.value = 'Ошибка';
        }
    }
