export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Donate</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Naira Account */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-4">Please pay Dues, SAA, Donations into:</h2>
          <div className="mb-2">
            <p className="text-lg font-medium">Rotary Club of Bonny Island (Naira NGN Account)</p>
            <p className="text-lg">Account No: 2035829324</p>
            <p className="text-lg">Account Name: Rotary Club of Bonny Island</p>
            <p className="text-lg">First Bank</p>
          </div>
        </div>

        {/* Card 2: Dollar Account */}
        <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-4">Pay Club Foundation Support, Donations into:</h2>
          <div className="mb-2">
            <p className="text-lg font-medium">Rotary Club of Bonny Island (Dollar USD Account)</p>
            <p className="text-lg">Account No: 2035892214</p>
            <p className="text-lg">Account Name: Rotary Club of Bonny Island</p>
            <p className="text-lg">First Bank</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse"></h1>

      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">How Your Donation Impacts the World</h1>

      {/* Explanation Cards (using a grid for better layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Explanation Card 1 (Cranberry) */}
        <div className="bg-cranberry shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <p className="text-base">
            
            <ul className="list-disc ml-6">
              <li><b>Polio Eradication:</b> Rotary is a leading force in the fight against polio, providing funding and resources to eradicate this devastating disease globally.</li>
            </ul>
          </p>
        </div>

        {/* Explanation Card 2 (Cardinal) */}
        <div className="bg-cardinal shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <p className="text-base">
            
            <ul className="list-disc ml-6">
              <li><b>Water Sanitation and Hygiene:</b> Rotary projects focus on providing clean water and sanitation facilities to underserved communities, improving health and well-being.</li>
            </ul>
          </p>
        </div>

        {/* Explanation Card 3 (Turquoise) */}
        <div className="bg-turquoise shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <p className="text-base">
            
            <ul className="list-disc ml-6">
              <li><b>Disaster Relief:</b> Rotary is a vital response force during natural disasters, providing immediate aid and long-term support to affected populations.</li>
            </ul>
          </p>
        </div>

        {/* Explanation Card 4 (Orange) */}
        <div className="bg-orange shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <p className="text-base">
            
            <ul className="list-disc ml-6">
              <li><b>Promoting Peace and Understanding:</b> Rotary fosters international understanding and cooperation through cultural exchange programs and community development projects.</li>
            </ul>
          </p>
        </div>

        {/* Explanation Card 5 (Violet) */}
        <div className="bg-violet shadow-md rounded-lg p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <p className="text-base">
            
            <ul className="list-disc ml-6">
              <li><b>Supporting Education:</b> Rotary initiatives often focus on improving access to education, particularly for children in disadvantaged areas.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}