"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Layers, Server, Database } from "lucide-react";
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

type ProjectType = "all" | "frontend" | "backend" | "fullstack";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: ProjectType;
  repoUrl: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectType>("all");

  const projects: Project[] = [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=764&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      type: "fullstack",
      repoUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
    },
    {
      id: "project-2",
      title: "Task Management Dashboard",
      description: "A Kanban-style task management application with drag-and-drop interface and team collaboration features.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=774&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Redux", "Firebase"],
      type: "frontend",
      repoUrl: "https://github.com/yourusername/task-dashboard",
      liveUrl: "https://tasks-app.example.com",
    },
    {
      id: "project-3",
      title: "RESTful API Service",
      description: "A robust backend service providing RESTful endpoints for a social media application.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      type: "backend",
      repoUrl: "https://github.com/yourusername/api-service",
    },
    {
      id: "project-4",
      title: "Weather Forecast App",
      description: "A weather application that provides real-time weather data and forecasts based on location.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=765&auto=format&fit=crop",
      tags: ["React", "API Integration", "CSS"],
      type: "frontend",
      repoUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app.example.com",
    },
    {
      id: "project-5",
      title: "Content Management System",
      description: "A full-stack CMS with user roles, content creation, and publishing workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
      type: "fullstack",
      repoUrl: "https://github.com/yourusername/cms-platform",
      liveUrl: "https://cms-demo.example.com",
    },
    {
      id: "project-6",
      title: "Authentication Microservice",
      description: "A secure authentication and authorization service with OAuth integration.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop",
      tags: ["Node.js", "Express", "JWT", "OAuth", "Redis"],
      type: "backend",
      repoUrl: "https://github.com/yourusername/auth-service",
    },
  ];

  const filterIcons = {
    all: <Layers className="h-4 w-4" />,
    frontend: <Code className="h-4 w-4" />,
    backend: <Server className="h-4 w-4" />,
    fullstack: <Database className="h-4 w-4" />,
  };

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my projects showcasing various technologies and solutions I've
            built. Browse through front-end, back-end, and full-stack applications.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <Tabs defaultValue="all" value={filter} onValueChange={(value) => setFilter(value as ProjectType)}>
            <TabsList>
              {(Object.keys(filterIcons) as ProjectType[]).map((type) => (
                <TabsTrigger key={type} value={type} className="capitalize flex items-center gap-2">
                  {filterIcons[type]}
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden flex flex-col border border-muted bg-card/50 backdrop-blur">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="capitalize">{project.type}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={`${project.id}-${tag}`} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
