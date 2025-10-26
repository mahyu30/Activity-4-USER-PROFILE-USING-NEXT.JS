# Student Profile - Next.js & Tailwind CSS

This is a modern reconstruction of the student profile using Next.js 14 and Tailwind CSS.

## Features

- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Interactive Components**: Animated greeting modal, color-changing name, skills toggle
- **Smooth Animations**: CSS transitions and custom animations
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images with Next.js Image component
- **Type Safety**: Full TypeScript implementation

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── SimpleNavbar.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── GreetingModal.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ClientLayout.tsx
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/
│   └── img/                 # Static images
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Improvements

### From Original HTML/CSS/JS to Next.js:

1. **Component Architecture**: Modular, reusable React components
2. **Type Safety**: TypeScript for better development experience
3. **Modern Styling**: Tailwind CSS utility classes
4. **Performance**: Next.js optimizations (Image component, code splitting)
5. **State Management**: React hooks for interactive features
6. **Accessibility**: Better semantic HTML and ARIA support
7. **Developer Experience**: Hot reload, TypeScript intellisense
8. **Simplified Theme Management**: Direct localStorage-based theme switching

### Features Maintained:

- ✅ Dynamic greeting based on time of day
- ✅ Animated greeting modal with statistics
- ✅ Color-changing name functionality
- ✅ Skills section toggle
- ✅ Project showcase with links
- ✅ Contact form with validation
- ✅ Dark/light theme toggle
- ✅ Smooth scrolling navigation
- ✅ Scroll progress indicator
- ✅ Scroll to top button
- ✅ Responsive design
- ✅ Social media links

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons
- **Inter Font** - Typography

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js applications.

For Vercel deployment:
```bash
npm run build
```

The project is optimized for production with automatic code splitting, image optimization, and performance enhancements.