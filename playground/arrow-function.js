var square = (X) => X* X;

console.log(square(2));

var user = {
    name: 'Abhishek',
    sayHi: () => {
        //console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.sayHi(1);
user.sayHiAlt (1,2,3,4);
