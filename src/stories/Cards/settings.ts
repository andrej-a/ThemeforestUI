import { v4 as uuidv4 } from 'uuid';

import BlogImage from '../../assets/images/pictures/article1.png';
import PersonImage from '../../assets/images/pictures/sargis_grigor.png';
import Twi from '../../assets/images/logo/twi.svg';
import FB from '../../assets/images/logo/fb.svg';
import In from '../../assets/images/logo/in.svg';
import ReviewAvatar from '../../assets/images/pictures/avatar1.png';
import MachineLearningGlass from '../../assets/images/logo/machineLearningGlass.png';
import MachineLearning from '../../assets/images/logo/machineLearning.png';

const blogData = {
    id: uuidv4(),
    image: BlogImage,
    publishDate: '22 June 2020',
    author: 'William Pond',
    blogTitle: '2022 software development trends explained with benefits',
    firstContentPart: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis “Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.

    Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed blandit.

    Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.`,
    separateParagraph: `“Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”`,
    secondContentPart: `Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget.

    Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.`,
    countOfTheViews: `421 Views`,
    share: 'Share',
    tagsTitle: 'Tags',
    tagsArray: ['Data', 'Future'],
};

export default blogData;

export const personData = {
    name: 'Sargis Grigor',
    photo: PersonImage,
    position: 'Data analyst',
    description: `Our team has been reinforced by a data processing expert - Bagrat Leo. He is a professional in working with large volumes of information and creating high-performance data processing systems. Bagrat has a wide range of knowledge and experience in using data analysis tools, including Big Data technologies and machine learning. He always strives for excellence and is ready to contribute to achieving our goals. You can contact Bagrat through the social networks listed below.`,
    social: {
        facebook: {
            logo: FB,
            link: '',
        },
        twitter: {
            logo: Twi,
            link: '',
        },
        linkedin: {
            logo: In,
            link: '',
        },
    },
};

export const reviewData = {
    id: uuidv4(),
    avatar: ReviewAvatar,
    name: 'Alex Bern',
    role: 'CEO by PixelPerfect',
    testimonial:
        '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
};

export const serviceData = {
    image: MachineLearning,
    glassImage: MachineLearningGlass,
    title: 'Machine learning',
    description:
        '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”',
    solutionList: 'Some mock value',
    link: `services/link`,
    content: {
        customer: 'Some mock value',
        challenge: 'Some mock value',
        solution: 'Some mock value',
        results: 'Some mock value',
        tech: 'Some mock value',
    },
};
