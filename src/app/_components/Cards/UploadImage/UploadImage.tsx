import React from 'react';
import CardTitle from '../CardTitle/CardTitle';
import { ImageUp, CloudUpload } from 'lucide-react';
import { Project } from '@/app/interface';
import { FormikProps } from 'formik';
import Image from 'next/image';

const UploadImage = ({ formik }: { formik: FormikProps<Project> }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue('image_url', file);
    }
  };
  return (
    <div className="bg-card-bg-color flex flex-col w-full rounded-lg p-5 gap-5">
      <CardTitle title="Cover Image" icon={<ImageUp />} />
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="flex flex-col gap-3 items-center bg-input-color border-2 border-white/20 border-dashed rounded-lg p-4 text-center">
          <CloudUpload className="text-label-color" />
          <p className="text-white">Click to upload image</p>
          <p className="text-label-color text-12">PNG, JPEG up to 10MB</p>
        </div>
      </label>
      <input
        onChange={handleFileChange}
        id="image-upload"
        type="file"
        className="hidden"
      />
      {formik.values.image_url && (
        <Image
          src={
            formik.values.image_url ?
              URL.createObjectURL(formik.values.image_url)
            : '/placeholder-image.png'
          }
          alt="Project Image"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg object-cover"
        />
      )}
    </div>
  );
};

export default UploadImage;
