import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ImageComponent from '../ImageComponent';
import ReadMoreComponent from '../ReadMoreLink';
import {
    CardContainer,
    DescriptionContainer,
    ImageContainer,
    ReadMoreContainer,
    TitleContainer,
} from './styles';
import { ServiceCardProps } from './types/IService';

const ServiceCard = memo(({ type, content, onSetPage }: ServiceCardProps) => {
    const { image, glassImage, title, description, link } = content;
    const { t } = useTranslation();

    return (
        <CardContainer data-test="serviceCard" type={type}>
            <ImageContainer type={type}>
                <ImageComponent
                    source={type === 'wide glass icon' ? glassImage : image}
                />
            </ImageContainer>
            <TitleContainer type={type}>{t(title)}</TitleContainer>
            <DescriptionContainer type={type}>
                {t(description)}
            </DescriptionContainer>
            <ReadMoreContainer type={type} onClick={onSetPage(content)}>
                <ReadMoreComponent text="Read more" link={link} />
            </ReadMoreContainer>
        </CardContainer>
    );
});

export default ServiceCard;
