import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Man from "../../assets/man.avif";
import Girl from "../../assets/girl.webp"

const Users = () => {

    const Navigate = useNavigate()

    const [displayUsers, setDisplayUsers] = useState([])
    const [sliceCount, setSliceCount] = useState({ from: 0, to: 15 })

    const addSlice = () => {
        if ((sliceCount.to >= displayUsers.length)) {
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
        setDisplayUsers(users)
    }, [])

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
                                <td>Email</td>
                                <td>Phone No.</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (displayUsers.length > 0) ?
                                    <>
                                        {
                                            displayUsers.slice(sliceCount.from, sliceCount.to).map((item, index) => (
                                                <tr onClick={() => Navigate(`/user/${item.id}`)} key={index} className=" *:py-1 *:px-3 even:bg-slate-200 cursor-pointer hover:bg-slate-300">
                                                    <td>{index + 1 + sliceCount.from}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
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
                <div className={`${(displayUsers.length <= 0) && " hidden"} text-sm font-semibold text-gray-500`}>Showing {1 + sliceCount.from} to {(sliceCount.to >= displayUsers.length) ? displayUsers.length : sliceCount.to} of {displayUsers.length}</div>
                <button onClick={() => addSlice()} className=" flex items-center gap-4 hover:bg-slate-200"><span className=" hidden md:inline">Next</span> <FaAngleRight /></button>
            </div>
        </>
    )
}

export default Users





// users
const users = [
    {id: 1, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 2, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 3, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 4, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 5, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 6, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 7, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 8, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 9, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 10, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 11, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 12, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 13, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 14, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 15, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 16, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 17, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 18, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 19, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 20, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 21, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 22, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 23, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
    {id: 24, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?"},
]