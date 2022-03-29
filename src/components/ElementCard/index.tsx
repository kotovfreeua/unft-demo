import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { Element } from "src/types";

export const ElementCard: React.FC<Element> = ({ image, name, rarity }) => (
  <div className='flex flex-col max-w-sm w-full mb-auto lg:max-w-none relative p-1 sm:p-2 text-center radial-border rounded-[12px] before:rounded-[13px] sm:rounded-[28px] sm:before:rounded-[29px] before:-z-10'>
    <div className='relative h-[150px] sm:h-[400px] rounded-[8px] sm:rounded-[20px] overflow-hidden'>
      {image}
    </div>

    <div className={`rarity ${rarity}`}>{camelCaseToTitleCase(rarity)}</div>

    <span className='block mb-[10px] sm:mb-10 mx-auto gradient-text bg-clip-text font-bold text-sm sm:text-4xl text-transparent tracking-tight'>
      {name}
    </span>
  </div>
);
