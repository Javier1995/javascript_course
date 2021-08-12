const javier = {
    firstName: 'Javier',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicencse:true,
   /*  calAge: function(birthYear){
        console.log(this)
        return 2037 - this.birthYear;
    } */
    calAge: function(){
       this.age = 2037 - this.birthYear;
        return this.age;
    }
};
console.log(javier.calAge())




