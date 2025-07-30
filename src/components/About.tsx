  import { useEffect, useRef } from 'react';
  import { motion } from 'framer-motion';
  import CountUp from 'react-countup';
  import { Code2, Database, Globe, Smartphone } from 'lucide-react';

  const About = () => {
    const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 12, label: 'Projects Accomplished', suffix: '+' },
    { number: 6, label: 'Years Experience', suffix: '+' },
    { number: 95, label: 'Production Uptime', suffix: '%' },
    { number: 20, label: 'Tech Stack Tools', suffix: '+' },
  ];


    const skills = [
    { name: 'Frontend (React.js, Tailwind)', percentage: 90, icon: Globe },
    { name: 'Backend (Java, Spring Boot)', percentage: 95, icon: Database },
    { name: 'Cloud & DevOps (AWS, Docker)', percentage: 85, icon: Code2 },
    { name: 'Microservices & Kafka', percentage: 88, icon: Smartphone },
  ];


    const experiences = [
    {
      year: 'Feb 2024 - Present',
      title: 'Java Full Stack Developer',
      company: 'Encore, Illinois',
      description:
        'Built real-time defect tracking and QA dashboards using Spring Boot, React.js, Kafka, and WebSockets on AWS.',
    },
    {
      year: 'Jun 2021 - Aug 2023',
      title: 'Full Stack Developer',
      company: 'EVCO Plastics, Wisconsin',
      description:
        'Digitized factory-floor reporting systems using React, Spring Boot, and Kafka. Improved QA workflows and CI/CD pipelines.',
    },
    {
      year: 'Nov 2019 - May 2021',
      title: 'Java Full Stack Developer',
      company: 'Independent Bank, Michigan',
      description:
        'Modernized banking apps with React, Kafka, and Redis. Enhanced fraud detection and real-time transaction monitoring.',
    },
    {
      year: 'Oct 2018 - Oct 2019',
      title: 'Full Stack Developer',
      company: 'Kinara Capital, Bengaluru',
      description:
        'Developed digital lending platform with Aadhaar/PAN API integration, MongoDB, and Spring microservices.',
    },
  ];


    return (
      <section id="about" className="py-5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Java Full Stack Developer with 6+ years’ experience building scalable apps using Spring Boot, React.js,
              and AWS—focused on secure APIs, responsive UIs, and real-time business solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={index * 0.2}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-poppins font-bold text-center mb-12">
              Technical <span className="text-secondary">Skills</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-glow-secondary transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-primary mr-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground">{skill.percentage}%</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mb-20"
>
  <h3 className="text-3xl font-poppins font-bold text-center mb-12">
    Education <span className="text-primary">Background</span>
  </h3>

  <div className="space-y-8 max-w-full mx-auto">
    {/* Master's Degree */}
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h4 className="text-xl font-bold text-foreground">
          Master of Science in Operations Management & Information Technology
        </h4>
        <span className="text-sm font-semibold text-muted-foreground">
          Aug 2023 - May 2025
        </span>
      </div>
      <p className="text-muted-foreground">
        Northern Illinois University, Chicago, IL
      </p>
    </div>

    {/* Bachelor's Degree */}
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h4 className="text-xl font-bold text-foreground">
          Bachelor of Technology in Mechanical Engineering
        </h4>
        <span className="text-sm font-semibold text-muted-foreground">
          Oct 2017 - Jun 2021
        </span>
      </div>
      <p className="text-muted-foreground">
        Vignan Institute of Information and Technology, India
      </p>
    </div>
  </div>
</motion.div>


          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-poppins font-bold text-center mb-12">
              Professional <span className="text-accent">Journey</span>
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:shadow-glow-accent transition-all duration-300 hover-bounce">
                      <span className="text-sm font-semibold text-accent">{exp.year}</span>
                      <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default About;