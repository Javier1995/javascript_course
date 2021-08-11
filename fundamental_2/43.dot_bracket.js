const javier = {
    firstName: 'Javier',
    lastName: 'Quiroga',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.info(javier.lastName);
console.log(javier['lastName']);


const interestedIn = prompt('What the hell do you want to know about me? Choose between firstName, lastName, age, job, and friends')
console.log(javier[interestedIn])