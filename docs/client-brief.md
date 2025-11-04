# SL Mortgages Website – Client Brief (Structured PRD)

## 🧭 Project Overview

**Client:** Svetlana Latiseva Mortgages (SL Mortgages)  
**Tone:** Professional but friendly  
**Deployment:** Hostable on any platform (React + Vite preferred, not Next.js)

---

## 🎯 Core Objectives

- Present Svetlana’s mortgage and protection services clearly and professionally.
- Allow users to:
  - Request conveyancer or survey quotations.
  - Book appointments through a calendar integration.
  - Submit career or referral enquiries.
  - Read and leave testimonials (via Google Reviews).
  - Contact the advisor directly via email or phone.
- Include FCA and Openwork disclaimers on every page.
- Ensure scalability for future additions (e.g., blog, CRM integration).

---

## 🗂 Website Pages

### 1. Home Page & Services

**Purpose:** Introduction and overview of all services.  
**Dynamic content:** None.  
**Elements:**

- Hero section with call-to-action (e.g., “Get in Touch”).
- Sections for Mortgages and Protection Products.
- Contact button linking to booking form or contact page.

**Content summary:**

> Expert Mortgage & Protection Advice in the UK.  
> Looking for clear, hassle-free mortgage advice? I'm here to help! As a dedicated Mortgage & Protection Advisor, I’m passionate about making the process simple and stress-free for you.  
> From our very first meeting to the final completion, I’ll guide you every step of the way—explaining everything in plain, easy-to-understand language.

**Services listed:**

- **Mortgages:** first-time buyers, home movers, remortgages, buy-to-let, commercial, debt consolidation, government schemes.
- **Protection products:** life cover, critical illness, income protection, accident/sickness, home insurance, private medical, commercial insurance.

---

### 2. About Me

**Purpose:** Personal story of the advisor.  
**Dynamic content:** None (static text).

**Content summary:**  
“My journey into the world of mortgages and protection began with a deep passion for helping people achieve financial security and homeownership…”  
Includes background story, professional approach, and motivation for becoming an advisor.

---

### 3. Conveyancer & Survey Quotation

**Purpose:** Allow users to request quotations.  
**Dynamic content:** ✅ Interactive form.

**Form fields:**

- Deal type (Purchase / Sale / Remortgage / Survey)
- Title, First name, Last name
- Location (England / Scotland / Wales / Northern Ireland)
- Property price, tenure, address
- First-time buyer (yes/no)
- Checkbox group for additional considerations (Auction, Buy to Let, Help to Buy, etc.)

**Form handling:**  
Send via POST request to backend or Formspree / EmailJS endpoint.  
Display confirmation message after submission.

---

### 4. Book an Appointment

**Purpose:** Allow users to schedule a meeting.  
**Dynamic content:** ✅ Calendar integration (Google Calendar or Calendly embed).  
**Elements:** Embedded calendar iframe + fallback contact form.

---

### 5. Career Opportunities

**Purpose:** Recruit new advisors.  
**Dynamic content:** Optional (contact form).  
**Elements:**

- Static content describing roles (Protection Adviser, Mortgage Broker, Financial Adviser).
- Email / phone contact links.
- Optional CV upload form.

**Highlights:**

> Excellent earnings potential via competitive commission splits, flexible hours, remote work, and strong career development opportunities.

---

### 6. Refer a Friend

**Purpose:** Referral program.  
**Dynamic content:** ✅ Simple referral form.

**Form fields:** Referrer name/email + Friend name/email.  
**Form handling:** Same method as quotation form.

**Content summary:**

> “Refer a Friend and Receive £50.”  
> Reward paid within 30 days of mortgage completion (subject to T&Cs).

---

### 7. Testimonials

**Purpose:** Display and link to Google Reviews.  
**Dynamic content:** ✅ Google Reviews embed.  
**Implementation:**

- Embed widget using provided Google `placeid`.
- Option to add static testimonials manually.

**Google Review Link:**  
https://search.google.com/local/writereview?placeid=ChIJvdBfFy5HxkkR1fX4HTL3tyg

---

### 8. Partners

**Purpose:** Showcase professional affiliations.  
**Dynamic content:** Optional (logo carousel or static grid).  
**Elements:** Partner logos displayed in footer or on dedicated section.

---

### 9. Footer (Global)

**Content:**

- FCA and Openwork disclaimers.
- External legal page links:
  - Terms of Use → [Yell Terms](https://business.yell.com/legal/terms-of-use/)
  - Privacy & Cookies → [Yell Privacy](https://business.yell.com/websites-privacy-cookie-policy/)
  - Trading Terms → [Yell Trading Terms](https://business.yell.com/legal/trading-terms/)
- Cookie consent banner (optional dynamic).

**Mandatory footer disclaimer text:**

> THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR PROPERTY. YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.  
> SOME BUY TO LET & LET TO BUY MORTGAGES ARE NOT REGULATED BY THE FINANCIAL CONDUCT AUTHORITY.  
> COMMERCIAL FINANCE IS NOT PART OF THE OPENWORK PARTNERSHIP AND IS OFFERED ON OUR OWN RIGHT. OPENWORK LIMITED ACCEPT NO RESPONSIBILITY FOR THIS ASPECTS OF OUR BUSINESS. THESE PRODUCTS AND SERVICES ARE NOT REGULATED BY THE FINANCIAL CONDUCT AUTHORITY.  
> Supreme Financial Solutions Limited is an appointed representative of The Openwork Partnership, a trading style of Openwork Limited which is authorised and regulated by the Financial Conduct Authority.

---

## 🎨 Design Guidelines

- **Color palette:** Match client leaflet (blue/white theme).
- **Typography:** Clean, readable sans-serif (e.g., Inter, Lato).
- **Imagery:** Mortgage, homeownership, family-oriented visuals.
- **Layout:** Modern, minimalist, responsive (mobile-first).
- **Accessibility:** WCAG-compliant color contrast, keyboard navigation, alt text.

---

## ⚖️ Legal & Compliance Notes

- FCA disclaimers and cookie notice must appear on every page.
- Do not copy third-party content or images without consent.

---

## 🧩 Summary of Dynamic Features

| Feature                | Dynamic  | Integration/Notes                 |
| ---------------------- | -------- | --------------------------------- |
| Conveyancer Quote Form | ✅       | Custom form or Formspree endpoint |
| Appointment Booking    | ✅       | Google Calendar / Calendly embed  |
| Refer a Friend         | ✅       | Form submission + confirmation    |
| Testimonials           | ✅       | Google Reviews embed              |
| Cookie Banner          | ✅       | Simple JS or third-party script   |
| Careers, Partners      | Optional | Static or expandable later        |

---

## 🛠 Technical Notes

- Framework: **React (Vite)**
- Styling: **Tailwind CSS**
- Routing: **React Router DOM**
- Forms: **Formspree / EmailJS / PHP endpoint**
- Embeds: **Google Calendar, Google Reviews**
- SEO: **React Helmet**
- Hosting: Portable (cPanel, Zone.eu, Netlify)
- Compliance: GDPR-safe, HTTPS, cookies disclosure.

---
