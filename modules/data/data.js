export const data = {
  name: 'Elisa Cervantes',
  city: 'Madrid',
  country: 'España',
  email: 'elisa.cervantes1@gmail.com',
  photo: '',
  aboutMe:
    "I'm a passionate photographer, web developer, and journalist with a diverse educational background. I hold a Bachelor's degree in Science, a Web Development Certification, and a Master's in Journalism. My work experience includes capturing exclusive images as a photographer, developing web applications, and reporting on news stories. I'm committed to continuous learning and contributing to both the digital world and quality journalism.",

  education: [
    {
      degree: 'Ingeniería de Telecomuniciones',
      university: 'Universidad Politécnica de Valencia',
      graduationYear: 1996,
      relevantCourses: [
        'Web Development Fundamentals',
        'Data Structures and Algorithms',
        'Database Design',
        'User Interface Design'
      ]
    }
  ],
  workExperience: [
    {
      position: 'Web Developer',
      company: 'Tech Solutions Inc.',
      startDate: '2013',
      endDate: 'Present',
      description:
        'As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance.'
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      startDate: '2012',
      endDate: '2013',
      description:
        'During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals.'
    }
  ],
  skills: [
    { name: 'HTML5', image: './public/assets/html5.png' },
    { name: 'CSS3', image: './public/assets/css3.png' },
    { name: 'JavaScript', image: './public/assets/javascript.png' },
    { name: 'GitHub', image: './public/assets/github.png' }
  ],
  projects: [
    {
      title: 'Photo search API Unsplash',
      description:
        'Designed and developed a photo search platform with filters per words using unsplash API.',
      link: 'https://photosearchunsplash.netlify.app',
      github: '#',
      image: './assets/Proyecto 3 - Web.png'
    },
    {
      title: 'Developer Portfolio',
      description: 'Created my own portfolio and CV',
      link: '#',
      github: '#',
      image: './assets/Proyecto 4 - Portfolio.png'
    },
    {
      title: 'Landing Page',
      description: 'e-Commerce Landing Page for kitchen and food items',
      link: 'https://dancing-sunburst-e3fd0d.netlify.app',
      github: '#',
      image: './assets/Proyecto 1 - Web.png'
    },
    {
      title: 'e-commerce site with filters',
      description:
        'Designed and developed a e-commerce page for kitchen and food items filtering by price and catagory.',
      link: 'https://rtc-proyecto2.netlify.app',
      github: '#',
      image: './assets/Proyecto 2 - Web.png'
    }
  ],
  socialNetworks: [
    {
      link: 'https://github.com/ECervantesC',
      image: './public/assets/github_color.png',
      description: 'GitHub'
    },
    {
      link: 'https://www.linkedin.com/in/elisa-cervantes/',
      image: './public/assets/linkedin_color.png',
      description: 'LinkedIn'
    }
  ]
}
