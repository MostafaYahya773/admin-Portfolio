import { createClient } from '../../lib/supabase/server';

const getAllProjects = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from('projects').select('name ,id');
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default getAllProjects;
