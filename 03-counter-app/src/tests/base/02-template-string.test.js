import '@testing-library/jest-dom';
import { getGreeting } from '../../base/02-template-string';

describe('Test 02 template-string.js', () => {

    test('getSaludo must return a Hi Luke', () => {

        const name = 'Luke';
        const greeting = getGreeting(name);
        
        expect(greeting).toBe('Hi ' + name + '!');
    })

    test('should return Hi Charles! without an argument ', () => {

        const greeting = getGreeting();
        expect(greeting).toBe('Hi Charles!');
        
    })
    

})
