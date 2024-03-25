import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Portfolio = ({ artisans }) => {

    const Navigate = useNavigate()

    const [displayArtisans, setDisplayArtisans] = useState([])
    const [sliceCount, setSliceCount] = useState({ from: 0, to: 15 })

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

    useEffect(() => {
        setDisplayArtisans(artisans)
    }, [artisans])

    return (
        <>
            <div className="  h-[80vh] flex justify-center items-start pt-6">
                <div id="table-container" className=" w-[95%] max-h-[95%] border-2 border-slate-500 rounded-md overflow-y-auto overflow-x-auto small-scrollbar scrollbar">
                    <table className=" w-full relative">
                        <thead className=" bg-slate-500 text-white sticky top-0 z-[1]">
                            <tr className=" text-nowrap *:py-1 *:px-3">
                                <td>S/N</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Business Name</td>
                                <td>Phone No.</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (displayArtisans.length > 0) ?
                                    <>
                                        {
                                            displayArtisans.slice(sliceCount.from, sliceCount.to).map((item, index) => (
                                                <tr onClick={() => Navigate(`/artisan_portfolio/${item.id}`)} key={index} className=" *:py-1 *:px-3 even:bg-slate-200 cursor-pointer hover:bg-slate-300">
                                                    <td>{index + 1 + sliceCount.from}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.businessName}</td>
                                                    <td>+123456789</td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                    :
                                    <tr>
                                        <td colSpan={5} className=" py-1 px-3 text-center text-gray-500 font-semibold">Empty</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=" h-[10vh] w-[95%] m-auto flex justify-between items-center">
                <button onClick={() => cutSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><FaAngleLeft /> <span className=" hidden md:inline">Previous</span></button>
                <div className={`${(displayArtisans.length <= 0) && " hidden"} text-sm font-semibold text-gray-500`}>Showing {1 + sliceCount.from} to {(sliceCount.to >= displayArtisans.length) ? displayArtisans.length : sliceCount.to} of {displayArtisans.length}</div>
                <button onClick={() => addSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><span className=" hidden md:inline">Next</span> <FaAngleRight /></button>
            </div>
        </>
    )
}

export default Portfolio