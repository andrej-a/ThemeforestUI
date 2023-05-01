import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import DefaultButton from '../../components/Button';

export default {
    title: 'Button',
    component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = args => (
    <DefaultButton {...args} />
);

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
    children: 'Test button value',
};
