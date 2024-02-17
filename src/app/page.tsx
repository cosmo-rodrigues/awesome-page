import { HomeForm } from '@/components/HomeForm';

export default function StandBy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-default bg-cover bg-center bg-no-repeat p-24">
      <HomeForm containerStyles="bg-transparent border-0" />
    </main>
  );
}

/**

import { Hero } from '@/components/Hero';
import { HomeForm } from '@/components/HomeForm';

export default function StandBy() {
  return (
    <Hero className="mx-auto flex min-h-screen min-w-[100%] items-center bg-default bg-cover bg-center bg-no-repeat">
      <HomeForm containerStyles="bg-transparent border-0" />
    </Hero>
  );
}


*/
