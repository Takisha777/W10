// Реализовать калькулятор, в котором есть слайдер (input type=”range”) и
// поле ввода (input type=”number”). Изменяя состояние range меняется состояние поля ввода number. И наоборот.
// Реализовать шкалу, которая в пикселях будет отображать значение range.
// Например - range выбрали число 83, высота шкалы будет 83 пикселя.
// Уровень 0 - 50 (включительно) - должен иметь зеленый цвет. От 50 до 75(включительно) -
// желтый. От 75 - 100 - красный. Добавить проверку для поля ввода. Значение должно быть
// числом и должно входить в предел 0 - 100.

window.onload = function () {
    let range = document.querySelector("#range");
    let mask = document.querySelector(".mask");
    let text = document.querySelector("#text");
    range.addEventListener("mousedown", function () {
        this.addEventListener("mousemove", move);
    });
    function move() {
        mask.style.height = (100-range.value) + 'px';
        document.getElementById("text").value = range.value;
    }

    text.addEventListener("keyup", function () {
        if (text.value > 100){
            text.value = 100;
        }
        mask.style.height = (100 - text.value) + 'px';
        document.getElementById("range").value = text.value;
    })
};


