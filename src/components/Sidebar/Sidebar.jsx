import React from 'react';
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import SidebarLibrary from '../SidebarLibrary/SidebarLibrary';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarNavigation />
      <SidebarLibrary />
    </div>
  );
};

export default Sidebar;
