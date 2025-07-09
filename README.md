# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 📚 Course Progress

**Current Progress: Chapter 7 of 16 completed**

### ✅ Completed Chapters:

#### Chapter 1: Getting Started

- Project setup and initialization
- Basic Next.js configuration

#### Chapter 2: CSS Styling

- ✅ Global CSS setup with Tailwind CSS
- ✅ CSS Modules implementation (`home.module.css`)
- ✅ Custom font integration (Inter & Lusitana from Google Fonts)
- ✅ Styling best practices and responsive design

#### Chapter 3: Optimizing Fonts and Images

- ✅ Google Fonts optimization with `next/font`
- ✅ Image optimization with `next/image`
- ✅ Responsive images for desktop and mobile
- ✅ Performance improvements

#### Chapter 4: Creating Layouts and Pages

- ✅ Dashboard layout implementation with sidebar navigation
- ✅ Nested layouts using Next.js App Router
- ✅ Navigation component with responsive design
- ✅ Dashboard, Invoices, and Customers pages structure
- ✅ Heroicons integration for UI icons

#### Chapter 5: Navigating Between Pages

- ✅ Active navigation states with conditional styling
- ✅ Client-side routing with Next.js Link component
- ✅ usePathname hook implementation for route detection
- ✅ Dynamic styling with clsx for active/inactive states
- ✅ Enhanced user experience with visual feedback

#### Chapter 6: Setting Up Your Database

- ✅ PostgreSQL database configuration with Vercel
- ✅ Database schema creation (users, customers, invoices, revenue)
- ✅ UUID extension setup for primary keys
- ✅ Database seeding with placeholder data
- ✅ Environment variables configuration
- ✅ Data seeding API route (`/seed`) for initial data population

#### Chapter 7: Fetching Data

- ✅ Server-side data fetching with PostgreSQL
- ✅ Data fetching functions for revenue, invoices, and customers
- ✅ Dashboard cards with real-time data display
- ✅ Revenue chart component with dynamic data visualization
- ✅ Latest invoices component with customer information
- ✅ Parallel data fetching for improved performance
- ✅ Error handling and data validation

### 🔄 Upcoming Chapters:

- Chapter 8: Static and Dynamic Rendering
- Chapter 9: Streaming
- Chapter 10: Partial Prerendering
- Chapter 11: Adding Search and Pagination
- Chapter 12: Mutating Data
- Chapter 13: Handling Errors
- Chapter 14: Improving Accessibility
- Chapter 15: Adding Authentication
- Chapter 16: Adding Metadata

## 🚀 Current Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Typography**: Custom fonts (Inter for body, Lusitana for headings)
- **Optimized Images**: Next.js Image component for hero images
- **Component Structure**: Modular React components (AcmeLogo)
- **CSS Modules**: Scoped styling with CSS modules
- **Modern Styling**: Tailwind CSS utilities and custom styles
- **Dashboard Layout**: Sidebar navigation with responsive layout
- **Active Navigation**: Dynamic navigation states with visual feedback
- **Client-side Routing**: Fast navigation between pages using Next.js Link
- **UI Icons**: Heroicons integration for consistent iconography
- **Database Integration**: PostgreSQL with Vercel hosting
- **Data Visualization**: Revenue chart with dynamic data
- **Real-time Dashboard**: Live data fetching and display
- **Customer Management**: Latest invoices with customer profiles
- **Performance Optimized**: Parallel data fetching and efficient queries

## 📁 Project Structure

```
nextjs-dashboard-course/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx        # Dashboard layout wrapper
│   │   ├── page.tsx          # Dashboard home page with data
│   │   ├── invoices/
│   │   │   └── page.tsx      # Invoices page
│   │   └── customers/
│   │       └── page.tsx      # Customers page
│   ├── lib/
│   │   ├── data.ts           # Database queries and data fetching
│   │   ├── definitions.ts    # TypeScript type definitions
│   │   ├── utils.ts          # Utility functions
│   │   └── placeholder-data.ts # Sample data for seeding
│   ├── seed/
│   │   └── route.ts          # Database seeding API endpoint
│   ├── query/
│   │   └── route.ts          # Query testing API endpoint
│   ├── ui/
│   │   ├── dashboard/
│   │   │   ├── sidenav.tsx   # Sidebar navigation component
│   │   │   ├── nav-links.tsx # Navigation links component
│   │   │   ├── cards.tsx     # Dashboard cards with metrics
│   │   │   ├── revenue-chart.tsx # Revenue visualization chart
│   │   │   └── latest-invoices.tsx # Recent invoices component
│   │   ├── fonts.ts          # Google Fonts configuration
│   │   ├── global.css        # Global styles with Tailwind
│   │   ├── home.module.css   # CSS Modules for home page
│   │   └── acme-logo.tsx     # Logo component
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/
│   ├── hero-desktop.png      # Desktop hero image
│   └── hero-mobile.png       # Mobile hero image
├── .env.example              # Environment variables template
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter, Lusitana)
- **Language**: TypeScript
- **Database**: PostgreSQL (Vercel-hosted)
- **Database Client**: postgres (node-postgres)
- **Authentication**: NextAuth.js (configured)
- **Icons**: Heroicons
- **Security**: bcrypt for password hashing

## 🗄️ Database Schema

### Tables:

- **users**: User authentication with UUID, name, email, hashed password
- **customers**: Customer profiles with contact information and avatars
- **invoices**: Invoice records with amounts, status, and dates
- **revenue**: Monthly revenue data for chart visualization

### Key Features:

- UUID primary keys for all tables
- Foreign key relationships between invoices and customers
- Data validation and error handling
- Optimized queries for dashboard performance

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

Fill in your database connection details:

- `POSTGRES_URL`: Your PostgreSQL connection string
- `AUTH_SECRET`: Random secret for authentication
- Other database-specific variables

3. Seed the database (first time only):

```bash
# Visit http://localhost:3000/seed to populate initial data
```

4. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Dashboard Features

### Cards Section

- **Total Collected**: Sum of all paid invoices
- **Total Pending**: Sum of all pending invoices
- **Total Invoices**: Count of all invoices
- **Total Customers**: Count of all customers

### Revenue Chart

- Monthly revenue visualization for the last 12 months
- Dynamic bar chart with responsive design
- Real-time data from database

### Latest Invoices

- 5 most recent invoices with customer information
- Customer profile pictures and contact details
- Formatted currency display

## 📝 Development Notes

- Using `--turbopack` flag for faster development builds
- TypeScript strict mode enabled
- Tailwind forms plugin included for better form styling
- CSS optimizations for number inputs (removing spinners)
- Active navigation implemented with usePathname and clsx
- Server-side data fetching with proper error handling
- Parallel data fetching for improved performance
- Environment variables for secure database configuration

## 🔧 API Endpoints

- `/seed`: Database seeding endpoint for initial data population
- `/query`: Testing endpoint for database queries

---

**Next Steps**: Continue with Chapter 8 to implement static and dynamic rendering optimizations.

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
