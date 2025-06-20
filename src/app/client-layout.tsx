"use client";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="//vercel.com" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/assets/male-memoji.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RimeHQ Dashboard" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "RimeHQ Dashboard",
              description:
                "Modern learning management system dashboard with course tracking, mentor connections, and progress analytics.",
              url: "https://rimehq-dashboard.vercel.app",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "RimeHQ",
              },
              featureList: [
                "Course Progress Tracking",
                "Mentor Connections",
                "Interactive Dashboard",
                "Responsive Design",
                "Real-time Statistics",
                "Mobile-Friendly Interface",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`
          ${inter.className} 
          min-h-screen 
          bg-gray-50 
          text-gray-900 
          antialiased 
          selection:bg-indigo-100 
          selection:text-indigo-900
          scroll-smooth
        `}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Main Application */}
        <div id="root" className="relative">
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </div>

        {/* Performance and Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window && 'measure' in window.performance) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                  }, 0);
                });
              }

              // Accessibility enhancements
              document.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                  document.body.classList.add('keyboard-navigation');
                }
              });

              document.addEventListener('mousedown', function() {
                document.body.classList.remove('keyboard-navigation');
              });

              // Reduced motion preference
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.setProperty('--animation-duration', '0.01ms');
                document.documentElement.style.setProperty('--transition-duration', '0.01ms');
              }
            `,
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Error Boundary Fallback */}
        <div id="error-boundary-fallback" className="hidden">
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We&apos;re sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
