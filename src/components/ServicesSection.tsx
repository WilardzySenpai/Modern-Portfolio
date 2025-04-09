"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FaReact, FaDatabase, FaMobileAlt, FaServer, FaDesktop, FaCode } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: <FaReact className="h-10 w-10 text-primary" />,
      description: "Creating responsive, optimized web applications with modern frameworks and technologies.",
      detailedDescription: "From simple landing pages to complex web applications, I deliver solutions that combine aesthetic design with efficient functionality. Using React, Next.js, and other modern frameworks, I create responsive websites that work flawlessly across all devices.",
      features: ["Responsive design", "Performance optimization", "SEO best practices", "Interactive UIs"],
    },
    {
      id: "backend-dev",
      title: "Backend Development",
      icon: <FaServer className="h-10 w-10 text-primary" />,
      description: "Building robust, scalable server-side applications and APIs to power your digital products.",
      detailedDescription: "I develop secure, efficient backend systems that handle complex business logic, user authentication, and data processing. My solutions are designed with scalability in mind, allowing your application to grow with your business.",
      features: ["RESTful APIs", "Database design", "Authentication systems", "Microservices architecture"],
    },
    {
      id: "database",
      title: "Database Design",
      icon: <FaDatabase className="h-10 w-10 text-primary" />,
      description: "Designing efficient database structures for optimal data storage and retrieval.",
      detailedDescription: "I create optimized database schemas that ensure data integrity and efficient operations. Whether working with SQL or NoSQL databases, I implement solutions that balance performance with maintainability.",
      features: ["Schema optimization", "Query performance", "Data migration", "NoSQL & SQL expertise"],
    },
    {
      id: "frontend-dev",
      title: "Frontend Development",
      icon: <FaDesktop className="h-10 w-10 text-primary" />,
      description: "Crafting beautiful, intuitive user interfaces with attention to detail and user experience.",
      detailedDescription: "I transform designs into pixel-perfect interfaces that users love to interact with. Focusing on both aesthetics and functionality, I create frontend experiences that make your application stand out.",
      features: ["UI/UX implementation", "Animation & interaction", "Cross-browser compatibility", "Accessibility"],
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      icon: <FaMobileAlt className="h-10 w-10 text-primary" />,
      description: "Building cross-platform mobile applications using React Native and modern mobile frameworks.",
      detailedDescription: "I develop mobile applications that work seamlessly across iOS and Android platforms. Using cross-platform technologies, I deliver native-like experiences without the overhead of maintaining separate codebases.",
      features: ["Cross-platform apps", "Native functionality", "Offline capabilities", "App store deployment"],
    },
    {
      id: "code-review",
      title: "Code Audit & Optimization",
      icon: <FaCode className="h-10 w-10 text-primary" />,
      description: "Reviewing and refactoring existing codebases to improve performance, readability, and maintainability.",
      detailedDescription: "I analyze existing code to identify bottlenecks, security vulnerabilities, and areas for improvement. Through careful refactoring and optimization, I enhance application performance and code quality.",
      features: ["Performance analysis", "Security auditing", "Code refactoring", "Best practices implementation"],
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Services I Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive development services across the full stack, focusing on
            creating efficient, scalable, and user-friendly digital solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="h-full border border-muted bg-card/50 backdrop-blur flex flex-col">
                    <CardHeader>
                      <div className="mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                      <CardDescription className="text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={`${service.id}-feature-${idx}`} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="ghost" className="w-full" asChild>
                        <a href="#contact" className="flex items-center justify-center gap-2">
                          Request Service <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {service.detailedDescription}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto p-6 border rounded-lg bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-4">
              I'm available for freelance projects and consulting services.
              Let's discuss how I can help you achieve your goals.
            </p>
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
