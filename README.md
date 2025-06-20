# RimeHQ Frontend Dashboard Assessment

A modern, responsive dashboard interface built with Next.js and Tailwind CSS, recreating a comprehensive learning management system UI with stunning animations and micro-interactions.

## Approach

I approached this project by breaking down the complex dashboard into modular, reusable components. The layout follows a three-column structure with a collapsible sidebar, main content area, and right sidebar for statistics and mentors. I focused on pixel-perfect recreation of the design, paying attention to colors, spacing, typography, and visual hierarchy. The component architecture emphasizes reusability - cards, mentor lists, and navigation items are all built as flexible components that can be easily extended or modified.

Key design decisions:

- Used CSS Grid and Flexbox for responsive layouts
- Implemented stunning animations with Framer Motion for delightful user experience
- Created a consistent color palette matching the original design
- Built modular components for easy maintenance and scalability
- Used placeholder images with descriptive queries for realistic content
- Added micro-interactions and hover effects throughout the interface

## Known Limitations & Future Improvements

With more time, I would enhance the following:

- Add proper state management (Redux/Zustand) for sidebar collapse and user interactions
- Implement real chart functionality using libraries like Chart.js or Recharts
- Add proper routing with Next.js App Router for navigation
- Include loading states and skeleton components
- Add comprehensive responsive breakpoints for tablet and mobile
- Implement proper accessibility features (ARIA labels, keyboard navigation)
- Add unit tests with Jest and React Testing Library
- Create a proper design system with consistent spacing and typography scales
- Add real-time data updates and WebSocket connections
- Implement user authentication and authorization

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/rimehq-frontend-dashboard-assessment.git
   cd rimehq-frontend-dashboard-assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality checks

## Technologies Used

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations and micro-interactions
- **Lucide React** for icons
- **shadcn/ui** components
- **ESLint & Prettier** for code quality

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main dashboard page
│   └── globals.css             # Global styles and Tailwind imports
├── components/
│   ├── ui/                     # shadcn/ui base components
│   │   ├── button.tsx          # Button component
│   │   ├── input.tsx           # Input component
│   │   ├── progress.tsx        # Progress bar component
│   │   └── ...                 # Other UI primitives
│   ├── dashboard.tsx           # Main dashboard layout container
│   ├── sidebar.tsx             # Left navigation sidebar
│   ├── header.tsx              # Top header with search and profile
│   ├── main-content.tsx        # Main content area wrapper
│   ├── hero-banner.tsx         # Hero section with CTA
│   ├── course-cards.tsx        # Course progress cards
│   ├── continue-watching.tsx   # Video course cards with progress
│   ├── your-lesson.tsx         # Lesson table component
│   ├── right-sidebar.tsx       # Right sidebar wrapper
│   ├── statistic-card.tsx      # Statistics with circular progress
│   └── mentor-list.tsx         # Mentor list with follow buttons
├── data/
│   └── mock/                   # Mock data for components
│       ├── courses.ts          # Course cards data
│       ├── courses-watching.ts # Continue watching courses data
│       ├── friends.ts          # Friends list data
│       ├── mentors.ts          # Mentors list data
│       └── navigation-items.ts # Sidebar navigation data
├── lib/
│   └── utils.ts                # Utility functions (cn, etc.)
├── public/
│   └── assets/                 # Static assets
│       ├── male-memoji.svg     # User avatar
│       ├── man-hat.svg         # Mentor avatar
│       └── ...                 # Other images and icons
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration
└── README.md                  # Project documentation
```

## Key Features

### **Design & UI**

- Pixel-perfect recreation of the provided design
- Fully responsive layout (mobile, tablet, desktop)
- Modern glassmorphism and card-based design
- Consistent color palette and typography
- Custom rounded corners and shadows

### **Animations & Interactions**

- Smooth entrance animations with staggered effects
- Hover states and micro-interactions on all elements
- Animated progress bars and circular progress rings
- Spring physics animations using Framer Motion
- Interactive chart bars with growth animations
- Rotating icons and morphing buttons

### **Responsive Features**

- Mobile-first approach with breakpoint-specific layouts
- Collapsible sidebar with smooth slide animations
- Touch-friendly interactions and button sizes
- Horizontal scrolling for tables on mobile
- Adaptive grid layouts for different screen sizes

### **Component Architecture**

- Modular and reusable component structure
- TypeScript for type safety and better DX
- Custom hooks for complex state management
- Separation of concerns with data, UI, and logic layers
- Easy to extend and maintain codebase

## Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Animation Performance**: Hardware-accelerated animations with Framer Motion
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Bundle Optimization**: Tree-shaking and dead code elimination
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Guidelines

### Code Style

- Use TypeScript for all components
- Follow React best practices and hooks patterns
- Implement proper error boundaries
- Use semantic HTML elements for accessibility
- Follow consistent naming conventions

### Animation Guidelines

- Use spring physics for natural movement
- Implement staggered animations for lists
- Add hover states for interactive elements
- Keep animations under 300ms for responsiveness
- Use hardware acceleration for smooth performance

### Responsive Design

- Mobile-first approach with min-width breakpoints
- Test on multiple device sizes and orientations
- Ensure touch targets are at least 44px
- Use relative units (rem, em) for scalability
- Implement proper focus states for keyboard navigation

## Deployment

The project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel --prod

# Or build and deploy manually
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is created for assessment purposes and is not intended for commercial use.
