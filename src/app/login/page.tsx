import { HomeForm } from '@/components/HomeForm';

export default function StandBy() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-default bg-cover bg-center bg-no-repeat p-24">
      <HomeForm containerStyles="bg-transparent border-0" />;
    </div>
  );
}
