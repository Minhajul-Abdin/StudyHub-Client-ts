import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2E1F1A] via-[#4A332A] to-[#765548] text-white">
      {/* Background Decoration */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#C9A88A]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#E8D5C4]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-20 sm:px-8 lg:flex-row lg:gap-16 lg:py-24">
        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#F5E6D3] backdrop-blur-sm">
            ✦ Find your perfect workspace
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Book Study & Meeting
            <span className="block text-[#E8CDB5]">
              Rooms Instantly
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#E8DDD6] sm:text-base md:text-lg lg:mx-0">
            Find, compare, and reserve fully equipped rooms in seconds.
            Whether youre studying, collaborating, or meeting with your
            team, weve got the right space for you.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/rooms"
              className="rounded-xl bg-[#F5E6D3] px-7 py-3.5 font-semibold text-[#4E342E] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              Browse Rooms →
            </Link>

            <span className="text-sm text-white/60">
              Find a room that fits your needs
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-lg">
            {/* Image Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-[#D7BFA9]/10 blur-2xl" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Modern study and meeting room"
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px]"
              />

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#2E1F1A]/80 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">
                      Available spaces
                    </p>
                    <p className="mt-1 font-semibold text-[#F5E6D3]">
                      Study • Meeting • Private
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8CDB5] text-[#4E342E]">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

