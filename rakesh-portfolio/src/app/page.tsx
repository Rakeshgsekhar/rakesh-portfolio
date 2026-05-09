"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Server,
  Database,
  Cloud,
  Cpu,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import Image from "next/image";

const projects = [
  {
    title: "TripPilot",
    description:
      "Intelligent travel planning platform that generates optimized trip itineraries using user preferences, destination data, and AI-assisted recommendations. Built with scalable microservices, asynchronous processing, caching, and secure API architecture.",
    highlights: [
      "Spring Boot microservices",
      "JWT authentication & authorization",
      "Scalable REST APIs",
      "Redis caching strategy",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Go",
      "gRPC"
    ],
  },
  {
    title: "Event Driven Notification System",
    description:
      "Kafka-based asynchronous notification processing system designed for scalable event handling and retry management.",
    stack: ["Kafka", "Spring Boot", "Redis", "Docker"],
  },
  {
    title: "Distributed Cache Layer",
    description:
      "Redis-backed caching strategy to improve API response time and reduce database load for high-traffic endpoints.",
    stack: ["Redis", "Java", "Spring Boot"],
  },
];

const skills = [
  {
    icon: <Server size={24} />,
    title: "Backend Engineering",
    items: ["Java, Go", "Spring Boot", "Microservices", "REST APIs, gRPC"],
  },
  {
    icon: <Database size={24} />,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud & DevOps",
    items: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
  },
  {
    icon: <Cpu size={24} />,
    title: "System Design",
    items: ["Scalability", "Caching", "Kafka", "Security"],
  },
];

