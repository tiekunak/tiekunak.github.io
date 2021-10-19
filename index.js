// JavaScript source code
function buttonClicked() {

    var value1 = document.getElementById('base1').value;
    value1 = parseInt(value1);

    var value2 = document.getElementById('height1').value;
    value2 = parseInt(value2);

    var result = 0.5*(value1 * value2);
    document.getElementById('result').value = result;
}