import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

const AppLayout = (props: Props) => {
  const router = useRouter();
  let isUserLoggedin = false;

  // useEffect(() => {
  //   if (router.pathname !== '/create-account' && !isUserLoggedin) {
  //     router.replace('/create-account');
  //   }
  // }, [isUserLoggedin, router.pathname]);

  return (
    <main
      className={`flex dark min-h-screen flex-col bg-neutral-950 text-neutral-100 items-start justify-start ${inter.className}`}>
      {/* The Page Content */}
      <section className="w-full flex flex-col justify-start items-start">
        {props.children}
      </section>
    </main>
  );
};

export default AppLayout;
