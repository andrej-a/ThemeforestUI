import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoundButton from '../../components/RoundButton';

export default {
    title: 'Round button',
    component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = args => (
    <RoundButton {...args} />
);
const title = 'Learn more';
export const RoundButtonComponent = Template.bind({});
RoundButtonComponent.args = {
    children: title,
};
