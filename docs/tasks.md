# SL Mortgages Website - Detailed Task Tracker

**For**: Entry-Level Junior Developer  
**Goal**: Build and deploy a professional mortgage advisor website from scratch  
**Timeline**: 4-6 weeks (depending on pace)  
**Status Legend**: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ❌ Blocked

---

## 📋 Table of Contents

1. [Prerequisites & Setup](#prerequisites--setup)
2. [Week 1: Project Foundation](#week-1-project-foundation)
3. [Week 2: Core Pages & Components](#week-2-core-pages--components)
4. [Week 3: Forms & Integrations](#week-3-forms--integrations)
5. [Week 4: Polish & Testing](#week-4-polish--testing)
6. [Week 5: Deployment](#week-5-deployment)
7. [Post-Launch](#post-launch)

---

## Prerequisites & Setup

### Before You Start

**Required Knowledge:**

- Basic HTML, CSS, JavaScript
- Basic understanding of React (components, props, state)
- Familiarity with command line/terminal
- Basic Git knowledge

**Required Software:**

- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- Git - [Download here](https://git-scm.com/)
- Code Editor (VS Code recommended) - [Download here](https://code.visualstudio.com/)
- Browser (Chrome, Firefox, or Edge)

**Useful VS Code Extensions:**

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React snippets

---

## Week 1: Project Foundation

### Day 1: Initial Project Setup

#### Task 1.1: Create Vite + React Project

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: Critical

**Steps:**

1. **Open your terminal/command prompt**

   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Mac/Linux: Open Terminal app

2. **Navigate to your projects folder**

   ```bash
   cd C:\dev\slmortgages
   # or wherever you want to create the project
   ```

3. **Create the Vite project with React and TypeScript**

   ```bash
   npm create vite@latest . -- --template react-ts
   ```

   - When prompted, select "React" and "TypeScript"
   - This creates all the project files in the current directory

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Test that it works**

   ```bash
   npm run dev
   ```

   - You should see a local URL (usually `http://localhost:5173`)
   - Open it in your browser
   - You should see the Vite + React welcome page

6. **Stop the dev server**
   - Press `Ctrl + C` in the terminal

**✅ Acceptance Criteria:**

- [ ] Project folder created with all Vite files
- [ ] `npm run dev` starts server successfully
- [ ] Welcome page displays in browser
- [ ] No errors in terminal

**💡 Tips:**

- If you get errors, make sure Node.js is installed: `node --version`
- If npm is not found, make sure Node.js installation included npm: `npm --version`

---

#### Task 1.2: Install Additional Dependencies

**Status**: ⬜  
**Estimated Time**: 15 minutes  
**Priority**: Critical  
**Dependencies**: Task 1.1

**Steps:**

1. **Install React Router (for navigation)**

   ```bash
   npm install react-router-dom
   ```

2. **Install React Helmet (for SEO)**

   ```bash
   npm install react-helmet-async
   ```

3. **Install Tailwind CSS and dependencies**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Install TypeScript types for React Router**

   ```bash
   npm install -D @types/react-router-dom
   ```

5. **Verify installation**
   ```bash
   npm list react-router-dom react-helmet-async tailwindcss
   ```
   - Should show version numbers without errors

**✅ Acceptance Criteria:**

- [ ] All packages installed successfully
- [ ] No errors in terminal
- [ ] `tailwind.config.js` and `postcss.config.js` files created

**💡 Tips:**

- If `npx` command fails, try: `npm install -g npx` or use `npm exec` instead
- Save the terminal output - version numbers might be useful later

---

#### Task 1.3: Configure Tailwind CSS

**Status**: ⬜  
**Estimated Time**: 20 minutes  
**Priority**: Critical  
**Dependencies**: Task 1.2

**Steps:**

1. **Open `tailwind.config.js`**

   - It should be in the root of your project

2. **Update the content paths**

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: {
       extend: {
         colors: {
           primary: {
             blue: '#3b82f6',
             'blue-dark': '#1e40af',
           },
           text: {
             dark: '#1f2937',
             light: '#6b7280',
           },
           success: '#10b981',
           error: '#ef4444',
         },
       },
     },
     plugins: [],
   }
   ```

3. **Open `src/index.css`** (or create it if it doesn't exist)

4. **Add Tailwind directives at the top**

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Make sure `index.css` is imported in `src/main.tsx`**

   ```typescript
   import './index.css'
   ```

6. **Test Tailwind is working**
   - Open `src/App.tsx`
   - Add a test class: `<div className="bg-blue-500 text-white p-4">Test</div>`
   - Run `npm run dev`
   - You should see a blue box with white text

**✅ Acceptance Criteria:**

- [ ] Tailwind config file updated
- [ ] Tailwind directives in CSS file
- [ ] CSS imported in main.tsx
- [ ] Test styling works (blue box visible)

**💡 Tips:**

- Keep the dev server running while developing
- Use browser DevTools (F12) to inspect elements and test Tailwind classes

---

#### Task 1.4: Set Up Project Structure

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: High  
**Dependencies**: Task 1.1

**Steps:**

1. **Create folder structure** (create these folders manually or via terminal):

   ```bash
   # Windows PowerShell
   mkdir src\components\ui, src\components\layout, src\components\forms, src\components\features
   mkdir src\pages
   mkdir src\lib\utils, src\lib\hooks, src\lib\services
   mkdir src\types
   mkdir public\assets\images, public\assets\logos

   # Mac/Linux/bash
   mkdir -p src/components/{ui,layout,forms,features}
   mkdir -p src/pages
   mkdir -p src/lib/{utils,hooks,services}
   mkdir -p src/types
   mkdir -p public/assets/{images,logos}
   ```

2. **Create a basic README.md** (if not exists)

   ````markdown
   # SL Mortgages Website

   Professional mortgage advisor website built with React + Vite.

   ## Development

   ```bash
   npm install
   npm run dev
   ```
   ````

   ## Build

   ```bash
   npm run build
   ```

   ```

   ```

3. **Create `.gitignore`** (if not exists, Vite should create one)

   - Verify it includes: `node_modules/`, `dist/`, `.env.local`

4. **Create `.env.example`** file

   ```
   # Formspree/EmailJS Configuration
   VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

   # Google Calendar/Calendly
   VITE_CALENDAR_URL=your_calendar_url_here

   # Google Reviews
   VITE_GOOGLE_PLACE_ID=ChIJvdBfFy5HxkkR1fX4HTL3tyg
   ```

5. **Create `.env.local`** (copy from `.env.example`, but don't commit this!)
   - Fill in placeholder values for now

**✅ Acceptance Criteria:**

- [ ] All folders created
- [ ] README.md exists
- [ ] .gitignore configured
- [ ] .env.example created
- [ ] Project structure matches PRD requirements

**💡 Tips:**

- Use VS Code's file explorer to verify folder structure
- Folders can be empty for now - we'll add files as we build

---

#### Task 1.5: Set Up ESLint and Prettier

**Status**: ⬜  
**Estimated Time**: 25 minutes  
**Priority**: High  
**Dependencies**: Task 1.1

**Steps:**

1. **Install ESLint and Prettier**

   ```bash
   npm install -D eslint prettier eslint-config-prettier eslint-plugin-react
   ```

2. **Create `.eslintrc.cjs`** in project root

   ```javascript
   module.exports = {
     env: {
       browser: true,
       es2021: true,
     },
     extends: [
       'eslint:recommended',
       'plugin:react/recommended',
       'plugin:react/jsx-runtime',
       'prettier',
     ],
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
     },
     plugins: ['react'],
     rules: {
       'react/prop-types': 'off', // We're using TypeScript
     },
     settings: {
       react: {
         version: 'detect',
       },
     },
   }
   ```

3. **Create `.prettierrc`** in project root

   ```json
   {
     "semi": false,
     "singleQuote": true,
     "tabWidth": 2,
     "trailingComma": "es5",
     "printWidth": 100
   }
   ```

4. **Create `.prettierignore`**

   ```
   node_modules
   dist
   build
   .vite
   ```

5. **Add scripts to `package.json`**

   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "preview": "vite preview",
     "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
     "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
   }
   ```

6. **Test formatting**
   ```bash
   npm run format
   ```

**✅ Acceptance Criteria:**

- [ ] ESLint and Prettier installed
- [ ] Configuration files created
- [ ] Format script works without errors
- [ ] No linting errors in existing files

**💡 Tips:**

- VS Code can format on save - check settings for "Format on Save"
- Run `npm run lint` regularly to catch errors early

---

#### Task 1.6: Set Up React Router

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: Critical  
**Dependencies**: Task 1.2, Task 1.4

**Steps:**

1. **Update `src/main.tsx`** to wrap app with Router

   ```typescript
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import { BrowserRouter } from 'react-router-dom'
   import { HelmetProvider } from 'react-helmet-async'
   import App from './App.tsx'
   import './index.css'

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <HelmetProvider>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </HelmetProvider>
     </React.StrictMode>
   )
   ```

2. **Create `src/routes.tsx`**

   ```typescript
   import { Routes, Route } from 'react-router-dom'
   import Home from './pages/Home'
   import About from './pages/About'
   import Quotation from './pages/Quotation'
   import Appointment from './pages/Appointment'
   import Careers from './pages/Careers'
   import Referral from './pages/Referral'
   import Testimonials from './pages/Testimonials'
   import Partners from './pages/Partners'

   export default function AppRoutes() {
     return (
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/quotation' element={<Quotation />} />
         <Route path='/appointment' element={<Appointment />} />
         <Route path='/careers' element={<Careers />} />
         <Route path='/referral' element={<Referral />} />
         <Route path='/testimonials' element={<Testimonials />} />
         <Route path='/partners' element={<Partners />} />
       </Routes>
     )
   }
   ```

3. **Update `src/App.tsx`**

   ```typescript
   import AppRoutes from './routes'

   function App() {
     return <AppRoutes />
   }

   export default App
   ```

4. **Create placeholder page components** (create these files, we'll build them later):

   - `src/pages/Home.tsx`
   - `src/pages/About.tsx`
   - `src/pages/Quotation.tsx`
   - `src/pages/Appointment.tsx`
   - `src/pages/Careers.tsx`
   - `src/pages/Referral.tsx`
   - `src/pages/Testimonials.tsx`
   - `src/pages/Partners.tsx`

5. **Add basic placeholder content to each page** (example for `Home.tsx`):

   ```typescript
   function Home() {
     return <div className='p-8'>Home Page - Coming Soon</div>
   }

   export default Home
   ```

6. **Test routing**
   - Run `npm run dev`
   - Navigate to `http://localhost:5173/`
   - Try changing URL to `/about`, `/quotation`, etc.
   - Each page should display its placeholder content

**✅ Acceptance Criteria:**

- [ ] Router configured in main.tsx
- [ ] Routes file created with all 8 routes
- [ ] All page components created (even if just placeholders)
- [ ] Navigation between routes works
- [ ] No console errors

**💡 Tips:**

- Use React DevTools browser extension to inspect components
- Check browser console (F12) for any errors

---

### Day 2-3: Layout Components

#### Task 1.7: Create Header Component

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: Critical  
**Dependencies**: Task 1.6

**Steps:**

1. **Create `src/components/layout/Header.tsx`**

   ```typescript
   import { Link } from 'react-router-dom'

   export default function Header() {
     return (
       <header className='bg-white shadow-md'>
         <nav className='container mx-auto px-4 py-4'>
           <div className='flex justify-between items-center'>
             <Link to='/' className='text-2xl font-bold text-primary-blue'>
               SL Mortgages
             </Link>
             <nav className='hidden md:flex space-x-6'>
               <Link to='/' className='hover:text-primary-blue'>
                 Home
               </Link>
               <Link to='/about' className='hover:text-primary-blue'>
                 About
               </Link>
               <Link to='/quotation' className='hover:text-primary-blue'>
                 Get Quote
               </Link>
               <Link to='/appointment' className='hover:text-primary-blue'>
                 Book Appointment
               </Link>
               <Link to='/testimonials' className='hover:text-primary-blue'>
                 Testimonials
               </Link>
               <Link to='/careers' className='hover:text-primary-blue'>
                 Careers
               </Link>
             </nav>
           </div>
         </nav>
       </header>
     )
   }
   ```

2. **Add Header to a Layout component** (create `src/components/layout/Layout.tsx`):

   ```typescript
   import { Outlet } from 'react-router-dom'
   import Header from './Header'
   import Footer from './Footer'

   export default function Layout() {
     return (
       <div className='min-h-screen flex flex-col'>
         <Header />
         <main className='flex-grow'>
           <Outlet />
         </main>
         <Footer />
       </div>
     )
   }
   ```

3. **Update routes to use Layout** (`src/routes.tsx`):

   ```typescript
   import { Routes, Route } from 'react-router-dom'
   import Layout from './components/layout/Layout'
   // ... import pages

   export default function AppRoutes() {
     return (
       <Routes>
         <Route element={<Layout />}>
           <Route path='/' element={<Home />} />
           {/* ... other routes */}
         </Route>
       </Routes>
     )
   }
   ```

4. **Create mobile menu** (update Header.tsx with hamburger menu):
   - Add state for mobile menu open/close
   - Add hamburger button (visible on mobile)
   - Add mobile menu that slides in
   - Make sure it's keyboard accessible

**✅ Acceptance Criteria:**

- [ ] Header displays on all pages
- [ ] Navigation links work
- [ ] Responsive design (hamburger menu on mobile)
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Logo/name links to home

**💡 Tips:**

- Use Tailwind's `md:` breakpoint for responsive design
- Test on mobile viewport (Chrome DevTools → Toggle device toolbar)
- Use `aria-label` for accessibility

---

#### Task 1.8: Create Footer Component

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: Critical  
**Dependencies**: Task 1.7

**Steps:**

1. **Create `src/components/layout/Footer.tsx`**

   ```typescript
   export default function Footer() {
     return (
       <footer className='bg-gray-800 text-white py-8'>
         <div className='container mx-auto px-4'>
           {/* FCA Disclaimers */}
           <div className='mb-6 text-sm'>
             <p className='mb-2 font-bold'>IMPORTANT INFORMATION</p>
             <p className='mb-2'>
               THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR
               PROPERTY. YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP
               REPAYMENTS ON YOUR MORTGAGE.
             </p>
             <p className='mb-2'>
               SOME BUY TO LET & LET TO BUY MORTGAGES ARE NOT REGULATED BY THE
               FINANCIAL CONDUCT AUTHORITY.
             </p>
             <p className='mb-2'>
               COMMERCIAL FINANCE IS NOT PART OF THE OPENWORK PARTNERSHIP AND IS
               OFFERED ON OUR OWN RIGHT. OPENWORK LIMITED ACCEPT NO
               RESPONSIBILITY FOR THIS ASPECTS OF OUR BUSINESS. THESE PRODUCTS
               AND SERVICES ARE NOT REGULATED BY THE FINANCIAL CONDUCT
               AUTHORITY.
             </p>
             <p>
               Supreme Financial Solutions Limited is an appointed
               representative of The Openwork Partnership, a trading style of
               Openwork Limited which is authorised and regulated by the
               Financial Conduct Authority.
             </p>
           </div>

           {/* Legal Links */}
           <div className='border-t border-gray-700 pt-4'>
             <div className='flex flex-wrap gap-4 text-sm'>
               <a
                 href='https://business.yell.com/legal/terms-of-use/'
                 target='_blank'
                 rel='noopener noreferrer'
                 className='hover:underline'
               >
                 Terms of Use
               </a>
               <a
                 href='https://business.yell.com/websites-privacy-cookie-policy/'
                 target='_blank'
                 rel='noopener noreferrer'
                 className='hover:underline'
               >
                 Privacy & Cookies
               </a>
               <a
                 href='https://business.yell.com/legal/trading-terms/'
                 target='_blank'
                 rel='noopener noreferrer'
                 className='hover:underline'
               >
                 Trading Terms
               </a>
             </div>
           </div>

           {/* Copyright */}
           <div className='mt-4 text-sm text-gray-400'>
             <p>
               &copy; {new Date().getFullYear()} SL Mortgages. All rights
               reserved.
             </p>
           </div>
         </div>
       </footer>
     )
   }
   ```

2. **Test footer appears on all pages**
   - Check home page, about page, etc.
   - Verify links open in new tabs
   - Check responsive design

**✅ Acceptance Criteria:**

- [ ] Footer displays on all pages
- [ ] All FCA disclaimers present
- [ ] Legal links work and open in new tabs
- [ ] Responsive design (stacks on mobile)
- [ ] Copyright year updates automatically

**💡 Tips:**

- Use `rel="noopener noreferrer"` for security on external links
- Footer should stay at bottom even on short pages (use flexbox)

---

#### Task 1.9: Create Cookie Consent Banner

**Status**: ⬜  
**Estimated Time**: 45 minutes  
**Priority**: Medium  
**Dependencies**: Task 1.8

**Steps:**

1. **Create `src/components/layout/CookieBanner.tsx`**

   ```typescript
   import { useState, useEffect } from 'react'

   export default function CookieBanner() {
     const [showBanner, setShowBanner] = useState(false)

     useEffect(() => {
       // Check if user has already consented
       const consent = localStorage.getItem('cookieConsent')
       if (!consent) {
         setShowBanner(true)
       }
     }, [])

     const handleAccept = () => {
       localStorage.setItem('cookieConsent', 'accepted')
       setShowBanner(false)
     }

     if (!showBanner) return null

     return (
       <div className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50'>
         <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
           <p className='text-sm'>
             We use cookies to improve your experience. By continuing to use
             this site, you consent to our use of cookies.
           </p>
           <button
             onClick={handleAccept}
             className='bg-primary-blue text-white px-6 py-2 rounded hover:bg-primary-blue-dark focus:outline-none focus:ring-2 focus:ring-primary-blue'
           >
             Accept
           </button>
         </div>
       </div>
     )
   }
   ```

2. **Add CookieBanner to Layout component**

   ```typescript
   import CookieBanner from './CookieBanner'

   // ... in Layout component JSX:
   ;<CookieBanner />
   ```

3. **Test cookie banner**
   - Clear localStorage: `localStorage.clear()` in browser console
   - Refresh page
   - Banner should appear
   - Click Accept
   - Refresh again - banner should not appear

**✅ Acceptance Criteria:**

- [ ] Banner appears on first visit
- [ ] Banner disappears after accepting
- [ ] Banner doesn't reappear after accepting
- [ ] Responsive design
- [ ] Keyboard accessible (focus on button)

**💡 Tips:**

- Use browser DevTools → Application → Local Storage to inspect stored values
- Test with different browsers

---

## Week 2: Core Pages & Components

### Day 4-5: UI Component Library

#### Task 2.1: Create Button Component

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: High

**Steps:**

1. **Create `src/components/ui/Button.tsx`**

   ```typescript
   import { ButtonHTMLAttributes, ReactNode } from 'react'

   interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
     children: ReactNode
     variant?: 'primary' | 'secondary' | 'outline'
     size?: 'sm' | 'md' | 'lg'
   }

   export default function Button({
     children,
     variant = 'primary',
     size = 'md',
     className = '',
     ...props
   }: ButtonProps) {
     const baseStyles =
       'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors'

     const variants = {
       primary:
         'bg-primary-blue text-white hover:bg-primary-blue-dark focus:ring-primary-blue',
       secondary:
         'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
       outline:
         'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue',
     }

     const sizes = {
       sm: 'px-3 py-1.5 text-sm',
       md: 'px-4 py-2 text-base',
       lg: 'px-6 py-3 text-lg',
     }

     return (
       <button
         className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
         {...props}
       >
         {children}
       </button>
     )
   }
   ```

2. **Create `src/components/ui/index.ts`** for easy imports

   ```typescript
   export { default as Button } from './Button'
   ```

3. **Test the Button component**
   - Create a test page or add to Home.tsx temporarily
   - Try different variants and sizes

**✅ Acceptance Criteria:**

- [ ] Button component created with TypeScript types
- [ ] Three variants work (primary, secondary, outline)
- [ ] Three sizes work (sm, md, lg)
- [ ] Focus states visible
- [ ] Hover states work
- [ ] All button props (onClick, disabled, etc.) work

**💡 Tips:**

- Use TypeScript interfaces for props
- Always include focus states for accessibility
- Test with keyboard navigation

---

#### Task 2.2: Create Input Component

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: High

**Steps:**

1. **Create `src/components/ui/Input.tsx`**

   ```typescript
   import { InputHTMLAttributes, forwardRef } from 'react'

   interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
     label?: string
     error?: string
   }

   const Input = forwardRef<HTMLInputElement, InputProps>(
     ({ label, error, className = '', ...props }, ref) => {
       return (
         <div className='w-full'>
           {label && (
             <label className='block text-sm font-medium text-gray-700 mb-1'>
               {label}
               {props.required && <span className='text-error ml-1'>*</span>}
             </label>
           )}
           <input
             ref={ref}
             className={`
               w-full px-4 py-2 border rounded-md
               focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent
               ${error ? 'border-error' : 'border-gray-300'}
               ${className}
             `}
             aria-invalid={error ? 'true' : 'false'}
             aria-describedby={error ? `${props.id}-error` : undefined}
             {...props}
           />
           {error && (
             <p
               id={`${props.id}-error`}
               className='mt-1 text-sm text-error'
               role='alert'
             >
               {error}
             </p>
           )}
         </div>
       )
     }
   )

   Input.displayName = 'Input'

   export default Input
   ```

2. **Update `src/components/ui/index.ts`**

   ```typescript
   export { default as Button } from './Button'
   export { default as Input } from './Input'
   ```

3. **Test Input component**
   - Test with label, without label
   - Test error state
   - Test required field indicator
   - Test keyboard navigation

**✅ Acceptance Criteria:**

- [ ] Input component accepts all standard input props
- [ ] Label displays correctly
- [ ] Error message displays and is accessible
- [ ] Required field indicator shows
- [ ] Focus states work
- [ ] Works with React Hook Form (if using)

**💡 Tips:**

- Use `forwardRef` so Input works with form libraries
- Always associate labels with inputs using `htmlFor`/`id`
- Use `aria-describedby` to link error messages

---

#### Task 2.3: Create Additional Form Components

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: High

**Create these components following the same pattern as Input:**

1. **Textarea Component** (`src/components/ui/Textarea.tsx`)

   - Similar to Input but for multi-line text
   - Include label and error props

2. **Select Component** (`src/components/ui/Select.tsx`)

   - Dropdown select with label and error
   - Accept options as prop

3. **Checkbox Component** (`src/components/ui/Checkbox.tsx`)

   - Checkbox with label
   - Support for checkbox groups

4. **Radio Component** (`src/components/ui/Radio.tsx`)

   - Radio button with label
   - Support for radio groups

5. **Alert Component** (`src/components/ui/Alert.tsx`)
   - Success/error/info messages
   - Dismissible option

**✅ Acceptance Criteria:**

- [ ] All form components created
- [ ] Consistent styling and API
- [ ] Accessible (labels, ARIA attributes)
- [ ] Error states handled
- [ ] Responsive design

**💡 Tips:**

- Reuse patterns from Input component
- Test with screen reader if possible
- Keep component APIs consistent

---

### Day 6-7: Core Pages

#### Task 2.4: Build Home Page

**Status**: ⬜  
**Estimated Time**: 2 hours  
**Priority**: Critical  
**Dependencies**: Task 2.1, Task 2.2

**Steps:**

1. **Create `src/pages/Home.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import { Link } from 'react-router-dom'
   import { Button } from '../components/ui'

   export default function Home() {
     return (
       <>
         <Helmet>
           <title>
             SL Mortgages - Expert Mortgage & Protection Advice in the UK
           </title>
           <meta
             name='description'
             content="Looking for clear, hassle-free mortgage advice? I'm here to help! As a dedicated Mortgage & Protection Advisor, I'm passionate about making the process simple and stress-free for you."
           />
         </Helmet>

         {/* Hero Section */}
         <section className='bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white py-20'>
           <div className='container mx-auto px-4 text-center'>
             <h1 className='text-4xl md:text-5xl font-bold mb-4'>
               Expert Mortgage & Protection Advice in the UK
             </h1>
             <p className='text-xl mb-8 max-w-2xl mx-auto'>
               Looking for clear, hassle-free mortgage advice? I'm here to help!
             </p>
             <Link to='/appointment'>
               <Button size='lg'>Get in Touch</Button>
             </Link>
           </div>
         </section>

         {/* Services Section */}
         <section className='py-16'>
           <div className='container mx-auto px-4'>
             <h2 className='text-3xl font-bold text-center mb-12'>
               Our Services
             </h2>

             <div className='grid md:grid-cols-2 gap-8'>
               {/* Mortgages */}
               <div className='bg-white p-6 rounded-lg shadow-md'>
                 <h3 className='text-2xl font-semibold mb-4 text-primary-blue'>
                   Mortgages
                 </h3>
                 <ul className='space-y-2 text-gray-700'>
                   <li>• First-time buyers</li>
                   <li>• Home movers</li>
                   <li>• Remortgages</li>
                   <li>• Buy-to-let</li>
                   <li>• Commercial</li>
                   <li>• Debt consolidation</li>
                   <li>• Government schemes</li>
                 </ul>
               </div>

               {/* Protection Products */}
               <div className='bg-white p-6 rounded-lg shadow-md'>
                 <h3 className='text-2xl font-semibold mb-4 text-primary-blue'>
                   Protection Products
                 </h3>
                 <ul className='space-y-2 text-gray-700'>
                   <li>• Life cover</li>
                   <li>• Critical illness</li>
                   <li>• Income protection</li>
                   <li>• Accident/sickness</li>
                   <li>• Home insurance</li>
                   <li>• Private medical</li>
                   <li>• Commercial insurance</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>

         {/* CTA Section */}
         <section className='bg-gray-100 py-16'>
           <div className='container mx-auto px-4 text-center'>
             <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
             <p className='text-lg text-gray-700 mb-8'>
               From our very first meeting to the final completion, I'll guide
               you every step of the way
             </p>
             <div className='flex flex-col sm:flex-row gap-4 justify-center'>
               <Link to='/quotation'>
                 <Button>Request a Quote</Button>
               </Link>
               <Link to='/appointment'>
                 <Button variant='outline'>Book Appointment</Button>
               </Link>
             </div>
           </div>
         </section>
       </>
     )
   }
   ```

2. **Test the home page**
   - Check all sections display
   - Test buttons and links
   - Verify responsive design
   - Check SEO meta tags in page source

**✅ Acceptance Criteria:**

- [ ] Hero section with CTA
- [ ] Services sections displayed
- [ ] All links work
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO meta tags present
- [ ] Images have alt text (when added)

**💡 Tips:**

- Use semantic HTML (`<section>`, `<article>`, etc.)
- Keep content from client brief
- Test on different screen sizes

---

#### Task 2.5: Build About Page

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: High  
**Dependencies**: Task 2.4

**Steps:**

1. **Create `src/pages/About.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'

   export default function About() {
     return (
       <>
         <Helmet>
           <title>About Me - SL Mortgages</title>
           <meta
             name='description'
             content="Learn about Svetlana's journey into mortgage and protection advice, her professional approach, and motivation for helping people achieve financial security."
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-3xl mx-auto'>
             <h1 className='text-4xl font-bold mb-8 text-primary-blue'>
               About Me
             </h1>

             <div className='prose prose-lg max-w-none'>
               <p className='text-lg leading-relaxed mb-6'>
                 My journey into the world of mortgages and protection began
                 with a deep passion for helping people achieve financial
                 security and homeownership.
               </p>

               <p className='text-lg leading-relaxed mb-6'>
                 [Add your personal story here - background, professional
                 approach, motivation for becoming an advisor]
               </p>

               {/* Add more content sections as needed */}
             </div>
           </div>
         </div>
       </>
     )
   }
   ```

2. **Add personal content** (get from client)
   - Background story
   - Professional approach
   - Motivation

**✅ Acceptance Criteria:**

- [ ] Page displays correctly
- [ ] Content is readable and well-formatted
- [ ] SEO optimized
- [ ] Responsive design

---

#### Task 2.6: Build Partners Page

**Status**: ⬜  
**Estimated Time**: 45 minutes  
**Priority**: Low  
**Dependencies**: Task 2.4

**Steps:**

1. **Create `src/pages/Partners.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'

   export default function Partners() {
     // Add partner logos when available
     const partners = [
       // { name: 'Partner 1', logo: '/assets/logos/partner1.png' },
     ]

     return (
       <>
         <Helmet>
           <title>Our Partners - SL Mortgages</title>
           <meta
             name='description'
             content='Professional affiliations and partners of SL Mortgages.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <h1 className='text-4xl font-bold mb-12 text-center text-primary-blue'>
             Our Partners
           </h1>

           {partners.length > 0 ? (
             <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
               {partners.map((partner) => (
                 <div
                   key={partner.name}
                   className='flex items-center justify-center p-4'
                 >
                   <img
                     src={partner.logo}
                     alt={`${partner.name} logo`}
                     className='max-h-20 object-contain'
                   />
                 </div>
               ))}
             </div>
           ) : (
             <p className='text-center text-gray-600'>
               Partner information coming soon.
             </p>
           )}
         </div>
       </>
     )
   }
   ```

**✅ Acceptance Criteria:**

- [ ] Page structure ready
- [ ] Can display partner logos when added
- [ ] Responsive grid layout

---

## Week 3: Forms & Integrations

### Day 8-9: Form Components

#### Task 3.1: Set Up Formspree Account

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: Critical

**Steps:**

1. **Go to [Formspree.io](https://formspree.io/)**
2. **Sign up for a free account**
3. **Create a new form**
   - Name it "Quotation Form"
   - Copy the form endpoint (looks like: `https://formspree.io/f/xxxxx`)
4. **Add endpoint to `.env.local`**
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
   ```
5. **Create a second form for referrals**
   - Copy that endpoint too
   - Add to `.env.local` as `VITE_FORMSPREE_REFERRAL_ENDPOINT`

**✅ Acceptance Criteria:**

- [ ] Formspree account created
- [ ] Two forms created (quotation, referral)
- [ ] Endpoints saved in .env.local
- [ ] Test submission works (manually test in Formspree dashboard)

**💡 Tips:**

- Formspree free tier has limits - upgrade if needed
- Keep endpoints secure (don't commit .env.local)

---

#### Task 3.2: Build Quotation Form

**Status**: ⬜  
**Estimated Time**: 3 hours  
**Priority**: Critical  
**Dependencies**: Task 3.1, Task 2.2, Task 2.3

**Steps:**

1. **Create `src/pages/Quotation.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import QuotationForm from '../components/forms/QuotationForm'

   export default function Quotation() {
     return (
       <>
         <Helmet>
           <title>
             Request a Conveyancer or Survey Quotation - SL Mortgages
           </title>
           <meta
             name='description'
             content='Request a quotation for conveyancer or survey services.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-2xl mx-auto'>
             <h1 className='text-4xl font-bold mb-4 text-primary-blue'>
               Conveyancer & Survey Quotation
             </h1>
             <p className='text-lg text-gray-700 mb-8'>
               Please fill out the form below to request a quotation for
               conveyancer or survey services.
             </p>
             <QuotationForm />
           </div>
         </div>
       </>
     )
   }
   ```

2. **Create `src/components/forms/QuotationForm.tsx`**

   - Implement all form fields from PRD:
     - Deal type (dropdown: Purchase/Sale/Remortgage/Survey)
     - Title (dropdown: Mr/Mrs/Ms/Miss/Dr)
     - First name (text, required)
     - Last name (text, required)
     - Location (radio/select: England/Scotland/Wales/Northern Ireland)
     - Property price (number, required)
     - Tenure (text, optional)
     - Address (textarea, required)
     - First-time buyer (radio: yes/no)
     - Additional considerations (checkboxes: Auction, Buy to Let, Help to Buy, Shared Ownership, Right to Buy, Other)

3. **Add form validation**

   - Client-side validation for required fields
   - Email format validation (if email field added)
   - Property price must be positive number

4. **Add form submission logic**

   - Use Formspree endpoint from environment variable
   - Show loading state during submission
   - Show success message after submission
   - Show error message if submission fails
   - Clear form after successful submission

5. **Make form accessible**
   - All fields have labels
   - Error messages linked to fields (aria-describedby)
   - Keyboard navigation works
   - Focus management

**✅ Acceptance Criteria:**

- [ ] All form fields implemented
- [ ] Validation works correctly
- [ ] Form submits to Formspree
- [ ] Success/error messages display
- [ ] Form is accessible
- [ ] Responsive design

**💡 Tips:**

- Use React Hook Form for easier form management (optional but recommended)
- Test form submission with real data
- Check Formspree dashboard for received submissions

---

#### Task 3.3: Build Referral Form

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: High  
**Dependencies**: Task 3.1, Task 3.2

**Steps:**

1. **Create `src/pages/Referral.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import ReferralForm from '../components/forms/ReferralForm'

   export default function Referral() {
     return (
       <>
         <Helmet>
           <title>Refer a Friend - SL Mortgages</title>
           <meta
             name='description'
             content='Refer a friend and receive £50. Reward paid within 30 days of mortgage completion.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-2xl mx-auto'>
             <h1 className='text-4xl font-bold mb-4 text-primary-blue'>
               Refer a Friend and Receive £50
             </h1>
             <p className='text-lg text-gray-700 mb-4'>
               Know someone who needs mortgage advice? Refer them to us and
               receive £50 when their mortgage completes.
             </p>
             <p className='text-sm text-gray-600 mb-8'>
               Reward paid within 30 days of mortgage completion (subject to
               T&Cs).
             </p>
             <ReferralForm />
           </div>
         </div>
       </>
     )
   }
   ```

2. **Create `src/components/forms/ReferralForm.tsx`**
   - Simple form with:
     - Referrer name (required)
     - Referrer email (required, validated)
     - Friend name (required)
     - Friend email (required, validated)
   - Submit to Formspree referral endpoint
   - Similar validation and error handling as quotation form

**✅ Acceptance Criteria:**

- [ ] Form fields implemented
- [ ] Email validation works
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Terms clearly displayed

---

### Day 10-11: Third-Party Integrations

#### Task 3.4: Set Up Google Calendar/Calendly

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: Critical

**Steps:**

1. **Choose calendar service** (Google Calendar or Calendly)

   **Option A: Calendly (Recommended - Easier)**

   - Go to [calendly.com](https://calendly.com/)
   - Sign up for free account
   - Create event type
   - Get embed code or URL
   - Add to `.env.local`: `VITE_CALENDAR_URL=your_calendly_url`

   **Option B: Google Calendar**

   - Create public Google Calendar
   - Get embed code
   - Add to `.env.local`

2. **Create `src/components/features/CalendarEmbed.tsx`**

   ```typescript
   import { useState } from 'react'

   export default function CalendarEmbed() {
     const calendarUrl = import.meta.env.VITE_CALENDAR_URL
     const [loadError, setLoadError] = useState(false)

     if (!calendarUrl) {
       return (
         <div className='bg-gray-100 p-8 rounded-lg text-center'>
           <p className='text-gray-700 mb-4'>
             Calendar integration not configured.
           </p>
           <p className='text-sm text-gray-600'>
             Please contact us directly to book an appointment.
           </p>
         </div>
       )
     }

     if (loadError) {
       return (
         <div className='bg-gray-100 p-8 rounded-lg'>
           <p className='text-gray-700 mb-4'>Unable to load calendar.</p>
           <a
             href={calendarUrl}
             target='_blank'
             rel='noopener noreferrer'
             className='text-primary-blue hover:underline'
           >
             Open calendar in new window
           </a>
         </div>
       )
     }

     // For Calendly
     if (calendarUrl.includes('calendly.com')) {
       return (
         <div
           className='calendly-inline-widget'
           data-url={calendarUrl}
           style={{ minWidth: '320px', height: '630px' }}
         >
           <script
             type='text/javascript'
             src='https://assets.calendly.com/assets/external/widget.js'
             async
           ></script>
         </div>
       )
     }

     // For Google Calendar iframe
     return (
       <iframe
         src={calendarUrl}
         width='100%'
         height='600'
         frameBorder='0'
         onError={() => setLoadError(true)}
         title='Book an Appointment'
       ></iframe>
     )
   }
   ```

3. **Create `src/pages/Appointment.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import CalendarEmbed from '../components/features/CalendarEmbed'

   export default function Appointment() {
     return (
       <>
         <Helmet>
           <title>Book an Appointment - SL Mortgages</title>
           <meta
             name='description'
             content='Schedule a consultation with our mortgage advisor.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-4xl mx-auto'>
             <h1 className='text-4xl font-bold mb-4 text-primary-blue'>
               Book an Appointment
             </h1>
             <p className='text-lg text-gray-700 mb-8'>
               Select a date and time that works for you. We'll confirm your
               appointment shortly.
             </p>
             <CalendarEmbed />
           </div>
         </div>
       </>
     )
   }
   ```

**✅ Acceptance Criteria:**

- [ ] Calendar embed displays
- [ ] Fallback shows if calendar fails to load
- [ ] Direct link provided as alternative
- [ ] Responsive design
- [ ] Accessible (iframe has title)

**💡 Tips:**

- Test calendar embed on different browsers
- Make sure calendar is set to public/shared
- Provide contact information as fallback

---

#### Task 3.5: Set Up Google Reviews Widget

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: High

**Steps:**

1. **Add Google Place ID to `.env.local`**

   ```
   VITE_GOOGLE_PLACE_ID=ChIJvdBfFy5HxkkR1fX4HTL3tyg
   ```

2. **Create `src/components/features/GoogleReviews.tsx`**

   ```typescript
   import { useEffect, useState } from 'react'

   export default function GoogleReviews() {
     const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID
     const [reviewsLoaded, setReviewsLoaded] = useState(false)

     useEffect(() => {
       // Load Google Reviews script
       const script = document.createElement('script')
       script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`
       script.async = true
       script.defer = true
       script.onload = () => setReviewsLoaded(true)
       document.head.appendChild(script)

       return () => {
         // Cleanup
         document.head.removeChild(script)
       }
     }, [])

     if (!placeId) {
       return (
         <div className='bg-gray-100 p-8 rounded-lg text-center'>
           <p className='text-gray-700'>Google Reviews not configured.</p>
         </div>
       )
     }

     return (
       <div className='space-y-6'>
         {/* Leave a Review Link */}
         <div className='text-center'>
           <a
             href={`https://search.google.com/local/writereview?placeid=${placeId}`}
             target='_blank'
             rel='noopener noreferrer'
             className='inline-block bg-primary-blue text-white px-6 py-3 rounded hover:bg-primary-blue-dark'
           >
             Leave a Review
           </a>
         </div>

         {/* Google Reviews Widget */}
         <div id='google-reviews' className='min-h-[400px]'>
           {/* Widget will be injected here */}
           {!reviewsLoaded && (
             <p className='text-center text-gray-600'>Loading reviews...</p>
           )}
         </div>

         {/* Fallback static testimonials */}
         {!reviewsLoaded && (
           <div className='bg-gray-50 p-6 rounded-lg'>
             <p className='text-sm text-gray-600 mb-4'>
               Unable to load reviews. Please visit our{' '}
               <a
                 href={`https://search.google.com/local/writereview?placeid=${placeId}`}
                 target='_blank'
                 rel='noopener noreferrer'
                 className='text-primary-blue hover:underline'
               >
                 Google Reviews page
               </a>
               .
             </p>
           </div>
         )}
       </div>
     )
   }
   ```

   **Note**: For simpler implementation without API key, you can use a third-party Google Reviews widget service or embed code.

3. **Create `src/pages/Testimonials.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import GoogleReviews from '../components/features/GoogleReviews'

   export default function Testimonials() {
     return (
       <>
         <Helmet>
           <title>Testimonials - SL Mortgages</title>
           <meta
             name='description'
             content='Read what our clients say about our mortgage and protection services.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-4xl mx-auto'>
             <h1 className='text-4xl font-bold mb-4 text-primary-blue'>
               What Our Clients Say
             </h1>
             <p className='text-lg text-gray-700 mb-8'>
               Don't just take our word for it - see what our clients have to
               say about working with us.
             </p>
             <GoogleReviews />
           </div>
         </div>
       </>
     )
   }
   ```

**✅ Acceptance Criteria:**

- [ ] Google Reviews widget displays (or fallback)
- [ ] "Leave a Review" link works
- [ ] Link opens in new tab
- [ ] Fallback content shows if widget fails
- [ ] Responsive design

**💡 Tips:**

- Google Places API requires an API key (get from Google Cloud Console)
- Alternative: Use a Google Reviews widget service that doesn't require API key
- Test with actual place ID

---

#### Task 3.6: Build Careers Page

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: Medium  
**Dependencies**: Task 2.4

**Steps:**

1. **Create `src/pages/Careers.tsx`**

   ```typescript
   import { Helmet } from 'react-helmet-async'
   import { Link } from 'react-router-dom'
   import { Button } from '../components/ui'

   export default function Careers() {
     return (
       <>
         <Helmet>
           <title>Career Opportunities - SL Mortgages</title>
           <meta
             name='description'
             content='Join our team as a Protection Adviser, Mortgage Broker, or Financial Adviser. Excellent earnings potential and flexible hours.'
           />
         </Helmet>

         <div className='container mx-auto px-4 py-16'>
           <div className='max-w-3xl mx-auto'>
             <h1 className='text-4xl font-bold mb-8 text-primary-blue'>
               Career Opportunities
             </h1>

             <div className='prose prose-lg max-w-none mb-8'>
               <p className='text-lg mb-4'>
                 Are you looking for a rewarding career in financial services?
                 We're always looking for talented individuals to join our team.
               </p>

               <h2 className='text-2xl font-semibold mt-8 mb-4'>
                 Available Roles
               </h2>
               <ul className='list-disc list-inside space-y-2 mb-6'>
                 <li>Protection Adviser</li>
                 <li>Mortgage Broker</li>
                 <li>Financial Adviser</li>
               </ul>

               <h2 className='text-2xl font-semibold mt-8 mb-4'>
                 Why Join Us?
               </h2>
               <ul className='list-disc list-inside space-y-2 mb-6'>
                 <li>
                   Excellent earnings potential via competitive commission
                   splits
                 </li>
                 <li>Flexible hours</li>
                 <li>Remote work opportunities</li>
                 <li>Strong career development opportunities</li>
               </ul>
             </div>

             <div className='bg-gray-100 p-6 rounded-lg'>
               <h3 className='text-xl font-semibold mb-4'>Interested?</h3>
               <p className='mb-4'>
                 Get in touch to learn more about current opportunities.
               </p>
               <div className='flex flex-col sm:flex-row gap-4'>
                 <a
                   href='mailto:contact@slmortgages.com'
                   className='inline-block'
                 >
                   <Button>Email Us</Button>
                 </a>
                 <a href='tel:+441234567890' className='inline-block'>
                   <Button variant='outline'>Call Us</Button>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </>
     )
   }
   ```

2. **Optional: Add CV upload form** (if needed)
   - Create career application form component
   - Add file upload functionality
   - Submit to Formspree or email

**✅ Acceptance Criteria:**

- [ ] Page displays role information
- [ ] Benefits clearly listed
- [ ] Contact methods work (email, phone)
- [ ] Optional form works (if implemented)

---

## Week 4: Polish & Testing

### Day 12-13: SEO & Accessibility

#### Task 4.1: Add SEO Meta Tags to All Pages

**Status**: ⬜  
**Estimated Time**: 2 hours  
**Priority**: High  
**Dependencies**: All pages created

**Steps:**

1. **For each page, add unique SEO meta tags** using React Helmet:

   - Unique `<title>` tag
   - Unique `<meta name="description">` tag
   - Open Graph tags for social sharing:
     ```typescript
     <meta property="og:title" content="Page Title" />
     <meta property="og:description" content="Page description" />
     <meta property="og:type" content="website" />
     <meta property="og:url" content="https://yourdomain.com/page" />
     ```

2. **Create SEO helper** (`src/lib/utils/seo.ts`) for reusable SEO data:

   ```typescript
   export const siteConfig = {
     name: 'SL Mortgages',
     url: 'https://yourdomain.com',
     description: 'Expert Mortgage & Protection Advice in the UK',
   }
   ```

3. **Test SEO tags**
   - View page source in browser
   - Use SEO tools to validate
   - Test Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)

**✅ Acceptance Criteria:**

- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] Open Graph tags added
- [ ] Meta tags render correctly

---

#### Task 4.2: Accessibility Audit & Fixes

**Status**: ⬜  
**Estimated Time**: 3 hours  
**Priority**: Critical  
**Dependencies**: All components and pages

**Steps:**

1. **Install accessibility testing tools**

   ```bash
   npm install -D @axe-core/react
   ```

2. **Add accessibility checks in development** (`src/main.tsx`):

   ```typescript
   if (import.meta.env.DEV) {
     import('@axe-core/react').then((axe) => {
       axe.default(React, ReactDOM, 1000)
     })
   }
   ```

3. **Manual accessibility checks:**

   - [ ] Keyboard navigation works on all pages
   - [ ] Focus indicators visible
   - [ ] All images have alt text
   - [ ] Form labels associated with inputs
   - [ ] Color contrast meets WCAG AA (4.5:1)
   - [ ] Headings in logical order (h1 → h2 → h3)
   - [ ] Links have descriptive text
   - [ ] No keyboard traps

4. **Use browser extensions:**

   - WAVE (Web Accessibility Evaluation Tool)
   - axe DevTools
   - Lighthouse accessibility audit

5. **Fix any issues found**

**✅ Acceptance Criteria:**

- [ ] Lighthouse accessibility score > 90
- [ ] No critical accessibility issues
- [ ] Keyboard navigation works everywhere
- [ ] Screen reader compatible (test if possible)

---

### Day 14-15: Testing & Bug Fixes

#### Task 4.3: Cross-Browser Testing

**Status**: ⬜  
**Estimated Time**: 2 hours  
**Priority**: High

**Steps:**

1. **Test on Chrome** (latest version)

   - All pages load correctly
   - Forms submit successfully
   - Navigation works
   - Responsive design works

2. **Test on Firefox** (latest version)

   - Same checks as Chrome

3. **Test on Safari** (if on Mac, or use BrowserStack)

   - Same checks as above

4. **Test on Edge** (if on Windows)

   - Same checks as above

5. **Test on mobile browsers**

   - iOS Safari
   - Chrome Mobile
   - Check responsive design
   - Test touch interactions

6. **Fix any browser-specific issues**

**✅ Acceptance Criteria:**

- [ ] Website works on all major browsers
- [ ] No visual regressions
- [ ] Forms work everywhere
- [ ] Mobile experience is good

---

#### Task 4.4: Form Submission Testing

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: Critical

**Steps:**

1. **Test quotation form:**

   - [ ] Submit with all fields filled
   - [ ] Submit with missing required fields (should show errors)
   - [ ] Submit with invalid data (should show errors)
   - [ ] Success message displays
   - [ ] Email received in Formspree

2. **Test referral form:**

   - [ ] Submit with valid emails
   - [ ] Submit with invalid emails (should show error)
   - [ ] Success message displays
   - [ ] Email received

3. **Test error handling:**
   - [ ] Network error (disable internet, try submit)
   - [ ] Formspree service down (mock error)
   - [ ] Error messages are user-friendly

**✅ Acceptance Criteria:**

- [ ] All forms validate correctly
- [ ] Success flows work
- [ ] Error handling works
- [ ] Email notifications received

---

#### Task 4.5: Performance Optimization

**Status**: ⬜  
**Estimated Time**: 2 hours  
**Priority**: High

**Steps:**

1. **Run Lighthouse audit** (Chrome DevTools)

   - Target: Performance score > 90

2. **Optimize images:**

   - Compress images
   - Use appropriate formats (WebP if supported)
   - Add lazy loading: `<img loading="lazy" />`

3. **Optimize bundle size:**

   ```bash
   npm run build
   ```

   - Check `dist` folder size
   - Use code splitting if needed
   - Remove unused dependencies

4. **Add meta tags for performance:**

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="dns-prefetch" href="https://formspree.io" />
   ```

5. **Test page load times:**
   - Should be < 2 seconds
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)

**✅ Acceptance Criteria:**

- [ ] Lighthouse performance score > 90
- [ ] Page load time < 2 seconds
- [ ] Images optimized
- [ ] Bundle size reasonable

---

## Week 5: Deployment

### Day 16-17: Build & Deploy Preparation

#### Task 5.1: Production Build

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: Critical

**Steps:**

1. **Update `vite.config.ts`** for production:

   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'dist',
       sourcemap: false, // Set to true if you want source maps
       minify: 'esbuild',
     },
   })
   ```

2. **Create production build:**

   ```bash
   npm run build
   ```

3. **Test production build locally:**

   ```bash
   npm run preview
   ```

   - Check all pages work
   - Test forms (use production Formspree endpoints)
   - Verify all assets load

4. **Check build output:**
   - `dist` folder should contain:
     - `index.html`
     - `assets/` folder with JS and CSS
     - `public/` assets if any

**✅ Acceptance Criteria:**

- [ ] Build completes without errors
- [ ] Preview works correctly
- [ ] All pages accessible
- [ ] Forms work in preview

**💡 Tips:**

- Fix any build errors before deploying
- Test thoroughly in preview mode

---

#### Task 5.2: Choose Hosting Platform

**Options:**

**Option A: Netlify (Recommended - Easiest)**

- Free tier available
- Automatic deployments from Git
- Easy setup

**Option B: Vercel**

- Similar to Netlify
- Great for React apps

**Option C: cPanel/Zone.eu (Traditional Hosting)**

- Upload files via FTP
- More manual process

**Option D: GitHub Pages**

- Free for public repos
- Simple setup

---

#### Task 5.3: Deploy to Netlify (Recommended)

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: Critical

**Steps:**

1. **Push code to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to [Netlify.com](https://www.netlify.com/)**

   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Configure build settings:**

   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Add environment variables:**

   - Go to Site settings → Environment variables
   - Add all variables from `.env.local`:
     - `VITE_FORMSPREE_ENDPOINT`
     - `VITE_FORMSPREE_REFERRAL_ENDPOINT`
     - `VITE_CALENDAR_URL`
     - `VITE_GOOGLE_PLACE_ID`

5. **Redeploy** after adding environment variables

6. **Test deployed site:**
   - Visit your Netlify URL
   - Test all pages
   - Test form submissions
   - Test on mobile

**✅ Acceptance Criteria:**

- [ ] Site deployed successfully
- [ ] All pages accessible
- [ ] Forms work (test submissions)
- [ ] Environment variables configured
- [ ] Site loads quickly

**💡 Tips:**

- Netlify provides a free SSL certificate
- You can add a custom domain later
- Check Netlify logs if something doesn't work

---

#### Task 5.4: Deploy to cPanel/Zone.eu (Alternative)

**Status**: ⬜  
**Estimated Time**: 1.5 hours  
**Priority**: Critical

**Steps:**

1. **Build production files:**

   ```bash
   npm run build
   ```

2. **Upload files via FTP:**

   - Use FileZilla or similar FTP client
   - Connect to your hosting
   - Upload contents of `dist` folder to `public_html` (or specified directory)

3. **Configure `.htaccess`** (for Apache servers) in `public_html`:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Set environment variables:**

   - Some hosts allow `.env` files
   - Or configure via hosting panel
   - Or hardcode (not recommended, but works)

5. **Test deployed site**

**✅ Acceptance Criteria:**

- [ ] Files uploaded correctly
- [ ] Site accessible via domain
- [ ] Routing works (SPA routing)
- [ ] Forms work

---

#### Task 5.5: Configure Custom Domain (Optional)

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: Medium

**Steps:**

1. **In Netlify (or your hosting):**

   - Go to Domain settings
   - Add custom domain
   - Follow DNS configuration instructions

2. **Update DNS records** (at your domain registrar):

   - Add A record or CNAME as instructed
   - Wait for DNS propagation (can take up to 48 hours)

3. **SSL Certificate:**
   - Netlify provides free SSL automatically
   - Other hosts may require manual setup

**✅ Acceptance Criteria:**

- [ ] Domain configured
  - [ ] SSL certificate active (HTTPS)
  - [ ] Site accessible via custom domain

---

## Post-Launch

### Task 6.1: Final Testing on Live Site

**Status**: ⬜  
**Estimated Time**: 2 hours  
**Priority**: Critical

**Test everything on the live site:**

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Calendar embed works
- [ ] Google Reviews display
- [ ] Mobile responsive design
- [ ] Cross-browser compatibility
- [ ] Page load speeds acceptable
- [ ] SEO meta tags present
- [ ] Accessibility works

---

### Task 6.2: Set Up Analytics (Optional)

**Status**: ⬜  
**Estimated Time**: 30 minutes  
**Priority**: Medium

**Steps:**

1. **Create Google Analytics account**
2. **Add tracking code to site**
3. **Verify tracking works**

---

### Task 6.3: Documentation

**Status**: ⬜  
**Estimated Time**: 1 hour  
**Priority**: Medium

**Create documentation:**

- [ ] README.md updated with setup instructions
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Known issues/limitations noted

---

## 🎉 Congratulations!

You've built and deployed a professional mortgage advisor website!

**Next Steps:**

- Monitor form submissions
- Collect user feedback
- Make improvements based on feedback
- Consider Phase 2 features from PRD

---

## Troubleshooting Guide

### Common Issues

**Build fails:**

- Check for TypeScript errors: `npm run build`
- Check for linting errors: `npm run lint`
- Verify all imports are correct

**Forms don't submit:**

- Check Formspree endpoint is correct
- Check environment variables are set
- Check browser console for errors
- Verify Formspree account is active

**Routing doesn't work:**

- Check `.htaccess` file (for Apache)
- Verify server configuration for SPA routing
- Check React Router is configured correctly

**Styles not loading:**

- Verify Tailwind is configured
- Check CSS file is imported
- Clear browser cache

**Environment variables not working:**

- Variables must start with `VITE_`
- Restart dev server after adding variables
- In production, set variables in hosting platform

---

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Formspree Documentation](https://formspree.io/guides/react/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)

---

**Last Updated**: [Current Date]  
**Status**: Ready for Development  
**Questions?** Refer to PRD.md for detailed requirements
