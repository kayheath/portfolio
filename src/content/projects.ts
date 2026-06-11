export interface Project {
  title: string
  blurb: string
  result: string
  tags: string[]
  /** Optional repo / live link — added later as public repos become available. */
  href?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Power BI Dashboard for Project Managers',
    blurb:
      'Consolidated data from multiple reports into one dashboard, with Python + Git automation and a SQL Server backend synced via DirectQuery. Designed custom visuals, tab navigation, and a filter page, plus a tutorial guide for the team.',
    result: 'Streamlined data access for project managers',
    tags: ['Power BI', 'SQL Server', 'Python', 'DirectQuery'],
  },
  {
    title: 'Budget Forecasting for Electric Co-ops',
    blurb:
      'Forecasted 1–2 years of revenue from limited datasets, adding weather-based features and using regularization and smoothing to keep models stable. Compared Lasso, Median Regression, and XGBoost.',
    result: 'Achieved <10% MAPE',
    tags: ['Python', 'Regression', 'XGBoost', 'Forecasting'],
  },
]
