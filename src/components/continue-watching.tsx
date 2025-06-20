"use client";

import { Progress } from "@/components/ui/progress";
import { courses } from "@/data/mock/courses-watching";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ContinueWatching() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 } as const,
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="space-y-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between"
        variants={cardVariants}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Continue Watching
        </motion.h2>
        <div className="flex space-x-2">
          <motion.button
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>
          <motion.button
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-4xl p-6 border border-gray-100"
        variants={cardVariants}
        whileHover={{
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.div
                className="relative mb-4 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>

                <motion.button
                  className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    hoveredCard === index
                      ? {
                          scale: 1.1,
                          rotate: [0, -10, 10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-4 w-4 text-gray-600" />
                </motion.button>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${course.categoryColor}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {course.category}
                </motion.span>

                <motion.h3
                  className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {course.title}
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  style={{ originX: 0 }}
                >
                  <Progress value={course.progress} />
                </motion.div>

                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={cn(
                      "rounded-full size-8 flex items-center justify-center",
                      index === 0
                        ? "bg-stone-200"
                        : index === 1
                        ? "bg-pink-200"
                        : "bg-amber-200"
                    )}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {course.instructor}
                    </p>
                    <p className="text-xs text-gray-500">{course.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
