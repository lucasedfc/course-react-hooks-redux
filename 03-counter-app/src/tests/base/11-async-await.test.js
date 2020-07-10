import  '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Testing async-await and fetch', () => {
    
    test('should return an image url', async () => {
        
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
        
    })
    
    
})
