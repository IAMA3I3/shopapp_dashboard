import { FaStar } from "react-icons/fa6";
import Girl from '../../assets/girl.webp'

const Reviews = () => {

    return (
        <div className=" p-6">
            <div className=" rounded-xl p-6 bg-white border-2 border-slate-300">
                <div className="">
                    {reviewList.map((item, index) => (
                        <div key={index} className=" my-10 first:mt-0 last:mb-0">
                            <div className=" flex items-center gap-4">
                                <div className=" w-[50px] h-[50px] rounded-full overflow-hidden">
                                    <img src={item.img} className=' w-full h-full object-cover' alt="" />
                                </div>
                                <div className=" font-semibold">
                                    <div className="">{item.name}</div>
                                    <div className=" text-sm text-gray-500">Joined on {item.created_at}</div>
                                </div>
                            </div>
                            <div className=" flex gap-1 mt-2">
                                {
                                    [...Array(item.rating)].map((e, index) => (
                                        <div key={index} className=" text-yellow-500">
                                            <FaStar />
                                        </div>
                                    ))
                                }
                                {
                                    [...Array(5 - item.rating)].map((e, index) => (
                                        <div key={index} className=" text-gray-400">
                                            <FaStar />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className=" text-xs font-semibold text-gray-500 mt-1">Reviewed on {item.reviewed_at}</div>
                            <div className="mt-2">{item.review}</div>
                            <div className=" text-xs font-semibold text-gray-500 mt-1">19 people found this helpful</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews




// reviews
const reviewList = [
    { id: 1, img: Girl, name: "Tesia Curry", created_at: "February 2023", rating: 3, reviewed_at: "January 18, 2024", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci accusantium laudantium quae quis. Quos ea, consequatur pariatur maiores ipsa saepe iusto expedita fugiat exercitationem voluptas cum et vitae sapiente." },
    { id: 2, img: Girl, name: "Deborah Milna", created_at: "November 2020", rating: 4, reviewed_at: "January 18, 2024", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci accusantium laudantium quae quis. Quos ea, consequatur pariatur maiores ipsa saepe iusto expedita fugiat exercitationem voluptas cum et vitae sapiente." },
    { id: 3, img: Girl, name: "Lilian Brown", created_at: "March 2023", rating: 2, reviewed_at: "January 18, 2024", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci accusantium laudantium quae quis. Quos ea, consequatur pariatur maiores ipsa saepe iusto expedita fugiat exercitationem voluptas cum et vitae sapiente." },
    { id: 4, img: Girl, name: "Susan Chester", created_at: "August 2022", rating: 4, reviewed_at: "January 18, 2024", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci accusantium laudantium quae quis. Quos ea, consequatur pariatur maiores ipsa saepe iusto expedita fugiat exercitationem voluptas cum et vitae sapiente." }
]