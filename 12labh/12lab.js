function validateInput(element) {
    var value = element.value;

    if (!/^[0-9]+$/.test(value)) {
        alert("Please enter only numeric values (0-9)");
        element.value = "";
    }
}

function data() {
    var sum;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var diaInput = document.getElementById("dia");
    validateInput(diaInput);  

    var dia = parseFloat(diaInput.value);
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    sum = num1 + num2;
    var displayText;
console.log(name,"",surname,"",num1,"",num2);
    if (isNaN(dia)) {
        alert("Please enter a valid value for dia");
    } else if (dia !== "") {
        if (sum <= 7) {
            textColor = "red";
            displayText = "Name: " + name + "<br>" +
                "Surname: " + surname + "<br>" +
                "Numbers: " + num1 + ", " + num2 + "<br>" +
                "Sum: <span style='color: " + textColor + ";'>" + sum + "</span><br>";
        } else if (sum > 7 && sum < 14) {
            textColor = "orange";
            displayText = "Name: " + name + "<br>" +
                "Surname: " + surname + "<br>" +
                "Numbers: " + num1 + ", " + num2 + "<br>" +
                "Sum: <span style='color: " + textColor + ";'>" + sum + "</span><br>";
        } else {
            textColor = "green";
            displayText = "Name: " + name + "<br>" +
                "Surname: " + surname + "<br>" +
                "Numbers: " + num1 + ", " + num2 + "<br>" +
                "Sum: <span style='color: " + textColor + ";'>" + sum + "</span><br>";
        }
    }

    document.getElementById("display").innerHTML = displayText || "Please fix input errors.";
}
