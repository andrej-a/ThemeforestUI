import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ReviewCard from '../../components/ReviewCard';
import { reviewData } from './settings';

export default {
    title: 'Review card',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['image inside', 'image outside'],
        },
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium'],
        },
    },
    component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = ({ ...args }) => (
    <ReviewCard
        settings={{ type: args.type, size: args.size }}
        content={reviewData}
    />
);

export const Review = Template.bind({});

Review.args = {
    type: 'image inside',
    size: 'small',
};
