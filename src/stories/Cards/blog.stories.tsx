import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import BlogCard from '../../components/BlogCard';
import blogData from './settings';

export default {
    title: 'Blog card',
    decorators: [withRouter],
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: [
                'big',
                'medium',
                'small',
                'right text',
                'without description',
                'no img',
            ],
        },
    },
    component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = ({
    settings,
    content,
    onSetSingleBlog,
    ...args
}) => (
    <BlogCard
        settings={{ type: args.type }}
        content={content}
        onSetSingleBlog={onSetSingleBlog}
    />
);

export const BlogCardComponent = Template.bind({});

BlogCardComponent.args = {
    type: 'small',
    content: blogData,
    onSetSingleBlog: () => {},
};
