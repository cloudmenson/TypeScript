//union type
const arr = ["text", 1];

function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id.length);
  } else if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id);
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
  } else {
    console.log(a);
  }
}

let a: 1 = 1;
// a = 2;

//literal types
const abc = "qwe"; //const = type "qwe"
let abc2 = "qwe"; //let = type string

function fetchWithAuth(url: string, method: "get" | "post"): 1 | -1 { //замість enum
  return 1
}

fetchWithAuth("url", "get");

let method = "post";
fetchWithAuth("url", method as "post");
