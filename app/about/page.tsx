import Image from 'next/image'

export default function AboutPage() {
  return (
<div className="min-h-screen px-16">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">About Rotary Club of Bonny Island</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/images/snapmembersplus.jpg" alt="Rotary Club of Bonny Island members" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            The Rotary Club of Bonny Island is a chapter of Rotary International, a global network of volunteers dedicated to Service Above Self. We are a group of passionate individuals from Bonny Island, Nigeria, committed to making a positive impact in our local community and around the world.
          </p>
          <p className="text-lg mb-4">
            Our club is comprised of dedicated Rotarians from various backgrounds, professions, and age groups. What unites us is a shared passion for service and a commitment to making a difference. We bring a wealth of experience, skills, and enthusiasm to every project we undertake.
          </p>

        </div>
      </div>

      {/* New Section with Cards */}
      <section className="py-20 md:py-12 bg-white">
        <div className="container max-w-6l mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-rotary-blue">
            Our Commitment to Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rotary-gold rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-white">Chartered in 2020</h3>
              <p className="text-white mb-6 leading-relaxed">
                The Rotary Club of Bonny Island is a proud member of Rotary International&apos;s District 9141, carrying forward Rotary&apos;s legacy of service.
              </p>
            </div>
            <div className="bg-[#d0cfcd] rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-rotary-blue">Local Knowledge</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the unique needs and aspirations of our community, leveraging local knowledge to design impactful service projects.
              </p>
            </div>
            <div className="bg-rotary-blue rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-white">Diverse Membership</h3>
              <p className="text-white mb-6 leading-relaxed">
                Our club is comprised of dedicated Rotarians from various backgrounds, united by a shared passion for service and commitment to making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Guiding Principles Section */}
<section className="py-4">
  {/* Modified container to be full width on mobile */}
  <div className="container mx-auto px-1 md:px-1 lg:max-w-6xl">
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
      {/* Adjusted padding to be smaller on mobile */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 p-4 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-rotary-blue">
          Guiding Principles
        </h2>
        
        <div className="space-y-8 md:space-y-12 text-gray-700">
          {/* Object of Rotary Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
              Object of Rotary
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              The Object of Rotary is to encourage and foster the ideal of service as a basis of worthy enterprise and, in particular, to encourage and foster:
            </p>
            
            <div className="space-y-3 md:space-y-4">
              {[
                "The development of acquaintance as an opportunity for service;",
                "High ethical standards in business and professions; the recognition of the worthiness of all useful occupations; and the dignifying of each Rotarian's occupation as an opportunity to serve society;",
                "The application of the ideal of service in each Rotarian's personal, business, and community life;",
                "The advancement of international understanding, goodwill, and peace through a world fellowship of business and professional persons united in the ideal of service."
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/80 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm md:text-base">
                    {index + 1}
                  </span>
                  <p className="text-sm md:text-base text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Four-Way Test Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
              The Four-Way Test
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              The Four-Way Test is a nonpartisan and nonsectarian ethical guide for Rotarians to use for their personal and professional relationships. The test has been translated into more than 100 languages, and Rotarians recite it at club meetings:
            </p>
            <p className="text-lg md:text-xl font-medium text-center mb-4 md:mb-6">Of the things we think, say or do</p>
            
            <div className="space-y-3 md:space-y-4">
              {[
                "Is it the TRUTH?",
                "Is it FAIR to all concerned?",
                "Will it build GOODWILL and BETTER FRIENDSHIPS?",
                "Will it be BENEFICIAL to all concerned?"
              ].map((test, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm md:text-base">
                    {index + 1}
                  </span>
                  <p className="text-sm md:text-base text-gray-700 font-medium">{test}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
        </div>
      </div>
    </div>
  )
}

