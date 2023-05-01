import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import ReadMoreArrow from '@/assets/images/logo/readmore.png';

import ImageComponent from '../ImageComponent';
import { ReadMoreContainer } from './styles';
import IReadMoreLinkProps from './types';

const ReadMoreComponent = memo(({ link, text }: IReadMoreLinkProps) => {
    return (
        <ReadMoreContainer data-test="readMore">
            <Link to={`/${link}`}>{text}</Link>
            <ImageComponent source={ReadMoreArrow} />
        </ReadMoreContainer>
    );
});

export default ReadMoreComponent;
