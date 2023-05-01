import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cutString } from '@/helpers/cutString';

import ImageComponent from '../ImageComponent';
import ReadMoreComponent from '../ReadMoreLink';
import Tag from '../TagComponents';
import {
    BlogCardContainer,
    BlogCardContent,
    CardTitle,
    DescriptionContainer,
    ImageContainer,
    MainTextSection,
    PublishDate,
    ReadMore,
    TagsContainer,
} from './styles';
import IBlogCardProps from './types';

const BlogCard = memo(
    ({ settings, content, onSetSingleBlog }: IBlogCardProps) => {
        const { type } = settings;

        const { image, publishDate, blogTitle, firstContentPart, tagsArray } =
            content;
        const { t } = useTranslation();
        return (
            <BlogCardContainer data-test="blogCard">
                <BlogCardContent type={type}>
                    <ImageContainer type={type}>
                        <ImageComponent source={image} />
                    </ImageContainer>
                    <DescriptionContainer type={type}>
                        <PublishDate type={type}>{t(publishDate)}</PublishDate>
                        <CardTitle type={type}>{t(blogTitle)}</CardTitle>
                        <MainTextSection type={type}>
                            {cutString(t(firstContentPart))}
                        </MainTextSection>
                        <ReadMore
                            type={type}
                            onClick={onSetSingleBlog(content)}
                        >
                            <ReadMoreComponent
                                text="Read more"
                                link={t(blogTitle)}
                            />
                        </ReadMore>
                        <TagsContainer type={type}>
                            {tagsArray.map(tag => {
                                return <Tag key={tag}>{tag}</Tag>;
                            })}
                        </TagsContainer>
                    </DescriptionContainer>
                </BlogCardContent>
            </BlogCardContainer>
        );
    },
);

export default BlogCard;
