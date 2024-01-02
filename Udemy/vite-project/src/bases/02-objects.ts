interface Person {
    dni: number;
    name: string;
    age?: number | undefined;
}

export const student:Person = {
    dni: 152634,
    name: 'Juan Gaviria'
}

export const children:Person = {
    dni: 1111,
    name: 'Children'
}

export const people:Person[] = [];

people.push( student, children )

console.log(people)
