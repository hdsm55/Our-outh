import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 [dir='rtl']:[&>*:first-child]:order-last">
          {/* Logo Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square max-w-lg mx-auto">
              <img
                src="/logo.png"
                alt="Organization Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 text-center lg:text-start [dir='rtl']:lg:text-end space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Welcome to Shaababna
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join our community and make a difference. Together we can create
              positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start [dir='rtl']:lg:justify-end">
              <button
                type="button"
                aria-label="Make a donation"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Donate
              </button>
              <button
                type="button"
                aria-label="Join our community"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return <Hero />;
};

export default Home;
