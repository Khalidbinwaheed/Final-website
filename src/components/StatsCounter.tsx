import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { Code, Users, Trophy, Clock } from 'lucide-react';

const projectsCompleted = 150;
const happyClients = 140; // Increased to maintain high satisfaction ratio
const satisfactionRatio = Math.round((happyClients / projectsCompleted) * 100);
const yearsExperience = 1;

const stats = [
  { icon: Code, value: projectsCompleted, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: happyClients, suffix: '+', label: 'Happy Clients' },
  { icon: Trophy, value: satisfactionRatio, suffix: '%', label: 'Client Satisfaction' },
  { icon: Clock, value: yearsExperience, suffix: '+', label: 'Years Experience' },
];

const StatCard = ({ icon: Icon, value, suffix, label, index }: { 
  icon: typeof Code; 
  value: number; 
  suffix: string; 
  label: string;
  index: number;
}) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <section className="relative py-16 -mt-20 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
