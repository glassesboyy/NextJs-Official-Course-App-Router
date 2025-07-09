# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 📚 Course Progress

**Current Progress: Chapter 11 of 16 completed**

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

#### Chapter 8: Static and Dynamic Rendering

- ✅ Understanding static vs dynamic rendering concepts
- ✅ Server Components implementation for data fetching
- ✅ Optimized rendering strategies for dashboard components
- ✅ Performance benefits of static rendering where applicable
- ✅ Dynamic rendering for real-time data components

#### Chapter 9: Streaming

- ✅ React Suspense implementation for component streaming
- ✅ Loading skeleton components for improved UX
- ✅ Granular loading states for individual dashboard sections
- ✅ Parallel component loading with independent suspense boundaries
- ✅ Route-level loading page implementation
- ✅ Progressive page rendering for better perceived performance

#### Chapter 10: Partial Prerendering (PPR)

- ✅ Partial Prerendering configuration with `ppr: "incremental"`
- ✅ Experimental PPR enabled in dashboard layout
- ✅ Hybrid rendering approach combining static and dynamic content
- ✅ Optimized performance with selective prerendering
- ✅ Static shell with dynamic content streaming
- ✅ Enhanced user experience with instant page loads

#### Chapter 11: Adding Search and Pagination

- ✅ Search functionality with debounced input (300ms delay)
- ✅ URL-based search parameters with `useSearchParams`
- ✅ Real-time search filtering for invoices by name, email, amount, date, and status
- ✅ Pagination component with navigation controls
- ✅ Dynamic page generation with URL parameters
- ✅ Search state persistence across page navigation
- ✅ Pagination info display with current page and total pages
- ✅ Items per page configuration (6 items per page)
- ✅ ILIKE database queries for case-insensitive search
- ✅ Responsive pagination controls with arrow navigation

### 🔄 Upcoming Chapters:

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
- **Streaming UI**: React Suspense for progressive loading
- **Loading States**: Comprehensive skeleton components for better UX
- **Component-level Loading**: Independent loading states for dashboard sections
- **Partial Prerendering**: Hybrid static/dynamic rendering for optimal performance
- **Search & Filter**: Real-time search with debounced input across multiple fields
- **Pagination**: URL-based pagination with navigation controls
- **State Management**: URL-based state for search and pagination persistence

## 📁 Project Structure

