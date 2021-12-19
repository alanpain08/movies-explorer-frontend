import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function LayoutProfile() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default LayoutProfile;
