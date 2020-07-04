const name = 'Luke';
const lastName = 'Skywalker';

// const fullName = name + ' ' + lastName;

const fullName = `${name} ${lastName}`;

console.log(fullName);

function getGreeting(name = '') {
    return 'Hi ' + name;
}

console.log(`This is a text from a fn:  ${getGreeting(fullName)}`);

