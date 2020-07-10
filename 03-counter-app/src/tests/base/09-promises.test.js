import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promises';
import heroes from '../../data/heroes';

describe('Testing Promises', () => {

    test('should return a heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes[0]);
                done();
            });
    });

    test('should return a error if hero dont exist', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('hero not found');
                done();
            });
    });
});
