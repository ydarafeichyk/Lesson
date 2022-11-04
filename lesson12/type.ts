// 1.Task#1
interface User {
    name: string;
    age: number;
    occupation: string;
    car?:string;
    children?:number;
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children:2
    }
];

function Person(user: User) {
    console.log(`name: ${user.name}, age: ${user.age}, occupation: ${user.occupation}, car: ${user.car}, children: ${user.children}`);
}

users.forEach(Person);

// 2.Task#2
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function PersonChoice(user: Person) {
    console.log(`name: ${user.name}, age: ${user.age}`);
}

persons.forEach(PersonChoice);

// 3.Task#3
type ObjectNew<T, K extends string, V> = T & {[NK in K]: V};

export class ObjectManipulator<T> {
    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<ObjectNew<T, K, V>> {
        return new ObjectManipulator({...this.obj, [key]: value} as ObjectNew<T, K, V>);
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}

// 4.Task#4
// 4.1
export function map<T>(mapper: Function, input : T[]| any) : T[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]|any): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

// 4.2
export function filter<T>(filterer: Function, input : T[]| any) : T[] | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]|any): T[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
// 4.3
export function add(a: number, b: number): number| Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number|any) : number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

