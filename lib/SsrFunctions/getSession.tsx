import { createClient } from '../../lib/supabase/server';
const getSession = async () => {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};

export default getSession;
