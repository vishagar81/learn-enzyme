import React from 'react';
import Login from './Login';
import { shallow, mount, render } from 'enzyme';

describe('Login component', () => {
    it('should render without throwing any error', () => {
        expect(shallow(<Login/>).exists(<form className='login'></form>)).toBe(true);
    })

    it('renders an email input', () => {
        expect(shallow(<Login/>).find('#email').length).toEqual(1)
    })

    it('renders an password input', () => {
        expect(shallow(<Login/>).find('#password').length).toEqual(1)
    })
})

describe('Email input', () => {
    it('should respond to change event and chnage state of the Login component', () => {
        const wrapper = shallow(<Login/>)
        wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
        expect(wrapper.state('email')).toEqual('blah@gmail.com')
    })
})

describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
     const wrapper = shallow(<Login />)
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}})
     expect(wrapper.state('password')).toEqual('cats')
    })
})