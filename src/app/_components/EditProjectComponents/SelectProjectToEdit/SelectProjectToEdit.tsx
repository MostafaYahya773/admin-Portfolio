'use client';
import { ProjectData } from '@/app/interface';
import Dropdown from '../DropList/DropList';
import { RefreshCcw } from 'lucide-react';

const SelectProjectToEdit = ({
  ProjectsData,
  setProjectId,
  isLoading,
}: {
  ProjectsData: ProjectData[];
  setProjectId: (id: string) => void;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-card-bg-color rounded-md p-5">
      <span className="text-label-color text-12 tracking-[2px] font-semibold">
        SELECT WORKSPACE PROJECT
      </span>
      <Dropdown
        options={ProjectsData}
        onselect={(id) => {
          console.log(id);
          setProjectId(id);
        }}
      />
      <div
        className={` ${isLoading ? 'flex' : 'hidden'}  text-third-color items-center gap-2 mt-2 `}
      >
        <RefreshCcw className="w-4 h-4 text-therd" />
        <span className=" text-12">
          Synchronizing metadata for "Nexus Wallet"...
        </span>
      </div>
    </div>
  );
};

export default SelectProjectToEdit;
