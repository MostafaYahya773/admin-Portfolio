'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { ProjectData } from '@/app/interface';

interface Props {
  options: ProjectData[];
  onselect: (id: string) => void;
}

const DropList = ({ options, onselect }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSelect = (name: string, id: string) => {
    setValue(name);
    onselect(id);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        readOnly
        value={value}
        placeholder="Select a project"
        onClick={() => setOpen((p) => !p)}
        className="border w-full border-white/50 rounded-lg px-3 py-2 text-sm bg-bg-color/50 text-white cursor-pointer outline-none"
      />
      <ArrowDown className="absolute top-3 right-2 w-4 h-4 text-therd" />
      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-bg-color border border-white/20 rounded-lg overflow-hidden">
          {options?.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option.name, option.id)}
              className="px-3 py-2 text-sm text-white cursor-pointer hover:bg-white/10"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropList;
