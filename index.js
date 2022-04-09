// code your solution here
function superbowlWin(array) {
    let found = (array.find(element => element.result === "W")).year;
    return found;

    //returning undefined
}
