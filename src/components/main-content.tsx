"use client";

import { ContinueWatching } from "@/components/continue-watching";
import { CourseCards } from "@/components/course-cards";
import { HeroBanner } from "@/components/hero-banner";
import { YourLesson } from "@/components/your-lesson";
import { motion } from "framer-motion";

export function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="flex-1 p-4 sm:p-6 overflow-y-auto scrollbar-hide"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <HeroBanner />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CourseCards />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContinueWatching />
        </motion.div>
        <motion.div variants={itemVariants}>
          <YourLesson />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
