import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Landmark, Heart, Leaf, Book, Stethoscope, CloudRain } from 'lucide-react';
import EventSlider from './api/events/EventSlider'; // Import the EventSlider component

const Home = async () => {
  // This will run server-side during the request
  const eventsDir = path.join(process.cwd(), 'public', 'images', 'events');
  const files = fs.readdirSync(eventsDir);

  // Filter only image files (.jpg, .jpeg, .png)
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-24 md:py-36 animate-fade-in-up" style={{ backgroundImage: "url('/images/snapmembersplus.jpg')" }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/snapmembersplus.jpg"
            alt="Rotary Club of Bonny Island community service"
            fill={true}
            priority
            quality={70}
            style={{ objectFit: 'cover' }}
            className="opacity-90"
          />
        </div>
        <div className="container relative z-10 mx-auto flex justify-end animate-fade-in-up">
          <div className="bg-[#54565a] bg-opacity-90 rounded-lg p-4 md:p-6 w-full md:w-1/2 lg:w-1/3">
            <div className="p-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-rotary-gold animate-pulse">
                Welcome to Rotary Club of Bonny Island
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-white animate-pulse">
                Serving our community and making a difference in the world through leadership and action
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-rotary-gold text-rotary-dark-blue rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 animate-pulse"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 md:py-12 bg-white">
        <div className="container max-w-6l mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-rotary-blue">
            Our Impact Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[ 
              {
                icon: Stethoscope,
                title: "Health Initiatives",
                description: "Promoting health and wellness through various community programs."
              },
              {
                icon: Book,
                title: "Education Support",
                description: "Providing resources and opportunities for quality education to all."
              },
              {
                icon: CloudRain,
                title: "Water and Sanitation Projects",
                description: "Ensuring access to clean water and proper sanitation facilities."
              },
              {
                icon: Heart,
                title: "Promoting peace",
                description: "Rotary encourages conversations to foster understanding within and across cultures."
              },
              {
                icon: Landmark,
                title: "Community Development",
                description: "Empowering local communities through sustainable projects and initiatives."
              },
              {
                icon: Leaf,
                title: "Protecting the Environment",
                description: "Rotary members are tackling environmental issues the way they always do: coming up with projects, using their connections to change policy and planning for the future."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-pulse"
              >
                <div className="bg-rotary-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-rotary-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-rotary-blue">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link 
                  href="/projects" 
                  className="inline-flex items-center text-rotary-blue font-semibold hover:text-rotary-light-blue transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 md:py-2 bg-white">
        <div className="container max-w-8xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-rotary-blue">
            Upcoming Events
          </h2>
          <EventSlider imageFiles={imageFiles} /> {/* Use EventSlider component */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-rotary-blue text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to create lasting change and build a better future for all.
          </p>
          <Link 
            href="/membership" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-rotary-gold text-rotary-dark-blue rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
          >
            Join Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            href="/donate" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-rotary-dark-blue text-white rounded-full shadow-lg hover:bg-rotary-gold transition duration-300 ml-4"
          >
            Donate <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
