export function pick(obj: { [key: string]: any }, ...props: any[]) {
  return props.reduce(function (result, prop) {
    result[prop] = obj[prop];
    return result;
  }, {});
}

// const person = {
//   name: "Pete",
//   dog: "Daffodil",
//   cat: "Omar",
// };

// const dogPerson = pick(person, "name", "dog");

// console.log(dogPerson);
// { name: "Pete", dog: "Daffodil" }
