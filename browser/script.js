/**
 * @author @mnizarzr
 * @clazz Web C Afternoon
 *
 * Note:
 * Each of the implementation of control flows below are already a function.
 * They have return values. Some of them have parameter(s);
 * So I won't bother making an example of a ✨ function.
 */

let root = document.getElementById("root");
let now = new Date();

function getDayName() {
    return now.toLocaleDateString('en-US', { weekday: 'long' });
}

// ✨ if,else,nested if
function ifs(age = 20, isStudent = true) {

    let element = document.createElement('p');

    if (age >= 18) {
        if (isStudent) {
            element.textContent = "You are an adult student.";
        } else {
            element.textContent = "You are an adult.";
        }
    } else {
        element.textContent = "You are a minor.";
    }

    return element;
}

// ✨ Loops
function forLoop() {

    let ul = document.createElement('ul');
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 0; i < days.length; i++) {
        let li = document.createElement('li');
        li.textContent = days[i];
        ul.appendChild(li);
    }

    return ul;
}

function whLoop() {
    let div = document.createElement('div');

    function whileLoop() {
        let whle = document.createElement('p');
        let i = 1;
        let text = "While Loop is NotExecuted"

        while (i < 1) {
            i++;
            text = text.replace("Not", "");
            text += ` ${i}`;
        }

        whle.textContent = text;
        return whle;
    }

    function doWhileLoop() {
        let dowhle = document.createElement('p');
        let i = 1;
        let text = "Do-While Loop is NotExecuted";

        do {
            text = text.replace("Not", "");
            text += ` = ${i}x`;
            i++;
        } while (i < 1);

        dowhle.textContent = text;
        return dowhle;
    }

    div.appendChild(whileLoop());
    div.appendChild(doWhileLoop());

    return div;
}

// ✨ switch case
function sc(day) {

    let element = document.createElement('p');
    let text = "The day is ";
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            text += day;
            break;
        case "Sunday":
        case "Saturday":
            text += "a day off";
            break;
        default:
            text += "non-human day";
    }

    element.textContent = text;
    return element;
}

root.appendChild(ifs());
root.appendChild(forLoop());
root.appendChild(sc(getDayName()));
root.appendChild(whLoop());

