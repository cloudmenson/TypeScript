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
    skills: {
        js: true,
        react: true,
    },
};
//test1
const data = {
    officeId: 50,
    isOpened: false,
    contacts: {
        phone: "+380971234567",
        email: "my@gmail.com",
        address: { city: "Dnipro" },
    },
};
//arrays
const skills = ["JavaScript", "React", "Html", "Java"];
const res = skills
    .filter((skill) => skill !== "Java")
    .map((skill) => skill + "! ")
    .reduce((a, b) => a + b);
for (const skill of skills) {
    // console.log(skill.toUpperCase());
}
//tuples
const skill = [1, "React"];
const [id, skillName] = skill;
const arrCopy = [1, "React", true, false];
//readOnly
const devDaTa = [1, "React"];
const devDaTa2 = ["JavaScript", "React"];
// devDaTa.push("example");
// devDaTa2[0] = 'Js';
//generic example
const devDaTa4 = ["JavaScript", "React"];
const devDaTa3 = ["JavaScript", "React"];
