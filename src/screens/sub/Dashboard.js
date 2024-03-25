import { GrUserWorker } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import DpList from "../../components/DpList";
import AppChart from "../../components/AppChart";

const Dashboard = ({ artisans, status }) => {

    const pendingArtisans = artisans.filter((item) => item.status === status.pending)

    return (
        <div className=" p-6">
            <div className=" flex flex-wrap gap-4">
                {/*  */}
                <div className="card flex-1 bg-white min-w-[200px]">
                    <div className=" bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center text-3xl text-primary mb-4">
                        <GrUserWorker />
                    </div>
                    <div className=" font-bold text-2xl">2,546</div>
                    <div className=" text-gray-500 font-semibold">Total Artisans</div>
                </div>
                {/*  */}
                <div className="card flex-1 bg-white min-w-[200px]">
                    <div className=" bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center text-3xl text-primary mb-4">
                        <HiOutlineShoppingBag />
                    </div>
                    <div className=" font-bold text-2xl">46,206</div>
                    <div className=" text-gray-500 font-semibold">Total Portfolio</div>
                </div>
                {/*  */}
                <div className="card flex-1 bg-white min-w-[200px]">
                    <div className=" bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center text-3xl text-primary mb-4">
                        <GiTakeMyMoney />
                    </div>
                    <div className=" font-bold text-2xl">&#8358; 875k</div>
                    <div className=" text-gray-500 font-semibold">Total Payout</div>
                </div>
                {/*  */}
                <div className="card flex-1 bg-white min-w-[200px]">
                    <div className=" bg-gray-300 w-14 h-14 rounded-full flex justify-center items-center text-3xl text-primary mb-4">
                        <FiUsers />
                    </div>
                    <div className=" font-bold text-2xl">4,102</div>
                    <div className=" text-gray-500 font-semibold">Total Users</div>
                </div>
                {/*  */}
            </div>
            <div className=" mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="card p-3 lg:col-span-2 bg-white">
                    <AppChart />
                </div>
                <div className="card p-3 bg-white">
                    <div className=" text-xl mb-2">Pending Activites</div>
                    <DpList items={pendingArtisans} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard