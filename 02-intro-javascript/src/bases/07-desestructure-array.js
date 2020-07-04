const characters = ['Goku', 'Vegeta', 'Trunks'];

// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);

const [, , p3] = characters;
console.log(p3);

const returnArr = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArr();
console.log(letters, numbers);

const useState = (value) => {
    return [value, () => { console.log('Hi there')}];
}

const [name, setName] = useState('Goku');
 
console.log(name);
setName();







