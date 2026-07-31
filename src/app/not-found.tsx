import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3E2723] via-[#5D4037] to-[#8D6E63] flex items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-[90px] sm:text-[120px] font-extrabold text-[#FBE9E7] leading-none drop-shadow-lg">
            404
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Page Not Found
          </h2>

          <p className="text-[#EFEBE9] mt-4 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={"/"}>
              <button className="bg-[#D7CCC8] hover:bg-[#EFEBE9] text-[#4E342E] px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
                Go Home
              </button>
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <div className="relative w-[280px] sm:w-[350px] h-[280px] sm:h-[350px]">
            {/* Circle Background */}
            <div className="absolute inset-0 bg-[#D7CCC8]/20 rounded-full blur-2xl"></div>

            {/* Main Card */}
            <div className="relative bg-[#EFEBE9] rounded-3xl shadow-2xl p-8 h-full flex flex-col items-center justify-center border border-[#D7CCC8]">
              <div className="text-[70px] sm:text-[90px] font-black text-[#5D4037]">
                :
              </div>

              <p className="text-[#6D4C41] text-center mt-4 text-lg font-medium">
                Oops! We couldn’t find that page.
              </p>

              <div className="mt-6 w-full bg-[#D7CCC8] rounded-full h-3 overflow-hidden">
                <div className="bg-[#6D4C41] h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

