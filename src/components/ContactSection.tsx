"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you for your message! I'll get back to you soon.", {
      description: "Your message has been successfully sent.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const contacts = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "yourname@example.com",
      link: "mailto:yourname@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "San Francisco, CA",
    },
    {
      icon: <FaDiscord className="h-5 w-5 text-primary" />,
      label: "Discord",
      value: "username#1234",
    },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Fill out the form below or reach out through one of my contact channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border border-muted bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-md border border-muted bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-md border border-muted bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-3 py-2 rounded-md border border-muted bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-3 py-2 rounded-md border border-muted bg-background/60 resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending Message...</>
                    ) : (
                      <><Send className="mr-2 h-4 w-4" /> Send Message</>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-2">
                    I'll respond to your message as soon as possible!
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full flex flex-col gap-6">
              <Card className="border border-muted bg-card/50 backdrop-blur flex-grow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {contacts.map((contact, index) => (
                      <div key={`contact-${index}`} className="flex items-start gap-3">
                        <div className="bg-muted/50 p-2 rounded-md">
                          {contact.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-muted bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Connect with Me</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={`social-${index}`}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2 p-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <div className="p-2 rounded-full bg-muted/50">
                          {social.icon}
                        </div>
                        <span className="text-xs font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground">
                <p>Available for freelance opportunities</p>
                <p className="font-medium">Let's create something amazing together!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
