import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function LayoutProfile({ loggedIn }) {
  return (
    <>
      <Header {...{ loggedIn }} />

      <Outlet />
    </>
  );
}

export default LayoutProfile;
