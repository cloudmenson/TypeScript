let revenue: number = 500.2;
let bonus: number = 200;
let sayHello: string = "Hello TypeScript!";
let learningTypeScript: boolean = true;

let result: number = revenue + bonus;

//types in functions
const getFullName = (firstname: string, lastname: string): string => {
  return `${firstname} ${lastname}`;
};

//objects
const getUserInformation = (userEntity: {
  firstname: string;
  surname: string;
  city: string;
  age: number;
}): string => {
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
const data: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: { city: string };
  };
} = {
  officeId: 50,
  isOpened: false,
  contacts: {
    phone: "+380971234567",
    email: "my@gmail.com",
    address: { city: "Dnipro" },
  },
};

//arrays
const skills: string[] = ["JavaScript", "React", "Html", "Java"];

const res = skills
  .filter((skill: string) => skill !== "Java")
  .map((skill) => skill + "! ")
  .reduce((a, b) => a + b);

for (const skill of skills) {
  // console.log(skill.toUpperCase());
}

//tuples
const skill: [number, string] = [1, "React"];
const [id, skillName] = skill;

const arrCopy: [number, string, ...boolean[]] = [1, "React", true, false];

//readOnly
const devDaTa: readonly [number, string] = [1, "React"];
const devDaTa2: readonly string[] = ["JavaScript", "React"];
// devDaTa.push("example");
// devDaTa2[0] = 'Js';

//generic example
const devDaTa4: Array<string> = ["JavaScript", "React"];
const devDaTa3: ReadonlyArray<string> = ["JavaScript", "React"];

//heterogeneous enum
enum statusCode {
  SUCCESS = "All is good",
  IN_PROCESS = 1,
  FAILED = "Very bad",
}

//constant enum
const enum Roles {
  ADMIN = 1,
  DESIGNER = 2,
}
const roles = Roles.DESIGNER;

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
]

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
enum QuestionStatus {
  Published = "published",
  Draft = "draft",
  Deleted = "deleted",
}

async function getFlags(req: {
  topicId: number;
  status?: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number,
    status: QuestionStatus
  }[]
> {
  const res = await fetch("/fags", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
