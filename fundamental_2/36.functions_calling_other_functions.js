'use strict'

function fruitPieces(fruit){
    return fruit * 3;
}

function fruitProcessor(apples, oranges){
    const applePieces = fruitPieces(apples);
    const orangePieces = fruitPieces(oranges);
    const juice = `Juice ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

fruitProcessor(2,3);

console.log(fruitProcessor(2,3));