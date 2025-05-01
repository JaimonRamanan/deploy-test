import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';

// Define types for our projects
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for tracking sales, inventory, and customer analytics.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    imageUrl: '/api/placeholder/600/400',
  },
  {
    id: 'project2',
    title: 'Weather Application',
    description: 'Real-time weather forecasting app with location-based services.',
    tags: ['React', 'Node.js', 'API Integration', 'Geolocation'],
    imageUrl: '/api/placeholder/600/400',
  },
  {
    id: 'project3',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates.',
    tags: ['Next.js', 'Firebase', 'Authentication', 'Real-time Database'],
    imageUrl: '/api/placeholder/600/400',
  },
];

// Skills component
const Skills = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git',
    'REST APIs', 'GraphQL', 'Database Design', 'UI/UX',
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-slate-800 text-white rounded-md py-2 px-4 text-center text-sm"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Hello, I&apos;m <span className="text-blue-600">Alex</span>
            </h1>
            <p className="text-xl text-slate-700">
              Full Stack Developer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition duration-300"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 hover:border-slate-400 px-6 py-3 rounded-md text-slate-700 hover:text-slate-900 transition duration-300"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-slate-700 hover:text-blue-600 transition duration-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-slate-700 hover:text-blue-600 transition duration-300"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/api/placeholder/400/400"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-700 mb-4">
                I&apos;m a passionate Full Stack Developer with over 5 years of experience building web applications. I focus on creating performant, accessible, and user-friendly digital experiences.
              </p>
              <p className="text-slate-700 mb-4">
                Throughout my career, I&apos;ve worked with various technologies and methodologies, always striving to keep up with the latest industry trends while maintaining a focus on writing clean, maintainable code.
              </p>
              <p className="text-slate-700">
                When I&apos;m not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">My Skills</h3>
              <Skills />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 transition duration-300"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{project.title}</h3>
                    <p className="text-slate-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}