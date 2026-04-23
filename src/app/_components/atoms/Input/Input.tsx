import { Project } from '@/app/interface';
import { FormikProps } from 'formik';
import React from 'react';

const Input = ({
  label,
  placeholder,
  type,
  name,
  formik,
}: {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  formik: any;
}) => {
  if (!formik) return null;
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="uppercase text-label-color text-12 tracking-[2px] font-semibold ">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={formik?.values?.[name as keyof typeof formik.values]}
        onChange={formik?.handleChange}
        type={type}
        placeholder={placeholder}
        className="bg-input-color text-white p-3 border-none rounded-md w-full focus:outline-none focus:ring-1 focus:ring-white-color/10"
      />
    </div>
  );
};

export default Input;
