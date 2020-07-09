import '@testing-library/jest-dom';
import { returnArr } from '../../base/07-deses-arr'

describe('Testing array desestructure', () => {


    test('should return a string and a number', () => {

        const [letters, numbers] = returnArr();

        // expect(testArr).toEqual(['ABC', 123]);
        
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');


    })

})
