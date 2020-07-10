import '@testing-library/jest-dom';
import React from 'react';
// import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';


describe('Test on FirstApp', () => {

    // test('should show a message "Hi Luke"', () => {
    //     const greeting = "Hi Luke";
    //     const {getByText} = render(<FirstApp name={greeting}/>)
    //     expect( getByText(greeting)).toBeInTheDocument();
    // })

    test('should show FirstApp correctly', () => {

        const greeting = 'Hi Luke'
        const wrapper = shallow(<FirstApp name={greeting} />)

        expect(wrapper).toMatchSnapshot();
    });


})
