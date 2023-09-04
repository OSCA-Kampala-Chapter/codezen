import Link from 'next/link';
import { HiBell, HiClock, HiLightBulb, HiRefresh } from 'react-icons/hi';

export const AppFooter = () => {
  return (
    <header className=" bg-neutral-900 shadow text-neutral-500 w-full px-4 py-1 flex justify-between items-center gap-4 h-[5vh]">
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-sm">Javascript (React)</h1>
      </div>
      <div className="flex gap-2 items-center">
        <HiClock className="text-sm" />
        <h1 className="font-semibold text-sm">1 Hour 20 mins</h1>
      </div>
      {/* The Buttons */}
      <div className="flex justify-end items-center gap-2">
        <span className="flex">772 bytes</span>
        <HiLightBulb className="text-base" />
      </div>
    </header>
  );
};
