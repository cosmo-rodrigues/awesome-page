import * as Shad from '@/components/ui';
import { useRouter } from 'next/navigation';

export const ProfileButton = () => {
  const router = useRouter();

  const handleSignOut = () => {
    console.log('Desconectando...');
  };

  return (
    <Shad.DropdownMenu>
      <Shad.DropdownMenuTrigger asChild>
        <Shad.Avatar className='cursor-pointer h-[48px] w-[48px]'>
          <Shad.AvatarImage src='/profile_level.svg' alt='profile' />
          <Shad.AvatarFallback>SC</Shad.AvatarFallback>
        </Shad.Avatar>
      </Shad.DropdownMenuTrigger>
      <Shad.DropdownMenuContent className='w-56' align='end' forceMount>
        <Shad.DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>@slug</p>
            <p className='text-xs leading-none text-muted-foreground'>
              meu.email@email.com
            </p>
          </div>
        </Shad.DropdownMenuLabel>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuGroup onClick={() => router.push('/profile')}>
          <Shad.DropdownMenuItem>Perfil</Shad.DropdownMenuItem>
        </Shad.DropdownMenuGroup>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuItem onClick={handleSignOut}>
          Sair
        </Shad.DropdownMenuItem>
      </Shad.DropdownMenuContent>
    </Shad.DropdownMenu>
  );
};
