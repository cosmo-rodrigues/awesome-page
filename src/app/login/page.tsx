import { Hero } from '@/components/Hero';
import { HomeForm } from '@/components/HomeForm';

export default function StandBy() {
  return (
    <Hero className="flex items-center justify-center pt-[10vh]">
      <HomeForm containerStyles="bg-transparent border-0" />;
    </Hero>
  );
}
