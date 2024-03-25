import { FaRegBell } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import Person from '../assets/person.jpg'
import { FaChevronDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import HeaderDropMenu from "./HeaderDropMenu";

const Header = ({ setExpandedNav, currentMode }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
        <div className=" sticky top-0 left-0 right-0 bg-slate-300 shadow-sm px-6 h-[10vh] z-10">
            <div className=" h-full flex justify-end items-center gap-4 md:gap-10">
                <div className=" flex-1 flex gap-4 items-center overflow-hidden">
                    <div onClick={() => setExpandedNav(true)} className=" md:hidden text-2xl cursor-pointer active:text-primary">
                        <FiMenu />
                    </div>
                    <div className=" uppercase text-xl truncate">{currentMode}</div>
                </div>
                <div className=" text-xl cursor-pointer relative">
                    <div className=" w-2 h-2 bg-primary rounded-full animate-ping absolute top-0 right-0"></div>
                    <div className=" w-2 h-2 bg-primary rounded-full absolute top-0 right-0"></div>
                    <FaRegBell />
                </div>
                <div className=" text-xl cursor-pointer relative">
                    <div className=" w-2 h-2 bg-primary rounded-full animate-ping absolute top-0 right-0"></div>
                    <div className=" w-2 h-2 bg-primary rounded-full absolute top-0 right-0"></div>
                    <TbMessage />
                </div>
                <div onClick={() => toggleDropdown()} className=" flex items-center gap-4 cursor-pointer">
                    <span className=" hidden sm:inline">User Name</span>
                    <div className=" w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src={Person} className=" w-full h-full object-cover" alt="" />
                    </div>
                    <div className={`${showDropdown ? " rotate-180" : " rotate-0"} hidden sm:block transition`}>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
        </div>
        <HeaderDropMenu showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
        </>
    )
}

export default Header