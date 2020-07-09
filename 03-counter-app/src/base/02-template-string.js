


const name   = 'Fernando';
const lastName = 'Herrera';


// const fullName = name + ' ' + lastName;
const fullName = `${ name } ${ lastName }`;

// console.log( fullName );


export function getGreeting(name = 'Charles') {
    return 'Hi ' + name + '!';
}

// console.log( `This is a string: ${ getSaludo( name ) }  ` );