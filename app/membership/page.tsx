import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Rotary Club of Bonny Island</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-6">
          Becoming a member of the Rotary Club of Bonny Island offers you the opportunity to make a difference in your community and connect with like-minded professionals. As a Rotarian, you'll be part of a global network dedicated to creating positive change.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Membership Benefits</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Networking opportunities with local and international professionals</li>
          <li>Personal growth and leadership development</li>
          <li>Participation in meaningful community service projects</li>
          <li>Access to Rotary's global grants and resources</li>
          <li>Lifelong friendships and connections</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Attend one of our meetings as a guest to learn more about our club</li>
          <li>Express your interest in membership to a current Rotarian</li>
          <li>Complete the membership application form</li>
          <li>Meet with our membership committee for an interview</li>
          <li>Upon approval, attend your induction ceremony and begin your Rotary journey</li>
        </ol>
        <div className="text-center">
          <Link href="/contact" className="bg-[#0050a0] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">
            Contact Us to Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

