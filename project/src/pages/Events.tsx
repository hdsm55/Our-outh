import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Filter, Search, X } from 'lucide-react';
import eventsData from '../data/events.json';
import Meta from '../components/Meta';

export default function Events() {
  const { t, i18n } = useTranslation();
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const currentLanguage = i18n.language;

  const months = useMemo(() => {
    const uniqueMonths = new Set(
      eventsData.events.map(event => event.date.substring(0, 7))
    );
    return Array.from(uniqueMonths).sort();
  }, []);

  const filteredEvents = useMemo(() => {
    return eventsData.events
      .filter(event => {
        const matchesMonth = selectedMonth === 'all' || event.date.startsWith(selectedMonth);
        const matchesSearch = searchQuery === '' || 
          event.title[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase());
        return matchesMonth && matchesSearch;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedMonth, searchQuery, currentLanguage]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLanguage, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatMonth = (monthString: string) => {
    const date = new Date(monthString + '-01');
    return new Intl.DateTimeFormat(currentLanguage, {
      year: 'numeric',
      month: 'long'
    }).format(date);
  };

  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  const clearFilters = () => {
    setSelectedMonth('all');
    setSearchQuery('');
  };

  return (
    <>
      <Meta
        title={t('events.title', 'Events')}
        description={t('events.description', 'Join our upcoming events and activities')}
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
              {t('events.title', 'Events')}
            </h1>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
              {t('events.subtitle', 'Join our upcoming events and activities')}
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('events.search_placeholder', 'Search events...')}
                  className="input input-bordered w-full pl-10"
                />
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="btn btn-primary md:hidden w-full gap-2"
                aria-expanded={isFilterOpen}
              >
                <Filter className="w-5 h-5" />
                {t('events.filters', 'Filters')}
              </button>
            </div>

            {/* Desktop Month Filter */}
            <div className="hidden md:flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setSelectedMonth('all')}
                className={`btn ${selectedMonth === 'all' ? 'btn-primary' : 'btn-ghost'}`}
              >
                {t('events.all_months', 'All Events')}
              </button>
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`btn ${selectedMonth === month ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {formatMonth(month)}
                </button>
              ))}

              {(selectedMonth !== 'all' || searchQuery !== '') && (
                <button
                  onClick={clearFilters}
                  className="btn btn-ghost gap-2"
                >
                  <X className="w-4 h-4" />
                  {t('events.clear_filters', 'Clear filters')}
                </button>
              )}
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-4 space-y-4 overflow-hidden"
                >
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option value="all">{t('events.all_months', 'All Events')}</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {formatMonth(month)}
                      </option>
                    ))}
                  </select>

                  {(selectedMonth !== 'all' || searchQuery !== '') && (
                    <button
                      onClick={clearFilters}
                      className="btn btn-ghost w-full gap-2"
                    >
                      <X className="w-4 h-4" />
                      {t('events.clear_filters', 'Clear filters')}
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedMonth}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`card bg-base-200 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
                    isUpcoming(event.date) ? 'border-2 border-primary' : ''
                  }`}>
                    <div className="card-body">
                      {isUpcoming(event.date) && (
                        <div className="badge badge-primary mb-2">
                          {t('events.upcoming', 'Upcoming')}
                        </div>
                      )}
                      
                      <h2 className="card-title text-xl mb-4">
                        {event.title[currentLanguage]}
                      </h2>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-base-content/70">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>

                        <div className="flex items-center gap-2 text-base-content/70">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-base-content/70">
                          <Clock className="w-4 h-4" />
                          <span>{t('events.time', '10:00 AM - 4:00 PM')}</span>
                        </div>
                      </div>

                      <p className="text-base-content/80 mb-6">
                        {event.description[currentLanguage]}
                      </p>

                      <div className="card-actions justify-between items-center mt-auto">
                        <div className="badge badge-outline">
                          {event.type}
                        </div>
                        <button className="btn btn-primary btn-sm">
                          {t('events.register', 'Register')}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-base-content/60">
                  {t('events.no_events', 'No events found matching your criteria')}
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-primary mt-4"
                >
                  {t('events.reset_search', 'Reset Search')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}