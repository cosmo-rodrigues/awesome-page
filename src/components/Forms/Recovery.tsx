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
});

type FormSchema = z.infer<typeof formSchema>;

interface RecoveryProps {
  handleChangeType: (type: string) => void;
}

export function Recovery({ handleChangeType }: RecoveryProps) {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
    handleChangeType('recovery-success');
  }
  return (
    <CardBase>
      <Shad.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-start space-y-5"
        >
          <Shad.FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Shad.FormItem className="relative flex items-center">
                <Shad.FormControl>
                  <Shad.Input placeholder="informe seu email" {...field} />
                </Shad.FormControl>
                <Image
                  className="absolute right-3 top-[10%]"
                  src="/arroba.svg"
                  alt="arroba"
                  height={17}
                  width={17}
                />
              </Shad.FormItem>
            )}
          />

          <Shad.Button type="submit">enviar link</Shad.Button>
        </form>
      </Shad.Form>
    </CardBase>
  );
}
