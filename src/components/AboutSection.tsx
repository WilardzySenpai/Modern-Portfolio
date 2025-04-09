"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, MapPin, Globe } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Technologies", value: "20+" },
    { label: "Clients", value: "25+" },
  ];

  const highlights = [
    "Full-stack development with React, Node.js, and TypeScript",
    "Expertise in building scalable and maintainable applications",
    "Strong problem-solving skills and attention to detail",
    "Experience with cloud services and containerization",
    "Knowledge of software development best practices",
    "Passion for continuous learning and improvement",
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left column: About text */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <p className="text-muted-foreground mb-6">
              Hi there! I'm a dedicated full-stack developer with a passion for creating elegant,
              efficient, and user-centered digital solutions. I enjoy taking on complex problems and
              turning them into simple, beautiful interfaces with clean and efficient back-end systems.
            </p>

            <p className="text-muted-foreground mb-6">
              My journey in web development started over 5 years ago, and since then, I've worked on
              a variety of projects, from small business websites to complex enterprise applications.
              I'm constantly exploring new technologies and methodologies to enhance my skills and
              deliver better solutions.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={`highlight-${index}`}
                  className="flex items-start gap-2 w-full md:w-[calc(50%-0.5rem)]"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm">Available for freelance</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm">English, Spanish</span>
              </div>
            </div>
          </motion.div>

          {/* Right column: Stats and skills */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={`stat-${index}`} className="bg-card/50 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 backdrop-blur overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">My Development Journey</h3>
                <div className="space-y-4">
                  <div className="relative pl-8 pb-4 border-l border-muted">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                    <div className="font-medium">Senior Full-Stack Developer</div>
                    <div className="text-sm text-muted-foreground">2021 - Present</div>
                    <div className="text-sm mt-1">
                      Leading development of enterprise web applications and mentoring junior developers.
                    </div>
                  </div>

                  <div className="relative pl-8 pb-4 border-l border-muted">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                    <div className="font-medium">Web Developer</div>
                    <div className="text-sm text-muted-foreground">2018 - 2021</div>
                    <div className="text-sm mt-1">
                      Worked on various client projects focusing on front-end and back-end integration.
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1"></div>
                    <div className="font-medium">Junior Developer</div>
                    <div className="text-sm text-muted-foreground">2017 - 2018</div>
                    <div className="text-sm mt-1">
                      Started my career working on website maintenance and small feature development.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
