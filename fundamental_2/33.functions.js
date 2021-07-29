/* Function declaration */
function logger() {
    console.log("Ya has inicidado sesión");
}
logger();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice ${apples} apples and ${oranges} oranges.`;

    return juice;
}


const appleJuice = fruitProcessor(10, 3);
console.log(appleJuice);

/*function expressions*/

const age = function(birthyear){
    let dt = new Date();
    return dt.getFullYear() - birthyear;
}

console.log(age(1995));

const age1 = birthyear => {
    let dt = new Date();
    return dt.getFullYear() - birthyear;
}

console.log(age1(1996));