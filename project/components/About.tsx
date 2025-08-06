'use client';

export default function About() {
  return (
    <section className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-4">
            About the <span className="text-[#4B7B87]">Developer</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-[#EAEAEA]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4">
                Premium Developers Ltd.
              </h3>
              
              <p className="text-lg text-justify text-[#3C3C3C] leading-relaxed mb-6">
                With over two decades of excellence in real estate development, Premium Developers Ltd. 
                has been at the forefront of creating exceptional living spaces that blend luxury, 
                functionality, and sustainability. Our commitment to quality, innovation, and customer 
                satisfaction has made us one of Mumbai's most trusted real estate brands.
              </p>

              <p className="text-[#3C3C3C] text-justify leading-relaxed mb-6">
                We believe in creating not just homes, but complete lifestyle experiences that enhance 
                the quality of life for our residents. Every project is meticulously planned and executed 
                with attention to detail, ensuring that we deliver nothing but the best to our valued customers.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl font-bold text-[#4B7B87] font-mono mb-1">25+</div>
                  <div className="text-[#3C3C3C] text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl font-bold text-[#4B7B87] font-mono mb-1">50+</div>
                  <div className="text-[#3C3C3C] text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl font-bold text-[#4B7B87] font-mono mb-1">10K+</div>
                  <div className="text-[#3C3C3C] text-sm">Happy Families</div>
                </div>
                <div className="text-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl font-bold text-[#4B7B87] font-mono mb-1">100%</div>
                  <div className="text-[#3C3C3C] text-sm">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-[#EAEAEA]">
              <h3 className="text-2xl font-bold text-[#3C3C3C] mb-6">Awards & Recognition</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl mr-4 text-[#4B7B87]">🏆</div>
                  <div>
                    <h4 className="font-semibold text-[#3C3C3C]">Best Developer Award 2023</h4>
                    <p className="text-[#3C3C3C]/80 text-sm">Mumbai Real Estate Excellence Awards</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl mr-4 text-[#4B7B87]">⭐</div>
                  <div>
                    <h4 className="font-semibold text-[#3C3C3C]">5-Star Customer Rating</h4>
                    <p className="text-[#3C3C3C]/80 text-sm">Real Estate Customer Satisfaction Survey</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl mr-4 text-[#4B7B87]">🌱</div>
                  <div>
                    <h4 className="font-semibold text-[#3C3C3C]">Green Building Certification</h4>
                    <p className="text-[#3C3C3C]/80 text-sm">Indian Green Building Council (IGBC)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white border border-[#EAEAEA] shadow-sm">
                  <div className="text-2xl mr-4 text-[#4B7B87]">✅</div>
                  <div>
                    <h4 className="font-semibold text-[#3C3C3C]">RERA Certified</h4>
                    <p className="text-[#3C3C3C]/80 text-sm">All projects registered under RERA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2 text-[#4B7B87]">Our Mission</h4>
              <p className="text-white/90">
                To create exceptional living spaces that inspire, comfort, and elevate the quality of life for every family we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}