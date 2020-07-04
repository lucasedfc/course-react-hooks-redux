console.log('init');

/* function greeting(name) {
    return `Hi ${name}`;
} */

/* const greeting = function(name) {
    return `Hi ${name}`;
} */

/* const greeting = (name) => {
    return `Hi ${name}`;
}
 */

const greeting = (name) => `Hi ${name}`;


console.log(greeting('Goku'));

const getUser = () => ({
    uid: 123,
    username: 'SDlsda_d342'
});


const user = getUser()
console.log(user);


const getActiveUser = (name) => ({
    uid: 'ASBD2312',
    username: name
});

const activeUser = getActiveUser('Luke');

console.log(activeUser);

