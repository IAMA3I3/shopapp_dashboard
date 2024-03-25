import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ExportCSVButton from "../../components/ExportCSVButton";

const Payout = () => {

    const Navigate = useNavigate()

    const [displayPayout, setDisplayPayout] = useState([])
    const [sliceCount, setSliceCount] = useState({ from: 0, to: 15 })
    const [currentTab, setCurrentTab] = useState(null)
    const [dropMenu, setDropMenu] = useState({ open: false, index: -1 })
    const [currentStatus, setCurrentStatus] = useState({ status: false, id: -1 })

    const tabs = { all: "all", ...status }


    const handleCurrentStatus = (status, id) => {
        setCurrentStatus({ status: status, id: id })
        setDropMenu({ open: false, index: -1 })
    }

    const handleDropMenu = (index) => {
        setDropMenu({ open: !dropMenu.open, index: index })
    }

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
        filterPayouts(tab)
        setSliceCount({ from: 0, to: 15 })
    }

    const filterPayouts = (tab) => {
        switch (tab) {
            case tabs.all:
                setDisplayPayout(payments)
                break;

            case tabs.paid:
                setDisplayPayout(payments.filter((item) => item.status === tabs.paid))
                break;

            case tabs.pending:
                setDisplayPayout(payments.filter((item) => item.status === tabs.pending))
                break;

            default:
                setDisplayPayout(payments)
                break;
        }
    }

    const addSlice = () => {
        if ((sliceCount.to >= displayPayout.length)) {
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

    useEffect(() => {
        handleTabClick(tabs.all)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className=" py-4">
                <div className=" flex flex-col md:flex-row md:items-center md:justify-between w-[95%] m-auto">
                    <div className=" flex *:text-nowrap gap-4 overflow-x-auto small-scrollbar scrollbar items-center *:py-1 *:px-4 *:rounded-full *:cursor-pointer active:*:scale-95">
                        <div onClick={() => handleTabClick(tabs.all)} className={`${(currentTab === tabs.all) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>All</div>
                        <div onClick={() => handleTabClick(tabs.paid)} className={`${(currentTab === tabs.paid) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>Paid</div>
                        <div onClick={() => handleTabClick(tabs.pending)} className={`${(currentTab === tabs.pending) ? " bg-slate-500 text-white" : " bg-slate-300"} hover:bg-slate-500 hover:text-white`}>Pending</div>
                    </div>
                    <div className=" mt-2 md:mt-0">
                        <ExportCSVButton data={payments} filename="Payouts.csv" />
                    </div>
                </div>
            </div>
            <div className="  h-[70vh] flex justify-center items-start">
                <div id="table-container" className=" w-[95%] max-h-[95%] border-2 border-slate-500 rounded-md overflow-y-auto overflow-x-auto small-scrollbar scrollbar">
                    <table className=" w-full relative">
                        <thead className=" bg-slate-500 text-white sticky top-0 z-[1]">
                            <tr className=" text-nowrap *:py-1 *:px-3">
                                <td>S/N</td>
                                <td>Payment For</td>
                                <td>Business Name</td>
                                <td>Payout Amount</td>
                                <td>Settled Amount</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (displayPayout.length > 0) ?
                                    <>
                                        {
                                            displayPayout.slice(sliceCount.from, sliceCount.to).map((item, index) => (
                                                <tr onClick={() => Navigate(`/payout_detail/${item.id}`)} key={index} className=" *:py-1 *:px-3 even:bg-slate-200 cursor-pointer hover:bg-slate-300">
                                                    <td>{index + 1 + sliceCount.from}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.businessName}</td>
                                                    <td>NGN {item.payout}</td>
                                                    <td>NGN {item.settled}</td>
                                                    <td className=" text-center">
                                                        <div className={`${(((currentStatus.status) ? ((currentStatus.id === item.id) ? currentStatus.status : item.status) : item.status) === status.paid) ? " bg-green-600" : " bg-yellow-600"} text-xs py-1 px-3 inline-block font-semibold rounded-full text-white text-center`}>
                                                            {(currentStatus.status) ? ((currentStatus.id === item.id) ? currentStatus.status : item.status) : item.status}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div onClick={(e) => e.stopPropagation()} className=" relative text-center">
                                                            <div onClick={() => handleDropMenu(index)} className={`${(dropMenu.open && dropMenu.index === index) ? " rotate-180" : " rotate-0"} transition text-2xl hover:text-primary inline-block`}>
                                                                <IoIosArrowDropleft />
                                                            </div>
                                                            {
                                                                (dropMenu.open && dropMenu.index === index) &&
                                                                <div className=" absolute top-[50%] -translate-y-[50%] right-10 flex divide-x px-1 rounded-md shadow-lg bg-white text-left *:py-1 *:px-3 z-20 hover:*:bg-slate-500 hover:*:text-white">
                                                                    <div onClick={() => handleCurrentStatus(status.paid, item.id)} className="">Paid</div>
                                                                    <div onClick={() => handleCurrentStatus(status.pending, item.id)} className="">Unpaid</div>
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
                                        <td colSpan={7} className=" py-1 px-3 text-center text-gray-500 font-semibold">Empty</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {dropMenu.open && <div onClick={() => setDropMenu({ open: false, index: 0 })} className=" w-screen h-screen z-10 fixed top-0 left-0"></div>}
            <div className=" h-[10vh] w-[95%] m-auto flex justify-between items-center">
                <button onClick={() => cutSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><FaAngleLeft /> <span className=" hidden md:inline">Previous</span></button>
                <div className={`${(displayPayout.length <= 0) && " hidden"} text-sm font-semibold text-gray-500`}>Showing {1 + sliceCount.from} to {(sliceCount.to >= displayPayout.length) ? displayPayout.length : sliceCount.to} of {displayPayout.length}</div>
                <button onClick={() => addSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><span className=" hidden md:inline">Next</span> <FaAngleRight /></button>
            </div>
        </>
    )
}

export default Payout







// payment status
const status = {
    paid: "paid",
    pending: "pending"
}


// peyment record
const payments = [
    { id: 1, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "0.00", status: status.pending },
    { id: 2, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "0.00", status: status.pending },
    { id: 3, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "0.00", status: status.pending },
    { id: 4, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 5, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 6, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 7, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 8, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 9, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 10, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 11, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 12, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 13, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 14, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 15, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 16, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 17, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 18, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 19, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 20, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 21, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 22, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 23, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 24, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 25, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 26, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 27, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 28, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 29, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 30, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 31, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 32, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 33, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 34, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 35, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 36, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 37, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 38, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
    { id: 39, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", payout: "68,000.00", settled: "68,000.00", status: status.paid },
    { id: 40, businessName: "Carving", date: "Friday, March 01 2024", payout: "19,000.00", settled: "19,000.00", status: status.paid },
    { id: 41, businessName: "Lumilan", date: "Tuesday, February 27 2024", payout: "53,000.00", settled: "53,000.00", status: status.paid },
]