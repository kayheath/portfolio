export interface Education {
  school: string
  degree: string
  gpa: string
  honors: string[]
  term: string
}

export const EDUCATION: Education[] = [
  {
    school: 'North Carolina State University',
    degree: 'B.S. Computer Science (AI Concentration) & Statistics',
    gpa: '4.0',
    honors: ["Dean's List (Fall '24, Spring '25, Fall '25)", 'Tau Beta Pi', 'Engineering Village'],
    term: 'Aug 2024 – May 2027',
  },
  {
    school: 'College of The Albemarle',
    degree: 'Associate of Science & Engineering (Dual Enrollment)',
    gpa: '4.0',
    honors: ['Phi Theta Kappa'],
    term: 'Jan 2021 – May 2024',
  },
]
