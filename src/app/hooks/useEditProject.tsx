'use client';
import { useMutation } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
import { Project } from '../interface';
import slugify from 'slugify';
import toast from 'react-hot-toast';
const useEditProject = () => {
  const supabase = createClient();
  const EditProject = async ({ data, id }: { data: Project; id: string }) => {
    const handleFile = (file: File) => {
      const fileExt = file.name.split('.').pop();
      const fileName =
        slugify(file.name, {
          replacement: '_', // استبدال الفراغات بـ_
          lower: false, // تحافظ على الحروف الكبيرة لو عايز
          strict: true, // يشيل أي رموز غير مسموح بها
        }) +
        '.' +
        fileExt;

      return fileName;
    };

    // upload New Image pkg
    const { error: uploadpkgError } = await supabase.storage
      .from('portfolio-images')
      .upload(handleFile(data.image_url as File), data.image_url as File, {
        upsert: true,
      });

    if (uploadpkgError) throw new Error(uploadpkgError.message);

    // get New Image pkg
    const { data: image_url } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(handleFile(data.image_url as File));
    // insert New Project
    const { error } = await supabase
      .from('projects')
      .update({
        ...data,
        image_url: image_url.publicUrl,
      })
      .eq('id', id);

    if (error) throw new Error(error.message);

    return data;
  };

  return useMutation({
    mutationKey: ['EditProject'],
    mutationFn: EditProject,
    onSuccess: () => {
      toast.success('Project edited successfully!');
    },
    onError: (e) => {
      toast.error(
        `please complete all fields ${e instanceof Error ? e.message : ''}`,
      );
    },
  });
};

export default useEditProject;
