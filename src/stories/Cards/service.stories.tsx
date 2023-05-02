import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import ServiceCard from '../../components/ServiceCard';
import { serviceData } from './settings';

export default {
    title: 'Service card',
    decorators: [withRouter],
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['right text', 'center text', 'wide glass icon', 'small'],
        },
    },
    component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = ({ ...args }) => (
    <ServiceCard
        type={args.type}
        content={serviceData}
        onSetPage={() => () => {}}
    />
);

export const Service = Template.bind({});

Service.args = {
    type: 'right text',
};
