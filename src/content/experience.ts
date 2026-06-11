export interface Experience {
  org: string
  role: string
  dates: string
  bullets: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    org: 'TELUS Digital',
    role: 'Software Engineer Intern',
    dates: 'May 2026 – Present',
    bullets: [
      'Backend development on an AI project',
      'Working primarily in TypeScript and Node.js',
    ],
  },
  {
    org: 'North Carolina State University',
    role: 'Lead Teaching Assistant · CSC 116 (Intro Java)',
    dates: 'Feb 2026 – Present',
    bullets: [
      'Lead and support a team of 10+ TAs for a 200+ student intro Java course',
      'Design and maintain grading infrastructure — instructions and test cases',
      'Coordinate grading for consistency, fairness, and timely feedback',
      'Mentor TAs on grading practices, course policy, and student support',
    ],
  },
  {
    org: 'North Carolina State University',
    role: 'Computer Science Student Ambassador',
    dates: 'May 2025 – Present',
    bullets: [
      'Represent the Department of Computer Science at events and outreach',
      'Support prospective and current students through mentorship and info sessions',
    ],
  },
  {
    org: 'North Carolina State University',
    role: 'Teaching Assistant · CSC 116 (Intro Java)',
    dates: 'Jan 2025 – Feb 2026',
    bullets: [
      'Supported instruction for 30–40 students per section in intro Java',
      'Held office hours and assisted in lectures, serving 200+ students per semester',
      'Graded programming assignments and exams with detailed, constructive feedback',
      'Built custom grading scripts to automate checks and improve consistency',
      'Provided academic support via email while promoting academic integrity',
    ],
  },
  {
    org: 'Booth & Associates',
    role: 'Data Analyst Intern',
    dates: 'May 2025 – Jan 2026',
    bullets: [
      'Built a centralized Power BI dashboard on a SQL Server backend with DirectQuery',
      'Automated data processing with Python and Git',
      'Developed budget forecasting models for electric co-ops (<10% MAPE)',
    ],
  },
]
