import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private cdr: ChangeDetectorRef){}

  /* =========================================================
     NAVIGATION
  ========================================================= */

  menuOpen = false;


  /* =========================================================
     ASK ABOUT ME
  ========================================================= */

  askModalOpen = false;

  userQuestion = '';

  chatbotResponse = '';

  isLoading = false;


  /* =========================================================
     PORTFOLIO DATA
  ========================================================= */

  private readonly portfolioData = {

    name: 'Lungile Hlakanyane',

    title: 'Full Stack Developer',

    specialization: 'Java (Spring Boot) & Angular',

    location: 'Bloemfontein, Free State, South Africa',

    phone: [
      '071 999 4871',
      '084 455 6526'
    ],

    email: 'lungilehlakanyane@gmail.com',

    github: 'https://github.com/Lungile-Hlakanyane',

    portfolio: 'https://lungilehlakanyane.github.io/portfolio/',

    summary:
      'Results-driven Full Stack Software Developer with nearly 3 years of professional experience building scalable enterprise and web applications using Java, Spring Boot, Angular, and Ionic. Experienced in developing RESTful APIs, integrating frontend and backend systems, troubleshooting production issues, and collaborating with cross-functional teams in Agile environments.',

    languages: [
      'Java',
      'TypeScript',
      'JavaScript',
      'SQL',
      'HTML5',
      'CSS3'
    ],

    frameworks: [
      'Spring Boot',
      'Angular',
      'Ionic',
      'REST APIs'
    ],

    databases: [
      'MySQL',
      'SQL Server'
    ],

    tools: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'JIRA',
      'IntelliJ IDEA',
      'VS Code'
    ],

    cloud: [
      'AWS EC2',
      'Linode Server',
      'Docker Containerisation'
    ],

    practices: [
      'Object-Oriented Programming',
      'Agile/Scrum',
      'API Integration',
      'Unit Testing',
      'Code Reviews',
      'Debugging',
      'Software Maintenance'
    ],


    /* =========================================================
       EXPERIENCE
    ========================================================= */

    experience: [

      {
        company: 'Mangaung Metro Municipality (MMM)',
        position: 'Junior Software Developer',
        location: 'Bloemfontein, South Africa',
        period: 'September 2025 – Present',

        responsibilities: [
          'Develop and maintain enterprise-grade software applications using Java Spring Boot and Angular.',
          'Build and integrate RESTful APIs for scalable frontend and backend communication.',
          'Collaborate with UX teams, QA testers, and stakeholders to deliver reliable software solutions.',
          'Troubleshoot and resolve software defects across development and production environments.',
          'Participate in technical discussions, code reviews, and software improvement initiatives.',
          'Improve application performance, maintainability, and scalability through clean coding practices.',
          'Contribute to Agile development processes including sprint planning and progress reviews.'
        ]
      },

      {
        company: 'Gwegwe Technologies (PTY) LTD',
        position: 'Junior Software Developer',
        location: 'Johannesburg, South Africa',
        period: 'June 2024 – August 2025',

        responsibilities: [
          'Developed full stack business applications using Spring Boot, Angular, and Ionic.',
          'Designed and implemented RESTful APIs for seamless data exchange between systems.',
          'Optimized application performance, scalability, and security.',
          'Worked collaboratively with developers and project teams in Agile/Scrum environments.',
          'Participated in peer code reviews and contributed to code quality standards.',
          'Assisted with debugging, testing, and maintaining production applications.',
          'Gained hands-on experience with Docker containerisation and deployment workflows.',
          'Mentored software development interns on Angular and Spring Boot fundamentals.'
        ]
      },

      {
        company: 'The Innovation Hub (PTY) LTD',
        position: 'Software Developer Intern',
        location: 'South Africa',
        period: 'June 2023 – May 2024',

        responsibilities: [
          'Assisted in developing and testing software applications and new system features.',
          'Wrote clean, maintainable, and efficient code under guidance from senior developers.',
          'Participated in code reviews and debugging sessions.',
          'Collaborated with cross-functional teams during project development cycles.',
          'Contributed to frontend and backend application enhancements using Angular and Spring Boot.'
        ]
      }

    ],


    /* =========================================================
       PROJECTS
    ========================================================= */

    projects: [

      {
        name: 'TalentBridge',

        type: 'Recruitment Job Platform',

        technologies: [
          'Angular',
          'Ionic',
          'Spring Boot',
          'MySQL',
          'Docker',
          'Java'
        ],

        description:
          'A recruitment web platform connecting job seekers and employers.',

        features: [
          'Job listings',
          'Profile management',
          'Application management',
          'RESTful APIs',
          'Frontend and backend integration',
          'Docker containerisation'
        ]
      },

      {
        name: 'StayNest',

        type: 'Accommodation Booking Application',

        technologies: [
          'Angular',
          'Ionic',
          'Spring Boot',
          'MySQL',
          'Java'
        ],

        description:
          'A property booking and rental management platform for landlords and tenants.',

        features: [
          'Booking management',
          'Maintenance requests',
          'Authentication',
          'REST API integration'
        ]
      },

      {
        name: 'iBarber',

        type: 'Barber Booking Mobile Application',

        technologies: [
          'Angular',
          'Ionic',
          'Spring Boot',
          'MySQL',
          'Java'
        ],

        description:
          'A mobile booking platform for barbers and clients.',

        features: [
          'Appointment scheduling',
          'Profile customisation',
          'Booking management'
        ]
      },

      {
        name: 'Pizzero',

        type: 'Pizza Ordering & Delivery Platform',

        technologies: [
          'Angular',
          'Ionic',
          'Spring Boot',
          'MySQL',
          'Java'
        ],

        description:
          'A pizza management system with order tracking and delivery management.',

        features: [
          'Pizza management',
          'Order tracking',
          'Delivery management',
          'Responsive frontend interfaces',
          'Backend API integrations'
        ]
      },

      {
        name: 'Personal Portfolio Website',

        type: 'Portfolio Website',

        technologies: [
          'HTML',
          'CSS',
          'JavaScript'
        ],

        description:
          'A personal portfolio website showcasing projects and technical skills.'
      }

    ],


    /* =========================================================
       EDUCATION
    ========================================================= */

    education: {

      qualification: 'Diploma in Information Technology',

      institution: 'Central University of Technology, Free State',

      location: 'Bloemfontein, South Africa',

      period: 'February 2019 – November 2022',

      specialization: 'Software Development',

      focusAreas: [
        'C# .NET Framework',
        'Java',
        'SQL',
        'Flutter'
      ],

      average: '65%'
    },


    /* =========================================================
       CERTIFICATIONS
    ========================================================= */

    certifications: [

      'Programming Foundations: Databases – Fundamentals of SQL and Server Management Studio – LinkedIn Learning',

      'Programming Foundations: Fundamentals of Python Programming – LinkedIn Learning'

    ],


    /* =========================================================
       ADDITIONAL INFORMATION
    ========================================================= */

    additionalInformation: [

      'Mentored software development interns on Angular and Spring Boot technologies.',

      'Active participant in coding challenges and problem-solving platforms including HackerRank.',

      'Strong communication and collaboration skills within cross-functional development teams.',

      'Passionate about continuous learning and modern software architecture.',

      'Strong interest in backend development.'

    ]

  };


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  toggleMenu(): void {

    this.menuOpen = !this.menuOpen;

    this.updateBodyScroll();

  }


  closeMenu(): void {

    this.menuOpen = false;

    this.updateBodyScroll();

  }


  /* =========================================================
     OPEN ASK MODAL
  ========================================================= */

  openAskModal(): void {

    this.menuOpen = false;

    this.askModalOpen = true;

    this.userQuestion = '';

    this.chatbotResponse = '';

    this.isLoading = false;

    this.updateBodyScroll();

  }


  /* =========================================================
     CLOSE ASK MODAL
  ========================================================= */

  closeAskModal(): void {

    this.askModalOpen = false;

    this.userQuestion = '';

    this.chatbotResponse = '';

    this.isLoading = false;

    this.updateBodyScroll();

  }


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  @HostListener('document:keydown.escape')
  handleEscape(): void {

    if (this.askModalOpen) {

      this.closeAskModal();

      return;

    }

    if (this.menuOpen) {

      this.closeMenu();

    }

  }


  /* =========================================================
     ASK QUESTION
  ========================================================= */

