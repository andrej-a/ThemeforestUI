interface IServiceSinglePageContent {
    customer: string;
    challenge: string;
    solution: string;
    results: string;
    tech: string;
}

export interface IService {
    image: string;
    glassImage: string;
    title: string;
    description: string;
    solutionList: string;
    link: string;
    content: IServiceSinglePageContent;
}

export type TSolution = Pick<
    IService,
    'image' | 'glassImage' | 'title' | 'description' | 'link'
>;

interface IPage {
    id: string;
    title: string;
    image?: string;
    text: string;
    types?: string;
}

export interface ISolution extends TSolution {
    page: {
        definition: IPage;
        types: IPage;
        pracices: IPage;
        conclusion: IPage;
    };
}

export type ServiceCardProps = {
    type: 'right text' | 'center text' | 'wide glass icon' | 'small';
    content: IService | ISolution;
    onSetPage: (content: IService | ISolution) => () => void;
};
