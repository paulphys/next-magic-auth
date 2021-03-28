import React from 'react';

function Hero() {
  return (
    <section className="w-full bg-black">
       <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-40 md:pb-20 mt-3">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl leading-tighter tracking-tighter md:text-6xl font-hero mb-2 text-white" data-aos="zoom-y-out">The operating system for <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-green-400">business</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-l font-hero-regular md:text-xl text-gray-600 mb-3 md:mb-3 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">Replace your patchwork of cloud applications, legacy tools, and paper-based processes with <strong className="font-hero-regular">Business operations as Code</strong> for your entire organization</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Hero;