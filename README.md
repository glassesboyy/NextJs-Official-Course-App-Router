# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 📚 Course Progress

**Current Progress: Chapter 16 of 16 completed** ✅

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

#### Chapter 13: Handling Errors

- ✅ Error boundaries implementation with React Error Boundary
- ✅ Custom error page (`error.tsx`) for invoice routes
- ✅ User-friendly error display with retry functionality
- ✅ Error logging with `useEffect` for debugging
- ✅ Graceful error handling for database operations
- ✅ Error recovery mechanisms with reset functionality
- ✅ Client-side error catching and reporting
- ✅ Error state management with proper user feedback
- ✅ `notFound()` implementation for missing resources
- ✅ Custom 404 page (`not-found.tsx`) for invoice edit routes
- ✅ Error UI consistency with application design
- ✅ Error prevention through validation and proper error boundaries

#### Chapter 14: Improving Accessibility

- ✅ ARIA attributes implementation for form accessibility
- ✅ `aria-describedby` attributes linking form fields to error messages
- ✅ Proper form labeling with semantic HTML
- ✅ Screen reader support for form validation errors
- ✅ Keyboard navigation improvements
- ✅ Focus management for form interactions
- ✅ `aria-live` regions for dynamic content updates
- ✅ `aria-atomic` attributes for complete message reading
- ✅ Accessible error messaging with proper associations
- ✅ Semantic HTML structure for better accessibility
- ✅ Form validation error announcements
- ✅ Enhanced user experience for assistive technologies

#### Chapter 15: Adding Authentication

- ✅ NextAuth.js v5 (beta) integration with Credentials provider
- ✅ Authentication configuration with `auth.config.ts`
- ✅ Middleware implementation for route protection
- ✅ User login functionality with email/password authentication
- ✅ User registration system with account creation
- ✅ Password hashing with bcrypt (12 rounds) for enhanced security
- ✅ Zod schema validation for authentication forms
- ✅ Email uniqueness validation during registration
- ✅ Password confirmation validation with custom refine logic
- ✅ User session management with NextAuth.js
- ✅ Protected dashboard routes with automatic redirects
- ✅ Sign-out functionality with secure session termination
- ✅ Authentication error handling with user-friendly messages
- ✅ Success notifications for registration completion
- ✅ Callback URL handling for post-authentication redirects
- ✅ Auth route grouping with `(auth)` folder structure
- ✅ Form loading states during authentication processes
- ✅ Cross-page navigation between login and register forms
- ✅ ARIA accessibility for authentication forms
- ✅ Database integration for user management operations

#### Chapter 16: Adding Metadata

- ✅ Page metadata configuration with Next.js Metadata API
- ✅ Static metadata for dashboard pages (title, description)
- ✅ Dynamic metadata for invoice edit pages
- ✅ Template metadata for consistent page titles
- ✅ Open Graph metadata for social media sharing
- ✅ Twitter Card metadata for enhanced social previews
- ✅ Favicon and icon configuration
- ✅ SEO optimization with structured metadata
- ✅ Metadata inheritance and overriding
- ✅ Dynamic title generation based on page content
- ✅ Comprehensive metadata implementation across all pages
- ✅ Social media optimization with proper meta tags

### 🎉 Course Completed!

All 16 chapters of the Next.js App Router Course have been successfully completed. The dashboard application now includes all modern web development features including authentication, database integration, and comprehensive metadata for SEO optimization.

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
- **Error Handling**: Comprehensive error boundaries and user-friendly error pages
- **Accessibility**: WCAG-compliant forms with ARIA attributes and screen reader support
- **User Authentication**: Complete login and registration system with NextAuth.js
- **Password Security**: bcrypt hashing for secure password storage
- **User Registration**: New user account creation with validation
- **Session Management**: Secure session handling with NextAuth.js
- **Route Protection**: Middleware-based authentication for dashboard access
- **Form Validation**: Comprehensive validation for authentication forms
- **Error Handling**: User-friendly error messages and success notifications
- **SEO Optimization**: Comprehensive metadata implementation with Next.js Metadata API
- **Social Media Integration**: Open Graph and Twitter Card metadata
- **Dynamic Metadata**: Page-specific metadata generation
- **Structured Data**: SEO-friendly metadata structure
- **Favicon Support**: Custom favicon and icon configuration

