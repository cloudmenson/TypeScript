"use strict";
let revenue = 500.2;
let bonus = 200;
let sayHello = "Hello TypeScript!";
let learningTypeScript = true;
let result = revenue + bonus;
//types in functions
const getFullName = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
//objects
const getUserInformation = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.surname}, ${userEntity.city}, ${userEntity.age}`;
};
const user = {
    firstname: "Danylo",
    surname: "Hrytsenko",
    city: "Dnipro",
    age: 23,
};
console.log(getUserInformation(user));
