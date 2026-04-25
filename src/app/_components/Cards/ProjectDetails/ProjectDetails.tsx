import Input from '../../atoms/Input/Input';
import CardTitle from '../CardTitle/CardTitle';
import { FileChartColumnIncreasing } from 'lucide-react';
import { FormikProps } from 'formik';
import { Project } from '@/app/interface';
const ProjectDetails = ({ formik }: { formik: FormikProps<Project> }) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-card-bg-color rounded-md ">
      <CardTitle title="Project Details" icon={<FileChartColumnIncreasing />} />
      <div className="flex flex-col gap-3">
        <Input
          name="title"
          label="Project Title"
          placeholder="Enter your project title"
          type="text"
          formik={formik}
        />
        <Input
          name="name"
          label="Project Name"
          placeholder="Enter your project name"
          type="text"
          formik={formik}
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
        <div className="flex flex-col gap-2 w-full">
          <label className="text-14 text-white">Project Description</label>
          <textarea
            name="description"
            placeholder="Enter your project description"
            onChange={formik?.handleChange}
            value={formik?.values?.description || ''}
            className="bg-input-color resize-none text-white p-2 h-32 border-none rounded-md w-full focus:outline-none focus:ring-1 focus:ring-white-color/10"
          />
        </div>
        <div className="flex w-full gap-5 justify-between flex-wrap md:flex-nowrap">
          <Input
            name="project_date"
            label="Completion Date"
            placeholder="Enter your project completion date"
            type="date"
            formik={formik}
          />
          <Input
            name="tools"
            label="Project Tools"
            placeholder="Enter your project tools"
            type="text"
            formik={formik}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
