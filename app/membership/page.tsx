import Link from 'next/link';

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">
        Join Rotary Club of Bonny Island
      </h1>

      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12 animate-fade-in-up">
        <p className="text-lg mb-6">
          Becoming a member of the Rotary Club of Bonny Island offers you the opportunity to make a difference in your community and connect with like-minded professionals. As a Rotarian, you&apos;ll be part of a global network dedicated to creating positive change.
        </p>
        <div className="text-center">
        <Link href="/contact"                 className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-rotary-gold text-rotary-dark-blue rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 animate-pulse"
        > Contact Us to Learn More</Link>           
        </div>
      </div>

      {/* Membership Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 shadow-md rounded-lg p-6 animate-fade-in-left">
          <h2 className="text-2xl font-semibold mb-4">Membership Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Networking opportunities with local and international professionals</li>
            <li>Personal growth and leadership development</li>
            <li>Participation in meaningful community service projects</li>
            <li>Access to Rotary&apos;s global grants and resources</li>
            <li>Lifelong friendships and connections</li>
          </ul>
        </div>

        <div className="bg-blue-100 shadow-lg rounded-lg p-6 animate-fade-in-right">
        <h2 className="text-2xl font-semibold mb-4">Why Rotary?</h2>
          <p>Rotary offers a unique opportunity to serve your community, build lasting relationships, and develop personally and professionally.</p>
          <p className="mt-4">As a Rotarian, you can play a vital role in addressing some of the world&apos;s most pressing challenges, from eradicating polio to promoting peace. Rotary&apos;s collaborative projects inspire innovation and create sustainable solutions that leave a lasting impact on both local and global communities.</p>
        </div>
      </div>

      {/* How to Join Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-12 animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Attend one of our meetings as a guest to learn more about our club</li>
          <li>Express your interest in membership to a current Rotarian</li>
          <li>Complete the membership application form</li>
          <li>Meet with our membership committee for an interview</li>
          <li>Upon approval, attend your induction ceremony and begin your Rotary journey</li>
        </ol>

      </div>

      {/* Rotary-Themed Cards */}
      <div className="mt-12 text-center animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-rotary-gold p-6 rounded-xl text-black shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">Service Above Self</h3>
            <p className="mt-2">Join us in making an impact and embodying the spirit of service.</p>
          </div>
          <div className="bg-orange p-6 rounded-xl text-black shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">Global Network</h3>
            <p className="mt-2">Connect with Rotarians worldwide and expand your horizons.</p>
          </div>
          <div className="bg-rotary-gold p-6 rounded-xl text-black shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">Leadership Growth</h3>
            <p className="mt-2">Enhance your leadership skills through meaningful initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
