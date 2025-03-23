"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <div
      //   id="faq"
      className="min-h-[60vh] bg-[#1B4D3E] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Questions? <span className="text-[#FFA500]">Look here.</span>
          </h2>
          <h3 className="text-2xl text-white mb-8">FAQs</h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#2A5F4C] rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#FFA500]">
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-200">
                I specialize in modern frontend technologies such as React.js,
                Next.js, Vue.js, Tailwind CSS, and TypeScript.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-[#FFA500] rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white">
                Can I see your portfolio or GitHub projects?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white">
                Absolutely! You can explore my projects on GitHub and my
                portfolio website, where I showcase my frontend development
                work.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#2A5F4C] rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#FFA500]">
                Are you available for freelance or contract work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-200">
                Yes, I am open to freelance opportunities and contract-based
                frontend development projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-[#2A5F4C] rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#FFA500]">
                What tools and frameworks do you use?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-200">
                I work with React, Next.js, Tailwind CSS, Framer Motion, and
                testing frameworks like Jest and Cypress.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-[#2A5F4C] rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#FFA500]">
                How do you ensure performance and accessibility in your
                projects?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-200">
                I focus on optimized code, lazy loading, Lighthouse audits,
                semantic HTML, and ARIA roles for accessibility.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-center flex-col md:flex-row md:space-x-16 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-[#FFA500] text-center cursor-pointer"
            >
              React.js
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-[#FFA500] text-center cursor-pointer"
            >
              Next.js
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-[#FFA500] text-center cursor-pointer"
            >
              GraphQL
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-[#FFA500] text-center cursor-pointer"
            >
              Firebase
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
