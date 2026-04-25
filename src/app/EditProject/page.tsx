import Title from '../_components/Title/Title';
import getAllProjects from '../../../lib/SsrFunctions/getAllProjects';
import ProjectDetails from '../_components/EditProjectComponents/ProjectDetails/ProjectDetails';
import { ProjectData } from '../interface';

const EditProject = async () => {
  const projectsData: ProjectData[] = await getAllProjects();

  return (
    <div className="flex flex-col gap-10 mt-5 text-white mx-5 ">
      <Title
        title="Edit project"
        description="Modify your existing portfolio items with precision"
      />
      <ProjectDetails projectsData={projectsData} />
    </div>
  );
};

export default EditProject;
