import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
    it('Matches the snapshot', () => {
        const tree = renderer.create(<Counter />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Starts at 0', () => {
        const wrapper = shallow(<Counter />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Current Count: 0');
    });

    it('Can increment count when button pressed', () => {
        const wrapper = shallow(<Counter />);
        const incButton = wrapper.find('button.inc');
        incButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Current Count: 1');
    });

    it('Can decrement count when button pressed', () => {
        const wrapper = shallow(<Counter />);
        const decButton = wrapper.find('button.dec');
        decButton.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Current Count: -1');
    });
});