// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

space = [];

var choices;


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// }
// get.addEventListener("click", function () {
//     ps = generatePassword();
//     document.getElementById("password").placeholder = ps;

// };

function generatePassword() {{

    enter = parseInt(prompt("How many characters?"));
    
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmCharacter = confirm("Use special characters?");
        confirmNumber = confirm("Use numbers?");
        confirmUppercase = confirm("Use Uppercase letters?");
        confirmLowercase = confirm("Use Lowercase letters?");
    };
}

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("Pick your criteria!");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);
}

else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
}

else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}

else if (confirmUppercase) {
    choices = space.concat(alpha2);
};


var password = [];

for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);

}

function UserInput(ps) {
document.getElementById("placeholder").textContent = password;

}
 var ps = password.join("");
    UserInput(ps);
    return ps;

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}}