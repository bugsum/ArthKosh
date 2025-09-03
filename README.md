# ArthKosh - Personal Finance Management

[![CI](https://github.com/yourusername/arthkosh/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/arthkosh/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

ArthKosh is a modern, open-source personal finance management application built with Next.js, TypeScript, and Prisma. Track your income, expenses, set budgets, achieve financial goals, and gain insights into your spending patterns.

## ✨ Features

-   **Multi-Account Management**: Support for bank accounts, wallets, credit cards, and investments
-   **Transaction Tracking**: Record income, expenses, and transfers with categories and tags
-   **Budget Planning**: Set monthly/quarterly/yearly budgets per category with overspending alerts
-   **Goal Setting**: Track savings goals with progress visualization
-   **Smart Analytics**: Interactive charts for income vs expenses, category breakdowns, and net worth tracking
-   **Data Import/Export**: CSV import/export for easy data migration
-   **Authentication**: Secure login with Google OAuth and email magic links
-   **Responsive Design**: Mobile-first design with dark/light theme support

## 🚀 Quick Start

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   SQLite (or PostgreSQL for production)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/arthkosh.git
    cd arthkosh
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

    Configure your `.env` file:

    ```env
    DATABASE_URL="file:./dev.db"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-secret-key"
    GOOGLE_CLIENT_ID="your-google-client-id"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"
    EMAIL_SERVER_HOST="smtp.example.com"
    EMAIL_SERVER_PORT="587"
    EMAIL_SERVER_USER="your-email"
    EMAIL_SERVER_PASSWORD="your-password"
    EMAIL_FROM="noreply@example.com"
    ```

4. **Set up the database**

    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

5. **Start the development server**

    ```bash
    npm run dev
    ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

-   **Frontend**: Next.js 15 with App Router, TypeScript, TailwindCSS
-   **Backend**: Next.js API routes with Prisma ORM
-   **Database**: SQLite (development) / PostgreSQL (production)
-   **Authentication**: NextAuth.js with Google OAuth and email providers
-   **Charts**: Recharts for data visualization
-   **Styling**: TailwindCSS with shadcn/ui components

## 📁 Project Structure

```
arthkosh/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Dashboard with charts
│   │   ├── accounts/          # Account management
│   │   ├── transactions/      # Transaction CRUD
│   │   ├── budgets/           # Budget management
│   │   └── goals/             # Goal tracking
│   ├── components/            # Reusable UI components
│   │   ├── charts/            # Chart components
│   │   ├── dashboard/         # Dashboard widgets
│   │   ├── layout/            # Layout components
│   │   └── providers/         # Context providers
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── prisma/                    # Database schema and migrations
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🔧 Development

### Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint
-   `npm run format` - Format code with Prettier

### Code Quality

-   **ESLint**: Code linting with Next.js and TypeScript rules
-   **Prettier**: Code formatting
-   **Husky**: Git hooks for pre-commit checks
-   **TypeScript**: Strict type checking

### Database

-   **Prisma**: Type-safe database client
-   **Migrations**: Version-controlled database schema changes
-   **Seed Data**: Sample data for development

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Docker

```bash
docker build -t arthkosh .
docker run -p 3000:3000 arthkosh
```

### Manual Deployment

1. Build the application: `npm run build`
2. Start the production server: `npm run start`
3. Set up a reverse proxy (nginx/Apache)
4. Configure environment variables

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run lint && npm run build`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📊 Roadmap

-   [ ] **Mobile App**: React Native companion app
-   [ ] **Advanced Analytics**: Machine learning insights
-   [ ] **Multi-Currency**: International currency support
-   [ ] **Investment Tracking**: Portfolio management
-   [ ] **Bill Reminders**: Automated payment notifications
-   [ ] **Tax Reports**: Year-end tax summaries
-   [ ] **API Access**: Public API for integrations
-   [ ] **Collaboration**: Shared household finances

## 🐛 Issues & Support

-   **Bug Reports**: [GitHub Issues](https://github.com/yourusername/arthkosh/issues)
-   **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/arthkosh/discussions)
-   **Documentation**: [GitHub Wiki](https://github.com/yourusername/arthkosh/wiki)

## 📄 License

This project is licensed under the Creative Commons Zero v1.0 Universal License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   [Next.js](https://nextjs.org/) - React framework
-   [Prisma](https://prisma.io/) - Database toolkit
-   [TailwindCSS](https://tailwindcss.com/) - CSS framework
-   [Recharts](https://recharts.org/) - Chart library
-   [NextAuth.js](https://next-auth.js.org/) - Authentication

## 📈 Project Status

-   **Version**: 0.1.0
-   **Status**: Active Development
-   **Last Updated**: 03 September 2025

---

Made with ❤️ by Samarth Sharma
