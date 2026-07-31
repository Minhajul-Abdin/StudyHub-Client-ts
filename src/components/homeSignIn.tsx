
import Link from "next/link";

const SaveFavoritesBanner = () => {
  return (
    <section className="w-full px-4 py-8 md:py-16 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto bg-[#F4EAE1] rounded-3xl overflow-hidden border border-[#E6D5C3] p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Content Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A3B32] tracking-tight leading-tight">
            Sign in to save your faves
          </h2>

          <p className="text-[#7A685C] text-base md:text-lg leading-relaxed max-w-md">
            Access room price estimates, save your favorite properties, and get
            instant alerts for new rooms and price reductions.
          </p>

          <Link href="/login">
            <button className="mt-2 cursor-pointer px-6 py-3.5 border-2 border-[#4A3B32] text-[#4A3B32] font-semibold text-sm rounded-xl hover:bg-[#4A3B32] hover:text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#BC9E82] focus:ring-offset-2">
              Sign in or register
            </button>
          </Link>
        </div>

        {/* Right Modern Vector/Mockup Column */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-full max-w-[400px] aspect-[4/3] sm:aspect-square flex items-center justify-center">
            {/* Artistic organic background blobs */}
            <div className="absolute top-4 left-4 w-64 h-64 bg-[#E8D8C8] rounded-full filter blur-xl opacity-70 animate-pulse"></div>

            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#D9C3B0] rounded-full filter blur-lg opacity-50"></div>

            {/* The Floating UI Device Mockup */}
            <div className="relative w-full h-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-5 flex flex-col justify-between transform hover:scale-[1.02] transition-transform duration-300">
              {/* Mockup Header */}
              <div className="flex justify-between items-center border-b border-[#F4EAE1] pb-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#BC9E82]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E6D5C3]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                </div>

                <span className="text-[11px] font-bold tracking-widest text-[#9C8470] uppercase">
                  Saved Rooms
                </span>
              </div>

              {/* Saved Room Card 1 */}
              <div className="flex items-center gap-3.5 p-2.5 bg-white rounded-xl border border-[#F4EAE1] shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#F4EAE1] flex items-center justify-center text-xl">
                  🛏️
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium truncate">
                    Premium Double Room
                  </p>

                  <p className="text-sm font-bold text-[#4A3B32]">
                    $680
                    <span className="text-[10px] font-normal text-gray-400">
                      /mo
                    </span>
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">
                  ❤️
                </div>
              </div>

              {/* Saved Room Card 2 */}
              <div className="flex items-center gap-3.5 p-2.5 bg-white rounded-xl border border-[#F4EAE1] shadow-sm translate-x-3 transform rotate-1 hover:rotate-0 transition-transform duration-200">
                <div className="w-12 h-12 rounded-lg bg-[#EEDFD2] flex items-center justify-center text-xl">
                  🏠
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 font-medium truncate">
                    En-suite Cozy Studio
                  </p>

                  <p className="text-sm font-bold text-[#4A3B32]">
                    $850
                    <span className="text-[10px] font-normal text-gray-400">
                      /mo
                    </span>
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">
                  ❤️
                </div>
              </div>

              {/* Modern Micro Login Form Widget */}
              <div className="bg-[#4A3B32] text-white p-3 rounded-xl flex items-center justify-between shadow-lg mt-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white/10 rounded-md">
                    <svg
                      className="w-4 h-4 text-[#BC9E82]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-300 leading-none">
                      Logged in safely
                    </p>

                    <p className="text-xs font-semibold text-white mt-0.5">
                      alex@example.com
                    </p>
                  </div>
                </div>

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveFavoritesBanner;

