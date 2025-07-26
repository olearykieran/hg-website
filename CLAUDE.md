# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server at http://localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Deployment
- `vercel --prod` - Deploy to production using Vercel

## Architecture Overview

This is a Next.js 14 application using the App Router with the following stack:

### Core Technologies
- **Next.js 14** with App Router (`src/app/` directory structure)
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom theme configuration
- **React 18** with server components
- **Firebase** for backend services (Firestore database)

### Key Architectural Decisions

1. **App Router Structure**: Using Next.js 14 App Router with the `src/app/` directory structure
   - `layout.tsx` - Root layout with metadata and theme provider
   - `page.tsx` - Home page with main sections
   - API routes in `app/api/` directory

2. **Component Organization** (`src/components/`):
   - Page sections: `HeroSection.tsx`, `Solutions.tsx`, `About.tsx`, `Contact.js`
   - UI components: `Navbar.js`, `AppCard.tsx`, `WebsiteCard.tsx`
   - Theme components: `ThemeProvider.tsx`, `ThemeToggle.tsx`
   - 3D/Animation: `ThreeScene.js`, `BackgroundAnimation.js`, `CursorCanvas.js`

3. **Styling System**:
   - Tailwind CSS with custom configuration in `tailwind.config.ts`
   - Custom theme with CSS variables for colors (primary, secondary, accent, etc.)
   - Custom blue theme color: `#2fc0dc` (custom-blue)
   - Dark mode support via `class` strategy
   - Custom fonts: Satoshi (via CSS), Inter, Poppins, JetBrains Mono

4. **Firebase Integration**:
   - Firebase config in `firebase.js` (contains API keys - ensure not to expose in public repos)
   - Firestore database for data persistence
   - Used for contact form submissions

5. **API Routes**:
   - `/api/contact` - Handles contact form submissions
   - `/api/metadata` - Provides metadata information

6. **Assets**:
   - Images and logos in `public/` directory
   - Custom fonts in `public/font/`
   - 3D assets: `scene.gltf`, `scene.bin` with textures

### Important Notes

- The project uses unoptimized images in development mode (see `next.config.mjs`)
- No test framework is currently configured
- Email functionality uses Nodemailer (see `Contact.js` component)
- 3D visualizations use Three.js and React Three Fiber
- Font Awesome and React Icons for iconography