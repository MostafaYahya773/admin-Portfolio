'use client';
import { useFormik } from 'formik';
import Input from '../_components/atoms/Input/Input';
import useLogIn from '../hooks/useLogIn';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const signin = () => {
  const router = useRouter();
  const { mutate: logIn } = useLogIn();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      logIn(values, {
        onSuccess: () => {
          toast.success('Logged in successfully');
          router.replace('/');
          router.refresh();
          resetForm();
        },
        onError: (error) => {
          toast.error(
            `Failed to log in: ${error instanceof Error ? error.message : 'Unknown error'}`,
          );
          setSubmitting(false);
        },
      });
    },
  });
  return (
    <div className="flex justify-center items-center my-auto h-screen">
      <div className="bg-card-bg-color p-10 rounded-lg w-[400px]">
        <h1 className="text-2xl font-bold text-white mb-5">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            formik={formik}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            formik={formik}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {formik.isSubmitting ?
              <span className="loader"></span>
            : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default signin;
