export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">
        Donate
      </h1>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Naira Account */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-rotary-gold animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4 text-rotary-dark-blue">
            Please pay Dues, SAA, Donations into:
          </h2>
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              Rotary Club of Bonny Island (Naira NGN Account)
            </p>
            <p className="text-lg">Account No: 2035829324</p>
            <p className="text-lg">Account Name: Rotary Club of Bonny Island</p>
            <p className="text-lg">First Bank</p>
          </div>
        </div>

        {/* Dollar Account */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-rotary-blue animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-bold mb-4 text-rotary-dark-blue">
            Pay Club Foundation Support, Donations into:
          </h2>
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              Rotary Club of Bonny Island (Dollar USD Account)
            </p>
            <p className="text-lg">Account No: 2035892214</p>
            <p className="text-lg">Account Name: Rotary Club of Bonny Island</p>
            <p className="text-lg">First Bank</p>
          </div>
        </div>
      </div>

      {/* Impact Section Title */}
      <h1 className="text-4xl font-extrabold mt-16 mb-10 text-center text-rotary-blue animate-fade-in-up">
        How Your Donation Impacts the World
      </h1>

      {/* Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Impact Card 1 */}
        <div className="bg-rotary-light-blue text-white shadow-lg rounded-xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">Polio Eradication</h2>
          <p>
            Rotary is a leading force in the fight against polio, providing
            funding and resources to eradicate this devastating disease globally.
          </p>
        </div>

        {/* Impact Card 2 */}
        <div className="bg-rotary-gold text-rotary-dark-blue shadow-lg rounded-xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">
            Water Sanitation and Hygiene
          </h2>
          <p>
            Rotary projects focus on providing clean water and sanitation
            facilities to underserved communities, improving health and
            well-being.
          </p>
        </div>

        {/* Impact Card 3 */}
        <div className="bg-rotary-blue text-white shadow-lg rounded-xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">Disaster Relief</h2>
          <p>
            Rotary is a vital response force during natural disasters, providing
            immediate aid and long-term support to affected populations.
          </p>
        </div>

        {/* Impact Card 4 */}
        <div className="bg-rotary-dark-blue text-white shadow-lg rounded-xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">
            Promoting Peace and Understanding
          </h2>
          <p>
            Rotary fosters international understanding and cooperation through
            cultural exchange programs and community development projects.
          </p>
        </div>

        {/* Impact Card 5 */}
        <div className="bg-rotary-light-blue text-white shadow-lg rounded-xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">Supporting Education</h2>
          <p>
            Rotary initiatives often focus on improving access to education,
            particularly for children in disadvantaged areas.
          </p>
        </div>
      </div>
    </div>
  );
}
