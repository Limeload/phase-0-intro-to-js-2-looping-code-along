// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "suprise";

function writeCards(names, event) {
    let i = 0;
    let messagesArray = [];
    while ( i < names.length) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        i++;
        messagesArray.push(message);
        debugger;
    }
    return messagesArray;
}

function countDown(counting) {
    let i = 10
    while (i > -1) {
        console.log(i);
        i--
        debugger;
    }
    return counting;
}
