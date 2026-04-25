import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { createClient } from '../../../lib/supabase/client';
const useGetProjectById = (projectId: string) => {
  const supabase = createClient();
  const getProjectById = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery({
    queryKey: ['project', projectId],
    queryFn: getProjectById,
    enabled: !!projectId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useGetProjectById;
