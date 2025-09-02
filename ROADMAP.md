# 🛣️ ArthKosh Roadmap

ArthKosh is a **personal finance manager** built with **Next.js, shadcn/ui, and modern tooling**.  
This roadmap outlines the milestones, features, and development workflow for the project.

---

## 📍 Phase 1: Project Foundation

-   [-] Initialize Next.js project (`app` directory, TypeScript enabled)
-   [-] Setup TailwindCSS + shadcn/ui
-   [ ] Configure ESLint + Prettier + Husky (pre-commit hooks)
-   [ ] Add basic layout: Navbar, Footer, Theme Provider
-   [ ] Setup GitHub Actions for CI (lint + build)

---

## 📍 Phase 2: Authentication & User Management

-   [ ] Integrate **NextAuth.js** (Google + Email providers)
-   [ ] Add user profile page
-   [ ] Setup Prisma + PostgreSQL (NeonDB or Supabase)
-   [ ] Create `User` model in Prisma schema
-   [ ] Add role support (admin, user)

---

## 📍 Phase 3: Core Finance Features

-   [ ] Add `Accounts` (Bank, Wallet, Credit Card)
-   [ ] Add `Transactions` (income, expense, transfer)
-   [ ] Add categories & tags for transactions
-   [ ] Build transaction list + filters
-   [ ] Add ability to import/export transactions (CSV)

---

## 📍 Phase 4: Insights & Dashboards

-   [ ] Setup **Charts** (Recharts or Chart.js)
-   [ ] Monthly income vs expense graph
-   [ ] Category-wise spending breakdown
-   [ ] Net worth tracker (across all accounts)
-   [ ] Savings goals progress tracker

---

## 📍 Phase 5: Smart Features

-   [ ] Budget planning per category
-   [ ] Alerts (overspending, unusual activity)
-   [ ] AI-driven insights (optional future feature)

---

## 📍 Phase 6: UI/UX Enhancements

-   [ ] Mobile-first responsive design
-   [ ] Dark/Light mode toggle
-   [ ] Notifications & toasts (sonner)
-   [ ] Accessibility (ARIA roles, keyboard nav)

---

## 📍 Phase 7: Deployment & Production

-   [ ] Setup environment variables securely
-   [ ] Deploy on **Vercel**
-   [ ] Setup database hosting (Supabase/NeonDB)
-   [ ] CI/CD workflow with GitHub Actions

---

## 📍 Phase 8: Documentation & Open Source

-   [ ] Complete `README.md`
-   [ ] Add `CONTRIBUTING.md`
-   [ ] Add `ROADMAP.md` (this file)
-   [ ] Setup Issue Templates & PR Templates
-   [ ] Versioning & Release Notes

---

## 🔄 Development Workflow

-   Use **feature branches** (`feat/*`, `fix/*`, `chore/*`)
-   Always open a **Pull Request** → merge into `main`
-   Keep commits **small and descriptive**
-   Example:

```
    feat: add transaction model to Prisma
    chore: setup shadcn/ui and base layout
    fix: resolve category filter bug
```

---

## 🎯 Long-Term Vision

ArthKosh aims to be:

-   A **simple yet powerful** personal finance tracker
-   **Open-source friendly** for community contributions
-   **Privacy-first** (self-hostable, minimal data collection)
