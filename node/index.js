/**
 * @author @mnizarzr
 * @clazz Web C Afternoon
 */

const now = new Date();

function getDayName() {
    return now.toLocaleDateString('en-US', { weekday: 'long' });
}

// ✨ if, else, nested if
function ifs(age = 20, isStudent = true) {
    let result;

    if (age >= 18) {
        if (isStudent) {
            result = "You are an adult student.";
        } else {
            result = "You are an adult.";
        }
    } else {
        result = "You are a minor.";
    }

    return result;
}

// ✨ Loops
function forLoop() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < days.length - 2; i++) {
        console.log(days[i]);
    }

    return "Those are weekdays";
}

function whLoop() {
    function whileLoop() {
        let i = 1;
        let text = "While Loop is NotExecuted";

        while (i < 1) {
            i++;
            text = text.replace("Not", "");
            text += ` ${i}`;
        }

        return text;
    }

    function doWhileLoop() {
        let i = 1;
        let text = "Do-While Loop is NotExecuted";

        do {
            text = text.replace("Not", "");
            text += ` = ${i}x`;
            i++;
        } while (i < 1);

        return text;
    }

    return {
        whileLoop: whileLoop(),
        doWhileLoop: doWhileLoop(),
    };
}

// ✨ switch case
function sc(day) {
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
            text += "a non-human day";
    }

    return text;
}

console.log(ifs());
console.log(forLoop());
console.log(sc(getDayName()));
console.log(whLoop());
