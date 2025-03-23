"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Let's <span className="text-[#FFA500]">Connect</span> there
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Feel free to reach out to me for collaborations or inquiries at{" "}
                <span className="text-[#FFA500]">sultanferoz321@gmail.com</span>{" "}
                or connect with me on{" "}
                <Link
                  href={"https://github.com/sultanferoz"}
                  className="text-[#FFA500]"
                >
                  https://github.com/sultanferoz
                </Link>
                . Looking forward to working together!
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-600 hover:text-[#FFA500]"
                >
                  <Facebook />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-600 hover:text-[#FFA500]"
                >
                  <Twitter />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-600 hover:text-[#FFA500]"
                >
                  <Youtube />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-600 hover:text-[#FFA500]"
                >
                  <Instagram />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FFA500]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FFA500]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FFA500]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FFA500]">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FFA500]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">+92 3554 8225 26</li>
              <li className="text-gray-600">www.example.com</li>
              <li className="text-gray-600">sultanferoz321@gmail.com</li>
              <li className="text-gray-600">
                2464 Karakoram Hwy, Gutiyal, Gilgit-Baltistan 15100, Pakistan
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Get the latest information
            </h4>
            <div className="flex space-x-2">
              <Input placeholder="Email address" className="border-gray-300" />
              <Button className="bg-[#1B4D3E] hover:bg-[#2A5F4C]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
