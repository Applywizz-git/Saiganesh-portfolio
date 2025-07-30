import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import project1 from '@/assets/floorQA.jpg';
import project2 from '@/assets/MES3.png'
import project3 from '@/assets/banking.jpeg'

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
  });
const projects = [
  {
    id: 1,
    title: 'Factory Floor QA Platform',
    description:
      'Real-time production defect tracking dashboard built with React.js, Kafka, and Spring Boot. Enabled 70% faster reporting and 40% faster incident response.',
    image: project1,
    technologies: ['React.js', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS EC2'],
  
    featured: true,
  },
  {
    id: 2,
    title: 'Digital Manufacturing MES',
    description:
      'Deployed a modular Manufacturing Execution System with sensor event handling using Kafka, WebSockets, and JWT-secured APIs on AWS.',
    image: project2,
    technologies: ['React.js', 'Spring Boot', 'Kafka', 'WebSocket', 'Docker'],
    
    featured: true,
  },
  {
    id: 3,
    title: 'Banking Web Portal',
    description:
      'Revamped legacy banking systems using React + Spring Boot, with real-time fraud alerts via Kafka and Redis. Improved customer onboarding and performance by 45%.',
    image: project3,
    technologies: ['React', 'Spring Boot', 'Kafka', 'Redis', 'Bootstrap'],
    
    featured: false,
  },
];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="projects" className="py-5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent works that showcase my skills in 
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-bounce"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-bounce"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Projects Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={project.id} className="flex-[0_0_100%] md:flex-[0_0_90%] lg:flex-[0_0_80%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-500"
                  >
                    {/* Project Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-poppins font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Projects;