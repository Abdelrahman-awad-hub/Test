function isStrongPassword(password) {
    // Minimum length
    if (password.length < 8) return false;

    // Must contain at least one lower case letter, one upper case letter, and one digit
    let hasLower = false,
        hasUpper = false,
        hasDigit = false;
    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);
        if (c >= "a" && c <= "z") hasLower = true;
        else if (c >= "A" && c <= "Z") hasUpper = true;
        else if (c >= "0" && c <= "9") hasDigit = true;
    }
    if (!hasLower || !hasUpper || !hasDigit) return false;

    // Cannot contain common words or personal information
    let commonWords = [
        "password",
        "123456",
        "qwerty",
        "monkey",
        "letmein",
        "trustno1",
        "dragon",
        "baseball",
        "football",
        "hello",
        "monkey",
        "master",
        "sunshine",
        "iloveyou",
        "starwars",
        "thx1138",
        "monkey",
    ];
    if (commonWords.indexOf(password.toLowerCase()) >= 0) return false;

    return true;
}
let nameValid = false;
let passwordValid = false;
let userName = document.querySelector("[name= 'uname']");
let password = document.querySelector("[name = 'psw']");

let mySpan = document.createElement("span");
mySpan.innerText = "The user name most be less than 10 character";

mySpan.style.cssText =
    "background-color: #fff; color: red; padding: 5px 0;border-radius: 3px; font-size: 15px;";

userName.onblur = function () {
    if (nameValid === false) {
        document.querySelector("[for = 'uname']").appendChild(mySpan);
    } else if (passwordValid === false) {
        let mySpan = document.createElement("span");
        mySpan.innerText = "The user password most be more strong";
        mySpan.style.cssText =
            "background-color: #fff; color: red; padding: 5px 0;border-radius: 3px; font-size: 15px;";
        document.querySelector("[for = 'psw']").appendChild(mySpan);
    }
};

document.forms[0].onsubmit = function (ele) {
    if (userName.value !== "" && userName.value.length <= 10) {
        nameValid = true;
    }

    if (isStrongPassword(password.value)) {
        passwordValid = true;
    }

    if (nameValid === false || passwordValid === false) {
        ele.preventDefault();
    }
};
