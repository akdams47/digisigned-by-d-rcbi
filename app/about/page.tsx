import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">About Rotary Club of Bonny Island</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/images/snapmembersplus.jpg" alt="Rotary Club of Bonny Island members" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            The Rotary Club of Bonny Island is a chapter of Rotary International, a global network of volunteers dedicated to Service Above Self. We are a group of passionate individuals from Bonny Island, Nigeria, committed to making a positive impact in our local community and around the world.
          </p>
        </div>
      </div>

      {/* New Section with Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-rotary-blue">
            Our Commitment to Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-rotary-blue">Chartered in 2020</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Rotary Club of Bonny Island is a proud member of Rotary International&apos;s District 9141, carrying forward Rotary&apos;s legacy of service.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-rotary-blue">Local Knowledge</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the unique needs and aspirations of our community, leveraging local knowledge to design impactful service projects.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse">
              <h3 className="text-xl font-bold mb-3 text-rotary-blue">Diverse Membership</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our club is comprised of dedicated Rotarians from various backgrounds, united by a shared passion for service and commitment to making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section (updated to a modern card) */}
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Use a more visually appealing background color */}
            <div className="bg-gradient-to-r from-sky-200 to-blue-100 p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Guiding Principles
              </h2>
              <div className="prose prose-lg text-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Object of Rotary
                </h3>
                <p>
                  The Object of Rotary is to encourage and foster the ideal of service as a basis of worthy enterprise and, in particular, to encourage and foster:
                </p>
                <ul className="list-disc list-inside">
                  <li>The development of acquaintance as an opportunity for service;</li>
                  <li>High ethical standards in business and professions; the recognition of the worthiness of all useful occupations; and the dignifying of each Rotarian’s occupation as an opportunity to serve society;</li>
                  <li>The application of the ideal of service in each Rotarian’s personal, business, and community life;</li>
                  <li>The advancement of international understanding, goodwill, and peace through a world fellowship of business and professional persons united in the ideal of service.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  The Four-Way Test
                </h3>
                <p>
                  The Four-Way Test is a nonpartisan and nonsectarian ethical guide for Rotarians to use for their personal and professional relationships. The test has been translated into more than 100 languages, and Rotarians recite it at club meetings:
                </p>
                <p className="font-medium">Of the things we think, say or do</p>
                <ul className="list-disc list-inside">
                  <li>Is it the TRUTH?</li>
                  <li>Is it FAIR to all concerned?</li>
                  <li>Will it build GOODWILL and BETTER FRIENDSHIPS?</li>
                  <li>Will it be BENEFICIAL to all concerned?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-4">
            Our club is comprised of dedicated Rotarians from various backgrounds, professions, and age groups. What unites us is a shared passion for service and a commitment to making a difference. We bring a wealth of experience, skills, and enthusiasm to every project we undertake.
          </p>
        </div>
      </div>
    </div>
  )
}

