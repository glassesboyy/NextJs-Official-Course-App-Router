# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

### Course Chapters:

#### Chapter 1: Project Setup

#### Chapter 2: Styling

#### Chapter 3: Optimization

#### Chapter 4: Layouts

#### Chapter 5: Navigation

#### Chapter 6: Database

#### Chapter 7: Data Fetching

#### Chapter 8: Rendering

#### Chapter 9: Streaming

#### Chapter 10: PPR

#### Chapter 11: Search

#### Chapter 12: Pagination & Mutations

#### Chapter 13: Error Handling

#### Chapter 14: Accessibility

#### Chapter 15: Authentication

#### Chapter 16: Metadata & SEO

## 🚀 Key Features

### 🔐 Authentication System

- Complete user registration and login
- Password hashing with bcrypt (12 rounds)
- NextAuth.js v5 session management
- Protected routes with middleware
- Email uniqueness validation

### 📊 Dashboard Features

- Real-time revenue charts and metrics
- Invoice management (CRUD operations)
- Customer data visualization
- Search with debounced input
- Pagination with URL state
- Loading states and error handling

### 🎨 UI/UX

- Responsive design with Tailwind CSS
- Google Fonts optimization
- Heroicons integration
- Progressive loading with Suspense
- Accessibility (WCAG compliant)
- Loading skeletons for better UX

### ⚡ Performance

- Partial Prerendering (PPR)
- Image optimization
- Parallel data fetching
- Server-side rendering
- Automatic cache revalidation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router + PPR)
- **Authentication**: NextAuth.js v5 + bcrypt
- **Database**: PostgreSQL (Vercel-hosted)
- **Styling**: Tailwind CSS + CSS Modules
- **Validation**: Zod schemas
- **Language**: TypeScript
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Inter, Lusitana)

## 🗄️ Database Schema

- **users**: Authentication with UUID, hashed passwords
- **customers**: Contact information and avatars
- **invoices**: CRUD operations with status tracking
- **revenue**: Monthly data for chart visualization

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Environment setup**:

   ```bash
   cp .env.example .env.local
   ```

   Configure: `POSTGRES_URL`, `AUTH_SECRET`

3. **Seed database** (first time):

   Visit `http://localhost:3000/seed`

4. **Run development server**:

   ```bash
   pnpm dev
   ```

5. **Access application**:

   - Home: `http://localhost:3000`
   - Register: `http://localhost:3000/register`
   - Login: `http://localhost:3000/login`
   - Dashboard: `http://localhost:3000/dashboard`

## 📁 Project Structure

```
nextjs-dashboard-course/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/           # Protected dashboard
│   │   ├── (overview)/      # Dashboard home
│   │   ├── invoices/        # Invoice management
│   │   └── customers/       # Customer data
│   ├── lib/                 # Utilities & data
│   │   ├── actions.ts       # Server Actions
│   │   ├── data.ts          # Database queries
│   │   ├── definitions.ts   # TypeScript types
│   │   └── utils.ts         # Helper functions
│   ├── ui/                  # UI components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── invoices/        # Invoice components
│   │   └── *.tsx           # Shared components
│   ├── seed/               # Database seeding
│   └── page.tsx            # Home page
├── auth.ts                 # NextAuth config
├── auth.config.ts          # Auth configuration
├── middleware.ts           # Route protection
└── next.config.ts          # Next.js + PPR config
```

## 🔧 Development Notes

- Built following the official [Next.js Learn Course](https://nextjs.org/learn)
- All 16 chapters completed with modern best practices
- Production-ready with authentication and database integration
- Optimized for performance with PPR and streaming
- Fully accessible with ARIA support
- SEO-optimized with comprehensive metadata

## Contact

For questions or support, please contact [suryazulfikar22@gmail.com].

---

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
