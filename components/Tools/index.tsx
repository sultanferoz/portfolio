"use client";
import React from "react";
import {
  Code as VSCode,
  LayoutDashboard as ReactIcon,
  Layers as NextJS,
  Terminal as NodeJS,
  Package as Npm,
  Github,
  Cloud as Vercel,
  Database as Firebase,
  Server as TailwindCSS,
  FileCode as TypeScript,
  Globe as ChromeDevTools,
  GitBranch as Git,
  LucideIcon,
} from "lucide-react";

type ToolType = {
  name: string;
  percentage: string;
  color: string;
  icon: LucideIcon;
};

const tools: ToolType[] = [
  { name: "VS Code", percentage: "98%", color: "#007ACC", icon: VSCode },
  { name: "React", percentage: "95%", color: "#61DAFB", icon: ReactIcon },
  { name: "Next.js", percentage: "90%", color: "#000000", icon: NextJS },
  { name: "Node.js", percentage: "85%", color: "#68A063", icon: NodeJS },
  { name: "TypeScript", percentage: "88%", color: "#3178C6", icon: TypeScript },
  {
    name: "Tailwind CSS",
    percentage: "92%",
    color: "#38BDF8",
    icon: TailwindCSS,
  },
  { name: "NPM", percentage: "90%", color: "#CB3837", icon: Npm },
  { name: "Git & GitHub", percentage: "96%", color: "#F05032", icon: Git },
  { name: "Vercel", percentage: "87%", color: "#000000", icon: Vercel },
  { name: "Firebase", percentage: "82%", color: "#FFCA28", icon: Firebase },
  {
    name: "Chrome DevTools",
    percentage: "94%",
    color: "#4285F4",
    icon: ChromeDevTools,
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 fade-in-up">
          My Frontend Toolkit
        </h2>
        <h3 className="text-2xl text-[#FFA500] text-center mb-12 fade-in-up">
          Tools I Use to Build Amazing Web Apps
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="relative text-center fade-in-up p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating Icon */}
                <div className="icon-bounce">
                  <Icon
                    className="w-12 h-12 mx-auto mb-4"
                    style={{ color: tool.color }}
                  />
                </div>

                {/* Tool Name */}
                <p className="font-medium text-lg mb-2">{tool.name}</p>

                {/* Progress Bar Animation */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
                  <div
                    className="h-full absolute left-0 top-0 animate-progress"
                    style={{
                      backgroundColor: tool.color,
                      width: tool.percentage,
                      transition: "width 1.5s ease-in-out",
                    }}
                  ></div>
                </div>

                {/* Percentage Text */}
                <p className="text-sm text-gray-600 mt-2 opacity-80">
                  {tool.percentage} Proficiency
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
