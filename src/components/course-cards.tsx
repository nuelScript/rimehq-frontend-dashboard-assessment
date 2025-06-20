"use client";

import { courses } from "@/data/mock/courses";
import { MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

export function CourseCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  } as const;

  return (
    <motion.div
      className="py-4 sm:py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="flex items-start justify-between mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className={`w-10 h-10 sm:w-12 sm:h-12 ${course.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0`}
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {course.icon}
                </motion.span>
              </motion.div>

              <motion.button
                className="text-gray-400 hover:text-gray-600 p-1"
                whileHover={{
                  scale: 1.2,
                  rotate: 90,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.h3
                className="font-semibold text-base sm:text-lg text-gray-900"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {course.title}
              </motion.h3>
              <motion.p
                className="text-xs sm:text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {course.progress}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
