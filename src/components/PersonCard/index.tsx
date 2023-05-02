import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';

import ImageComponent from '@/components/ImageComponent';

import {
    MainInfoContainer,
    PersonCardContainer,
    PersonCardContent,
    PersonCardImage,
    PersonInformation,
    PersonName,
    PersonPosition,
    SocialContainer,
    SocialLink,
} from './styles';
import { PersonCardProps } from './types/IPerson';

const PersonCard = memo(({ settings: { type, content } }: PersonCardProps) => {
    const { photo, name, position, social } = content;
    return (
        <PersonCardContainer type={type}>
            <PersonCardContent type={type}>
                <PersonCardImage type={type}>
                    <ImageComponent source={photo} />
                </PersonCardImage>
                <MainInfoContainer type={type}>
                    <PersonInformation type={type}>
                        <PersonName type={type}>{name}</PersonName>
                        <PersonPosition type={type}>{position}</PersonPosition>
                    </PersonInformation>
                    <SocialContainer type={type}>
                        {Object.values(social).map(({ link, logo }) => {
                            return (
                                <SocialLink key={logo} href={link}>
                                    <ReactSVG src={logo} />
                                </SocialLink>
                            );
                        })}
                    </SocialContainer>
                </MainInfoContainer>
            </PersonCardContent>
        </PersonCardContainer>
    );
});

export default PersonCard;
