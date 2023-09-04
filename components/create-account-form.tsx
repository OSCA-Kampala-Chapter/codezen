'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import validator from 'validator';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useStore } from '@/react-hands-v2';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  primaryPhone: z
    .string()
    .refine(
      (phone) => validator.isMobilePhone(phone, 'en-UG'),
      'Invalid Phone Number!'
    ),
  secondaryPhone: z
    .string()
    .refine(
      (phone) => (phone ? validator.isMobilePhone(phone, 'en-UG') : true),
      'Invalid Phone Number!'
    ),
  email: z
    .string()
    .refine(
      (email) => (email ? validator.isEmail(email) : true),
      'Invalid Email'
    ),
});

export const CreateAccountForm = () => {
  const [formData, setFormData] = useState<any>(null);
  const [state, dispatch] = useStore();
  let localFormState = state.local_createAccountFormData;

  const router = useRouter();

  // 1. Define our form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: localFormState.username,
      primaryPhone: localFormState.primaryPhone,
      secondaryPhone: localFormState.secondaryPhone,
      email: localFormState.email,
    },
  });

  useEffect(() => {
    if (formData) {
      dispatch({ action: 'setCreateAccountFormData', payload: formData });
    }
  }, [formData]);

  // 2. Define submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
    router.push('/choose-otp-receiver');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete="true">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 justify-normal items-center">
                  <span>Username:</span>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This should be the name on your National ID.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="primaryPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 justify-normal items-center">
                  <span>Phone Number:</span>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondaryPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 justify-normal items-center">
                  <span>Phone Number 2:</span>
                  <span className="text-neutral-700">(Optional)</span>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 justify-normal items-center">
                  <span>Email:</span>
                  <span className="text-neutral-700">(Optional)</span>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Proceed
        </Button>
        {/* Form Links */}
        <div className="flex justify-normal items-center gap-4">
          <p className="text-neutral-800">Already Have Account?</p>
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:text-green-500 _hover-styles">
            Login
          </Link>
        </div>
        <Link href="/terms-and-conditions">
          <div className="text-xs  text-neutral-500 hover:text-orange-500 _hover-styles flex justify-center items-center gap-1 mt-4">
            <span className="text-center">
              By Proceeding You Agree To Terms And Conditions
            </span>
          </div>
        </Link>
      </form>
    </Form>
  );
};
