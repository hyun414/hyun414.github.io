export interface Portrait { src: string; alt: string; width: number; height: number; }

export const profile = {
  name: 'Nahyun Kim',
  email: 'hyun0414@kaist.ac.kr',
  github: 'https://github.com/hyun414',
  linkedin: 'https://www.linkedin.com/in/nahyun-kim-102b51351/',
  scholar: 'https://scholar.google.com/citations?user=JW-q6vYAAAAJ&hl=ko',
  headline: 'AI for Biology',
  affiliation: 'KAIST · University of Washington',
  location: 'Seoul, South Korea',
  bio: [
    'I’m an undergraduate at KAIST, majoring in Biological Sciences with a double major in Computer Science, and an exchange student at the University of Washington. I want to use AI to better understand how complex biological systems work, from disease mechanisms to neural circuits. My long-term goal is to turn those insights into new directions for therapeutic discovery. At the Allen Institute, I work on machine learning approaches for neural population dynamics. I’m open to research collaborations and industry opportunities, especially at the intersection of AI and biology.',
  ],
  personalNote: 'Outside of research, I enjoy cooking and boxing.',
  // Existing owner-supplied assets, used directly without duplication.
  portrait: { src: '/images/profile.jpg', alt: 'Nahyun Kim', width: 1024, height: 1024 } as Portrait | null,
  cvPdf: '/files/Nahyun_Kim_CV.pdf' as string | null,
};

export const education = [
  { institution: 'KAIST', dates: 'Feb 2022 – Present', program: 'B.S. in Biological Sciences · Computer Science double major', displayProgram: 'Biological Sciences · Computer Science' },
  { institution: 'University of Washington', dates: 'Sep 2026 – Present', program: 'Exchange Student · Autumn 2026 & Winter 2027', displayProgram: 'Exchange Student' },
];
