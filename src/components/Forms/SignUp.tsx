'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';
import Image from 'next/image';
import { CardBase } from './CardBase';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Must be a valid email.',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must have at lest 8 characters',
    })
    .max(20, {
      message: "Password can't be more than 20 characters.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

interface SignInProps {
  handleChangeType: (type: string) => void;
}

export function SignUp({ handleChangeType }: SignInProps) {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
    handleChangeType('hero-select');
  }

  return (
    <CardBase>
      <Shad.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col justify-start space-y-6"
        >
          <Shad.FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Shad.FormItem className="relative flex items-center">
                <Shad.FormControl>
                  <Shad.Input
                    className="h-[57px]"
                    placeholder="informe seu email"
                    {...field}
                  />
                </Shad.FormControl>
                <Image
                  className="absolute right-3 top-[20%]"
                  src="/arroba.svg"
                  alt="arroba"
                  height={17}
                  width={17}
                />
              </Shad.FormItem>
            )}
          />

          <Shad.FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <Shad.FormItem className="relative flex items-center">
                <Shad.FormControl>
                  <Shad.Input
                    className="h-[57px]"
                    type="password"
                    placeholder="informe sua senha"
                    {...field}
                  />
                </Shad.FormControl>
                <Image
                  className="absolute right-3 top-[20%]"
                  src="/eye.svg"
                  alt="arroba"
                  height={18}
                  width={18}
                />
              </Shad.FormItem>
            )}
          />

          <Shad.Button className="h-[57px]" type="submit">
            entrar
            <Image
              className="ml-2"
              src="/login_.svg"
              alt="login"
              height={15}
              width={15}
            />
          </Shad.Button>
        </form>
      </Shad.Form>
      <div className="flex self-end pt-3">
        <Image
          src="/question_shield.svg"
          height={15}
          width={15}
          alt="question"
        />
        <div
          className="ml-2 cursor-pointer text-red-600"
          onClick={() => handleChangeType('recovery')}
        >
          Esqueceu a senha?
        </div>
      </div>
    </CardBase>
  );
}
