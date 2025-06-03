import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X, ExternalLink, ArrowUpRight, Tag, Calendar, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import projectsData from '../data/projects.json';
import Meta from '../components/Meta';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projectsData.projects);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentLanguage = i18n.language;
  
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const uniqueCategories = ['all', ...new Set(projectsData.projects.map(p => p.category))];
  const uniqueStatuses = ['all', ...new Set(projectsData.projects.map(p => p.status))];

  const filterProjects = useCallback(() => {
    const filtered = projectsData.projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      const matchesSearch = searchQuery === '' || 
        project.title[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description[currentLanguage].toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesStatus && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedStatus, searchQuery, currentLanguage]);

  useEffect(() => {
    filterProjects();
  }, [filterProjects]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <>
      <Meta
        title={t('projects.title', 'Our Projects')}
        description={t('projects.description', 'Explore our various youth empowerment projects and initiatives')}
      />

      <div className="min-h-screen bg-base-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
              {t('projects.title', 'Our Projects')}
            </h1>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
              {t('projects.subtitle', 'Discover our initiatives making a difference in communities worldwide')}
            </p>
          </motion.div>

          <div className="mb-8 sticky top-16 z-30 bg-base-100/80 backdrop-blur-md py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('projects.search_placeholder', 'Search projects...')}
                  className="input input-bordered w-full pl-10"
                />
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="btn btn-primary md:hidden w-full gap-2"
                aria-expanded={isFilterOpen}
              >
                <Filter className="w-5 h-5" />
                {t('projects.filters', 'Filters')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="hidden md:flex flex-wrap gap-4 mt-6">
              <div className="join">
                {uniqueCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`join-item btn ${
                      selectedCategory === category ? 'btn-primary' : 'btn-ghost'
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {t(`projects.categories.${category}`)}
                  </button>
                ))}
              </div>

              <div className="join">
                {uniqueStatuses.map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`join-item btn ${
                      selectedStatus === status ? 'btn-primary' : 'btn-ghost'
                    }`}
                    aria-pressed={selectedStatus === status}
                  >
                    {t(`projects.statuses.${status}`)}
                  </button>
                ))}
              </div>

              {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery !== '') && (
                <button
                  onClick={clearFilters}
                  className="btn btn-ghost gap-2"
                  aria-label={t('projects.clear_filters', 'Clear all filters')}
                >
                  <X className="w-4 h-4" />
                  {t('projects.clear_filters', 'Clear filters')}
                </button>
              )}
            </div>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-4 space-y-4 overflow-hidden"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t('projects.category_filter', 'Category')}
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="select select-bordered w-full"
                    >
                      {uniqueCategories.map(category => (
                        <option key={category} value={category}>
                          {t(`projects.categories.${category}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t('projects.status_filter', 'Status')}
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="select select-bordered w-full"
                    >
                      {uniqueStatuses.map(status => (
                        <option key={status} value={status}>
                          {t(`projects.statuses.${status}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery !== '') && (
                    <button
                      onClick={clearFilters}
                      className="btn btn-ghost w-full gap-2"
                    >
                      <X className="w-4 h-4" />
                      {t('projects.clear_filters', 'Clear filters')}
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedStatus}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={ref}
            >
              <Masonry
                breakpointCols={breakpointColumns}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <div 
                      className={`card bg-base-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                        selectedProject === project.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleProjectClick(project.id)}
                    >
                      <figure className="relative overflow-hidden aspect-video group cursor-pointer">
                        <img
                          src={project.image}
                          alt={project.title[currentLanguage]}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button className="btn btn-primary btn-sm gap-2">
                            {t('projects.view_details', 'View Details')}
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                        <div className={`absolute top-4 right-4 badge ${
                          project.status === 'active' ? 'badge-primary' : 'badge-secondary'
                        } badge-lg`}>
                          {t(`projects.statuses.${project.status}`)}
                        </div>
                      </figure>
                      
                      <div className="card-body">
                        <h2 className="card-title text-xl mb-2 group-hover:text-primary transition-colors">
                          {project.title[currentLanguage]}
                        </h2>
                        <p className="text-base-content/80 mb-4">
                          {project.description[currentLanguage]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-base-content/70">
                            <Tag className="w-4 h-4" />
                            {t(`projects.categories.${project.category}`)}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-base-content/70">
                            <Calendar className="w-4 h-4" />
                            2024
                          </div>
                        </div>
                        <div className="card-actions justify-end mt-auto">
                          <button className="btn btn-primary btn-sm gap-2 group">
                            {t('projects.learn_more', 'Learn More')}
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>

              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-base-content/60">
                    {t('projects.no_results', 'No projects found matching your criteria')}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn btn-primary mt-4"
                  >
                    {t('projects.reset_search', 'Reset Search')}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}