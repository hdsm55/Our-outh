import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Award, Users, Heart, Globe, Target, ArrowRight, MapPin, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import timelineData from '../data/timeline.json';
import statsData from '../data/stats.json';
import Meta from '../components/Meta';
import ImageLoader from '../components/ImageLoader';

const values = [
  {
    icon: Heart,
    title: 'values.leadership.title',
    description: 'values.leadership.description',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    icon: Globe,
    title: 'values.diversity.title',
    description: 'values.diversity.description',
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg'
  },
  {
    icon: Target,
    title: 'values.impact.title',
    description: 'values.impact.description',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg'
  }
];

const missionPoints = [
  {
    icon: Star,
    title: 'about.mission.empower.title',
    description: 'about.mission.empower.description'
  },
  {
    icon: Globe,
    title: 'about.mission.connect.title',
    description: 'about.mission.connect.description'
  },
  {
    icon: Zap,
    title: 'about.mission.innovate.title',
    description: 'about.mission.innovate.description'
  }
];

export default function About() {
  const { t, i18n } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const currentLanguage = i18n.language;

  return (
    <>
      <Meta
        title={t('about.title', 'About Us')}
        description={t('about.description', 'Learn about our mission, history, and impact in youth empowerment')}
      />
      
      <div className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <div className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply" />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {t('about.hero.title', 'Empowering Youth Globally')}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {t('about.hero.subtitle', 'Building bridges across cultures, fostering leadership, and creating positive change')}
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg bg-white text-primary hover:bg-white/90 gap-2"
                >
                  {t('about.hero.cta_primary', 'Join Our Mission')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-lg btn-outline text-white hover:bg-white hover:text-primary"
                >
                  {t('about.hero.cta_secondary', 'Learn More')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-24 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('about.mission.title', 'Our Mission')}
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('about.mission.subtitle', 'Dedicated to empowering youth through education, leadership, and community engagement')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-base-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {t(point.title)}
                  </h3>
                  <p className="text-base-content/80">
                    {t(point.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('values.title', 'Our Core Values')}
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('values.subtitle', 'The principles that guide our mission')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                    <ImageLoader
                      src={value.image}
                      alt={t(value.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-4 text-white">
                        <value.icon className="w-8 h-8" />
                        <h3 className="text-2xl font-bold">
                          {t(value.title)}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-base-content/80 text-lg">
                    {t(value.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-24 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('stats.title', 'Our Global Impact')}
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('stats.subtitle', 'Making a difference in communities worldwide')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statsData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-primary mb-4">
                    {stat.value.toLocaleString()}+
                  </div>
                  <div className="text-xl text-base-content/80">
                    {stat.label[currentLanguage]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-24 bg-base-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('about.timeline.title', 'Our Journey')}
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('about.timeline.subtitle', 'Key milestones in our mission to empower youth globally')}
              </p>
            </motion.div>
            
            <div className="relative">
              <div 
                className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary opacity-30"
                aria-hidden="true"
              />
              
              <div className="space-y-12">
                {timelineData.events.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="relative p-6 bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-primary font-bold text-xl mb-2 block">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">
                          {event.title[currentLanguage]}
                        </h3>
                        <p className="text-base-content/80">
                          {event.description[currentLanguage]}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-base-100" />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="py-24 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('about.presence.title', 'Global Presence')}
              </h2>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('about.presence.subtitle', 'Making an impact across continents')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">45+ Countries</h3>
                    <p className="text-base-content/80">Active presence worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">10,000+ Members</h3>
                    <p className="text-base-content/80">Growing community</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">250+ Projects</h3>
                    <p className="text-base-content/80">Impactful initiatives</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <ImageLoader
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                  alt="Global impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                {t('about.cta.title', 'Ready to Make a Difference?')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('about.cta.description', 'Join our global community of youth leaders and change-makers')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/join">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-lg bg-white text-primary hover:bg-white/90 gap-2"
                  >
                    {t('about.cta.join', 'Join Us Today')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-lg btn-outline text-white hover:bg-white hover:text-primary"
                  >
                    {t('about.cta.explore', 'Explore Projects')}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}