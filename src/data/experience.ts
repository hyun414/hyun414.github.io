export interface Experience { institution: string; displayName?: string; dates: string; role: string; displayRole?: string; }
export const experienceCategories: { id: string; title: string; displayTitle?: string; sharedRole?: string; entries: Experience[] }[] = [
  {
    id: 'research-experience', title: 'Research', sharedRole: 'Student Researcher', entries: [
      { institution: 'CIBM Lab, Allen Institute', dates: 'Sep 2026 – Present', role: 'Student Researcher' },
      { institution: 'Machine Learning & Artificial Intelligence Lab, KAIST', displayName: 'MLAI Lab, KAIST', dates: 'Jul 2025 – Present', role: 'Student Researcher' },
      { institution: 'Bio-Information System Laboratory, KAIST', displayName: 'BISL, KAIST', dates: 'Dec 2023 – Dec 2024', role: 'Student Researcher' },
    ],
  },
  {
    id: 'industry-experience', title: 'Industry', entries: [
      { institution: 'SpiderCore', dates: 'Dec 2024 – Feb 2025', role: 'Machine Learning Engineer Intern', displayRole: 'ML Engineer Intern' },
      { institution: 'Penguin Point', dates: 'Mar 2023 – Jan 2024', role: 'Technical Operations Intern' },
    ],
  },
  {
    id: 'biological-training', title: 'Biological Training', displayTitle: 'Bio. training', sharedRole: 'Student Researcher', entries: [
      { institution: 'Brain-RNA Laboratory, KAIST', displayName: 'BRL, KAIST', dates: 'Dec 2024 – Jun 2025', role: 'Student Researcher' },
      { institution: 'Eco. Lab, KAIST', dates: 'Sep 2023 – Dec 2023', role: 'Student Researcher' },
    ],
  },
];
