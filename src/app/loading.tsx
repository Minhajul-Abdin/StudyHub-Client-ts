
const SimpleLoading = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[250px] w-full p-6 space-y-4 bg-[#FAF6F0] rounded-2xl">
      {/* Brown-themed Spinner */}
      <div className="relative w-12 h-12">
        {/* Outer track (Light Sand) */}
        <div className="absolute inset-0 border-4 border-[#EEDFD2] rounded-full"></div>

        {/* Spinning accent (Deep Walnut) */}
        <div className="absolute inset-0 border-4 border-transparent border-t-[#4A3B32] rounded-full animate-spin"></div>
      </div>

      {/* Animated Text */}
      <p className="text-sm font-semibold text-[#7A685C] tracking-medium animate-pulse">
        Finding your next room...
      </p>
    </div>
  );
};

export default SimpleLoading;

