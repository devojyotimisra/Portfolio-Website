"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  Code,
  Trophy,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
  Brain,
  Database,
  Cpu,
  Globe,
  Target,
  Rocket,
  ExternalLink,
  Play,
  Pause,
  Zap,
  Eye,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [isProjectsAutoPlay, setIsProjectsAutoPlay] = useState(true)
  const { scrollYProgress } = useScroll()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    if (!isProjectsAutoPlay) return
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [isProjectsAutoPlay])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "C/C++", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-green-400 to-green-600" },
        { name: "SQL", level: 80, color: "from-purple-400 to-purple-600" },
      ],
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: 75, color: "from-red-400 to-red-600" },
        { name: "TensorFlow", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "Scikit-Learn", level: 85, color: "from-teal-400 to-teal-600" },
        { name: "HuggingFace", level: 80, color: "from-pink-400 to-pink-600" },
      ],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        { name: "Pandas/NumPy", level: 90, color: "from-indigo-400 to-indigo-600" },
        { name: "OpenCV", level: 70, color: "from-cyan-400 to-cyan-600" },
        { name: "NLTK", level: 75, color: "from-emerald-400 to-emerald-600" },
        { name: "Matplotlib", level: 85, color: "from-violet-400 to-violet-600" },
      ],
    },
    {
      title: "Development Tools",
      icon: Globe,
      skills: [
        { name: "Docker", level: 70, color: "from-blue-400 to-blue-600" },
        { name: "Git", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "FastAPI", level: 80, color: "from-green-400 to-green-600" },
        { name: "Streamlit", level: 85, color: "from-red-400 to-red-600" },
      ],
    },
  ]

  const roadmapData = [
    {
      year: "2022",
      title: "Foundation Building",
      description: "Started journey in Computer Science",
      icon: GraduationCap,
      achievements: ["Enrolled in IIT Madars and Burdwan University", "Mastered C & Python fundamentals", "Built a few initial projects"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2023",
      title: "AI/ML Discovery",
      description: "Discovered passion for Artificial Intelligence",
      icon: Brain,
      achievements: ["Started Python programming", "Learned ML basics", "First AI project"],
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Research Beginnings",
      description: "Started research internships",
      icon: Briefcase,
      achievements: ["Research Intern at BU", "Authorship Attribution project", "91.4% F1-score achievement"],
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2025",
      title: "Advanced Research",
      description: "Deep learning and specialization",
      icon: Rocket,
      achievements: ["Research Intern at IIT Roorkee", "98.7% accuracy on hyperspectral data", "Explorent UNet, RNet, CNN's and much more"],
      color: "from-orange-500 to-red-500",
    },
    {
      year: "Future",
      title: "Innovation & Impact",
      description: "Leading AI research and development",
      icon: Target,
      achievements: ["PhD aspirations", "Research publications", "Industry impact"],
      color: "from-violet-500 to-purple-500",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "NyaayVeer",
      subtitle: "AI-Powered Legal Assistant",
      description:
        "Revolutionary legal assistance platform leveraging advanced NLP and machine learning algorithms to provide intelligent legal guidance, document analysis, and case research automation.",
      longDescription:
        "NyaayVeer represents a breakthrough in legal technology, combining state-of-the-art natural language processing with comprehensive legal databases. The platform uses transformer-based models to understand complex legal queries and provides contextually relevant advice.",
      image: "/project-1.png?height=400&width=600",
      github: "https://github.com/devojyotimisra/nyaayveer",
      tech: ["Python", "NLP", "FastAPI", "React", "Transformers", "Legal AI"],
      features: ["Document Analysis", "Case Research", "Legal Query Processing", "Automated Compliance"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "VoiceCrux",
      subtitle: "Next-Gen Voice Processing",
      description:
        "Advanced voice processing application featuring real-time speech recognition, natural language understanding, and intelligent voice synthesis with multi-language support.",
      longDescription:
        "VoiceCrux pushes the boundaries of voice technology by integrating cutting-edge speech recognition with advanced NLU capabilities. The system processes voice commands in real-time and provides intelligent responses.",
      image: "/project-2.png?height=400&width=600",
      github: "https://github.com/devojyotimisra/voicecrux",
      tech: ["Python", "Speech Recognition", "ML", "Audio Processing", "Deep Learning", "NLU"],
      features: ["Real-time Processing", "Multi-language Support", "Voice Synthesis", "Noise Reduction"],
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      id: 3,
      title: "BingeBuddy",
      subtitle: "Smart Entertainment AI",
      description:
        "Intelligent entertainment recommendation system using advanced collaborative filtering, content-based algorithms, and deep learning to predict user preferences with 94% accuracy.",
      longDescription:
        "BingeBuddy revolutionizes content discovery through sophisticated recommendation algorithms that learn from user behavior patterns, content metadata, and social signals to deliver personalized entertainment suggestions.",
      image: "/project-3.png?height=400&width=600",
      github: "https://github.com/devojyotimisra/bingebuddy",
      tech: ["Python", "Recommendation Systems", "ML", "Data Analysis", "Deep Learning", "API"],
      features: ["Personalized Recommendations", "Social Integration", "Trend Analysis", "Multi-platform Support"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 120
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded-full blur-sm pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-xl border-b border-white/10 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              Devojyoti Misra
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["hero", "roadmap", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-all duration-300 capitalize relative group px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-8 transition-all duration-300" />
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {["hero", "roadmap", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 capitalize w-full text-left p-3 rounded-lg hover:bg-white/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mb-12 lg:mb-16"
              >
                <div className="w-56 h-56 lg:w-64 lg:h-64 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                  <img
                    src="/profile-pic.png?height=256&width=256"
                    alt="Devojyoti Misra"
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Devojyoti Misra
                </h1>
                <div className="text-2xl lg:text-3xl text-gray-300 mb-4 flex items-center justify-center gap-4">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <span>AI/ML Developer & Researcher</span>
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Passionate about pushing the boundaries of Artificial Intelligence and Machine Learning. Currently
                  researching hyperspectral image classification and authorship attribution with cutting-edge deep
                  learning techniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection("projects")}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm"
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1BroJKia50IyA3O72gr1eAfv4IxA2oSSB", "_blank")
                  }
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-6 justify-center"
              >
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/devojyotimisra", color: "hover:text-blue-400" },
                  { icon: Github, href: "https://github.com/devojyotimisra", color: "hover:text-gray-400" },
                  { icon: Code, href: "https://leetcode.com/u/algo-geek", color: "hover:text-yellow-400" },
                  {
                    icon: Trophy,
                    href: "https://codeforces.com/profile/devojyotimisra",
                    color: "hover:text-green-400",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From curious beginner to AI researcher – here's how my passion for technology evolved into expertise
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full" />

              <div className="space-y-24">
                {roadmapData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left">
                      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                            <div className={`p-4 rounded-full bg-gradient-to-r ${item.color}`}>
                              <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center sm:text-left">
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                              <p className="text-purple-400 font-semibold text-lg">{item.year}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-6 text-lg">{item.description}</p>
                          <div className="space-y-3">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center gap-3 justify-center sm:justify-start">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="text-gray-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Circle Icon */}
                    <div className="relative z-10 my-6 md:my-0 flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center border-4 border-black`}
                      >
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Spacer on larger screens only */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section id="skills" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A comprehensive toolkit spanning AI/ML, data science, and software development
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      </div>

                      <div className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="relative">
                              <div className="w-full bg-gray-700/50 backdrop-blur-sm rounded-full h-3 border border-white/10">
                                <motion.div
                                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
                Innovative solutions at the intersection of AI, machine learning, and real-world applications
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsProjectsAutoPlay(!isProjectsAutoPlay)}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  {isProjectsAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeProject ? "bg-purple-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                      <div className="relative overflow-hidden group h-64 lg:h-full">
                        <img
                          src={projects[activeProject].image}
                          alt={projects[activeProject].title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].gradient} opacity-20 mix-blend-overlay`}
                        />
                      </div>

                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            {projects[activeProject].title}
                          </h3>
                          <p
                            className={`text-lg bg-gradient-to-r ${projects[activeProject].gradient} bg-clip-text text-transparent font-semibold mb-4`}
                          >
                            {projects[activeProject].subtitle}
                          </p>
                          <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                            {projects[activeProject].description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
                              <Zap className="w-4 h-4 text-yellow-400" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {projects[activeProject].features.slice(0, 4).map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                  <span className="text-gray-300 text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-2 text-sm">Tech Stack</h4>
                            <div className="flex flex-wrap gap-1">
                              {projects[activeProject].tech.slice(0, 6).map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="border-purple-500/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm text-xs px-2 py-1"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              size="sm"
                              className={`bg-gradient-to-r ${projects[activeProject].gradient} hover:opacity-90 text-white transition-all duration-300 transform hover:scale-105 flex-1`}
                              onClick={() => window.open(projects[activeProject].github, "_blank")}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Source
                            </Button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-6 gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${index === activeProject
                    ? "ring-2 ring-purple-400 scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  whileHover={{ y: -3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold text-center px-1">{project.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Interested in collaboration, research opportunities, or just want to chat about AI? I'd love to hear
                from you!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open("mailto:devojyotimisra1@gmail.com", "_blank")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm"
                  onClick={() => window.open("https://linkedin.com/in/devojyotimisra", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Devojyoti Misra</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
