import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";
import ExportCSVButton from "../components/ExportCSVButton";

const PayoutDetail = () => {

    const { id } = useParams()
    const Navigate = useNavigate()

    const [paymentDetail, setPaymentDetail] = useState({})

    const filterById = () => {
        const filter = payments.filter((item) => +item.id === +id)[0]
        if (filter) {
            setPaymentDetail(filter)
        } else {
            setPaymentDetail(false)
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
                paymentDetail ?
                    <div className=" container py-4">
                        <div className=" flex gap-6 items-center">
                            <div onClick={() => Navigate(-1)} className=" inline-block cursor-pointer text-2xl">
                                <FaChevronLeft />
                            </div>
                            <div className=" text-2xl tracking-wide flex-1 truncate overflow-hidden">{paymentDetail.businessName}</div>
                        </div>
                        <div className=" mt-4">
                            <div className="card flex flex-col sm:flex-row gap-4 sm:justify-between">
                                <div className=" flex gap-6 md:gap-12 flex-wrap">
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Amount</div>
                                        <div className=" text-nowrap font-bold">NGN {paymentDetail.payout}</div>
                                    </div>
                                    <div className="">
                                        <div className=" font-semibold text-gray-500">Date</div>
                                        <div className=" font-bold">{paymentDetail.date}</div>
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
                                    <ExportCSVButton data={[paymentDetail]} filename={`payment_detail(${paymentDetail.businessName}).csv`} />
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
                                                <td>Payout</td>
                                                <td>Date</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=" *:py-2 *:text-nowrap *:px-2">
                                                <td>NGN {paymentDetail.payout} <span className=" text-xs font-semibold text-gray-500">payment made from stopshop360@gmail.com</span></td>
                                                <td>123456789123456789</td>
                                                <td>NGN 850.00</td>
                                                <td>NGN {paymentDetail.payout}</td>
                                                <td>{paymentDetail.date}</td>
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

export default PayoutDetail








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