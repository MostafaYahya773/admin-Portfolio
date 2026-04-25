'use client';
import Title from '../Title/Title';
import { useFormik } from 'formik';
import ProjectDetails from '../Cards/ProjectDetails/ProjectDetails';
import ExternalLinks from '../Cards/ExternalLinks/ExternalLinks';
import UploadImage from '../Cards/UploadImage/UploadImage';
import { Project } from '../../interface';
import { useState } from 'react';
import useAddProject from '@/app/hooks/useAddProject';
const NewProject = () => {
  const { mutate } = useAddProject();
  const formik = useFormik<Project>({
    initialValues: {
      name: '',
      title: '',
      description: '',
      tools: '',
      live_url: '',
      github_url: '',
      project_date: '',
      Future: '',
      Future_description: '',
      image_url: null as File | null,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      mutate(
        { data: values },
        {
          onSuccess: () => {
            setSubmitting(false);
            formik.resetForm();
          },
          onError: () => {
            setSubmitting(false);
          },
        },
      );
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <Title
        title="Add New Project"
        description="Update your Public Profile With Fresh Work"
      />
      <form
        className="grid lg:grid-cols-[3fr,1fr] grid-rows-[auto_auto_auto] gap-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <ProjectDetails formik={formik} />
          <ExternalLinks formik={formik} />
        </div>
        <div className="imgurl">
          <UploadImage formik={formik} />
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="bg-button-color text-white py-2 px-5 rounded-lg"
        >
          {formik.isSubmitting ?
            <span className="loader"></span>
          : 'Add Project'}
        </button>
      </form>
    </div>
  );
};

export default NewProject;
