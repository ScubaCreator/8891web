import React from 'react';
import { FaBeer, FaBookOpen, FaHouseUser, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa';

const SideBarIcon = ({ icon }) => (
  <div className="relative flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto shadow-xl bg-gray-200 text-green-500 hover:text-green-950 hover:h-20 hover:w-20">
    {icon}
  </div>
);

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-lime-500 text-gray-800 shadow-xl transition-all duration-300 ease-linear cursor-pointer">
      <SideBarIcon icon={<FaHouseUser size="28" />} />
      <SideBarIcon icon={<FaBookOpen size="28" />} />
      <SideBarIcon icon={<FaMoneyBillWave size="28" />} />
      <SideBarIcon icon={<FaMobileAlt size="28" />} />
    </div>
  );
};

export default SideBar;
