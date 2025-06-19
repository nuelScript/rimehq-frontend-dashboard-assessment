# RimeHQ Frontend Dashboard Assessment

A modern, responsive learning dashboard built with Next.js and Tailwind CSS, featuring a clean design with smooth animations and intuitive user interface.

## Approach

I approached this project by breaking down the UI into modular, reusable components following React best practices. The layout uses CSS Grid and Flexbox for responsive design, ensuring it works seamlessly across different screen sizes. I focused on creating a component-driven architecture where each UI element (Sidebar, Header, CourseCard, StatsCard, etc.) is a separate, reusable component. 

The design emphasizes user experience with subtle hover effects, smooth transitions, and careful attention to spacing and typography. I used Tailwind CSS utilities for rapid styling while maintaining consistency, and incorporated Lucide React icons for a modern, clean iconography system. The color scheme closely matches the original design with a purple accent color and neutral grays for a professional appearance.

## Known Limitations & Future Improvements

- **Static Data**: Currently uses placeholder data and static content. In a real application, this would be connected to APIs and a state management system.
- **Chart Implementation**: The statistics chart is a simple placeholder. A real implementation would use a charting library like Chart.js or Recharts with dynamic data.
- **Mobile Responsiveness**: While responsive, the mobile experience could be enhanced with a collapsible sidebar and optimized touch interactions.
- **Accessibility**: Could benefit from better ARIA labels, keyboard navigation, and screen reader optimization.
- **Performance**: Images are using emoji placeholders; real implementation would need optimized image loading and lazy loading.
- **Search Functionality**: The search bar is purely visual; actual search would require backend integration and state management.

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

- **Next.js 14** - React framework for production
- **React 18** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon library
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
├── pages/
│   ├── index.js          # Main dashboard page
│   └── _app.js          # App configuration
├── styles/
│   └── globals.css      # Global styles and Tailwind imports
├── components/          # Reusable UI components (if separated)
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Features Implemented

- ✅ Responsive sidebar with navigation menu
- ✅ Search header with user profile
- ✅ Hero banner with call-to-action
- ✅ Course progress cards
- ✅ Continue watching section with course cards
- ✅ Statistics dashboard with placeholder chart
- ✅ Mentor list with follow functionality
- ✅ Lesson tracking table
- ✅ Hover effects and smooth transitions
- ✅ Mobile-responsive design
- ✅ Component reusability
- ✅ Clean, readable code structure

The implementation faithfully recreates the design while maintaining clean, maintainable code and following React best practices.# rimehq-frontend-dashboard-assessment
