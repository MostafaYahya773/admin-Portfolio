'use client';

import React, { useEffect, useMemo } from 'react';
import CardTitle from '../CardTitle/CardTitle';
import { ImageUp, CloudUpload } from 'lucide-react';
import { Project } from '@/app/interface';
import { FormikProps } from 'formik';
import Image from 'next/image';

const UploadImage = ({ formik }: { formik: FormikProps<Project> }) => {
  const image = formik.values.image_url;

  // ✅ create preview safely
  const preview = useMemo(() => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    }

    if (typeof image === 'string') {
      return image;
    }

    return '';
  }, [image]);

  // ✅ cleanup memory leaks (important)
  useEffect(() => {
    if (!(image instanceof File)) return;

    const url = URL.createObjectURL(image);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [image]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      formik.setFieldValue('image_url', file);
    }
  };

  return (
    <div className="bg-card-bg-color flex flex-col w-full rounded-lg p-5 gap-5">
      <CardTitle title="Cover Image" icon={<ImageUp />} />

      {/* Upload Area */}
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
        accept="image/*"
        className="hidden"
      />

      {/* Preview */}
      {preview && (
        <div className="w-full">
          <Image
            src={preview}
            alt="Project Image"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
