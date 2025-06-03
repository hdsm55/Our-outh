import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Users, Globe, Zap, ArrowRight, 
  Calendar, MapPin, Award, Briefcase, Heart, Target
} from 'lucide-react';
import testimonialData from '../data/testimonials.json';
import statsData from '../data/stats.json';
import eventsData from '../data/events.json';
import projectsData from '../data/projects.json';
import Meta from '../components/Meta';
import ImageLoader from '../components/ImageLoader';

const values = [
  {
    key: 'leadership',
    icon: Users,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    key: 'diversity',
    icon: Globe,
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg'
  },
  {
    key: 'impact',
    icon: Zap,
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg'
  }
];

const partners = [
  { name: 'UNICEF', logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg' },
  { name: 'UNESCO', logo: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg' },
  { name: 'WHO', logo: 'https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg' },
  { name: 'UNDP', logo: 'https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg' },
  { name: 'World Bank', logo: 'https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg' }
];

const whyUsPoints = [
  { icon: Award, key: 'experience' },
  { icon: Briefcase, key: 'programs' },
  { icon: Heart, key: 'community' },
  { icon: Target, key: 'impact' }
];

function Home() {
  const { t, i18n } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  // Refs for scroll animations
  const heroRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const valuesRef = React.useRef(null);
  const whyUsRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const eventsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const partnersRef = React.useRef(null);

  // InView hooks for animations
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.2 });
  const isValuesInView = useInView(valuesRef, { once: true, threshold: 0.2 });
  const isWhyUsInView = useInView(whyUsRef, { once: true, threshold: 0.2 });
  const isProjectsInView = useInView(projectsRef, { once: true, threshold: 0.2 });
  const isEventsInView = useInView(eventsRef, { once: true, threshold: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.2 });
  const isPartnersInView = useInView(partnersRef, { once: true, threshold: 0.2 });

  // Auto-advance testimonials
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => 
        prev === testimonialData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Get upcoming events
  const upcomingEvents = React.useMemo(() => {
    const now = new Date();
    return eventsData.events
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 2);
  }, []);

  // Format date based on current language
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(dateString));
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Meta
        title={t('hero.title')}
        description={t('hero.subtitle')}
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      />

      {/* Hero Section */}
<section
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  dir={i18n.dir()}
>
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
    <div className="hidden md:block">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="md:hidden">
      <img 
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
        alt="Youth activities"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="relative z-20 container mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        {t('hero.title', 'منصة شبابية عالمية')}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed">
        {t('hero.subtitle', 'نربط الشباب حول العالم ونمكّنهم من القيادة والتأثير')}
      </p>
      <Link to="/join">
        <motion.button
          className="btn btn-primary btn-lg gap-2 px-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('cta.join', 'انضم إلينا')}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </Link>
    </motion.div>
  </div>

  <motion.div 
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center z-20"
  animate={{ 
    y: [0, 10, 0],
    opacity: [0.6, 1, 0.6]
  }}
  transition={{ 
    y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }}
>
  <p className="text-white text-sm mb-1">{t('hero.scroll_hint', 'مرر لأسفل لمعرفة المزيد')}</p>
  <ChevronDown className="w-6 h-6 text-white mx-auto" />
</motion.div>

</section>


      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-24 bg-base-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors"
              >
                <div className="text-5xl font-bold text-primary mb-4">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-xl text-base-content/80">
                  {stat.label[i18n.language]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-24 bg-base-200"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('values.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                  <ImageLoader
                    src={value.image}
                    alt={t(`values.${value.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 text-white">
                      <value.icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">
                        {t(`values.${value.key}.title`)}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-base-content/80 text-lg">
                  {t(`values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        ref={whyUsRef}
        className="py-24 bg-base-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('why_us.title', 'Why Choose Us')}
              </h2>
              <p className="text-xl text-base-content/80 mb-8">
                {t('why_us.subtitle', 'We are committed to empowering youth through innovative programs and global initiatives.')}
              </p>
              <div className="space-y-6">
                {whyUsPoints.map((point, index) => (
                  <motion.div
                    key={point.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <point.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {t(`why_us.${point.key}.title`)}
                      </h3>
                      <p className="text-base-content/70">
                        {t(`why_us.${point.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <ImageLoader
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                alt="Youth empowerment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-24 bg-base-200"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projects.featured_title', 'Featured Projects')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('projects.featured_subtitle', 'Discover some of our impactful initiatives around the world')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <ImageLoader
                  src={project.image}
                  alt={project.title[i18n.language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title[i18n.language]}
                  </h3>
                  <p className="text-white/80 line-clamp-2">
                    {project.description[i18n.language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                className="btn btn-primary btn-lg gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('projects.view_all')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events Preview */}
      <section
        ref={eventsRef}
        className="py-24 bg-base-100"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('events.upcoming_title', 'Upcoming Events')}
            </h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              {t('events.upcoming_subtitle', 'Join our upcoming events and be part of the change')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
                    <Calendar className="w-6 h-6 mb-1" />
                    <span className="text-sm font-medium">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {event.title[i18n.language]}
                    </h3>
                    <p className="text-base-content/70 mb-4">
                      {event.description[i18n.language]}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-base-content/60">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {t('events.time')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/events">
              <button className="btn btn-primary btn-lg gap-2">
                {t('events.view_all', 'View All Events')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-base-200"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('testimonials.title')}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {testimonialData.testimonials.map((testimonial, index) => (
                index === currentTestimonial && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-base-100 rounded-2xl shadow-xl p-8"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <ImageLoader
                          src={testimonial.image}
                          alt={testimonial.name[i18n.language]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <blockquote className="text-xl italic mb-4">
                          "{testimonial.quote[i18n.language]}"
                        </blockquote>
                        <div className="font-semibold text-primary">
                          {testimonial.name[i18n.language]}
                        </div>
                        <div className="text-base-content/60">
                          {testimonial.role[i18n.language]}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        ref={partnersRef}
        className="py-24 bg-base-100"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('partners.title', 'Our Partners')}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/2] relative overflow-hidden rounded-lg">
                  <ImageLoader
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('final_cta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('final_cta.subtitle')}
            </p>
            <Link to="/join">
              <motion.button
                className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('final_cta.button')}
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;