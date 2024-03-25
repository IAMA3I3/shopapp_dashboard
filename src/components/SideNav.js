import Logo from '../assets/logo.png'
import { RxDashboard } from "react-icons/rx";
import { GrUserWorker } from "react-icons/gr";
import { TbMessage } from "react-icons/tb";
import { RiStackFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiFlagFill } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const SideNav = ({ mode, currentMode, setCurrentMode, expandedNav, setExpandedNav }) => {

    return (
        <div className={`${expandedNav ? " left-0" : " -left-[250px]"} transition-all w-[250px] absolute md:relative top-0 md:left-0 bottom-0 h-full z-30 bg-white shadow-lg overflow-hidden`}>
            <div onClick={() => setExpandedNav(false)} className=" md:hidden absolute right-4 top-4 text-2xl active:text-primary cursor-pointer">
                <IoClose />
            </div>
            <div className="  px-6 py-2 h-full flex flex-col">
                <div className="">
                    <img src={Logo} className=' w-[100px] m-auto my-5' alt="logo" />
                </div>
                <div className=" flex-1 overflow-y-auto overflow-x-hidden small-scrollbar scrollbar">
                    {/*  */}
                    <div className=" text-gray-500 font-semibold mb-3 mt-6 uppercase text-lg">MENU</div>
                    <div onClick={() => setCurrentMode(mode.dashboard)} className={`${(currentMode === mode.dashboard) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <RxDashboard />
                        <span>Dashboard</span>
                    </div>
                    <div onClick={() => setCurrentMode(mode.artisans)} className={`${(currentMode === mode.artisans) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <GrUserWorker />
                        <span>Artisans</span>
                    </div>
                    <div onClick={() => setCurrentMode(mode.message)} className={`${(currentMode === mode.message) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <TbMessage />
                        <span>Message</span>
                    </div>
                    {/*  */}
                    <div className=" text-gray-500 font-semibold mb-3 mt-6 uppercase text-lg">Portfolio</div>
                    <div onClick={() => setCurrentMode(mode.portfolio)} className={`${(currentMode === mode.portfolio) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <RiStackFill />
                        <span>View Portfolio</span>
                    </div>
                    <div onClick={() => setCurrentMode(mode.reviews)} className={`${(currentMode === mode.reviews) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <FaRegEye />
                        <span>Reviews</span>
                    </div>
                    {/*  */}
                    <div className=" text-gray-500 font-semibold mb-3 mt-6 uppercase text-lg">Account</div>
                    <div onClick={() => setCurrentMode(mode.payout)} className={`${(currentMode === mode.payout) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <GiTakeMyMoney />
                        <span>Payouts</span>
                    </div>
                    <div onClick={() => setCurrentMode(mode.dispute)} className={`${(currentMode === mode.dispute) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <PiFlagFill />
                        <span>Dispute</span>
                    </div>
                    <div onClick={() => setCurrentMode(mode.users)} className={`${(currentMode === mode.users) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <FiUsers />
                        <span>Users</span>
                    </div>
                    {/*  */}
                    <div className=" text-gray-500 font-semibold mb-3 mt-6 uppercase text-lg">Others</div>
                    <div onClick={() => setCurrentMode(mode.settings)} className={`${(currentMode === mode.settings) && 'text-primary'} flex items-center gap-4 cursor-pointer hover:text-primary my-4`}>
                        <IoSettingsOutline />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav