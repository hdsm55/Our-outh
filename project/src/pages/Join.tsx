import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Meta from '../components/Meta';

export default function Join() {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('join.title', 'Join Our Community')}
        description={t('join.description', 'Join our global community of youth leaders and change-makers')}
      />

      <div className="min-h-screen bg-base-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-base-content mb-4">
              {t('join.title', 'Join Our Community')}
            </h1>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
              {t('join.subtitle', 'Be part of a global movement making positive change')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-base-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {t('join.volunteer.title', 'Volunteer With Us')}
                </h2>
                <p className="text-base-content/80 mb-6">
                  {t('join.volunteer.description', 'Share your skills and time to make a difference in communities worldwide.')}
                </p>
                <button className="btn btn-primary gap-2">
                  {t('join.volunteer.cta', 'Start Volunteering')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-base-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {t('join.mentor.title', 'Become a Mentor')}
                </h2>
                <p className="text-base-content/80 mb-6">
                  {t('join.mentor.description', 'Guide and inspire young leaders with your experience and expertise.')}
                </p>
                <button className="btn btn-primary gap-2">
                  {t('join.mentor.cta', 'Apply as Mentor')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-base-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {t('join.partner.title', 'Partner With Us')}
                </h2>
                <p className="text-base-content/80 mb-6">
                  {t('join.partner.description', 'Collaborate with us to create meaningful impact through joint initiatives.')}
                </p>
                <button className="btn btn-primary gap-2">
                  {t('join.partner.cta', 'Become a Partner')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-base-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  {t('join.support.title', 'Support Our Mission')}
                </h2>
                <p className="text-base-content/80 mb-6">
                  {t('join.support.description', 'Help us continue our work through donations and resource contributions.')}
                </p>
                <button className="btn btn-primary gap-2">
                  {t('join.support.cta', 'Support Now')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}