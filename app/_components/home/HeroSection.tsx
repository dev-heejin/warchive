export default function HeroSection() {
  return (
    <div className="text-center py-8 px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
        나만의 와인 아카이브를
        <br />
        만들어보세요
      </h2>

      <p className="text-md md:text-lg text-gray-600 leading-relaxed mb-8">
        마셔본 와인을 검색하고,
        <br className="md:hidden" />
        <span className="hidden md:inline"> </span>
        소중한 기억을 저장하세요
      </p>

      <div className="flex justify-center">
        <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-red-400 rounded-full"></div>
      </div>
    </div>
  );
}
