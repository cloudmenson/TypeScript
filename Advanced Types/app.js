"use strict";
//union type
const arr = ["text", 1];
function logId(id) {
    if (typeof id === "string") {
        console.log(id.length);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
let a = 1;
// a = 2;
