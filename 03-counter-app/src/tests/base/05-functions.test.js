import '@testing-library/jest-dom';
import { getUser, getActiveUser } from '../../base/05-functions';

describe('Testing Functions', () => {

    test('should return an Object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('getActiveUser should an Object with a name', () => {

        const name = 'Luke';
        const user = getActiveUser(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });


    })


})
