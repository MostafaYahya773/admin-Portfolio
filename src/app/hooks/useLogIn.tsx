'use client';
import { createClient } from '../../../lib/supabase/client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
const useLogIn = () => {
  const router = useRouter();
  const supabase = createClient();
  const logIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);

    return data;
  };
  return useMutation({
    mutationKey: ['logIn'],
    mutationFn: logIn,
  });
};

export default useLogIn;
