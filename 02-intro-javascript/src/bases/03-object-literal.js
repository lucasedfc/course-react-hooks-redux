console.log('init');

const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zipCode: 21431,
        lat: 14.3232,
        lng: 34.32131
    }

};

//console.table(person);

const person2 = { ...person};

person2.name = 'Peter';

console.log(person);
console.log(person2);
