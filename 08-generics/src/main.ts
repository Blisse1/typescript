// Generics
//
// Sometimes we don't know what types are will be passed
// into a function. Generics allow us to provide a placeholder

const echo = <T>(arg: T): T => arg;
// it works with every type

// Utility functions
const isObject = <T>(arg: T): boolean => {
    return (
        typeof arg === 'object' && !Array.isArray(arg) && arg !== null 
        // Siempre recuerde que comparar retorna boolean
    ) 
}

console.log(isObject(true));
console.log(isObject("John"));
console.log(isObject([1, 2, 3]));
console.log(isObject({name: "John"}));
console.log(isObject(null));

// Utility type II
// One sign that you need a generic is when youre function
// has to do some logic, some thinking about what it needs to return

interface BoolCheck<T> {
   value: T,
   is: boolean,
}
const isTrue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return { value: arg, is: false }
    }
    if(isObject(arg) && !Object.keys(arg as keyof T).length){
        return { value: arg, is: false }
    }
    return {value: arg, is: !!arg} //returns a boolean
}
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({name: "Dave"}));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// has ID

interface HasId {
    id: number,
}

const processUser = <T extends HasId>(user: T): T => {
    return user;
}

console.log(processUser({id: 1, name: "Dave"}));
// console.log(processUser({name: "Dave"}));

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [ 
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
]

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "name"));

// Generic in class 
class StateObject<T> {
   private data: T 

   constructor(value: T){
      this.data = value; 
   }

   get state(): T{
       return this.data;
   }

   set state(value: T){
      this.data = value; 
   }
}

const store = new StateObject("John");
console.log(store.state)
store.state = "bliss";

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = (["bliss", 42, true]);
console.log(myState.state);
