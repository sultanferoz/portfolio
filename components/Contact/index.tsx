"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_vh7uryt", // Replace with your EmailJS Service ID
        "template_tlzn1mp", // Replace with your EmailJS Template ID
        formRef.current!,
        "BkIXRNaJd0yWeCd50" // Replace with your EmailJS Public Key
      );
      console.log("Email sent:", result.text);
      setMessage("Message sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
      setMessage("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info Section */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-2">
                Let's Talk for <br />
                <span className="text-[#FFA500]">Your Next Project</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me for collaborations or inquiries at{" "}
                <span className="text-[#FFA500]">sultanferoz321@gmail.com</span>{" "}
                or connect with me on{" "}
                <Link
                  href={"https://github.com/sultanferoz"}
                  className="text-[#FFA500]"
                >
                  GitHub
                </Link>
                .
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#FFA500]" />
                  <span>+92 3554 8225 26</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#FFA500]" />
                  <span>sultanferoz321@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#FFA500]" />
                  <span>
                    2464 Karakoram Hwy, Gutiyal, Gilgit-Baltistan 15100,
                    Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <Input
                  name="user_name"
                  placeholder="Your Name*"
                  className="border-gray-300"
                  required
                />
                <Input
                  name="user_email"
                  placeholder="Email*"
                  type="email"
                  className="border-gray-300"
                  required
                />
                <Input
                  name="user_phone"
                  placeholder="Phone*"
                  type="tel"
                  className="border-gray-300"
                  required
                />
                <Input
                  name="user_budget"
                  placeholder="Budget Range (USD)*"
                  type="text"
                  className="border-gray-300"
                />
                <Input
                  name="user_country"
                  placeholder="Country*"
                  className="border-gray-300"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message*"
                  className="border-gray-300 h-32"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? "Sending..." : "Send →"}
                </Button>
              </form>
              {message && (
                <p className="mt-4 text-center text-gray-700">{message}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
