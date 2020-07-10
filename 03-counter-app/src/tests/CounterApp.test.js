import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Testing CounterApp', () => {
    
    test('should return the counter app component correctly', async () => {
        
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('should validate the value of the counter', () => {
        
        
        const wrapper = shallow(<CounterApp value={100}/>);

        const expectedValue = wrapper.find('h2').text().trim();

        expect(expectedValue).toBe('100');
    })
    
    
})
