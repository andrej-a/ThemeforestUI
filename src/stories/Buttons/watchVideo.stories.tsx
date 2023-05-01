import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import WatchVideoButton from '../../components/WatchVideoButton';

export default {
    title: 'Play video button',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['primary', 'secondary'],
        },
    },
    component: WatchVideoButton,
} as ComponentMeta<typeof WatchVideoButton>;

const Template: ComponentStory<typeof WatchVideoButton> = args => (
    <WatchVideoButton {...args} />
);

export const WatchVideoButtonComponent = Template.bind({});

WatchVideoButtonComponent.args = {
    type: 'primary',
    children: 'Watch demo',
    onClick: () => {},
};

WatchVideoButtonComponent.args = {
    type: 'secondary',
    children: 'Watch demo',
    onClick: () => {},
};
