//Coding challenge #1
/* 
back to the two gymnastics teams, the Dolphins and
the Koalas! There is a new gymnastics discipline,
which works differently.
Each teams competes 3 times, and then average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if is has at least DOUBLE the avarage score of the other team. Otherwise, no team wins.

1. Create an arrow function 'CalcAverage0' to calculate the average of 3 scores
2. Use the funcion to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
('AvgDolphins' and 'avgKoalas'), and the logs the winner to the consolem together with the victory pint, according to the rule above. 
Example: "Koalas"
win (30 vs. 13)
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49

TEST DATA 2: Dolphins Score 85, 54 and 41. Koalas score 23, 34 and 27
*/

'use strict'
const calcAvarage = (a, b, c) => (a + b + c)/ 3;

const checkWinner = function(avgDolphins, avgKoalas){
    if( avgDolphins >= 2 * avgKoalas ) {
        return "Dolphins win "+ ' ' +  avgDolphins + ' vs ' + avgKoalas; 
    } else if( avgKoalas >= 2 * avgDolphins ) {
        return "Koalas win " +  avgKoalas + ' ' + ' vs ' + avgDolphins; 
    } else {
        return "No team wins....";
    }
}

let avgDolphins = calcAvarage(44, 23, 71);
let avgKoalas = calcAvarage(65,54,49);
console.log('Data 1: ' + checkWinner(avgDolphins, avgKoalas));


let avgDolphins1 = calcAvarage(85, 54, 41);
let avgKoalas1 = calcAvarage(23,34,27);
console.log('Data 2: ' + checkWinner(avgDolphins1,avgKoalas1));