askQuestion(): void {
  const question = this.userQuestion.trim();

  if (!question || this.isLoading) {
    return;
  }

  this.isLoading = true;
  this.chatbotResponse = '';

  // Make sure THINKING... appears immediately
  this.cdr.detectChanges();

  // Give the user a short thinking animation
  setTimeout(() => {
    const response = this.generateResponse(question);

    this.isLoading = false;
    this.chatbotResponse = '';

    this.cdr.detectChanges();

    // Start typing the answer
    this.typeResponse(response);
  }, 500);
}



private typeResponse(response: string): void {
  let index = 0;
  const typingSpeed = 20;
  const typeNextCharacter = () => {
    if (index < response.length) {
      this.chatbotResponse += response.charAt(index);
      index++;
      this.cdr.detectChanges();
      setTimeout(typeNextCharacter, typingSpeed);
    }
  };
  typeNextCharacter();
}



  /* =========================================================
     GENERATE RESPONSE
  ========================================================= */

  private generateResponse(question: string): string {

    const normalizedQuestion =
      this.normalizeQuestion(question);


    /* =======================================================
       GREETING
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'hello',
        'hi',
        'hey',
        'good morning',
        'good afternoon',
        'good evening'
      ])
    ) {

      return (
        `Hello! I'm Lungile's portfolio assistant. ` +
        `You can ask me about his experience, skills, ` +
        `projects, education, technologies, or contact details.`
      );

    }


    /* =======================================================
       SPECIFIC PROJECTS
       These come before generic project/technology checks.
    ======================================================= */

    if (normalizedQuestion.includes('talentbridge')) {

      return (
        `TalentBridge is a recruitment job platform ` +
        `designed to connect job seekers and employers. ` +
        `It includes job listings, profile management, ` +
        `application management, RESTful APIs, frontend ` +
        `and backend integration, and Docker containerisation.`
      );

    }


    if (normalizedQuestion.includes('staynest')) {

      return (
        `StayNest is an accommodation booking and rental ` +
        `management platform for landlords and tenants. ` +
        `It includes booking management, maintenance ` +
        `requests, authentication, and REST API integration.`
      );

    }


    if (normalizedQuestion.includes('ibarber')) {

      return (
        `iBarber is a mobile barber booking application ` +
        `built with Angular, Ionic, Spring Boot, MySQL, ` +
        `and Java. It includes appointment scheduling, ` +
        `profile customisation, and booking management.`
      );

    }


    if (
      normalizedQuestion.includes('pizzero') ||
      normalizedQuestion.includes('pizza')
    ) {

      return (
        `Pizzero is a pizza ordering and delivery platform. ` +
        `It includes pizza management, order tracking, ` +
        `delivery management, responsive frontend interfaces, ` +
        `and backend API integrations.`
      );

    }


    /* =======================================================
       NAME
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'your name',
        'his name',
        'who is lungile',
        'tell me about lungile',
        'tell me about him'
      ])
    ) {

      return (
        `${this.portfolioData.name} is a ` +
        `${this.portfolioData.title} specialising in ` +
        `${this.portfolioData.specialization}.`
      );

    }


    /* =======================================================
       ABOUT
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'about lungile',
        'about him',
        'who is he',
        'tell me more',
        'introduce lungile'
      ])
    ) {

      return (
        `Lungile Hlakanyane is a Full Stack Developer ` +
        `specialising in Java, Spring Boot, and Angular. ` +
        `He has nearly 3 years of professional experience ` +
        `building enterprise and web applications, RESTful ` +
        `APIs, and full stack solutions.`
      );

    }


    /* =======================================================
       CURRENT JOB
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'current job',
        'current company',
        'currently working',
        'where does he work now',
        'present job',
        'current employer'
      ])
    ) {

      return (
        `Lungile currently works as a Junior Software Developer ` +
        `at Mangaung Metro Municipality (MMM) in Bloemfontein, ` +
        `South Africa. He has been there since September 2025.`
      );

    }


    /* =======================================================
       EXPERIENCE
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'experience',
        'work experience',
        'career',
        'employment',
        'worked'
      ])
    ) {

      return (
        `Lungile has nearly 3 years of professional software ` +
        `development experience. He has worked at Mangaung ` +
        `Metro Municipality, Gwegwe Technologies, and The ` +
        `Innovation Hub. His experience includes Java, Spring Boot, ` +
        `Angular, Ionic, REST APIs, databases, debugging, Agile ` +
        `development, and Docker.`
      );

    }


    /* =======================================================
       GWEGWE
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'gwegwe',
        'previous company',
        'previous job',
        'former company'
      ])
    ) {

      return (
        `Lungile worked as a Junior Software Developer at ` +
        `Gwegwe Technologies from June 2024 to August 2025. ` +
        `He developed full stack applications using Spring Boot, ` +
        `Angular, and Ionic and gained experience with REST APIs, ` +
        `Docker, debugging, testing, and Agile development.`
      );

    }


    /* =======================================================
       INNOVATION HUB
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'innovation hub',
        'internship',
        'intern'
      ])
    ) {

      return (
        `Lungile worked as a Software Developer Intern at ` +
        `The Innovation Hub from June 2023 to May 2024. ` +
        `He contributed to frontend and backend development ` +
        `using Angular and Spring Boot.`
      );

    }


    /* =======================================================
       SKILLS
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'skills',
        'technical skills',
        'technologies',
        'technology',
        'tech stack',
        'what can he do'
      ])
    ) {

      return (
        `Lungile's main technical skills include Java, ` +
        `TypeScript, JavaScript, Angular, Spring Boot, Ionic, ` +
        `SQL, MySQL, SQL Server, REST APIs, Git, GitHub, ` +
        `Docker, Postman, AWS EC2, and Linode Server.`
      );

    }


    /* =======================================================
       JAVA / SPRING BOOT
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'java',
        'spring boot',
        'backend',
        'back end'
      ])
    ) {

      return (
        `Java and Spring Boot are major parts of Lungile's ` +
        `development experience. He uses them to build backend ` +
        `applications, RESTful APIs, business logic, and ` +
        `enterprise applications.`
      );

    }


    /* =======================================================
       ANGULAR / TYPESCRIPT
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'angular',
        'frontend',
        'front end',
        'typescript'
      ])
    ) {

      return (
        `Angular is one of Lungile's primary frontend technologies. ` +
        `He has professional experience building applications ` +
        `with Angular and TypeScript and integrating Angular ` +
        `frontends with Spring Boot REST APIs.`
      );

    }


    /* =======================================================
       IONIC / MOBILE
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'ionic',
        'mobile',
        'mobile development'
      ])
    ) {

      return (
        `Lungile has experience using Ionic and Angular to develop ` +
        `mobile applications, including projects such as iBarber ` +
        `and StayNest.`
      );

    }


    /* =======================================================
       DATABASES
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'database',
        'databases',
        'mysql',
        'sql server'
      ])
    ) {

      return (
        `Lungile has experience working with MySQL and SQL Server, ` +
        `as well as SQL for relational database development and ` +
        `data management.`
      );

    }


    /* =======================================================
       SQL
    ======================================================= */

    if (
      normalizedQuestion.includes('sql')
    ) {

      return (
        `SQL is part of Lungile's technical skill set. He has ` +
        `experience with relational databases including MySQL ` +
        `and SQL Server.`
      );

    }


    /* =======================================================
       DOCKER
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'docker',
        'container',
        'containerisation',
        'deployment'
      ])
    ) {

      return (
        `Lungile has hands-on experience with Docker containerisation ` +
        `and deployment workflows. He has also worked with AWS EC2 ` +
        `and Linode Server.`
      );

    }


    /* =======================================================
       REST API
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'api',
        'apis',
        'rest',
        'rest api',
        'restful'
      ])
    ) {

      return (
        `Lungile has professional experience designing, developing, ` +
        `and integrating RESTful APIs between frontend and backend ` +
        `systems, particularly using Spring Boot and Angular.`
      );

    }


    /* =======================================================
       GITHUB
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'github',
        'source code',
        'repositories',
        'repository',
        'repo'
      ])
    ) {

      return (
        `Lungile's GitHub profile is: ` +
        `${this.portfolioData.github}`
      );

    }


    /* =======================================================
       PORTFOLIO
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'portfolio',
        'website',
        'personal website'
      ])
    ) {

      return (
        `Lungile's portfolio is available at: ` +
        `${this.portfolioData.portfolio}`
      );

    }


    /* =======================================================
       CONTACT
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'contact',
        'contact details',
        'phone',
        'telephone',
        'email',
        'email address',
        'phone number',
        'reach him'
      ])
    ) {

      return (
        `You can contact Lungile by email at ` +
        `${this.portfolioData.email}, or by phone at ` +
        `${this.portfolioData.phone[0]} / ${this.portfolioData.phone[1]}.`
      );

    }


    /* =======================================================
       LOCATION
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'location',
        'where is he',
        'where is lungile',
        'where does he live',
        'where is he based',
        'based'
      ])
    ) {

      return (
        `Lungile is based in ${this.portfolioData.location}.`
      );

    }


    /* =======================================================
       PROJECTS
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'projects',
        'project',
        'what has he built',
        'applications',
        'apps'
      ])
    ) {

      return (
        `Lungile has worked on several projects including ` +
        `TalentBridge, StayNest, iBarber, Pizzero, and his ` +
        `personal portfolio website.`
      );

    }


    /* =======================================================
       EDUCATION
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'education',
        'qualification',
        'degree',
        'diploma',
        'university',
        'study',
        'studied'
      ])
    ) {

      return (
        `Lungile holds a Diploma in Information Technology ` +
        `specialising in Software Development from the Central ` +
        `University of Technology, Free State. He studied from ` +
        `February 2019 to November 2022.`
      );

    }


    /* =======================================================
       CERTIFICATIONS
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'certification',
        'certifications',
        'certificate',
        'linkedin learning'
      ])
    ) {

      return (
        `Lungile has completed LinkedIn Learning certifications ` +
        `covering SQL and Server Management Studio fundamentals ` +
        `and Python programming fundamentals.`
      );

    }


    /* =======================================================
       AGILE / SCRUM
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'agile',
        'scrum',
        'team',
        'collaboration'
      ])
    ) {

      return (
        `Lungile has experience working in Agile/Scrum environments, ` +
        `participating in sprint planning, code reviews, technical ` +
        `discussions, and collaboration with developers, UX teams, ` +
        `QA testers, and stakeholders.`
      );

    }


    /* =======================================================
       DEBUGGING
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'debugging',
        'debug',
        'troubleshooting',
        'production issues',
        'bugs'
      ])
    ) {

      return (
        `Lungile has experience troubleshooting software defects ` +
        `across development and production environments, debugging ` +
        `applications, testing fixes, and improving application ` +
        `reliability.`
      );

    }


    /* =======================================================
       MENTORING
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'mentor',
        'mentoring',
        'interns',
        'leadership'
      ])
    ) {

      return (
        `Lungile has mentored software development interns on ` +
        `Angular and Spring Boot fundamentals and has experience ` +
        `collaborating within cross-functional development teams.`
      );

    }


    /* =======================================================
       SUMMARY
    ======================================================= */

    if (
      this.containsAny(normalizedQuestion, [
        'summary',
        'professional summary',
        'tell me about his background'
      ])
    ) {

      return this.portfolioData.summary;

    }


    /* =======================================================
       FALLBACK
    ======================================================= */

    return (
      `I'm Lungile's portfolio assistant. I can answer questions ` +
      `about his experience, skills, projects, education, ` +
      `technologies, and contact details.\n\n` +
      `Try asking:\n` +
      `• What technologies does Lungile use?\n` +
      `• Tell me about TalentBridge.\n` +
      `• Where does Lungile work?\n` +
      `• What is his education?\n` +
      `• How can I contact him?`
    );

  }


  /* =========================================================
     NORMALIZE QUESTION
  ========================================================= */

  private normalizeQuestion(question: string): string {

    return question
      .toLowerCase()
      .replace(/[?!.,;:'"()[\]{}]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  }


  /* =========================================================
     CHECK KEYWORDS
  ========================================================= */

  private containsAny(
    question: string,
    keywords: string[]
  ): boolean {

    return keywords.some(keyword =>
      question.includes(keyword)
    );

  }


  /* =========================================================
     BODY SCROLL
  ========================================================= */

  private updateBodyScroll(): void {

    if (this.menuOpen || this.askModalOpen) {

      document.body.style.overflow = 'hidden';

    } else {

      document.body.style.overflow = '';

    }

  }

onQuestionKeydown(event: Event): void {
  const keyboardEvent = event as KeyboardEvent;

  // Allow Shift + Enter to create a new line
  if (keyboardEvent.shiftKey) {
    return;
  }

  // Prevent the textarea from creating a new line
  keyboardEvent.preventDefault();

  // Submit the question
  this.askQuestion();
}

}