// ...existing code...
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const internships = [
  {
    title: 'Frontend Developer Intern',
    type: 'Internship',
    location: 'Remote',
    experience: '0-1 years',
    description: 'Assist in developing user-facing features using React and Tailwind CSS.',
  },
   {
    title: 'UI/UX Design Intern',
    type: 'Internship',
    location: 'Remote',
    experience: '0-1 years',
    description: 'Collaborate with designers to create intuitive and visually appealing interfaces.',
  },
];

const jobs = [
   {
    title: 'Flutter Developer',
    type: 'Contract',
    location: 'Remote',
    experience: '1+ years',
    description: 'Develop cross-platform mobile applications using Flutter and Dart.',
  },
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Remote',
    experience: '1+ years',
    description: 'Build and maintain web applications using MongoDB, Express, React, and Node.js.',
  },
];

const Career = () => {
  const handleApply = (job: { title: string }) => {
    const subject = `Application: ${job.title}`;
    const body = `Hello,\n\nI would like to apply for the "${job.title}" position.\n\nRegards,\n[Your Name]`;
    window.location.href = `mailto:codecraftpakistan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSendResume = () => {
    const subject = 'Resume Submission';
    const body = 'Hello,\n\nPlease find my resume attached.\n\nRegards,\n[Your Name]';
    window.location.href = `mailto:codecraftpakistan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="career" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Careers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Be part of a team that's shaping the future of technology in Pakistan. 
            We offer competitive salaries, growth opportunities, and a great work culture.
          </p>
        </motion.div>

        {/* Internships Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Internships
          </h3>
          <div className="space-y-4">
            {internships.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="glassOutline"
                    className="w-full sm:w-auto shrink-0 mt-4 lg:mt-0 group/btn"
                    onClick={() => handleApply(job)}
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Jobs Section */}
        <div className="max-w-4xl mx-auto space-y-4">
           <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Full-Time Jobs
          </h3>
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <Button
                  variant="glassOutline"
                  className="w-full sm:w-auto shrink-0 mt-4 lg:mt-0 group/btn"
                  onClick={() => handleApply(job)}
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <Button
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto"
            onClick={handleSendResume}
          >
            Send Your Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
// ...existing code...