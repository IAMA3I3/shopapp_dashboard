import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";
import ExportCSVButton from "../components/ExportCSVButton";

const DisputeDetail = () => {

    const { id } = useParams()
    const Navigate = useNavigate()

    const [disputeDetail, setDisputeDetail] = useState({})

    const filterById = () => {
        const filter = disputes.filter((item) => +item.id === +id)[0]
        if (filter) {
            setDisputeDetail(filter)
        } else {
            setDisputeDetail(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        filterById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                disputeDetail ?
                    <div className=" container py-4">
                        <div className=" flex gap-6 items-center">
                            <div onClick={() => Navigate(-1)} className=" inline-block cursor-pointer text-2xl">
                                <FaChevronLeft />
                            </div>
                            <div className=" text-2xl tracking-wide flex-1 truncate overflow-hidden">{disputeDetail.businessName}</div>
                        </div>
                        <div className=" mt-4">
                            <div className="card flex flex-col sm:flex-row gap-4 sm:justify-between">
                                <div className=" flex gap-6 md:gap-12 flex-wrap">
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Amount</div>
                                        <div className=" text-nowrap font-bold">NGN {disputeDetail.charges}</div>
                                    </div>
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Date</div>
                                        <div className=" font-bold">{disputeDetail.date}</div>
                                    </div>
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Activity</div>
                                        <div className=" text-nowrap font-bold">1 transaction</div>
                                    </div>
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Batch</div>
                                        <div className=" text-nowrap font-bold">1 batch</div>
                                    </div>
                                </div>
                                <div className=" text-nowrap">
                                    <ExportCSVButton data={[disputeDetail]} filename={`dispute_detail(${disputeDetail.businessName}).csv`} />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-4">
                            <div className="card">
                                <div className=" overflow-y-auto overflow-x-auto small-scrollbar scrollbar">
                                    <table className=" w-full">
                                        <thead className=" border-b border-b-slate-300">
                                            <tr className=" *:py-2 *:text-nowrap *:px-2">
                                                <td>Activity</td>
                                                <td>Reference</td>
                                                <td>Fees</td>
                                                <td>Charges</td>
                                                <td>Date</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=" *:py-2 *:text-nowrap *:px-2">
                                                <td>NGN {disputeDetail.charges} <span className=" text-xs font-semibold text-gray-500">payment made from stopshop360@gmail.com</span></td>
                                                <td>123456789123456789</td>
                                                <td>NGN {disputeDetail.charges}</td>
                                                <td>NGN {disputeDetail.charges}</td>
                                                <td>{disputeDetail.date}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" w-screen h-screen flex items-center justify-center text-3xl text-gray-500 uppercase">
                        Not found
                    </div>
            }
        </>
    )
}

export default DisputeDetail






// dispute status
const status = {
    treated: "treated",
    pending: "pending"
}


// dispute record
const disputes = [
    { id: 1, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "0.00", status: status.pending },
    { id: 2, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "0.00", status: status.pending },
    { id: 3, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "0.00", status: status.pending },
    { id: 4, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 5, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 6, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 7, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 8, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 9, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 10, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 11, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 12, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 13, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 14, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 15, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 16, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 17, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 18, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 19, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 20, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 21, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 22, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 23, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 24, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 25, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 26, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 27, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 28, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 29, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 30, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 31, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 32, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 33, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 34, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 35, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 36, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 37, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 38, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
    { id: 39, businessName: "LED Visual Inovative", date: "Wednesday, March 27 2024", charges: "680.00", settled: "680.00", status: status.treated },
    { id: 40, businessName: "Carving", date: "Friday, March 01 2024", charges: "190.00", settled: "190.00", status: status.treated },
    { id: 41, businessName: "Lumilan", date: "Tuesday, February 27 2024", charges: "530.00", settled: "530.00", status: status.treated },
]