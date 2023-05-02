import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import PersonCard from '../../components/PersonCard';
import { personData } from './settings';

export default {
    title: 'Person card',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['with icon links', 'vertical', 'horizontal'],
        },
    },
    component: PersonCard,
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = ({ ...args }) => (
    <PersonCard settings={{ type: args.type, content: personData }} />
);

export const Person = Template.bind({});

Person.args = {
    type: 'with icon links',
};
