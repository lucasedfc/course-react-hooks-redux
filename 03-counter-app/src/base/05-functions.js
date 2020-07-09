
const greeting2 = ( name ) => {
    return `Hi, ${ name }`;
}

const greeting3 = ( name ) => `Hi, ${ name }`;
const greeting4 = () => `Hi World`;

export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();

export const getActiveUser = ( name ) =>({
    uid: 'ABC567',
    username: name
})

const activeUser = getActiveUser('Fernando');
