import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Testing CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('should return the counter app component correctly', async () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('should validate the value of the counter', () => {


        const wrapper = shallow(<CounterApp value={100} />);

        const expectedValue = wrapper.find('h2').text().trim();

        expect(expectedValue).toBe('100');
    })

    test('should increment with the add button', () => {

        wrapper.find('button').at(0).simulate('click');
        // const btn2 = wrapper.find('button').at(1);
        // const btn3 = wrapper.find('button').at(2);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');

    })

    test('should decrease with the remove button', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    })


    test('should reset value with the reset button', () => {

        const wrapper = shallow(<CounterApp value={110} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('110');
    })

})
