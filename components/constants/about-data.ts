export interface AboutDataInterface {
    title: string;
    description: string;
    key: string;
}

export interface TeamsInterface {
    name: string;
    role: string;
    nickname: string;
    href: string,
    imageSrc: string;
    bio: string;
    socials: SocialData[]
}

export interface SocialData{
    name: string;
    url: string;
    image: string;
}

export interface ProjectsDataInterface extends ImagesInterface{
    id: string;
    name: string;
    description: string;
    imageSrc: string;
    href: string;
    projectLink: string;
    createdby: string[];
    technologies: string[];
    detailDescription: DetailDescriptionInterface[];
}

export interface DetailDescriptionInterface extends ImagesInterface{
    title: string;
    description: string;
    isBullet: boolean;
    hasBullets: boolean;
    bullets?: BulletsInterface[];

}

export interface BulletsInterface extends  ImagesInterface{
    title: string;
    description: string;
}

export interface ImagesInterface {
    imageSrc?: string;
    hasImage: boolean;
    hasMultipleImages: boolean;
    multipleImages?: string[];
}

// it will be export from firebase later using getServerSideProps
export const AboutData: AboutDataInterface[] = [
    {
        title: "Front-End Development",
        description: "Our front-end developers are masters at transforming designs into pixel-perfect, interactive, and responsive websites. We work with cutting-edge technologies like HTML5, CSS3, and JavaScript frameworks such as React, Angular, and Vue.js to create a seamless user experience across all devices.",
        key: 'front-end-dev'
    },
    {
        title: "Back-End Development",
        description: "Behind every great web application is a robust and efficient back-end. Our skilled back-end developers are well-versed in server-side technologies like Node.js, PHP, Ruby on Rails, and more. We ensure your web applications have secure databases, smooth server communication, and optimized business logic.",
        key: 'back-end-dev'
    },
    {
        title: "Database Management",
        description: "Handling data is a critical aspect of web development. With our expertise in database management, we seamlessly integrate databases like MySQL, PostgreSQL, MongoDB, or Firebase to store and retrieve data efficiently.",
        key: 'db-manage'
    },
    {
        title: "eCommerce Solutions",
        description: "If you're looking to establish an online store, we've got you covered. Our team has extensive experience in building feature-rich and secure eCommerce platforms using platforms like WooCommerce, Shopify, or custom solutions tailored to your specific requirements.",
        key: ''
    },
    {
        title: "Performance Optimization",
        description: 'We understand the importance of fast-loading websites. Our performance optimization techniques, including file compression, caching, and lazy loading, ensure that your web applications perform at their best.',
        key: ''
    },
    {
        title: "Testing and Debugging",
        description: 'Our rigorous testing and debugging processes guarantee that your web projects are free of errors and function flawlessly across different browsers and devices.',
        key: ''
    },
    {
        title: "Security",
        description: 'We take web application security seriously. Our team implements secure coding practices and encryption methods to protect sensitive user data and safeguard against potential vulnerabilities.',
        key: ''
    },
    {
        title: "Collaborative Approach",
        description: 'At sddoc, we believe in collaboration and open communication. We work closely with you throughout the development process to ensure that your vision is brought to life, and your expectations are exceeded.',
        key: ''
    }
]


