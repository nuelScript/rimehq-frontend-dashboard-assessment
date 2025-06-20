"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function YourLesson() {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-900"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Your Lesson
        </motion.h2>
        <motion.button
          className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline cursor-pointer"
          whileHover={{
            scale: 1.05,
            x: 5,
          }}
          whileTap={{ scale: 0.95 }}
        >
          See all
        </motion.button>
      </motion.div>

      <motion.div
        className="bg-white rounded-4xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="px-6">
              <tr className="border-b border-gray-100">
                <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MENTOR
                </th>
                <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TYPE
                </th>
                <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DESC
                </th>
                <th className="text-center py-3 px-2 sm:px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <motion.tr
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors border-dashed mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{
                  backgroundColor: "rgba(249, 250, 251, 1)",
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              >
                <td className="py-4 px-2 sm:px-4">
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex items-center justify-center bg-amber-200 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/assets/man-hat.svg"
                        alt="Padhang Satrio"
                        width={32}
                        height={32}
                        className="rounded-full flex-shrink-0"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Padhang Satrio
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        7/16/2024
                      </p>
                    </div>
                  </motion.div>
                </td>
                <td className="py-4 px-4">
                  <motion.span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🎨 UI/UX DESIGN
                  </motion.span>
                </td>
                <td className="py-4 px-2 sm:px-4">
                  <motion.p
                    className="text-sm font-semibold text-gray-900"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Understand Of UI/UX Design
                  </motion.p>
                </td>
                <td className="py-4 px-2 sm:px-4">
                  <motion.button
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      color: "rgb(59, 130, 246)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
