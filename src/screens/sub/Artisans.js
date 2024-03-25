import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";

const Artisans = ({ artisans, status, comments }) => {

    const navigate = useNavigate()
    const [dropMenu, setDropMenu] = useState({ open: false, index: -1 })
    const [currentTab, setCurrentTab] = useState(null)
    const [displayArtisans, setDisplayArtisans] = useState([])
    const [sliceCount, setSliceCount] = useState({ from: 0, to: 15 })
    const [currentStatus, setCurrentStatus] = useState({status: false, id: -1})
    const [currentComment, setCurrentComment] = useState({comment: false, id: -1})

    const tabs = { all: "all", ...status } // {all: 'all', active: 'active', inactive: 'inactive', pending: 'pending'}

    const addSlice = () => {
        if ((sliceCount.to >= displayArtisans.length)) {
            setSliceCount({ from: sliceCount.from, to: sliceCount.to })
        } else {
            setSliceCount({ from: sliceCount.to, to: sliceCount.to + 15 })
            document.querySelector('#table-container').scrollTo(0, 0)
        }
    }

    const cutSlice = () => {
        if ((sliceCount.from <= 0)) {
            setSliceCount({ from: sliceCount.from, to: sliceCount.to })
        } else {
            setSliceCount({ from: sliceCount.from - 15, to: sliceCount.from })
            document.querySelector('#table-container').scrollTo(0, 0)
        }
    }


    const handleCurrentStatus = (status, comment, id) => {
        setCurrentStatus({status: status, id: id})
        setCurrentComment({comment: comment, id: id})
        setDropMenu({ open: false, index: -1 })
    }

    const filterArtisan = (tab) => {
        switch (tab) {
            case tabs.all:
                setDisplayArtisans(artisans)
                break;

            case tabs.active:
                setDisplayArtisans(artisans.filter((item) => item.status === tabs.active))
                break;

            case tabs.pending:
                setDisplayArtisans(artisans.filter((item) => item.status === tabs.pending))
                break;

            case tabs.inactive:
                setDisplayArtisans(artisans.filter((item) => item.status === tabs.inactive))
                break;

            default:
                setDisplayArtisans(artisans)
                break;
        }
    }

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
        filterArtisan(tab)
        setSliceCount({ from: 0, to: 15 })
    }

    useEffect(() => {
        handleTabClick(tabs.all)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDropMenu = (index) => {
        setDropMenu({ open: !dropMenu.open, index: index })
    }

    return (
        <>
            <div className=" flex *:text-nowrap w-[95%] pb-2 m-auto gap-4 overflow-x-auto small-scrollbar scrollbar items-center *:py-1 *:px-4 *:rounded-full mt-4 *:cursor-pointer active:*:scale-95">
                <div onClick={() => handleTabClick(tabs.all)} className={`${(currentTab === tabs.all) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>All</div>
                <div onClick={() => handleTabClick(tabs.pending)} className={`${(currentTab === tabs.pending) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>Pending</div>
                <div onClick={() => handleTabClick(tabs.active)} className={`${(currentTab === tabs.active) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>Active</div>
                <div onClick={() => handleTabClick(tabs.inactive)} className={`${(currentTab === tabs.inactive) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>Inactive</div>
            </div>
            <div className=" h-[70vh] flex justify-center items-start pt-6">
                <div id="table-container" className=" w-[95%] max-h-[95%] border-2 border-slate-500 rounded-md overflow-y-auto overflow-x-auto small-scrollbar scrollbar">
                    <table className=" w-full relative">
                        <thead className=" bg-slate-500 text-white sticky top-0 z-[1]">
                            <tr className=" text-nowrap *:py-1 *:px-3">
                                <td>S/N</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Address</td>
                                <td>Business Name</td>
                                <td>Status</td>
                                <td>Comment</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (displayArtisans.length > 0) ?
                                    <>
                                        {
                                            displayArtisans.slice(sliceCount.from, sliceCount.to).map((item, index) => (
                                                <tr onClick={() => navigate(`/artisan/${item.id}`)} key={index} className=" *:py-1 *:px-3 even:bg-slate-200 cursor-pointer hover:bg-slate-300">
                                                    <td>{index + 1 + sliceCount.from}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td className=" line-clamp-2">{item.address}</td>
                                                    <td>{item.businessName}</td>
                                                    <td>{(currentStatus.status) ? ((currentStatus.id === item.id) ? currentStatus.status : item.status) : item.status}</td>
                                                    {/* <td>{item.comment}</td> */}
                                                    <td>{(currentComment.comment) ? ((currentComment.id === item.id) ? currentComment.comment : item.comment) : item.comment}</td>
                                                    {/* dropdown col */}
                                                    <td>
                                                        <div onClick={(e) => e.stopPropagation()} className=" relative text-center">
                                                            <div onClick={() => handleDropMenu(index)} className={`${(dropMenu.open && dropMenu.index === index) ? " rotate-180" : " rotate-0"} transition text-2xl hover:text-primary inline-block`}>
                                                                <IoIosArrowDropleft />
                                                            </div>
                                                            {
                                                                (dropMenu.open && dropMenu.index === index) &&
                                                                <div className=" absolute top-[50%] -translate-y-[50%] right-10 flex divide-x px-1 rounded-md shadow-lg bg-white text-left *:py-1 *:px-3 z-20 hover:*:bg-slate-500 hover:*:text-white">
                                                                    <div onClick={() => handleCurrentStatus(status.active, comments.approved, item.id)} className="">Approve</div>
                                                                    <div onClick={() => handleCurrentStatus(status.inactive, comments.denied, item.id)} className="">Reject</div>
                                                                    <div onClick={() => handleCurrentStatus(status.pending, comments.pending, item.id)} className="">Suspend</div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                    :
                                    <tr>
                                        <td colSpan={8} className=" py-1 px-3 text-center text-gray-500 font-semibold">Empty</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {dropMenu.open && <div onClick={() => setDropMenu({ open: false, index: 0 })} className=" w-screen h-screen z-10 fixed top-0 left-0"></div>}
            <div className=" h-[10vh] w-[95%] m-auto flex justify-between items-center">
                <button onClick={() => cutSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><FaAngleLeft /> <span className=" hidden md:inline">Previous</span></button>
                <div className={`${(displayArtisans.length <= 0) && " hidden"} text-sm font-semibold text-gray-500`}>Showing {1 + sliceCount.from} to {(sliceCount.to >= displayArtisans.length) ? displayArtisans.length : sliceCount.to} of {displayArtisans.length}</div>
                <button onClick={() => addSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><span className=" hidden md:inline">Next</span> <FaAngleRight /></button>
            </div>
        </>
    )
}

export default Artisans
