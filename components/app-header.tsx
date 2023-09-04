import Link from 'next/link';
import { HiBell, HiCode, HiRefresh } from 'react-icons/hi';

export const AppHeader = () => {
  return (
    <header className=" bg-neutral-900 shadow text-neutral-200 w-full px-4 py-2 flex justify-between items-center gap-4 h-[5vh]">
      <div className="flex gap-2 items-center">
        <HiCode className="text-xl" />
        <h1 className="font-extrabold text-xl">Code Zen Editor</h1>
      </div>
      {/* The Buttons */}
      <div className="flex justify-end items-center gap-2">
        <HiRefresh className="text-xl" />
        <HiBell className="text-xl" />
      </div>
    </header>
  );
};
