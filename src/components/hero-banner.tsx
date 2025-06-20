"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroBanner() {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 rounded-4xl p-6 text-white overflow-hidden"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <svg
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 400 300"
          fill="none"
        >
          <motion.path
            d="M0 150L50 100L100 150L150 50L200 150L250 100L300 150L350 75L400 150V300H0V150Z"
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="inline-block text-sm font-medium mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          ONLINE COURSE
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Sharpen Your Skills with
          <br />
          Professional Online Courses
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button
            className="bg-black text-white hover:bg-gray-800 flex justify-between font-medium px-3 py-2 rounded-full cursor-pointer group"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Join Now</span>
              <motion.div
                className="bg-white rounded-full flex items-center justify-center size-6"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4 text-black" />
              </motion.div>
            </motion.button>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
