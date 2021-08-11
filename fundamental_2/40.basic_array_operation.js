const friends = ['Michael', 'Steven', 'Peter']

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove eleements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends)

friends.shift();//first
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Logan'));
friends.unshift('Javier')
console.log(friends)
console.log(friends.includes('Michael'))
console.log(friends.includes('Javier'))