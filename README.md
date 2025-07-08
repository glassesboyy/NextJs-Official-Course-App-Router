# Next.js App Router Course - Dashboard Application

This is a dashboard application built following the [Next.js App Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 📚 Course Progress

**Current Progress: Chapter 5 of 16 completed**

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

### 🔄 Upcoming Chapters:

- Chapter 6: Setting Up Your Database
- Chapter 7: Fetching Data
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

## 📁 Project Structure

```
nextjs-dashboard-course/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx        # Dashboard layout wrapper
│   │   ├── page.tsx          # Dashboard home page
│   │   ├── invoices/
│   │   │   └── page.tsx      # Invoices page
│   │   └── customers/
│   │       └── page.tsx      # Customers page
│   ├── ui/
│   │   ├── dashboard/
│   │   │   ├── sidenav.tsx   # Sidebar navigation component
│   │   │   └── nav-links.tsx # Navigation links component
│   │   ├── fonts.ts          # Google Fonts configuration
│   │   ├── global.css        # Global styles with Tailwind
│   │   ├── home.module.css   # CSS Modules for home page
│   │   └── acme-logo.tsx     # Logo component
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/
│   ├── hero-desktop.png      # Desktop hero image
│   └── hero-mobile.png       # Mobile hero image
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter, Lusitana)
- **Language**: TypeScript
- **Authentication**: NextAuth.js (configured)
- **Database**: PostgreSQL (configured)
- **Icons**: Heroicons

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Development Notes

- Using `--turbopack` flag for faster development builds
- TypeScript strict mode enabled
- Tailwind forms plugin included for better form styling
- CSS optimizations for number inputs (removing spinners)
- Active navigation implemented with usePathname and clsx

---

**Next Steps**: Continue with Chapter 6 to set up the database and start working with data.

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
