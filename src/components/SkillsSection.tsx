"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiAew } from "react-icons/si";

export default function SkillsSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <FaReact className="h-4 w-4" />,
      skills: [
        { name: "React", level: 95, icon: <FaReact className="h-5 w-5 text-[#61DAFB]" /> },
        { name: "TypeScript", level: 90, icon: <SiTypescript className="h-5 w-5 text-[#3178C6]" /> },
        { name: "Next.js", level: 85, icon: <SiNextdotjs className="h-5 w-5" /> },
        { name: "CSS/SCSS", level: 90, icon: <FaCode className="h-5 w-5 text-[#264de4]" /> },
        { name: "Tailwind CSS", level: 90, icon: <FaCode className="h-5 w-5 text-[#38B2AC]" /> },
        { name: "JavaScript", level: 95, icon: <FaCode className="h-5 w-5 text-[#F7DF1E]" /> },
      ]
    },
    {
      id: "backend",
      label: "Backend",
      icon: <FaNodeJs className="h-4 w-4" />,
      skills: [
        { name: "Node.js", level: 90, icon: <FaNodeJs className="h-5 w-5 text-[#68a063]" /> },
        { name: "Express", level: 85, icon: <SiExpress className="h-5 w-5" /> },
        { name: "RESTful APIs", level: 90, icon: <FaCode className="h-5 w-5 text-[#3c873a]" /> },
        { name: "GraphQL", level: 80, icon: <FaCode className="h-5 w-5 text-[#E535AB]" /> },
        { name: "Authentication", level: 85, icon: <FaCode className="h-5 w-5 text-[#FF6B6B]" /> },
        { name: "Microservices", level: 75, icon: <FaCode className="h-5 w-5 text-[#1E90FF]" /> },
      ]
    },
    {
      id: "database",
      label: "Database",
      icon: <FaDatabase className="h-4 w-4" />,
      skills: [
        { name: "MongoDB", level: 85, icon: <SiMongodb className="h-5 w-5 text-[#4DB33D]" /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="h-5 w-5 text-[#336791]" /> },
        { name: "MySQL", level: 75, icon: <FaDatabase className="h-5 w-5 text-[#4479A1]" /> },
        { name: "Redis", level: 70, icon: <FaDatabase className="h-5 w-5 text-[#DC382D]" /> },
        { name: "Firebase", level: 80, icon: <FaDatabase className="h-5 w-5 text-[#FFCA28]" /> },
        { name: "ORM/ODM", level: 85, icon: <FaDatabase className="h-5 w-5 text-[#00C58E]" /> },
      ]
    },
    {
      id: "devops",
      label: "DevOps",
      icon: <FaTools className="h-4 w-4" />,
      skills: [
        { name: "Git/GitHub", level: 90, icon: <FaCode className="h-5 w-5 text-[#F05032]" /> },
        { name: "Docker", level: 80, icon: <SiDocker className="h-5 w-5 text-[#2496ED]" /> },
        { name: "AWS", level: 75, icon: <SiAew className="h-5 w-5 text-[#FF9900]" /> },
        { name: "CI/CD", level: 80, icon: <FaTools className="h-5 w-5 text-[#40E0D0]" /> },
        { name: "Testing", level: 85, icon: <FaTools className="h-5 w-5 text-[#8A2BE2]" /> },
        { name: "Performance", level: 80, icon: <FaTools className="h-5 w-5 text-[#FF6347]" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've cultivated a diverse skill set across the full development stack. Here's an overview
            of my technical expertise and proficiency levels in various technologies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={`${category.id}-${skill.name}`}
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>

                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
