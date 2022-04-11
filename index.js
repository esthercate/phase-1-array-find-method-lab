// code your solution here
function superbowlWin(array) {
    let found = array.find(element => element.result === "W");
    if (found) {
        return found.year;
    } else {
        return undefined;
    }
}

