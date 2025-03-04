import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../redux/gameSlice";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleClick = ()=>{
    navigate('/');
  }

  const handleProfileClick = ()=>{

    if(!user){
      navigate('/login');
      return;
    }
    navigate('/profile');

  }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#161616] h-16 text-white flex items-center justify-between px-5 z-50">
      <h1 onClick={handleClick} className="text-2xl md:text-3xl cursor-pointer">Gameverse</h1>
      <div className="flex-1 px-4 max-w-full md:max-w-[42rem]">
        <div className="flex items-center justify-center gap-2">
          <input
            className="bg-[#3B3B3B] p-2 px-3 rounded-4xl w-full outline-none text-sm md:text-base"
            placeholder="Search games..."
            type="text"
            onChange={handleSearch}
          />
          <IoSearch size={25} cursor={'pointer'} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <div className="flex gap-3">
          <FaUserCircle size={25} cursor={'pointer'} onClick={handleProfileClick}/>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
