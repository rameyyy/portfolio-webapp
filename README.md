# Portfolio Web App

A full stack portfolio website built with modern web technologies and cloud infrastructure that showcases work experiences and technical projects with live data integrations using serverless functions.

## Features

**Work Experience**
- Professional background and roles
- Technical skills and achievements

**Projects**
- **Personal CoC Tracker** - Tracks my own Clash of Clans progression and building upgrade optimization. Syncs my player data daily from the CoC API for historical tracking.
- **AlgoPicks** - Self-hosted homelab webapp for sports analytics and market analysis. Scrapes and uses APIs to gather NCAAM basketball and UFC data. Includes machine learning prediction models and market arbitrage analysis.

## Tech Stack

**Frontend & API**
- Next.js 15 (App Router)
- TypeScript
- React
- Tailwind CSS
- Vercel (hosting)

**Backend & Jobs**
- Python 3.11
- AWS Lambda (serverless functions)
- AWS EventBridge (scheduled triggers)

**Database**
- AWS RDS PostgreSQL
- Prisma ORM

**Infrastructure**
- Terraform (Infrastructure as Code)
- GitHub Actions (CI/CD)

**Development Tools**
- Pre-commit hooks (ruff, eslint)
- ESLint + TypeScript checking
- Ruff (Python linting & formatting)

## Project Structure

```
portfolio-webapp/
├── web/                    # Next.js application
│   ├── app/               # Pages and API routes
│   ├── components/        # React components
│   ├── lib/              # Utilities and DB client
│   └── prisma/           # Database schema
│
├── jobs/                  # AWS Lambda functions
│   └── clash-sync/       # Daily CoC API sync job
│
├── infra/                 # Infrastructure as Code
│   └── terraform/        # AWS resource definitions
│
└── .github/workflows/     # CI/CD pipelines
```

## License

MIT
