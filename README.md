# 🏠 SL Mortgages Website

A professional, responsive mortgage and protection advisory website built for **SL Mortgages**, providing clear information, lead-generation tools, and full FCA compliance.

This project delivers a modern digital presence aligned with business goals: credibility, accessibility, automation, and scalability.

---

## 🚀 Overview

The SL Mortgages website offers:

- **Professional service presentation** — showcases mortgage and protection services clearly and credibly
- **Streamlined client engagement** — quotation, appointment booking, and referral forms
- **Regulatory compliance** — FCA & Openwork disclaimers across all pages
- **Responsive, accessible design** — WCAG 2.2 AA compliant, mobile-first layout
- **Scalable foundation** — SEO-ready architecture with room for blog/CRM expansion

---

## 🧭 Core Features

| Category          | Feature                      | Description                                                                                                                            |
| ----------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Pages**         | 9 Core Pages                 | Home, About Me, Conveyancer & Survey Quotation, Book Appointment, Career Opportunities, Refer a Friend, Testimonials, Partners, Footer |
| **Forms**         | Quotation, Referral, Careers | Integrated via Formspree / EmailJS                                                                                                     |
| **Integrations**  | Google Calendar / Calendly   | Appointment booking via embed                                                                                                          |
|                   | Google Reviews               | Live testimonial widget (fallback static reviews)                                                                                      |
| **SEO**           | React Helmet                 | Dynamic meta tags and structured data                                                                                                  |
| **Legal**         | FCA & Openwork disclaimers   | Present globally in footer                                                                                                             |
| **Accessibility** | WCAG 2.2 AA                  | Keyboard navigation, focus states, contrast verified                                                                                   |

---

## 🏗️ Tech Stack

| Area                     | Technology                                  |
| ------------------------ | ------------------------------------------- |
| **Framework**            | React + Vite                                |
| **Styling**              | Tailwind CSS                                |
| **Routing**              | React Router v6                             |
| **Forms**                | Formspree / EmailJS                         |
| **SEO**                  | React Helmet                                |
| **Hosting**              | Compatible with cPanel / Zone.eu / Netlify  |
| **Testing**              | Vitest + React Testing Library _(optional)_ |
| **Linting & Formatting** | ESLint + Prettier                           |

---

## 📂 Project Structure

```
sl-mortgages/
├── src/
│   ├── components/
│   │   ├── layout/ (Header, Footer, Navigation, CookieBanner)
│   │   ├── forms/ (QuotationForm, ReferralForm, CareerForm)
│   │   ├── features/ (GoogleReviews, CalendarEmbed)
│   │   └── ui/ (Button, Input, Checkbox, etc.)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Quotation.tsx
│   │   ├── Appointment.tsx
│   │   ├── Careers.tsx
│   │   ├── Referral.tsx
│   │   ├── Testimonials.tsx
│   │   └── Partners.tsx
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.tsx
├── public/
│   ├── favicon.ico
│   └── assets/
├── docs/
│   ├── prd.md
│   └── client-brief.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/<your-username>/sl-mortgages.git
cd sl-mortgages
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to preview.

### 4️⃣ Build for production

```bash
npm run build
```

### 5️⃣ Preview production build

```bash
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root and include placeholders like:

```bash
VITE_FORMSPREE_ID=your_formspree_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_CALENDAR_URL=your_calendar_embed_url
VITE_GOOGLE_PLACE_ID=ChIJvdBfFy5HxkkR1fX4HTL3tyg
```

_(Do not commit this file — it’s in `.gitignore`.)_

---

## 🌐 Deployment

Static build is compatible with:

- **Netlify** (drag-and-drop or CLI)
- **cPanel / Zone.eu** (upload `dist/` folder)
- **Vercel / GitHub Pages** (optional)

Ensure:

- All pages accessible over HTTPS
- DNS & SSL configured
- Environment variables set in hosting platform

---

## 📈 Success Metrics (Post-Launch)

- ≥ 10 quotation form submissions / month
- ≥ 5 appointment bookings / month
- ≥ 2 referral submissions / month
- Page load < 2 s, uptime ≥ 99.5%
- Positive user feedback and SEO growth

---

## 👥 Contributors

- **Svetlana Latiseva** — Client / Mortgage Advisor
- **Victoria Lauri** — Developer / Project Lead

---

## 🛡️ Legal & Compliance

- FCA disclaimers and Openwork statements included on every page
- External links:
  - [Terms of Use](https://business.yell.com/legal/terms-of-use/)
  - [Privacy & Cookies](https://business.yell.com/websites-privacy-cookie-policy/)
  - [Trading Terms](https://business.yell.com/legal/trading-terms/)
- Cookie consent stored in localStorage (non-intrusive banner)

---

## 🧾 License

© SL Mortgages — All rights reserved.  
For internal and client delivery only. Not open-source.
