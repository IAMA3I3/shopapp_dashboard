const DpList = ({ items }) => {

    return (
        <div className=" h-[300px] p-2 overflow-y-auto overflow-x-hidden small-scrollbar scrollbar">
            {
                items.map((item, index) => (
                    <div key={index} className=" my-6 first:mt-0 last:mb-0 flex items-center gap-4 py-1 px-3 rounded-md cursor-pointer hover:bg-gray-200">
                        <div className=" w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src={item.img} className=" w-full h-full object-cover" alt="" />
                        </div>
                        <div className=" flex-1 overflow-hidden">
                            <div className=" truncate text-lg font-bold">{item.businessName}</div>
                            <div className=" flex justify-between gap-2">
                                <div className=" truncate">{item.firstName} {item.lastName}</div>
                                <div className=" text-sm font-semibold text-green-600">{item.status}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DpList