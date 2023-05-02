import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import NumberComponent from '../../components/Numbers';

export default {
    title: 'Number card',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['variant 1', 'variant 4'],
        },
    },
    component: NumberComponent,
} as ComponentMeta<typeof NumberComponent>;

const Template: ComponentStory<typeof NumberComponent> = ({
    content,
    ...args
}) => (
    <NumberComponent
        settings={{
            mainColor: args.mainColor,
            secondColor: args.secondColor,
            type: args.type,
        }}
        content={content}
    />
);

export const Number = Template.bind({});

Number.args = {
    type: 'variant 1',
    mainColor: 'primary',
    secondColor: 'grey',
    content: { main: '1830', second: 'Projects executed' },
};
