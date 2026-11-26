export interface ResourceLink { label: string; href: string; }
export interface Publication {
  title: string;
  authors: string[];
  equalContributionAuthors?: string[];
  venue: string;
  status: string;
  figure: { src: string; alt: string; width: number; height: number } | null;
  paper: ResourceLink | null;
  conference: ResourceLink;
}
export const publications: Publication[] = [{
  title: 'Synthon Contrastive Learning for Synthesizable 3D Molecule Generation',
  authors: ['Nahyun Kim', 'Seul Lee', 'Sung Ju Hwang'],
  equalContributionAuthors: ['Nahyun Kim', 'Seul Lee'],
  venue: 'NeurIPS 2026',
  status: 'Main Track (Poster), accepted',
  figure: {
    src: '/images/sycle-main-figure.png',
    alt: 'SYCLE scientific figure comparing molecular generation with and without next-synthon information, pose RMSD, and synthon representations.',
    width: 2284,
    height: 1285,
  },
  paper: null,
  conference: { label: 'Conference page', href: 'https://neurips.cc/virtual/2026/loc/atlanta/poster/155718' },
}];
