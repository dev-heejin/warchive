import { Button } from '@/components/ui/button';
import { wineCategories } from '@/types/wineCategory';

export default function CategorySection() {
  return (
    <div className="w-full max-w-4xl px-6">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {wineCategories.map((category) => (
          <Button
            className="bg-burgundy-100 text-burgundy-500 hover:bg-burgundy-400 hover:text-white
                         px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium rounded-full shadow-sm hover:shadow-md
                         transition-all duration-200 min-w-[90px] md:min-w-[110px]"
            key={category}
            size="lg"
          >
            🍷 {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
