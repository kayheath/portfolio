export interface SkillGroup {
  label: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    label: 'Software / Web',
    items: ['React', 'Next.js', 'Node.js', 'Git'],
  },
  {
    label: 'Data / ML',
    items: ['Power BI', 'SQL Server', 'Regression', 'XGBoost', 'Forecasting', 'Statistics'],
  },
  {
    label: 'Tools',
    items: ['Claude Code']
  }
]
