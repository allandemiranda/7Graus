/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../../src/views/ListUsers/components';

describe('User List Tests', () => {
    it('Renders component correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
    });

    it('Reload List', () => {
        delete window.location;
        window.location = { reload: jest.fn() };

        const tree = renderer.create(<Header />);
        const button = tree.root.findByProps({dataTestid:"reload-button"});
        button.props.onClick();  
              
        expect(button).toBeTruthy();  
    });
});