## 📁 Project Structure

```
nextjs-dashboard-course/
├── app/
│   ├── (auth)/                # Authentication route group
│   │   ├── login/
│   │   │   └── page.tsx      # Login page with form
│   │   └── register/
│   │       └── page.tsx      # Registration page with form
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
│   │   ├── actions.ts        # Server actions with auth functions
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
│   │   │   ├── sidenav.tsx   # Sidebar with sign-out functionality
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
│   │   ├── login-form.tsx    # Login form with validation
│   │   ├── register-form.tsx # Registration form with validation
│   │   ├── search.tsx        # Search component with debounced input
│   │   ├── skeletons.tsx     # Loading skeleton components
│   │   ├── button.tsx        # Reusable button component
│   │   ├── fonts.ts          # Google Fonts configuration
│   │   ├── global.css        # Global styles with Tailwind
│   │   ├── home.module.css   # CSS Modules for home page
│   │   └── acme-logo.tsx     # Logo component
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── auth.ts                   # NextAuth configuration
├── auth.config.ts            # Auth configuration and callbacks
├── middleware.ts             # Route protection middleware
├── next.config.ts            # Next.js configuration with PPR
├── .env.example              # Environment variables template
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router with PPR)
- **Authentication**: NextAuth.js v5 (beta) with Credentials provider
- **Password Hashing**: bcrypt for secure password storage
- **Validation**: Zod for schema validation and form validation
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter, Lusitana)
- **Language**: TypeScript
- **Database**: PostgreSQL (Vercel-hosted)
- **Database Client**: postgres (node-postgres)
- **Icons**: Heroicons
- **UI/UX**: React Suspense for streaming
- **Loading States**: Custom skeleton components
- **Search**: use-debounce for optimized search input
- **Routing**: Next.js navigation hooks for URL state management
- **Data Mutations**: Server Actions with form handling

## 🗄️ Database Schema

### Tables:

- **users**: User authentication with UUID, name, email, hashed password (bcrypt)
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
- **User Authentication**: Secure user storage with hashed passwords
- **Email Uniqueness**: Database constraints for unique email addresses
- **Account Management**: Complete user registration and login functionality

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

Fill in your database connection details and authentication secrets:

- `POSTGRES_URL`: Your PostgreSQL connection string
- `AUTH_SECRET`: Random secret for NextAuth.js session encryption
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

6. **Authentication**:
   - Register a new account at `/register`
   - Login with your credentials at `/login`
   - Access the protected dashboard at `/dashboard`

## 🔐 Authentication System

### NextAuth.js Configuration

- **Version**: NextAuth.js v5 (beta.29) with modern App Router support
- **Provider**: Credentials provider for email/password authentication
- **Session Strategy**: JWT-based sessions with secure encryption
- **Database Integration**: PostgreSQL for user storage and management

### Authentication Flow

1. **Registration Process**:

   - User fills out registration form with name, email, password, and confirmation
   - Client-side validation with Zod schema
   - Server-side email uniqueness check
   - Password hashing with bcrypt (12 rounds)
   - User account creation in database
   - Redirect to login with success message

2. **Login Process**:

   - User enters email and password credentials
   - Server-side validation and user lookup
   - Password verification with bcrypt comparison
   - Session creation with NextAuth.js
   - Redirect to dashboard or callback URL

3. **Route Protection**:
   - Middleware checks authentication status
   - Automatic redirects for unauthenticated users
   - Dashboard access requires valid session
   - Protected routes return users to login page

### Security Features

- **Password Hashing**: bcrypt with 12 salt rounds for enhanced security
- **Session Management**: Secure JWT tokens with configurable expiration
- **CSRF Protection**: Built-in CSRF protection with NextAuth.js
- **Input Validation**: Comprehensive validation with Zod schemas
- **SQL Injection Prevention**: Parameterized queries with postgres library
- **Email Validation**: Email format validation and uniqueness constraints

## 🎨 Authentication UI Components

### Login Form (`login-form.tsx`)

- **Features**: Email/password inputs with validation
- **State Management**: useActionState for form handling
- **Loading States**: Visual feedback during authentication
- **Error Handling**: User-friendly error messages
- **Success Messages**: Registration success notifications
- **Navigation**: Links to registration page
- **Accessibility**: ARIA labels and proper form structure

### Registration Form (`register-form.tsx`)

- **Features**: Name, email, password, and confirmation fields
- **Validation**: Real-time validation with error display
- **Password Confirmation**: Custom validation for matching passwords
- **Form State**: Loading states and error handling
- **User Feedback**: Clear error messages and success notifications
- **Navigation**: Links to login page
- **Accessibility**: Screen reader support with ARIA attributes

### Navigation Integration

- **Sidebar**: Sign-out button with secure session termination
- **Protected Routes**: Automatic redirects for unauthorized access
- **User Experience**: Seamless navigation between auth pages
- **State Persistence**: Maintains intended destination after login

## 🔧 Server Actions for Authentication

### Authentication Actions (`actions.ts`)

- **authenticate**: Handles login with NextAuth.js signIn
- **registerUser**: Handles user registration with validation
- **Error Handling**: Comprehensive error catching and user feedback
- **Database Operations**: User creation and email uniqueness checks
- **Password Security**: bcrypt hashing before database storage

### Validation Schemas

- **LoginSchema**: Email and password validation
- **RegisterSchema**: Name, email, password, and confirmation validation
- **Password Rules**: Minimum 6 characters with confirmation matching
- **Email Validation**: Format validation and uniqueness constraints

## 🛡️ Middleware Protection

### Route Protection (`middleware.ts`)

- **Pattern Matching**: Protects all routes except public assets
- **Authentication Check**: Verifies user session status
- **Automatic Redirects**: Sends unauthenticated users to login
- **Dashboard Access**: Requires valid authentication session
- **Public Routes**: Allows access to login and registration pages

### Authorization Logic

- **Dashboard Protection**: All `/dashboard/*` routes require authentication
- **Auth Page Handling**: Redirects authenticated users away from login/register
- **Callback URLs**: Maintains intended destination after authentication
- **Error Handling**: Graceful handling of authentication failures

## 🎯 Authentication Performance

- **Password Hashing**: Optimized bcrypt with 12 rounds for security/performance balance
- **Session Management**: Efficient JWT-based sessions with NextAuth.js
- **Database Queries**: Optimized user lookup and creation operations
- **Form Validation**: Client-side validation for immediate feedback
- **Error Handling**: Comprehensive error recovery with user-friendly messages
- **Loading States**: Visual feedback during authentication processes

## 📝 Authentication Development Notes

- NextAuth.js v5 beta configuration with Credentials provider
- bcrypt password hashing with 12 salt rounds for enhanced security
- Zod schema validation for type-safe form processing
- FormData API for efficient form handling in Server Actions
- Email uniqueness validation with database constraints
- Password confirmation validation with custom Zod refine logic
- Middleware-based route protection with automatic redirects
- User-friendly error messages and success notifications
- ARIA accessibility best practices in authentication forms
- Cross-page navigation between login and registration
- Database integration for complete user management
- Session management with secure JWT tokens
- Callback URL handling for post-authentication redirects

---

**Next Steps**: Continue with Chapter 16 to add comprehensive metadata and SEO optimization to complete the dashboard application.

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
