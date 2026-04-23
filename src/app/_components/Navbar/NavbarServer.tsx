import getSession from '../../../../lib/SsrFunctions/getSession';
import Navbar from './Navbar';

const NavbarServer = async () => {
  const data = await getSession();

  return <Navbar token={data?.access_token || null} />;
};

export default NavbarServer;