const calculateExperience = (startYear: number) => {
  return new Date().getFullYear() - startYear;
};

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">RAKESH G SEKHAR</h1>

          <nav className="hidden md:flex gap-10 text-sm text-zinc-400">
            <a href="#about" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#projects" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>
            <a href="#skills" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Skills
            </a>
            <a href="#contact" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center lg:text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-5">
              Backend Engineer
            </p>

            <h1 className="text-5xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1] tracking-tight mb-8 max-w-[720px]">
              Building scalable
              <br />
              backend systems.
            </h1>

            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mb-10">
              Backend-focused software engineer specializing in Spring Boot,
              microservices, Kafka, Redis, and cloud-native architectures.
              Passionate about building reliable, scalable, and production-ready
              systems.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 hover:bg-zinc-200 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
              <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]">
                <p className="text-zinc-500 text-sm mb-2">
                  Currently Building
                </p>

                <h3 className="text-white font-medium">
                  AI Travel Planning Platform
                </h3>
              </div>

              <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]">
                <p className="text-zinc-500 text-sm mb-2">
                  Exploring
                </p>

                <h3 className="text-white font-medium">
                  Event-Driven Architecture
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex gap-6 items-stretch">

              {/* Image */}
              <div className="relative w-[280px] h-[450px] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] backdrop-blur-sm">
                <Image
                  src="/profile.png"
                  alt="Rakesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover object-[center_15%]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Info Card */}
              <div className="w-[360px] border border-white/10 rounded-[28px] p-5 bg-zinc-950/80 backdrop-blur-sm flex flex-col justify-between">

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider mb-3">
                    Current Focus
                  </p>

                  <h3 className="text-3xl font-bold leading-tight mb-8">
                    Scalable Distributed Systems
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-white/10 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm mb-2">Experience</p>
                      <h4 className="text-2xl font-bold">7+ Years</h4>
                    </div>

                    <div className="border border-white/10 rounded-2xl p-4">
                      <p className="text-zinc-500 text-sm mb-2">Specialization</p>
                      <h4 className="text-2xl font-bold">Backend</h4>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  <p className="text-zinc-500 text-sm mb-4">
                    Core Stack
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Java",
                      "Spring Boot",
                      "Kafka",
                      "Redis",
                      "PostgreSQL",
                      "Docker",
                      "GraphQL",
                      "React"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 bg-zinc-950/40"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 py-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
                About
              </p>

              <h2 className="text-4xl md:text-4xl font-bold leading-tight">
                Designing scalable backend systems with a focus on performance, reliability, and clean architecture.
              </h2>
            </div>

            <div>
              <p className="text-zinc-300 leading-relaxed text-lg max-w-2xl">
                I’m a backend-focused software engineer with experience building scalable APIs,
                distributed systems, and cloud-ready applications using Java and Spring Boot.
                I also have experience working with GraphQL services and modern frontend
                integration using React.
                <br /><br />
                I enjoy designing clean architectures, solving performance bottlenecks,
                and building reliable systems that are maintainable in production environments.
                My primary interests include microservices, system design, event-driven
                architecture, caching strategies, and backend scalability.
              </p>
              <div className="mt-14 space-y-8">

                {/* Cisco */}
                <div className="border-l border-white/10 pl-6 relative hover:border-white/30 transition">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6px] top-2 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-lightbold text-white">
                      Cisco Systems India pvt ltd
                    </h3>

                    <p className="text-zinc-500 text-sm">
                      {`2021 — Present · ${calculateExperience(2021)} Years`}
                    </p>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    Building scalable backend services and distributed systems for <b>Webex Analyzer</b>,
                    focused on high-throughput analytics workflows, API performance optimization,
                    asynchronous processing, and production reliability. Contributed to backend
                    architecture improvements, deployment reliability, and large-scale request
                    handling using Java, Spring Boot, Kafka, Redis, and cloud-native engineering practices.
                  </p>
                  <ul className="mt-4 space-y-2 text-zinc-400 text-sm">
                    <li>• Improved request latency by 96% in high-throughput processing flows</li>
                    <li>• Reduced production-critical failures by 95% via automated validation pipelines</li>
                    <li>• Built large-scale load testing tools for backend reliability validation</li>
                  </ul>
                </div>

                {/* IBS Software */}
                <div className="border-l border-white/10 pl-6 relative hover:border-white/30 transition">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6px] top-2 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-lightbold text-white">
                      IBS Software
                    </h3>

                    <p className="text-zinc-500 text-sm">
                      2019 — 2021 · 2 Years
                    </p>
                  </div>

                  <p className="text-zinc-300 leading-relaxed">
                    Contributed to modernization of aviation and travel-domain platforms by
                    migrating legacy systems into Spring Boot microservices. Worked on Backend-for-Frontend
                    (BFF) architecture, scalable API design, GraphQL integration, and micro frontend
                    enablement for enterprise applications.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
      >
        <div className="mb-14">
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
            Projects
          </p>

          <h2 className="text-4xl font-bold">Featured Work</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-3xl p-8 bg-zinc-950 hover:border-white/20 transition"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <ExternalLink size={20} className="text-zinc-500" />
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full text-sm bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 py-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="mb-14">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
              Skills
            </p>

            <h2 className="text-4xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="border border-white/10 rounded-3xl p-6 bg-zinc-950"
              >
                <div className="mb-5 text-zinc-300">{skill.icon}</div>

                <h3 className="text-xl font-semibold mb-5">{skill.title}</h3>

                <div className="space-y-3 text-zinc-400">
                  {skill.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10"
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let’s build scalable and meaningful software.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Open to backend engineering opportunities, scalable system design
            discussions, and impactful software projects.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Rakeshgsekhar"
              target="_blank"
              className="p-4 rounded-full border border-white/10 hover:border-white transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/rakesh-geethakumari-sekhar-498b4024/"
              target="_blank"
              className="p-4 rounded-full border border-white/10 hover:border-white transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://leetcode.com/u/iamRakeshGSekhar/"
              target="_blank"
              className="p-4 rounded-full border border-white/10 hover:border-white transition"
            >
              <SiLeetcode size={22} />
            </a>

            <a
              href="mailto:iam.rakeshgsekhar@gmail.com"
              className="p-4 rounded-full border border-white/10 hover:border-white transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
