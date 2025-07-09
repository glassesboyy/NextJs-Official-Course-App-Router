# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 📚 Course Progress

**Current Progress: Chapter 12 of 16 completed**

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

#### Chapter 12: Mutating Data

- ✅ Server Actions implementation for secure data mutations
- ✅ Create Invoice functionality with form validation
- ✅ Update Invoice functionality with pre-populated forms
- ✅ Delete Invoice functionality with confirmation
- ✅ Zod schema validation for form data
- ✅ Database mutations (INSERT, UPDATE, DELETE) with PostgreSQL
- ✅ Form handling with FormData API
- ✅ Automatic cache revalidation with `revalidatePath`
- ✅ Programmatic navigation with `redirect`
- ✅ Error handling for database operations
- ✅ Action buttons for invoice management (Create, Edit, Delete)
- ✅ Currency conversion (dollars to cents for database storage)
- ✅ Data binding for edit forms with existing invoice data
- ✅ Optimistic UI updates with server-side validation

### 🔄 Upcoming Chapters:

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
- **Invoice Management**: Full CRUD operations for invoices
- **Data Validation**: Zod schema validation for form inputs
- **Server Actions**: Secure server-side data mutations
- **Form Handling**: Advanced form processing with FormData API
- **Cache Management**: Automatic cache revalidation after mutations

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
│   │   │   ├── page.tsx      # Invoices page with search & pagination
│   │   │   ├── create/
│   │   │   │   └── page.tsx  # Create invoice page
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx # Edit invoice page
│   │   └── customers/
│   │       └── page.tsx      # Customers page
│   ├── lib/
│   │   ├── actions.ts        # Server actions for data mutations
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
│   │   │   ├── create-form.tsx # Create invoice form component
│   │   │   ├── edit-form.tsx   # Edit invoice form component
│   │   │   ├── buttons.tsx     # Action buttons (Create, Edit, Delete)
│   │   │   ├── breadcrumbs.tsx # Navigation breadcrumbs
│   │   │   ├── pagination.tsx  # Pagination component with navigation
│   │   │   └── table.tsx       # Invoices table component
│   │   ├── search.tsx        # Search component with debounced input
│   │   ├── skeletons.tsx     # Loading skeleton components
│   │   ├── button.tsx        # Reusable button component
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
- **Validation**: Zod for schema validation
- **UI/UX**: React Suspense for streaming
- **Loading States**: Custom skeleton components
- **Search**: use-debounce for optimized search input
- **Routing**: Next.js navigation hooks for URL state management
- **Data Mutations**: Server Actions with form handling

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
- **CRUD Operations**: Full Create, Read, Update, Delete support for invoices
- **Data Integrity**: Proper foreign key constraints and validation

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
- **CRUD Operations**: Create, Edit, and Delete invoices with full validation
- **Action Buttons**: Intuitive interface for invoice management

## 🔧 Invoice CRUD Operations

### Create Invoice

- **Form Validation**: Zod schema validation for all form inputs
- **Customer Selection**: Dropdown with all available customers
- **Amount Input**: Numeric input with proper formatting
- **Status Selection**: Radio buttons for pending/paid status
- **Server Action**: Secure server-side form processing
- **Data Conversion**: Automatic conversion from dollars to cents
- **Cache Revalidation**: Automatic UI updates after creation
- **Navigation**: Redirect to invoices list after successful creation

### Edit Invoice

- **Pre-populated Form**: Forms automatically filled with existing invoice data
- **Dynamic Routing**: URL-based invoice selection with `[id]` parameter
- **Data Binding**: Proper form field binding with `defaultValue`
- **Validation**: Same validation rules as create form
- **Update Logic**: Efficient database updates with prepared statements
- **Error Handling**: Comprehensive error handling for edge cases

### Delete Invoice

- **Confirmation UI**: Clear delete button with proper styling
- **Server Action**: Secure deletion with proper authorization
- **Cascade Handling**: Proper handling of related data
- **Optimistic Updates**: Immediate UI feedback with server validation
- **Error Recovery**: Graceful handling of deletion errors

## 🛡️ Data Validation & Security

### Zod Schema Validation

- **Type Safety**: TypeScript integration with runtime validation
- **Field Validation**: Customer ID, amount, and status validation
- **Data Coercion**: Automatic string to number conversion for amounts
- **Error Messages**: Clear validation error messages
- **Server-side Validation**: All validation performed on server

### Security Features

- **Server Actions**: All mutations performed server-side
- **Input Sanitization**: Proper sanitization of all form inputs
- **SQL Injection Prevention**: Parameterized queries with postgres library
- **CSRF Protection**: Built-in CSRF protection with Next.js
- **Data Validation**: Comprehensive validation before database operations

## 🔄 Server Actions Implementation

### Action Functions

- **createInvoice**: Handle new invoice creation with validation
- **updateInvoice**: Handle invoice updates with ID binding
- **deleteInvoice**: Handle invoice deletion with confirmation
- **Form Binding**: Automatic form data extraction and processing
- **Error Handling**: Comprehensive error handling with user feedback

### Performance Optimizations

- **Prepared Statements**: Efficient database queries with parameter binding
- **Cache Revalidation**: Selective cache invalidation with `revalidatePath`
- **Optimistic Updates**: Immediate UI updates with server validation
- **Batch Operations**: Efficient handling of multiple operations

## 🎨 UI/UX Enhancements

### Form Components

- **Responsive Design**: Mobile-first form layouts
- **Accessibility**: Proper labels and ARIA attributes
- **Visual Feedback**: Loading states and success/error messages
- **Intuitive Navigation**: Clear breadcrumbs and navigation paths
- **Consistent Styling**: Uniform styling across all forms

### Action Buttons

- **Icon Integration**: Heroicons for consistent button styling
- **Hover States**: Interactive feedback on button interactions
- **Disabled States**: Proper handling of disabled button states
- **Loading States**: Visual feedback during form submission

## 🚀 Performance Optimizations

### Data Mutations

- **Server Actions**: Efficient server-side processing
- **Cache Management**: Intelligent cache invalidation
- **Optimistic Updates**: Immediate UI feedback
- **Error Recovery**: Graceful handling of failed operations

### Form Performance

- **Debounced Validation**: Efficient form validation
- **Lazy Loading**: Progressive form component loading
- **Memory Management**: Proper cleanup of form state
- **Network Efficiency**: Minimal data transfer for mutations

## 📝 Development Notes

- Server Actions with `"use server"` directive for secure mutations
- Zod schema validation for type-safe form processing
- FormData API for efficient form handling
- Automatic cache revalidation with `revalidatePath`
- Programmatic navigation with `redirect`
- Currency conversion handling (dollars to cents)
- Proper error handling and user feedback
- TypeScript integration with comprehensive type definitions
- Responsive form layouts with Tailwind CSS
- Accessibility best practices in form design

## 🎯 Performance Metrics

- **Server Actions**: Secure and efficient data mutations
- **Form Validation**: Real-time validation with Zod schemas
- **Cache Efficiency**: Automatic cache revalidation after mutations
- **Database Performance**: Optimized queries with proper indexing
- **UI Responsiveness**: Immediate feedback with optimistic updates
- **Error Handling**: Comprehensive error recovery mechanisms

---

**Next Steps**: Continue with Chapter 13 to implement comprehensive error handling and user feedback systems.

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
