import { CreateAccountForm } from '@/components/create-account-form';
import { HiOutlineShieldCheck } from 'react-icons/hi';

const CreateAccountPage = () => {
  return (
    <section className="w-full flex flex-col gap-4 justify-center items-center px-8 py-4 bg-white min-h-screen">
      <div className="flex gap-2 items-center text-neutral-600">
        <HiOutlineShieldCheck className="text-xl" />
        <h1 className="font-semibold text-xl">E-KYC</h1>
      </div>
      <h1 className="font-bold text-2xl">Create An Account.</h1>
      {/* The Create Account Form */}
      <CreateAccountForm />
    </section>
  );
};

export default CreateAccountPage;
