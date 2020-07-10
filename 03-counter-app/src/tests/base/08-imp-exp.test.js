import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Testing Heroes', () => {

    test('should return a hero by ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero);

        const heroData = heroes.find((hero => hero.id === id));

        expect(hero).toEqual(heroData);
        
    })

    test('should return undefined if a hero not exist', () => {

        const id = 14;
        const hero = getHeroeById(id);

        console.log(hero);

        expect(hero).toBe(undefined);
        
    })

    test('should return DC Heroes', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const filteredHeroes = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(filteredHeroes);
        
    })

    test('should return Marvel Heroes', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        //expect(heroes.length).toBe(2)
        expect(heroes).toHaveLength(2);
        
    })


})
