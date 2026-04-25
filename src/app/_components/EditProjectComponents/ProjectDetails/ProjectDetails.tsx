'use client';
import Image from 'next/image';
import Input from '../../atoms/Input/Input';
import CardTitle from '../../Cards/CardTitle/CardTitle';
import { Info } from 'lucide-react';
import UploadImage from '../../Cards/UploadImage/UploadImage';
import { useFormik } from 'formik';
import SelectProjectToEdit from '../SelectProjectToEdit/SelectProjectToEdit';
import { useState } from 'react';
import { Project, ProjectData } from '@/app/interface';
import useGetProjectById from '@/app/hooks/useGetProjectById';
import useEditProject from '@/app/hooks/useEditProject';

const ProjectDetails = ({ projectsData }: { projectsData: ProjectData[] }) => {
  const [projectId, setProjectId] = useState<string>('');
  const { data, isLoading } = useGetProjectById(projectId);
  const { mutate: editProject } = useEditProject();

  const formik = useFormik<Project>({
    initialValues: {
      name: data?.name || '',
      title: data?.title || '',
      description: data?.description || '',
      tools: data?.tools || '',
      live_url: data?.live_url || '',
      github_url: data?.github_url || '',
      project_date: data?.project_date || '',
      Future: data?.Future || '',
      Future_description: data?.Future_description || '',
      image_url: data?.image_url || (null as File | null),
    },
    onSubmit: (data) => {
      console.log(data);
      editProject({ data, id: projectId });
    },
    enableReinitialize: true,
  });
  return (
    <div className="flex flex-col gap-10">
      <SelectProjectToEdit
        ProjectsData={projectsData}
        setProjectId={setProjectId}
        isLoading={isLoading}
      />
      <div className="flex flex-col bg-card-bg-color rounded-lg ">
        <div className="flex p-5 bg-[#171F33]  rounded-lg justify-between items-center ">
          <div>
            <CardTitle title="Project details" icon={<Info />} />
          </div>
          <span className="p-1 rounded-md text-12 text-[#C0C1FF] bg-third-color/20 border border-[#C0C1FF]/20">
            LAST EDIT - 12/09/2023
          </span>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-5  p-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="left flex flex-col gap-3">
              <Input
                label="Project name"
                placeholder="project name"
                type="text"
                name="name"
                formik={formik}
              />
              <Input
                label="Project Title"
                placeholder="project title"
                type="text"
                name="title"
                formik={formik}
              />
              <div className="flex flex-col gap-2 w-full">
                <label className=" uppercase text-label-color text-12 tracking-[2px] font-semibold">
                  Project Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter your project description"
                  onChange={formik?.handleChange}
                  value={formik?.values?.description || ''}
                  className="bg-input-color resize-none text-white p-2 h-32 border-none rounded-md w-full focus:outline-none focus:ring-1 focus:ring-white-color/10"
                />
              </div>
            </div>
            <div className="right flex flex-col gap-3">
              <Input
                label="TOOLS & TECHNOLOGIES"
                placeholder="Add tool...."
                formik={formik}
                name="tools"
                type="text"
              />
              <Input
                label="LIVE URL"
                placeholder="https://nexuswallet.com"
                formik={formik}
                name="live_url"
                type="text"
              />
              <Input
                label="GITHUB REPOSITORY"
                placeholder="https://nexuswallet.com"
                formik={formik}
                name="github_url"
                type="text"
              />
              <Input
                label="PROJECT DATE"
                placeholder="Select project date"
                formik={formik}
                name="project_date"
                type="date"
              />
              <Input
                label="FUTURE"
                placeholder="Enter future details"
                formik={formik}
                name="Future"
                type="text"
              />
              <div className="flex flex-col gap-2 w-full">
                <label className=" uppercase text-label-color text-12 tracking-[2px] font-semibold">
                  FUTURE DESCRIPTION
                </label>
                <textarea
                  name="Future_description"
                  placeholder="Enter future description"
                  onChange={formik?.handleChange}
                  value={formik?.values?.Future_description || ''}
                  className="bg-input-color resize-none text-white p-2 h-32 border-none rounded-md w-full focus:outline-none focus:ring-1 focus:ring-white-color/10"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-[2fr_1fr] gap-5 pb-3 border-b border-white/20">
            <div className="flex flex-col gap-2 md:order-1 order-2">
              <span className="uppercase text-label-color text-12 tracking-[2px] font-semibold ">
                PROJECT MEDIA PREVIEW
              </span>
              <Image
                src={data?.image_url ?? '/globe.svg'}
                alt="project image"
                width={500}
                height={500}
                className="rounded-md object-cover border w-full max-h-[400px] border-white/20"
              />
            </div>
            <div className="md:order-2 order-1">
              <UploadImage formik={formik} />
            </div>
          </div>
          <button
            type="submit"
            className="bg-button-color hover:bg-button-color/80 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetails;
