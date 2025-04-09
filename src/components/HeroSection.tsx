"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background via-muted/20 -z-10" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9, 1],
              opacity: [0, 0.2, 0.1, 0.2],
              x: Math.random() * 10 - 5,
              y: Math.random() * 10 - 5,
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary mb-3">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Building <span className="text-primary">innovative</span> digital experiences
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I specialize in crafting elegant solutions with both front-end finesse and back-end robustness.
            From responsive interfaces to scalable server architectures, I bring ideas to life with clean,
            maintainable code.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-muted p-1">
            <div className="h-full w-full rounded-xl bg-muted/80 backdrop-blur flex items-center justify-center overflow-hidden">
              <div className="text-6xl p-8 text-center">
                {/* Replace with your actual image or avatar */}
                <div className="h-full w-full rounded-full bg-primary/30 aspect-square flex items-center justify-center text-center">
                  <span className="text-4xl font-bold">YOUR<br/>PHOTO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code snippet decoration */}
          <motion.div
            className="absolute -bottom-6 -left-6 p-4 rounded-lg bg-background border shadow-md max-w-[200px] hidden md:block"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <pre className="text-xs font-mono overflow-hidden">
              <code className="text-muted-foreground">
                <span className="text-green-500">function</span> <span className="text-blue-500">develop</span>() {"{"}
                <br/>  <span className="text-purple-500">return</span> <span className="text-amber-500">"solutions"</span>;
                <br/>{"}"}
              </code>
            </pre>
          </motion.div>

          {/* Tech stack decoration */}
          <motion.div
            className="absolute -top-6 -right-6 p-4 rounded-lg bg-background border shadow-md hidden md:flex gap-2 flex-wrap max-w-[180px] justify-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {["React", "Node.js", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
