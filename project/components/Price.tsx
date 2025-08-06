'use client';

interface PriceProps {
  onOpenForm: (formType: string) => void;
}

export default function Price({ onOpenForm }: PriceProps) {
  const priceData = [
    {
      type: '1 BHK',
      carpetArea: '450 - 520 sq.ft.',
      price: '₹ 84 Lacs*',
      status: 'Available'
    },
    {
      type: '2 BHK',
      carpetArea: '680 - 780 sq.ft.',
      price: '₹ 1.25 Cr*',
      status: 'Available'
    },
    {
      type: '3 BHK',
      carpetArea: '950 - 1100 sq.ft.',
      price: 'On Request',
      status: 'Limited'
    }
  ];

  return (
    <section id="price" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-4">
            Investment <span className="text-[#4B7B87]">Options</span>
          </h2>
          <p className="text-xl text-justify text-[#3C3C3C] max-w-3xl mx-auto">
            Discover our range of thoughtfully designed homes that offer exceptional value and comfort
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Price Table */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-[#EAEAEA] shadow-md">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#EAEAEA]">
                      <th className="text-left py-4 px-2 text-[#3C3C3C] font-bold text-lg">Configuration</th>
                      <th className="text-left py-4 px-2 text-[#3C3C3C] font-bold text-lg">Carpet Area</th>
                      <th className="text-left py-4 px-2 text-[#3C3C3C] font-bold text-lg">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceData.map((item, index) => (
                      <tr key={index} className="border-b border-[#EAEAEA] transition-colors">
                        <td className="py-6 px-2">
                          <div className="flex items-center">
                            <span className="text-xl font-bold text-[#3C3C3C]">{item.type}</span>
                            <span className={`ml-3 px-2 py-1 text-xs font-medium border ${
                              item.status === 'Available' ? 'bg-[#5B8C5A]/10 text-[#5B8C5A] border-[#5B8C5A]/50' : 'bg-orange-100/10 text-orange-700 border-orange-700/50'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-6 px-2 text-slate-600 font-mono">{item.carpetArea}</td>
                        <td className="py-6 px-2">
                          <span className="text-xl font-bold text-[#4B7B87]">{item.price}</span>
                          {item.price.includes('*') && (
                            <div className="text-xs text-slate-500 mt-1">Onwards</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
                <button
                  onClick={() => onOpenForm('price-breakup')}
                  className="w-full px-6 py-4 bg-[#4B7B87] text-white font-semibold shadow-md hover:bg-[#5C8C9A] transition-all duration-200"
                >
                  Request for Detailed Price Breakup
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 text-center">
              <p>* Prices are subject to change. All inclusive of applicable taxes and charges.</p>
              <p className="mt-2">Payment plans and financing options available.</p>
            </div>
          </div>

          {/* Cost Analysis Image */}
          <div className="bg-white p-8 border border-[#EAEAEA] shadow-md">
            <h3 className="text-2xl font-bold text-[#3C3C3C] mb-6 text-center">Investment Highlights</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white border border-[#EAEAEA] shadow-sm">
                <div>
                  <span className="text-slate-600 text-sm">Expected Appreciation</span>
                  <div className="text-2xl font-mono font-bold text-[#5B8C5A]">12-15% p.a.</div>
                </div>
                <div className="text-3xl text-[#4B7B87]">📈</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white border border-[#EAEAEA] shadow-sm">
                <div>
                  <span className="text-slate-600 text-sm">Rental Yield</span>
                  <div className="text-2xl font-mono font-bold text-[#4B7B87]">3.5-4.2%</div>
                </div>
                <div className="text-3xl text-[#4B7B87]">🏠</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white border border-[#EAEAEA] shadow-sm">
                <div>
                  <span className="text-slate-600 text-sm">Possession</span>
                  <div className="text-xl font-bold text-[#3C3C3C]">Dec 2026</div>
                </div>
                <div className="text-3xl text-[#4B7B87]">🗝️</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white border border-[#EAEAEA] shadow-sm">
                <div>
                  <span className="text-slate-600 text-sm">RERA Status</span>
                  <div className="text-lg font-bold text-[#5B8C5A]">Approved</div>
                </div>
                <div className="text-3xl text-[#4B7B87]">✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}