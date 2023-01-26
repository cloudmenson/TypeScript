"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//test 1
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
//heterogeneous enum
var statusCode;
(function (statusCode) {
    statusCode["SUCCESS"] = "All is good";
    statusCode[statusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    statusCode["FAILED"] = "Very bad";
})(statusCode || (statusCode = {}));
const roles = 2 /* Roles.DESIGNER */;
//test 2
//запрос
// {
//   "topicId": 5,
//   "status": "published",
// }
//ответ
[
    {
        "question": "abcdefg",
        "answer": "qwerty",
        "tags": [
            "qaz",
            "wert"
        ],
        "likes": 3,
        "status": "published"
    }
];
//js
// async function getFlags(req) {
//   const res = await fetch("/fags", {
//     method: "POST",
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }
//answer, js to ts
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["Published"] = "published";
    QuestionStatus["Draft"] = "draft";
    QuestionStatus["Deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
function getFlags(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/fags", {
            method: "POST",
            body: JSON.stringify(req),
        });
        const data = yield res.json();
        return data;
    });
}