// it will be export from firebase later using getServerSideProps
export const Teams:TeamsInterface[] = [
    {
        name: 'Yash Sharma',
        role: 'Founder',
        nickname: 'any',
        imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
        href: '/teams/yash-sharma',
        bio: 'Yash is a full-stack developer with a passion for building web applications. He has experience working with a wide range of technologies, including React, Angular, Node.js, PHP, and more. He is also a competitive programmer and has participated in several hackathons.',
        socials: [
            { name: 'twitter', url: 'https://twitter.com/yashsharma__', image: "/social/twitter.png" },
            { name: 'linkedin', url: 'https://www.linkedin.com/in/yashsharma08/', image: "/social/linkedin.png" },
            { name: 'github', url: '', image: "/social/github.png" },
            { name: 'website', url: '', image: "/social/web.png" },
            { name: 'instagram', url: '', image: "/social/instagram.png" },
            { name: 'facebook', url: '', image: "/social/facebook.png" },
            { name: 'youtube', url: '', image: "/social/youtube.png" },
            { name: 'email', url: '', image: "/social/email.png" },
        ]
    },
    {
        name: 'Vinay Kumar Singh',
        role: 'Founder',
        nickname: 'string',
        href: '/teams/vinay-kumar-singh',
        imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
        bio: 'Yash is a full-stack developer with a passion for building web applications. He has experience working with a wide range of technologies, including React, Angular, Node.js, PHP, and more. He is also a competitive programmer and has participated in several hackathons.',
        socials: [
            { name: 'twitter', url: 'https://twitter.com/yashsharma__', image: "/social/twitter.png" },
            { name: 'linkedin', url: 'https://www.linkedin.com/in/yashsharma08/', image: "/social/linkedin.png" },
            { name: 'github', url: '', image: "/social/github.png" },
            { name: 'website', url: '', image: "/social/web.png" },
            { name: 'instagram', url: '', image: "/social/instagram.png" },
            { name: 'facebook', url: '', image: "/social/facebook.png" },
            { name: 'youtube', url: '', image: "/social/youtube.png" },
            { name: 'email', url: '', image: "/social/email.png" },
        ]
    },
    {
        name: 'Deepak ',
        role: 'Founder',
        nickname: 'boolean',
        href: '/teams/deepak-kumar-singh',
        imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
        bio: 'Yash is a full-stack developer with a passion for building web applications. He has experience working with a wide range of technologies, including React, Angular, Node.js, PHP, and more. He is also a competitive programmer and has participated in several hackathons.',
        socials: [
            { name: 'twitter', url: 'https://twitter.com/yashsharma__', image: "/social/twitter.png" },
            { name: 'linkedin', url: 'https://www.linkedin.com/in/yashsharma08/', image: "/social/linkedin.png" },
            { name: 'github', url: '', image: "/social/github.png" },
            { name: 'website', url: '', image: "/social/web.png" },
            { name: 'instagram', url: '', image: "/social/instagram.png" },
            { name: 'facebook', url: '', image: "/social/facebook.png" },
            { name: 'youtube', url: '', image: "/social/youtube.png" },
            { name: 'email', url: '', image: "/social/email.png" },
        ]
    },

]

// a document in projects collection in firebase
export const Projects_ID_1:ProjectsDataInterface =  {
    id:'1', // any better id for project
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
    href: '/projects/',
    projectLink: '',
    hasImage: true,
    hasMultipleImages: false,
    createdby:['Yash Sharma, ', 'Vinay Kumar Singh'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    detailDescription: [
        {
            title: 'Project Description',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: false,
            hasBullets: true,
            bullets: [
                {
                    title: 'Bullet 1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
        {
            title: 'Project Description',
            description: '',
            isBullet: true,
            hasBullets: false,
            bullets: [
                {
                    title: 'Bullet 1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
        {
            title: 'Project Description',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: false,
            hasBullets: false,
            bullets: [
                {
                    title: '',
                    description: '',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
        {
            title: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: true,
            hasBullets: false,
            bullets: [
                {
                    title: '',
                    description: '',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
    ],
}

// a document in projects collection in firebase
export const Projects_ID_2:ProjectsDataInterface =   {
    id:'2', // any better id for project
    name: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
    href: '/projects/project-1',
    projectLink: '',
    createdby:['Yash Sharma', 'Vinay Kumar Singh'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    hasImage: true,
    hasMultipleImages: false,
    detailDescription: [
        {
            title: 'Project Description',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: false,
            hasBullets: true,
            bullets: [
                {
                    title: 'Bullet 1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
        {
            title: 'Project Description',
            description: '',
            isBullet: true,
            hasBullets: false,
            bullets: [
                {
                    title: 'Bullet 1',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
        {
            title: 'Project Description',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: false,
            hasBullets: false,
            bullets: [
                {
                    title: '',
                    description: '',
                    hasImage: true,
                    hasMultipleImages: false,
                    multipleImages: [''],
                    imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
            multipleImages: [''],
            imageSrc: 'https://avatars.githubusercontent.com/u/56148291?v=4',

        },
        {
            title: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            isBullet: true,
            hasBullets: false,
            bullets: [
                {
                    title: '',
                    description: '',
                    hasImage: true,
                    hasMultipleImages: false,
                }
            ],
            hasImage: true,
            hasMultipleImages: false,
        },
    ],
}



// it will be export from firebase later using getServerSideProps
export const ProjectsData:ProjectsDataInterface[] = [
    {...Projects_ID_1},
    {...Projects_ID_2}
]