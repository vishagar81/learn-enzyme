import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

it('renders the name given', () => {
    const wrapper = shallow(<Hello name="Vishal"/>);
    expect(wrapper.find('p').text()).toEqual('Hello, Vishal!');
});

it('uses "Unknown" if no name is passed in', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('p').text()).toEqual('Hello, Unknown!');
});