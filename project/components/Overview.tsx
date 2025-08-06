'use client';

interface OverviewProps {
  onOpenForm: (formType: string) => void;
}

export default function Overview({ onOpenForm }: OverviewProps) {
  return (
    <section className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-8">
            Where Luxury Meets <span className="text-[#4B7B87]">Lifestyle</span>
          </h2>
          
          <p className="text-xl text-justify text-[#3C3C3C] leading-relaxed mb-12">
            Serene Gardens represents the pinnacle of modern living in Mumbai's most coveted location. 
            Nestled in the vibrant heart of Bandra West, this architectural masterpiece offers an 
            unparalleled blend of contemporary design, world-class amenities, and strategic connectivity. 
            Every detail has been meticulously crafted to provide residents with an extraordinary living 
            experience that transcends conventional luxury.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Premium Architecture</h3>
              <p className="text-[#3C3C3C]/80">Contemporary design with attention to every detail</p>
            </div>

            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Green Living</h3>
              <p className="text-[#3C3C3C]/80">Lush landscaping and eco-friendly features</p>
            </div>

            <div className="bg-white p-6 border border-[#EAEAEA] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-transparent border border-[#4B7B87] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">Prime Connectivity</h3>
              <p className="text-[#3C3C3C]/80">Strategic location with excellent transport links</p>
            </div>
          </div>

          <button
            onClick={() => onOpenForm('brochure')}
            className="px-8 py-4 bg-[#4B7B87] text-white text-lg font-semibold hover:bg-[#5C8C9A] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Download Detailed Brochure
          </button>
        </div>
      </div>
    </section>
  );
}