export interface ServicesDataInterface {
    name: string;
    url: string;
    description: string;
    image: string;
    services: {
        size: string;
        name: string;
        url: string;
        image: string;
    }[];
}

export const SERVICES_DATA = [
    {
        name: 'Front-End Development', url: 'front-end-dev', description: "", image: '', services: [
            { size: '50px', name: "HTML", url: 'html', image: '/services/web/html-c.png', },
            { size: '50px', name: "CSS", url: 'css', image: '/services/web/css-3-c.png', },
            { size: '50px', name: "SASS", url: 'sass', image: '/services/web/sass-c.png', },
            { size: '50px', name: "Tailwind CSS", url: 'tailwind', image: '/services/web/tailwind-css-icon-c.png', },
            { size: '50px', name: "JavaScript", url: 'javascript', image: '/services/web/javascript-c.png', },
            { size: '50px', name: "Typescript", url: 'typescript', image: '/services/web/typescript-c.svg', },
            { size: '50px', name: "Json", url: 'json', image: '/services/web/json-c.png', },
            { size: '50px', name: "React", url: 'react', image: '/services/web/react-c.png', },
            { size: '50px', name: "Redux", url: 'redux', image: '/services/web/redux-c.png', },
            { size: '50px', name: "NextJs", url: 'next', image: '/services/web/nextjs-c.png', },
        ]
    },
    {
        name: 'Back-End Development', url: 'back-end-dev', description: "", image: '', services: [
            { size: '70px', name: "PHP", url: 'php', image: '/services/web/PHP-c.png', },
            { size: '50px', name: "Laravel", url: 'laravel', image: '/services/web/laravel-c.png', },
            { size: '40px', name: "MongoDB", url: 'mongodb', image: '/services/web/mongoDb-c.png', },
            { size: '50px', name: "Flask", url: 'flask', image: '/services/web/flask-c.png', },
            { size: '50px', name: "Django", url: 'django', image: '/services/web/django-c.png', },
            { size: '50px', name: "Rest APIs", url: 'rest-api', image: '/services/web/api-c.png', },
            { size: '50px', name: "Firebase", url: 'firebase', image: '/services/web/firebase-c.png', },
            { size: '50px', name: "Node JS", url: 'nodejs', image: '/services/web/nodejs-c.png', },
            { size: '50px', name: "Express JS", url: 'express-js', image: '/services/web/expressjs-c.png', },
            { size: '50px', name: "MS SQL", url: 'ms-sql', image: '/services/web/sql-server-c.png', },
            { size: '50px', name: "MySQL", url: 'mysql', image: '/services/web/mysql-c.png', },
        ]
    },
    {
        name: 'Database Management', url: 'db-manage', description: "", image: '', services: [
            { size: '50px', name: "MS SQL", url: 'ms-sql', image: '/services/web/sql-server-c.png', },
            { size: '50px', name: "MySQL", url: 'mysql', image: '/services/web/mysql-c.png', },
        ]
    },
    {
        name: 'Android Development', url: 'android-dev', description: "", image: '', services: [
            { size: '50px', name: "Android Studio", url: 'android-studio', image: '/services/android/android-studio-c.png', },
            { size: '50px', name: "Android App", url: 'android-app', image: '/services/android/android-app-c.png', },
            { size: '50px', name: "C#", url: 'c-sharp', image: '/services/android/c-sharp-c.png', },
            { size: '50px', name: "Java", url: 'java', image: '/services/android/java-c.png', },
            { size: '50px', name: "Kotlin", url: 'kotlin', image: '/services/android/kotlin-c.png', },
        ]
    },
    {
        name: 'Data Services', url: 'data-services', description: "", image: '', services: [
            { size: '50px', name: "AI", url: 'ai', image: '/services/data/ai-c.png', },
            { size: '50px', name: "Automation", url: 'automation', image: '/services/data/automation-c.png', },
            { size: '50px', name: "BOTS", url: 'bots', image: '/services/data/bots-c.png', },
            { size: '50px', name: "Data Engineerig", url: 'data-engineering', image: '/services/data/data-engineering-c.png', },
            { size: '50px', name: "Data Extraction", url: 'data-extraction', image: '/services/data/data-extraction-c.png', },
            { size: '50px', name: "Data Mining", url: 'data-mining', image: '/services/data/data-mining-c.png', },
            { size: '50px', name: "Data Science", url: 'data-science', image: '/services/data/data-science-c.png', },
            { size: '50px', name: "Machine Learning", url: 'machine-learning', image: '/services/data/machine-learning-c.png', },
            { size: '50px', name: "Python", url: 'python', image: '/services/data/python-c.png', },
            { size: '50px', name: "Selenium", url: 'selenium', image: '/services/data/selenium-c.png', },
        ]
    },
    {
        name: 'Software Development', url: 'software-dev', description: "", image: '', services: [
            { size: '50px', name: "Python", url: 'python', image: '/services/data/python-c.png', },
            { size: '50px', name: "Java", url: 'java', image: '/services/android/java-c.png', },
        ]
    },
]
