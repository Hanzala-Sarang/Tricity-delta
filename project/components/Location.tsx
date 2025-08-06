'use client';

export default function Location() {
  const landmarks = [
    { category: 'Transport', items: ['Bandra Station - 5 min', 'Western Express Highway - 3 min', 'Mumbai Airport - 12 min'] },
    { category: 'Healthcare', items: ['Lilavati Hospital - 8 min', 'Holy Family Hospital - 6 min', 'Hinduja Hospital - 10 min'] },
    { category: 'Education', items: ['St. Stanislaus School - 4 min', 'Mithibai College - 7 min', 'IES Management College - 5 min'] },
    { category: 'Entertainment', items: ['Palladium Mall - 6 min', 'Infiniti Mall - 8 min', 'PVR Cinemas - 5 min'] },
    { category: 'Dining', items: ['Linking Road Restaurants - 3 min', 'Hill Road Cafes - 4 min', 'Bandstand Eateries - 6 min'] },
    { category: 'Recreation', items: ['Bandstand Promenade - 8 min', 'Carter Road - 10 min', 'Joggers Park - 5 min'] },
  ];

  return (
    <section id="location" className="py-20 bg-[#EAEAEA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Prime <span className="text-[#4B7B87]">Location</span>
          </h2>
          <p className="text-xl text-[#3C3C3C] max-w-3xl mx-auto opacity-80">
            Strategically located in the heart of Bandra West with excellent connectivity and proximity to key landmarks
          </p>
        </div>

        {/* Maps Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Map View Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#EAEAEA]">
            <div className="bg-[#3C3C3C] p-4">
              <h3 className="text-xl font-bold text-white text-center">Map View</h3>
            </div>
            <div className="h-80 bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <div className="text-[#3C3C3C] opacity-90">Interactive Map</div>
                <div className="text-sm text-[#3C3C3C] mt-2 opacity-70">Click to explore location</div>
              </div>
            </div>
          </div>

          {/* Connectivity Map Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#EAEAEA]">
            <div className="bg-[#3C3C3C] p-4">
              <h3 className="text-xl font-bold text-white text-center">Connectivity Map</h3>
            </div>
            <div className="h-80 bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🚇</div>
                <div className="text-[#3C3C3C] opacity-90">Transport Links</div>
                <div className="text-sm text-[#3C3C3C] mt-2 opacity-70">Major routes and stations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((landmark, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#EAEAEA]"
            >
              <h3 className="text-xl font-bold text-[#000000] mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#4B7B87] rounded-sm mr-3"></span>
                {landmark.category}
              </h3>
              <ul className="space-y-2">
                {landmark.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#3C3C3C] flex items-center opacity-80">
                    <span className="w-2 h-2 bg-[#4B7B87] rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Location Highlights Banner */}
        <div className="mt-16 bg-[#3C3C3C] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Bandra West?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h4 className="text-lg font-semibold mb-2">Urban Lifestyle</h4>
                <p className="text-white/90 opacity-70">Vibrant neighborhood with modern amenities and cultural hotspots</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚄</div>
                <h4 className="text-lg font-semibold mb-2">Excellent Connectivity</h4>
                <p className="text-white/90 opacity-70">Well-connected to all major business districts and airports</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-lg font-semibold mb-2">Investment Potential</h4>
                <p className="text-white/90 opacity-70">High appreciation rates and strong rental demand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
