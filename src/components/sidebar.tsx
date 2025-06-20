"use client";

import { friends } from "@/data/mock/friends";
import { navigationItems } from "@/data/mock/navigation-items";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LogOut, Settings, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="w-64 bg-white flex flex-col h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Logo */}
      <motion.div
        className="p-6 flex items-center justify-between"
        variants={itemVariants}
      >
        <Link href="#">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center"
              whileHover={{
                rotate: 360,
                backgroundColor: "rgb(99, 102, 241)",
              }}
              transition={{ duration: 0.5 }}
            >
              <Star className="size-4 stroke-white fill-white" />
            </motion.div>
            <span className="text-xl font-semibold text-gray-900">Coursue</span>
          </motion.div>
        </Link>

        {/* Mobile close button */}
        <motion.button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-5 w-5" />
        </motion.button>
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="flex-1 px-4 py-6 overflow-y-auto"
        variants={containerVariants}
      >
        {/* Overview Section */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h3
            className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            OVERVIEW
          </motion.h3>
          <nav className="space-y-1">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  item.active
                    ? "text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-900"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{
                  x: 5,
                  backgroundColor: item.active
                    ? "rgba(99, 102, 241, 0.1)"
                    : "rgba(249, 250, 251, 1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      item.active ? "fill-indigo-500 stroke-indigo-500" : ""
                    )}
                  />
                </motion.div>
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Friends Section */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h3
            className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            FRIENDS
          </motion.h3>
          <div className="space-y-3">
            {friends.map((friend, index) => (
              <motion.div
                key={friend.name}
                className="flex items-center space-x-3 cursor-pointer hover:bg-accent rounded-xl p-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(249, 250, 251, 1)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={cn(
                    "flex items-center justify-center rounded-full",
                    index === 0
                      ? "bg-fuchsia-100"
                      : index === 1
                      ? "bg-indigo-100"
                      : "bg-teal-100"
                  )}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={friend.avatar || "/placeholder.svg"}
                    alt={friend.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {friend.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {friend.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Settings Section */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            SETTINGS
          </motion.h3>
          <nav className="space-y-1">
            <motion.a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{
                x: 5,
                backgroundColor: "rgba(249, 250, 251, 1)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Settings className="mr-3 h-5 w-5" />
              </motion.div>
              Setting
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-red-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{
                x: 5,
                backgroundColor: "rgba(254, 242, 242, 1)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LogOut className="mr-3 h-5 w-5 text-red-500" />
              </motion.div>
              Logout
            </motion.a>
          </nav>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
