"use client";

import { Header } from "@/components/header";
import { MainContent } from "@/components/main-content";
import { RightSidebar } from "@/components/right-sidebar";
import { Sidebar } from "@/components/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      className="flex h-screen bg-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.1,
        }}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="flex-1 flex flex-col min-w-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          {/* Right sidebar - hidden on mobile and tablet */}
          <motion.div
            className="hidden xl:block overflow-y-auto scrollbar-hide"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <RightSidebar />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
