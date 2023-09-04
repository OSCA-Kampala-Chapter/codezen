import { OTPSelectComponent } from '@/components/otp-select-component';
import { Button } from '@/components/ui/button';

import illustration from '../public/assets/art/evelope-art.svg';
import Image from 'next/image';
import { HiChevronLeft } from 'react-icons/hi';
import Link from 'next/link';

// Todo: animate send otp button

const ChooseOtpRecieverPage = () => {
  return (
    <section className="w-full px-8 py-4 bg-white min-h-screen grid place-items-center relative">
      <div className="flex flex-col justify-center items-center w-full md:w-1/4 md:mx-auto">
        {/* The Image */}
        <div className="flex w-64 h-64">
          <Image
            src={illustration}
            alt="evelope illustration"
            className="flex w-64 h-64"
          />
        </div>
        <h1 className="font-semibold text-center mb-8">
          Please Choose Where We Should Send You A Verification Code.
        </h1>
        {/* The Checkboxes */}
        <div className="flex mb-8">
          <OTPSelectComponent />
        </div>
        <div className="flex w-full flex-col gap-2 justify-center items-center">
          <Button className="w-3/4">Send Code</Button>
          <Link href="/create-account">
            <Button
              variant="outline"
              className="mt-8 bg-neutral-100 hover:text-orange-500 w-fit">
              <HiChevronLeft />
              <span>Back</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseOtpRecieverPage;
