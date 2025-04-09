"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  credentialLink?: string;
}

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      id: "cert-1",
      title: "Full-Stack Web Development",
      issuer: "Udacity",
      date: "June 2022",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1180&auto=format&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      credentialLink: "https://example.com/credential/123",
    },
    {
      id: "cert-2",
      title: "Advanced React & Redux",
      issuer: "Coursera",
      date: "March 2022",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1170&auto=format&fit=crop",
      skills: ["React", "Redux", "Redux Toolkit", "React Router"],
      credentialLink: "https://example.com/credential/456",
    },
    {
      id: "cert-3",
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1170&auto=format&fit=crop",
      skills: ["AWS", "Lambda", "S3", "DynamoDB", "CloudFormation"],
      credentialLink: "https://example.com/credential/789",
    },
    {
      id: "cert-4",
      title: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "August 2022",
      image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1170&auto=format&fit=crop",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing"],
      credentialLink: "https://example.com/credential/101",
    },
    {
      id: "cert-5",
      title: "TypeScript Professional",
      issuer: "Microsoft",
      date: "October 2022",
      image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=1061&auto=format&fit=crop",
      skills: ["TypeScript", "Advanced Types", "Generics", "Type Guards"],
      credentialLink: "https://example.com/credential/112",
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Certifications & Credentials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm committed to continuous learning and professional development. Here are some of the
            certifications I've earned to enhance my skills and expertise.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {certificates.map((cert) => (
              <CarouselItem key={cert.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden border border-muted bg-card/50 backdrop-blur h-full">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {cert.skills.map((skill) => (
                          <Badge key={`${cert.id}-${skill}`} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {cert.credentialLink && (
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5"
                          >
                            View Credential <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond formal certifications, I'm constantly expanding my knowledge through online courses,
            workshops, and hands-on projects to stay current with the latest technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
