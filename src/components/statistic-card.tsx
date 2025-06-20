"use client";

import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export function StatisticCard() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h3
          className="text-xlx font-semibold text-gray-900"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Statistic
        </motion.h3>
        <motion.button
          className="text-gray-400 hover:text-gray-600"
          whileHover={{
            scale: 1.1,
            rotate: 90,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MoreHorizontal className="h-5 w-5" />
        </motion.button>
      </motion.div>

      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div
          className="relative inline-block mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Circular Progress Ring */}
          <div className="relative w-36 h-36">
            <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 80 80">
              {/* Background circle */}
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-200"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
              {/* Progress circle */}
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - 0.32)}`}
                className="text-indigo-600"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.32 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            {/* Avatar */}
            <motion.div
              className="absolute inset-5 bg-pink-200 rounded-full"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/male-memoji.svg"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full w-full h-full object-cover"
              />
            </motion.div>
          </div>
          {/* Percentage */}
          <motion.div
            className="absolute -top-0 right-3 rounded-full bg-indigo-500 flex items-center justify-center p-1 text-white"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, 0],
            }}
          >
            <span className="text-xs font-semibold">32%</span>
          </motion.div>
        </motion.div>

        <motion.h4
          className="font-semibold text-gray-900 mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Good Morning Jason 🔥
        </motion.h4>
        <motion.p
          className="text-xs text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Continuing your learning to achieve your target!
        </motion.p>
      </motion.div>

      {/* Chart */}
      <motion.div
        className="relative h-48 mt-6 bg-indigo-100 rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{
          backgroundColor: "rgba(199, 210, 254, 0.8)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Chart container with bars */}
        <div className="flex items-end justify-between h-32 px-4">
          {/* Bar 1 */}
          <div className="flex flex-col items-center flex-1">
            <motion.div
              className="w-12 bg-blue-300 rounded-t-lg mb-2"
              style={{ height: "40px" }}
              initial={{ height: 0 }}
              animate={{ height: "40px" }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(147, 197, 253)",
              }}
            />
          </div>
          {/* Bar 2 */}
          <div className="flex flex-col items-center flex-1">
            <motion.div
              className="w-12 bg-blue-500 rounded-t-lg mb-2"
              style={{ height: "70px" }}
              initial={{ height: 0 }}
              animate={{ height: "70px" }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(59, 130, 246)",
              }}
            />
          </div>
          {/* Bar 3 */}
          <div className="flex flex-col items-center flex-1">
            <motion.div
              className="w-12 bg-blue-600 rounded-t-lg mb-2"
              style={{ height: "90px" }}
              initial={{ height: 0 }}
              animate={{ height: "90px" }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(37, 99, 235)",
              }}
            />
          </div>
        </div>

        {/* Y-axis labels */}
        <motion.div
          className="absolute left-3 top-5 h-32 flex flex-col justify-between text-xs text-gray-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <span>60</span>
          <span>40</span>
          <span>20</span>
        </motion.div>

        {/* X-axis labels */}
        <motion.div
          className="flex justify-between px-4 mt-2 text-xs text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <span className="text-center flex-1">1-10 Aug</span>
          <span className="text-center flex-1">11-20 Aug</span>
          <span className="text-center flex-1">21-30 Aug</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
