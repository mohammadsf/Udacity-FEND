// Previous Code
/*
 * Programming Quiz: Laugh (5-4)
 */
 
var laugh = function (numOfHas) {
    let has = "";
    for (let i = 1; i <= numOfHas; i++ ) {
        has += "ha";
    }
    return has + '!';
}

console.log(laugh(3));
