console.log('init');

const person = {
    name: 'Tony',
    age: 45,
    key: 'Iron Man',
    range: 'Soldier'
};

// const { name, age, key } = person;

// console.log(person.name);
// console.log(person.age);
// console.log(person.key);
// console.log(name, age, key);

const useContext = ({ name, key, age, range = 'Captain' }) => {

    // console.log(name, age, range);
    return {
        keyName: key,
        old: age,
        latlng: {
            lat: 34.32321,
            lng: -12.342342
        }
    }
}

const { keyName, old, latlng: {lat, lng} } = useContext(person);

console.log(keyName, old);
console.log(lat, lng);


