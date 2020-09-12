import { ICategories } from './interfaces';

export const CATEGORIES: ICategories[] = [
  {
    id: 1,
    name: 'All',
    category: null,
    icon: null,
    isShowSubCategories: false,
    subCategories: null,
  },
  {
    id: 2,
    name: 'Programming',
    category: 'programming',
    icon: '../assets/images/categories/programming.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'JavaScript',
        category: 'programming',
      },
      {
        id: 2,
        name: 'Java',
        category: 'programming',
      },
      {
        id: 3,
        name: 'Python',
        category: 'programming',
      },
      {
        id: 4,
        name: 'SQL',
        category: 'programming',
      },
      {
        id: 5,
        name: 'Databases',
        category: 'programming',
      },
      {
        id: 6,
        name: 'Data structure & Algorithms',
        category: 'programming',
      },
      {
        id: 7,
        name: 'Architecture',
        category: 'programming',
      },
      {
        id: 8,
        name: 'Design Patterns',
        category: 'programming',
      },
      {
        id: 9,
        name: 'Networks',
        category: 'programming',
      },
      {
        id: 10,
        name: 'Hacks',
        category: 'programming',
      },
      {
        id: 11,
        name: 'Games',
        category: 'programming',
      },
      {
        id: 12,
        name: 'Security',
        category: 'programming',
      },
      {
        id: 13,
        name: 'System Administration',
        category: 'programming',
      },
      {
        id: 14,
        name: 'Information Systems',
        category: 'programming',
      },
      {
        id: 15,
        name: 'Operating systems',
        category: 'programming',
      },
    ],
  },
  {
    id: 3,
    name: 'Business',
    category: 'business',
    icon: '../assets/images/categories/business.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Management',
        category: 'business',
      },
      {
        id: 2,
        name: 'Marketing',
        category: 'business',
      },
      {
        id: 3,
        name: 'MLM',
        category: 'business',
      },
      {
        id: 4,
        name: 'Accounting',
        category: 'business',
      },
      {
        id: 5,
        name: 'Investing',
        category: 'business',
      },
      {
        id: 6,
        name: 'Markets',
        category: 'business',
      },
      {
        id: 7,
        name: 'Econometrics',
        category: 'business',
      },
    ],
  },
  {
    id: 4,
    name: 'Mathematics',
    category: 'mathematics',
    icon: '../assets/images/categories/mathematics.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Algebra',
        category: 'mathematics',
      },
      {
        id: 2,
        name: 'Linear Algebra',
        category: 'mathematics',
      },
      {
        id: 3,
        name: 'Discrete Mathematics',
        category: 'mathematics',
      },
      {
        id: 4,
        name: 'Number Theory',
        category: 'mathematics',
      },
      {
        id: 5,
        name: 'Operator Theory',
        category: 'mathematics',
      },
      {
        id: 6,
        name: 'Numerical Analysis',
        category: 'mathematics',
      },
      {
        id: 7,
        name: 'Logic',
        category: 'mathematics',
      },
      {
        id: 8,
        name: 'Graph Theory',
        category: 'mathematics',
      },
      {
        id: 9,
        name: 'Computer Algebra',
        category: 'mathematics',
      },
      {
        id: 10,
        name: 'Combinatorics',
        category: 'mathematics',
      },
      {
        id: 11,
        name: 'Analysis',
        category: 'mathematics',
      },
      {
        id: 12,
        name: 'Geometry and Topology',
        category: 'mathematics',
      },
      {
        id: 13,
        name: 'Mathematicsematical Statistics',
        category: 'mathematics',
      },
      {
        id: 14,
        name: 'Mathematicsematical Physics',
        category: 'mathematics',
      },
      {
        id: 15,
        name: 'Puzzle',
        category: 'mathematics',
      },
    ],
  },
  {
    id: 5,
    name: 'Literature',
    category: 'literature',
    icon: '../assets/images/categories/literature.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Comics',
        category: 'literature',
      },
      {
        id: 2,
        name: 'Fantasy',
        category: 'literature',
      },
      {
        id: 3,
        name: 'Detective',
        category: 'literature',
      },
      {
        id: 4,
        name: 'Poetry',
        category: 'literature',
      },
      {
        id: 5,
        name: 'Literary',
        category: 'literature',
      },
      {
        id: 6,
        name: 'Prose',
        category: 'literature',
      },
    ],
  },
  {
    id: 6,
    name: 'History',
    category: 'history',
    icon: '../assets/images/categories/history.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'American Studies',
        category: 'history',
      },
      {
        id: 2,
        name: 'Archaeology',
        category: 'history',
      },
      {
        id: 3,
        name: 'Memoirs, Biographies',
        category: 'history',
      },
      {
        id: 4,
        name: 'Military History',
        category: 'history',
      },
    ],
  },
  {
    id: 7,
    name: 'Education',
    category: 'education',
    icon: '../assets/images/categories/education.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Self-help books',
        category: 'education',
      },
      {
        id: 2,
        name: 'Theses abstracts',
        category: 'education',
      },
      {
        id: 3,
        name: 'International Conferences and Symposiums',
        category: 'education',
      },
    ],
  },
  {
    id: 8,
    name: 'Design',
    category: 'design',
    icon: '../assets/images/categories/design.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Design: Architecture',
        category: 'design',
      },
      {
        id: 2,
        name: 'Web-design',
        category: 'design',
      },
      {
        id: 3,
        name: 'Construction: Renovation and interior design',
        category: 'design',
      },
      {
        id: 4,
        name: 'Construction: Renovation and interior design: Saunas',
        category: 'design',
      },
    ],
  },
  {
    id: 9,
    name: 'Psychology',
    category: 'psychology',
    icon: '../assets/images/categories/psychology.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Creative Thinking',
        category: 'psychology',
      },
      {
        id: 2,
        name: 'Hypnosis',
        category: 'psychology',
      },
      {
        id: 3,
        name: 'Love, erotic',
        category: 'psychology',
      },
      {
        id: 4,
        name: 'Pedagogy',
        category: 'psychology',
      },
      {
        id: 5,
        name: 'The art of communication',
        category: 'psychology',
      },
      {
        id: 6,
        name: 'Neuro-Linguistic Programming',
        category: 'psychology',
      },
    ],
  },
  {
    id: 10,
    name: 'Techniques',
    category: 'techniques',
    icon: '../assets/images/categories/techniques.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Automation',
        category: 'techniques',
      },
      {
        id: 2,
        name: 'Communication',
        category: 'techniques',
      },
      {
        id: 3,
        name: 'Telecommunications',
        category: 'techniques',
      },
      {
        id: 4,
        name: 'Construction',
        category: 'techniques',
      },
      {
        id: 5,
        name: 'Electronics',
        category: 'techniques',
      },
      {
        id: 6,
        name: 'Energy',
        category: 'techniques',
      },
      {
        id: 7,
        name: 'Transport',
        category: 'techniques',
      },
      {
        id: 8,
        name: 'Safety and Security',
        category: 'techniques',
      },
      {
        id: 9,
        name: 'Nanotechnology',
        category: 'techniques',
      },
      {
        id: 10,
        name: 'Metrology',
        category: 'techniques',
      },
      {
        id: 11,
        name: 'Metallurgy',
        category: 'techniques',
      },
    ],
  },
  {
    id: 11,
    name: 'Physics',
    category: 'physics',
    icon: '../assets/images/categories/physics.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Astronomy',
        category: 'physics',
      },
      {
        id: 2,
        name: 'Crystal Physics',
        category: 'physics',
      },
      {
        id: 3,
        name: 'Electrodynamics',
        category: 'physics',
      },
      {
        id: 4,
        name: 'Geophysics',
        category: 'physics',
      },
      {
        id: 5,
        name: 'Mechanics',
        category: 'physics',
      },
      {
        id: 6,
        name: 'Optics',
        category: 'physics',
      },
      {
        id: 7,
        name: 'Physics of lasers',
        category: 'physics',
      },
      {
        id: 8,
        name: 'Physics of the Atmosphere',
        category: 'physics',
      },
      {
        id: 9,
        name: 'Plasma Physics',
        category: 'physics',
      },
      {
        id: 10,
        name: 'Quantum Physics',
        category: 'physics',
      },
      {
        id: 11,
        name: 'Quantum Mechanics',
        category: 'physics',
      },
      {
        id: 12,
        name: 'Theory of Relativity and Gravitation',
        category: 'physics',
      },
    ],
  },
  {
    id: 12,
    name: 'Medicine',
    category: 'medicine',
    icon: '../assets/images/categories/medicine.png',
    isShowSubCategories: false,
    subCategories: [
      {
        id: 1,
        name: 'Anatomy and physiology',
        category: 'medicine',
      },
      {
        id: 2,
        name: 'Cardiology',
        category: 'medicine',
      },
      {
        id: 3,
        name: 'Chinese Medicine',
        category: 'medicine',
      },
      {
        id: 4,
        name: 'Clinical Medicine',
        category: 'medicine',
      },
      {
        id: 5,
        name: 'Dermatology',
        category: 'medicine',
      },
      {
        id: 6,
        name: 'Diabetes',
        category: 'medicine',
      },
      {
        id: 7,
        name: 'Endocrinology',
        category: 'medicine',
      },
      {
        id: 8,
        name: 'Epidemiology',
        category: 'medicine',
      },
      {
        id: 9,
        name: 'Histology',
        category: 'medicine',
      },
      {
        id: 10,
        name: 'Neurology',
        category: 'medicine',
      },
      {
        id: 11,
        name: 'Oncology',
        category: 'medicine',
      },
      {
        id: 12,
        name: 'Ophthalmology',
        category: 'medicine',
      },
      {
        id: 13,
        name: 'Pharmacology',
        category: 'medicine',
      },
      {
        id: 14,
        name: 'Therapy',
        category: 'medicine',
      },
      {
        id: 15,
        name: 'Molecular Medicine',
        category: 'medicine',
      },
    ],
  },
];
