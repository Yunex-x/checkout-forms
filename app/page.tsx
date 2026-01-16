"use client";

import Link from "next/link";

export default function HomePage() {
  const checkouts = [
    {
      id: "01",
      title: "Payment Form with Sidebar",
      description: "Split layout with payment methods and order summary",
      route: "/checkout-01",
      status: "live",
      tags: ["Payment", "Split Layout", "Responsive"],
    },
    {
      id: "02",
      title: "Checkout Design 02",
      description: "Coming soon...",
      route: "/checkout-02",
      status: "coming-soon",
      tags: ["E-commerce", "Modern UI"],
    },
    {
      id: "03",
      title: "Checkout Design 03",
      description: "Coming soon...",
      route: "/checkout-03",
      status: "coming-soon",
      tags: ["Minimal", "Clean"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Checkout Forms
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of checkout form designs converted from Figma to functional code
          </p>
        </header>

        {/* Forms List */}
        <div className="space-y-6">
          {checkouts.map((checkout) => (
            <Link
              key={checkout.id}
              href={checkout.route}
              className={`block bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all ${checkout.status === "live"
                  ? "hover:border-blue-500 hover:shadow-lg cursor-pointer"
                  : "opacity-60 cursor-not-allowed pointer-events-none"
                }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Screenshot Placeholder */}
                <div className="md:w-80 h-64 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%), 
                                       linear-gradient(-45deg, #000 25%, transparent 25%), 
                                       linear-gradient(45deg, transparent 75%, #000 75%), 
                                       linear-gradient(-45deg, transparent 75%, #000 75%)`,
                      backgroundSize: '20px 20px',
                      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}></div>
                  </div>

                  {/* Placeholder Content */}
                  <div className="relative z-10 text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-400">Screenshot</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-300">
                        {checkout.id}
                      </span>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {checkout.title}
                      </h2>
                    </div>

                    <div>
                      {checkout.status === "live" ? (
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-green-700">Live</span>
                        </div>
                      ) : (
                        <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                          <span className="text-sm font-medium text-amber-700">Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {checkout.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {checkout.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {checkout.status === "live" && (
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>View Form</span>
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Figma designs implemented with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}