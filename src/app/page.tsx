import NewProject from './_components/NewProject/NewProject';
import UsersMessages from './_components/UsersMessages/UsersMessages';

const Home = async () => {
  return (
    <div className="flex flex-col gap-10 mt-5 mx-5 lg:mx-5">
      <NewProject />
      <UsersMessages />
    </div>
  );
};

export default Home;
