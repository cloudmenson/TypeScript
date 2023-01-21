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
};
console.log(getUserInformation(user));
