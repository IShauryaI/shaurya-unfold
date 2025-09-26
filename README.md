# 🚀 Shaurya Unfold — Modern Developer Portfolio & Analytics Showcase

A high-performance, accessible, and visually stunning portfolio demonstrating modern React development expertise and advanced technical architecture. This repository enables recruiters and collaborators to evaluate real-world impact, engineering best practices, and quantifiable analytics from a live production deployment.

[![Performance](https://img.shields.io/badge/Lighthouse_Performance-100%25-success?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)
[![Accessibility](https://img.shields.io/badge/Accessibility-94%25-success?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)
[![Best Practices](https://img.shields.io/badge/Best_Practices-100%25-success?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)
[![SEO](https://img.shields.io/badge/SEO-100%25-success?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://shaurya-unfold.vercel.app)

## 🎯 Project Overview

Shaurya Unfold is a modern, responsive portfolio website that serves as both a technical showcase and a self-hosted analytics dashboard. Designed and developed by Shaurya Parshad, it demonstrates expertise in frontend architecture, component-driven design, technical accessibility, and user engagement at scale. The website has been engineered with a performance-first approach, leveraging the latest features in React, TypeScript, Vite, and robust UI frameworks such as shadcn/ui and Radix UI.

The holistic solution integrates lighthouse-driven performance optimization, WCAG 2.1 accessibility, responsive UI practices, and a metrics dashboard for transparent reporting. Each feature is engineered for usability, code maintainability, and scalability, equipping stakeholders with actionable insights on both technical and user-level engagement.

## 📊 Live Production Metrics

Performance statistics and analytics are captured directly from the current production deployment. These results demonstrate exceptional competence in frontend optimization and user engagement.

### Page Speed and Technical Performance

![Page Speed Metrics](docs/images/pagespeed-metrics.png)

The lighthouse report for the published production version delivers:
- **Performance**: 100% (optimal speed, resources, and runtime efficiency)
- **Accessibility**: 94% (near-complete WCAG 2.1 compliance, semantic HTML, and ARIA labeling)
- **Best Practices**: 100% (adherence to security, modern standards, and maintainability)
- **SEO**: 100% (structured data, meta tags, crawlability, and discoverability)

Scores are validated for the desktop environment, ensuring a rapid and frictionless experience for all users, recruiters, and collaborators.

### Audience and Site Engagement Analytics

![Analytics Overview](docs/images/analytics-overview.png)

Month-to-date analytics report for September 2025 demonstrates:
- **171 total visitors** across the site, showing appreciable real-user interest
- **224 total pageviews** with an average of 1.31 views per visit, indicating repeated engagement
- **Average visit duration** of 8 minutes 20 seconds, representing deep user attention and strong content value
- **Bounce rate** of 83%, highlighting areas for further UX improvement and onboarding optimization
- **Live active visitors:** 4, signifying real-time engagement at all times

![Detailed Analytics](docs/images/analytics-detailed.png)

**Traffic sources** emphasize direct intent and targeted referrals: 161 direct visits, complemented by niche traffic from overleaf.com (3), Bing (1), Google (1), and LinkedIn (1).
**Geographic distribution:** Canada leads with 60 visitors, followed by the United States (54), India (13), China (3), and Italy (2), confirming global reach and cross-border interest.
**Device usage statistics:** Desktop remains dominant at 72.1%, with mobile iOS at 23% and Android at 4.2%. This shapes the responsive design strategy and accessibility priorities.

### Historical Visitor Trends

Analytics reveal a substantial spike in traffic on September 5, reaching 52 unique visitors. Regular patterns of user return are observed throughout the month, confirming valuable recurring engagement and content discovery.

## 🏗️ System Architecture

![Architecture Diagram](docs/images/architecture-flowchart.png)

The system employs a modern SPA (Single Page Application) architecture leveraging React 18, Vite, TypeScript, and component-driven best practices. The key architecture highlights include:
- **Component System:** Built with shadcn/ui for modern UI elements, custom layout modules, and Radix UI primitives for accessibility and interactivity
- **State Layer:** Utilizes TanStack Query for network-efficient data synchronization, React Hook Form for fast form state management, and Theme Provider for adaptive theming
- **Build Pipeline:** Employs Vite + SWC for rapid incremental builds, TypeScript for reliable static typing, and Tailwind CSS Processor for a scalable visual design system

This high-level architectural design is thoroughly optimized for maintainability, developer productivity, and cross-environment consistency.

## ✨ Features and Design System

### Core Features

This portfolio stands out for its robust technical and design-driven attributes:
- **Modern SPA Navigation:** Seamless client-side routing powered by React Router DOM, yielding a fluid user experience
- **Component-Driven Architecture:** Over 45 reusable components built with shadcn/ui and custom logic, facilitating rapid development and design consistency
- **Theme System:** Intelligent dark/light mode toggling synchronized with user system preferences for optimal comfort
- **Performance Optimization:** Sub-200ms build times achieved via Vite + SWC, with production bundles under 400KB for fast page loads
- **Accessibility by Design:** Includes screen reader support, keyboard navigation, and semantic markup surpassing industry standards
- **SEO Optimization:** All pages employ structured data, meta tags, and Open Graph for maximum search engine discoverability

### Design System

#### Visual Palette and Typography

```css
/* Light Theme */
--primary: 222.2 84% 4.9%;
--secondary: 210 40% 96%;
--accent: 210 40% 94%;
--muted: 210 40% 96%;

/* Dark Theme */
--primary: 210 40% 98%;
--secondary: 222.2 84% 4.9%;
--accent: 217.2 32.6% 17.5%;
--muted: 217.2 32.6% 17.5%;
```

Typography incorporates the Inter font family for headings, a system font stack for performance, and JetBrains Mono for code snippets. The fluid spacing and semantic color tokens create brand cohesion and high legibility.

## 🛠️ Comprehensive Tech Stack

### Frontend Technologies

The following technologies form the foundation of the project's architectural choices:
- **React 18**: Enables concurrent rendering and hooks-based state management
- **TypeScript 5.x**: Guarantees robust type safety, minimizing runtime errors and enhancing developer experience
- **Vite + SWC**: Delivers instant builds and fast hot module replacement

### UI and Styling

Styling and design frameworks integrate:
- **Tailwind CSS 3.x**: Utility-first CSS for rapid prototyping and maintainable scalable styles
- **shadcn/ui**: A modern, accessible and flexible component library for elegant interfaces
- **Radix UI**: Facilitates low-level UI primitive composition, enhancing component accessibility out of the box

### State and Data Management

For data flow and form handling:
- **TanStack Query v5**: Manages remote data fetching, caching, and synchronization
- **React Hook Form**: Powers performant form state with minimal re-renders
- **Zod**: Provides TypeScript-first schema validation for runtime and build-time confidence

### Tooling and Integration

- **ESLint & Prettier**: Enforces code quality and formatting for consistent collaborative workflows
- **Vercel**: Automates CI/CD pipelines for rapid, zero-config deployment
- **Analytics Integration**: Offers live event tracking, visit duration, bounce rate, and traffic source reporting

## 📁 Project Structure and Directory Organization

```
portfolio/
├── 📂 src/
│   ├── 📂 components/          # Reusable UI components (45+)
│   │   ├── 📂 ui/             # shadcn/ui elements
│   │   ├── 📂 layout/         # Layout wrappers and shells
│   │   └── 📂 custom/         # Bespoke modules
│   ├── 📂 pages/              # Individual React pages (15+)
│   ├── 📂 hooks/              # Custom React hooks for state logic
│   ├── 📂 lib/                # Utility and helper functions
│   ├── 📂 types/              # TypeScript type definitions
│   ├── 📂 styles/             # Global Tailwind style imports
│   └── 📂 assets/             # Images, icons, and static resources
├── 📂 public/                 # Serveable static assets
├── 📂 docs/                   # Documentation, screenshots, and diagrams
│   └── 📂 images/             # Analytics screenshots and architecture diagrams
├── 📄 package.json            # Project metadata and dependencies
├── 📄 tsconfig.json           # TypeScript compiler settings
├── 📄 tailwind.config.js      # Design system configuration
├── 📄 vite.config.ts          # Build tool config
└── 📄 README.md               # Repository overview and setup instructions
```

## 🚦 Getting Started and Local Development

### Prerequisites

- **Node.js v16.0 or higher**
- **npm** or **yarn** package manager
- **Git** for source control

### Installation and Startup

To initialize locally:

```bash
git clone https://github.com/IShauryaI/shaurya-unfold.git
cd shaurya-unfold
npm install     # or yarn install
npm run dev     # or yarn dev
```
Your local development server will be available at `http://localhost:5173/` with full hot module replacement.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview built application locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | TypeScript compiler verification |

## 🎨 Customization

### Environment Variables

Create a `.env.local` file in the project root for easy configuration:

```env
VITE_APP_TITLE="Shaurya Unfold"
VITE_CONTACT_EMAIL="shauryapd@gmail.com"
VITE_ANALYTICS_ID="your-analytics-id"
```

### Design System Adjustments

Modify `tailwind.config.js` to custom brand colors and font stacks:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom color tokens
      },
      fontFamily: {
        // Add your brand fonts here
      }
    }
  }
}
```

## 🚀 Deployment and Production Launch

Production deployment is fully automated via Vercel, with preview environments available for feature branches.

To create a local production build:
```bash
npm run build
npm run preview
```

For cloud deployment, use:
```bash
npx vercel --prod
```
Or for Netlify:
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## 🛣️ Project Roadmap

### Phase I: Performance & Optimization

- Migrate all images to WebP/AVIF format for bandwidth savings
- Implement Web Vitals and real-user monitoring
- Enhance lazy loading and route-based code splitting for optimal TTI

### Phase II: Feature Expansion

- Progressive Web App (PWA) implementation
- Offline-first experience with service workers
- Advanced analytics dashboards and conversion metric tracking
- Integrate a headless CMS for dynamic content creation

### Phase III: Accessibility and Search Optimization

- Full WCAG 2.1 AA compliance audit
- Enhanced structured data and rich snippets
- Multi-language support and localization
- Advanced SEO tactics and cross-platform discoverability

## 🤝 Contributing

Contributions of features, bug reports, and documentation improvements are welcome. Please submit a pull request or raise an issue to discuss significant changes.

### Development Guidelines

- Align with the repository's code style and TypeScript best practices
- Provide meaningful commit history for traceability
- Add unit or integration tests for newly introduced logic
- Update documentation with all substantive modifications
- Sustain high accessibility and performance standards

## 📄 License

This project is licensed under the MIT License — see [LICENSE.md](LICENSE.md) for details.

## 👨‍💻 About the Developer

**Shaurya Parshad** — Full-Stack Developer specializing in React, TypeScript, advanced frontend architecture, and modern web technologies.

- 🌐 Portfolio: [shauryaparshad.com](https://shauryaparshad.com)
- 💼 LinkedIn: [linkedin.com/in/shaurya-parshad](https://linkedin.com/in/shaurya-parshad)
- 🐱 GitHub: [@IShauryaI](https://github.com/IShauryaI)

## 🙏 Acknowledgments

Special thanks to the open-source projects powering this portfolio:
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## ⭐ Repository Recognition

If this project inspired you or assisted your own personal portfolio, please star the repository and suggest improvements!

[🌐 Live Demo](https://shauryaparshad.com) • [📝 Documentation](https://github.com/IShauryaI/shaurya-unfold/wiki) • [🐛 Report Bug](https://github.com/IShauryaI/shaurya-unfold/issues) • [✨ Request Feature](https://github.com/IShauryaI/shaurya-unfold/issues)

---

<div align="center">
Made with ❤️ using modern web technologies for the developer and recruiter community.
</div>