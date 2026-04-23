import { Project } from '@/app/interface';
import Input from '../../atoms/Input/Input';
import CardTitle from '../CardTitle/CardTitle';
import { Link2 } from 'lucide-react';
import { FormikProps } from 'formik';

const ExternalLinks = ({ formik }: { formik: FormikProps<Project> }) => {
  return (
    <div className="flex gap-5 p-5 bg-card-bg-color rounded-lg flex-col ">
      <CardTitle title="External Links" icon={<Link2 />} />
      <div className="flex gap-5">
        <Input
          name="github_url"
          formik={formik}
          label="Github"
          placeholder="Enter your github link"
          type="text"
        />
        <Input
          name="live_url"
          formik={formik}
          label="Live URL"
          placeholder="Enter your live URL"
          type="text"
        />
      </div>
    </div>
  );
};

export default ExternalLinks;
