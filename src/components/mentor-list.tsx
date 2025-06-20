"use client";

import { Button } from "@/components/ui/button";
import { mentors } from "@/data/mock/mentors";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Plus, Star, UserRoundCheck } from "lucide-react";
import Image from "next/image";

export function MentorList() {
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
    hidden: { opacity: 0, x: 20 },
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
      className="p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between mb-6"
        variants={itemVariants}
      >
        <motion.h3
          className="text-xl font-semibold text-gray-900"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Your mentor
        </motion.h3>
        <motion.button
          className="text-indigo-400 hover:text-gray-600 border rounded-full p-2 cursor-pointer"
          whileHover={{
            scale: 1.1,
            rotate: 90,
            backgroundColor: "rgba(99, 102, 241, 0.1)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Plus className="h-5 w-5" />
        </motion.button>
      </motion.div>

      <motion.div
        className="space-y-4 rounded-2xl bg-fuchsia-50 p-3"
        variants={itemVariants}
        whileHover={{
          backgroundColor: "rgba(253, 244, 255, 0.8)",
          transition: { duration: 0.3 },
        }}
      >
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className={cn(
              "flex items-center justify-between border-b border-dashed py-3 px-1.5",
              index === 2 && "border-none"
            )}
            variants={itemVariants}
            whileHover={{
              x: 5,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "12px",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className={cn(
                  "relative rounded-full",
                  index === 0
                    ? "bg-amber-200"
                    : index === 1
                    ? "bg-pink-300"
                    : "bg-stone-400"
                )}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={mentor.avatar || "/placeholder.svg"}
                  alt={mentor.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center bg-black rounded-full border border-white"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="size-2 fill-white stroke-white" />
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-sm text-gray-900 font-semibold">
                  {mentor.name}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {mentor.role}
                </p>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="text-indigo-500 border-indigo-500 hover:bg-indigo-50 rounded-full bg-transparent cursor-pointer"
              >
                <UserRoundCheck /> Follow
              </Button>
            </motion.div>
          </motion.div>
        ))}
        <motion.div className="mt-6 mx-2.5" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-indigo-200 hover:bg-indigo-300 text-indigo-500 rounded-full cursor-pointer">
              See All
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
