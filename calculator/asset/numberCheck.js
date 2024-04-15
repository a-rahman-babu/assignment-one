
let numberOne = document.getElementById("numberOne");
numberOne.addEventListener("keypress", function() {
        if (isNaN(this.value + String.fromCharCode(event.keyCode))) {
            alert("That was not a number!");
            return false;
        }
    });

    let numberTwo = document.getElementById("numberTwo");
    numberTwo.addEventListener("keypress", function() {
        if (isNaN(this.value + String.fromCharCode(event.keyCode))) {
            alert("That was not a number!");
            return false;
        }
    });

