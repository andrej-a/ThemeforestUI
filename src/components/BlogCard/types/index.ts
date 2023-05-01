export interface IBlogCard {
    id: string;
    image: string;
    publishDate: string;
    author: string;
    blogTitle: string;
    firstContentPart: string;
    separateParagraph: string;
    secondContentPart: string;
    countOfTheViews: string;
    share: string;
    tagsTitle: string;
    tagsArray: string[];
}

export default interface IBlogCardProps {
    settings: {
        type:
            | 'big'
            | 'medium'
            | 'small'
            | 'right text'
            | 'without description'
            | 'no img';
    };
    content: IBlogCard;
    onSetSingleBlog: (content: IBlogCard) => () => void;
}
