import React from 'react';
import AddPlayer from './AddPlayer';
import { shallow, mount } from 'enzyme';

it('renders without crashing - AddPlayer', () => {
    shallow(<AddPlayer />);
});

it('should triger onPlayerAdd function', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

    const nameInput = addPlayerComponent
        .find('input')
        .first()
        .getDOMNode();
    nameInput.value = 'Anna';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(onPlayerAdd).toBeCalledWith('Anna');
});