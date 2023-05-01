import { v4 as uuidv4 } from 'uuid';

import BlogImage from '../../assets/images/pictures/article1.png';

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