```
nextjs-dashboard-course/
├── app/
│   ├── dashboard/
│   │   ├── (overview)/
│   │   │   ├── page.tsx      # Dashboard home with streaming
│   │   │   └── loading.tsx   # Route-level loading page
│   │   ├── layout.tsx        # Dashboard layout wrapper with PPR
│   │   ├── invoices/
│   │   │   └── page.tsx      # Invoices page with search & pagination
│   │   └── customers/
│   │       └── page.tsx      # Customers page
│   ├── lib/
│   │   ├── data.ts           # Database queries with search & pagination
│   │   ├── definitions.ts    # TypeScript type definitions
│   │   ├── utils.ts          # Utility functions including pagination
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
│   │   ├── invoices/
│   │   │   ├── pagination.tsx # Pagination component with navigation
│   │   │   ├── table.tsx     # Invoices table component
│   │   │   └── buttons.tsx   # Action buttons for invoices
│   │   ├── search.tsx        # Search component with debounced input
│   │   ├── skeletons.tsx     # Loading skeleton components
│   │   ├── fonts.ts          # Google Fonts configuration
│   │   ├── global.css        # Global styles with Tailwind
│   │   ├── home.module.css   # CSS Modules for home page
│   │   └── acme-logo.tsx     # Logo component
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/
│   ├── hero-desktop.png      # Desktop hero image
│   └── hero-mobile.png       # Mobile hero image
├── next.config.ts            # Next.js configuration with PPR
├── .env.example              # Environment variables template
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router with PPR)
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter, Lusitana)
- **Language**: TypeScript
- **Database**: PostgreSQL (Vercel-hosted)
- **Database Client**: postgres (node-postgres)
- **Authentication**: NextAuth.js (configured)
- **Icons**: Heroicons
- **Security**: bcrypt for password hashing
- **UI/UX**: React Suspense for streaming
- **Loading States**: Custom skeleton components
- **Search**: use-debounce for optimized search input
- **Routing**: Next.js navigation hooks for URL state management

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
- **Search Support**: ILIKE queries for case-insensitive search across multiple fields
- **Pagination Support**: LIMIT and OFFSET for efficient data retrieval

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

### Invoices Management

- **Search Functionality**: Real-time search across customer names, emails, amounts, dates, and status
- **Pagination**: Navigate through large datasets with configurable page sizes
- **Filtering**: Advanced filtering capabilities with URL persistence
- **Responsive Table**: Mobile-friendly invoice display with status indicators

## 🔍 Search & Pagination Features

### Search Component

- **Debounced Input**: 300ms delay to prevent excessive API calls
- **Multi-field Search**: Search across customer name, email, invoice amount, date, and status
- **URL Integration**: Search terms persist in URL for bookmarking and sharing
- **Real-time Results**: Instant feedback as user types
- **Case-insensitive**: Uses ILIKE for flexible search matching

### Pagination Component

- **URL-based Navigation**: Page state maintained in URL parameters
- **Navigation Controls**: Previous/Next buttons with disabled states
- **Page Numbers**: Clickable page numbers with current page highlighting
- **Responsive Design**: Adapts to different screen sizes
- **Items per Page**: Configurable page size (currently 6 items per page)
- **Total Pages Calculation**: Dynamic calculation based on filtered results

## 🔄 Streaming & Loading States

### Route-level Loading

- **Dashboard Loading**: Full page skeleton (`loading.tsx`) for initial page load
- **Fallback UI**: Comprehensive skeleton matching the dashboard layout

### Component-level Streaming

- **Cards Section**: `CardsSkeleton` with shimmer animation for metrics loading
- **Revenue Chart**: `RevenueChartSkeleton` with placeholder chart structure
- **Latest Invoices**: `LatestInvoicesSkeleton` with invoice list placeholders
- **Invoices Table**: `InvoicesTableSkeleton` for search results loading

### Loading Features

- **Shimmer Animation**: CSS-based loading animation for skeleton components
- **Independent Loading**: Each dashboard section loads independently
- **Progressive Enhancement**: Content appears as data becomes available
- **Responsive Skeletons**: Loading states adapt to different screen sizes

## 🚀 Performance Optimizations

### Partial Prerendering (PPR)

- **Incremental PPR**: Enabled with `ppr: "incremental"` configuration
- **Static Shell**: Fast initial page load with static content
- **Dynamic Streaming**: Database-driven content streams in progressively
- **Hybrid Rendering**: Combines benefits of static and dynamic rendering
- **Optimal Performance**: Reduced Time to First Byte (TTFB) and improved user experience

### Search & Pagination Optimizations

- **Debounced Search**: Prevents excessive database queries during typing
- **URL State Management**: Eliminates need for client-side state management
- **Efficient Queries**: LIMIT and OFFSET for optimal database performance
- **Parallel Loading**: Search results and pagination data load independently
- **Cached Results**: URL-based caching for better performance

## 📝 Development Notes

- Using `--turbopack` flag for faster development builds
- TypeScript strict mode enabled
- Tailwind forms plugin included for better form styling
- CSS optimizations for number inputs (removing spinners)
- Active navigation implemented with usePathname and clsx
- Server-side data fetching with proper error handling
- Parallel data fetching for improved performance
- Environment variables for secure database configuration
- React Suspense boundaries for optimal streaming
- Skeleton components with shimmer effects for polished loading states
- **PPR Configuration**: Experimental partial prerendering for hybrid rendering
- **Search Implementation**: Debounced search with URL state management
- **Pagination Logic**: URL-based pagination with dynamic page generation

## 🔧 API Endpoints

- `/seed`: Database seeding endpoint for initial data population
- `/query`: Testing endpoint for database queries

## 🎯 Performance Metrics

- **Streaming**: Progressive page rendering with React Suspense
- **Parallel Loading**: Independent component loading for faster perceived performance
- **Skeleton UI**: Immediate feedback while data loads
- **Partial Prerendering**: Hybrid static/dynamic rendering for optimal performance
- **Debounced Search**: Optimized search with 300ms delay
- **Efficient Pagination**: Database-level pagination with LIMIT/OFFSET
- **URL State Management**: Persistent state without client-side storage

## 🎨 UI/UX Improvements

- **Search Experience**: Real-time search with visual feedback
- **Pagination Controls**: Intuitive navigation with disabled states
- **Responsive Design**: Mobile-first approach for all components
- **Loading States**: Comprehensive skeleton components for smooth transitions
- **Visual Feedback**: Clear indication of active pages and search states
- **Accessibility**: Proper ARIA labels and keyboard navigation support

---

**Next Steps**: Continue with Chapter 12 to implement data mutations (Create, Update, Delete operations) for invoices.

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
