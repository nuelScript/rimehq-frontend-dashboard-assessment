"use client";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Bell, Mail, Menu, Search } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <motion.header
      className="px-4 sm:px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <motion.button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-5 w-5" />
        </motion.button>

        {/* Search */}
        <motion.div
          className="flex-1 max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="relative">
            <motion.div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
            </motion.div>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                type="text"
                placeholder="Search your course..."
                className="pl-10 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 shadow-none rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* User Info */}
        <motion.div
          className="flex items-center space-x-2 sm:space-x-4 ml-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <motion.button
            className="p-2.5 text-gray-400 hover:text-gray-600 transition duration-150 rounded-full border cursor-pointer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="size-4 stroke-black" />
          </motion.button>

          <motion.button
            className="p-2.5 text-gray-400 hover:text-gray-600 transition duration-150 rounded-full border cursor-pointer"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Bell className="size-4 fill-black stroke-black" />
              <motion.div
                className="absolute top-0 right-0.5 size-1 rounded-full bg-red-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.button>

          <div className="h-10 border border-gray-300" />

          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex items-center justify-center bg-pink-200 rounded-full p-1"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/male-memoji.svg"
                alt="Jason Ranti"
                width={32}
                height={32}
                className="rounded-full"
              />
            </motion.div>
            <motion.span
              className="text-sm font-medium text-gray-900 hidden sm:block"
              whileHover={{ x: 2 }}
            >
              Jason Ranti
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
