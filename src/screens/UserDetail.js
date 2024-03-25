import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Man from "../assets/man.avif";
import Girl from "../assets/girl.webp"

const UserDetail = () => {

    const { id } = useParams()
    const Navigate = useNavigate()

    const [user, setUser] = useState({})

    const filterById = () => {
        const filter = users.filter((item) => +item.id === +id)[0]
        if (filter) {
            setUser(filter)
        } else {
            setUser(false)
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
                user ?
                    <div className=" container py-4">
                        <div className="">
                            <div onClick={() => Navigate(-1)} className=" inline-block cursor-pointer text-2xl">
                                <FaChevronLeft />
                            </div>
                        </div>
                        <div className=" text-center mb-6">
                            <div className=" w-[200px] h-[200px] rounded-full overflow-hidden m-auto mb-4">
                                <img src={user.img} className=" w-full h-full object-cover" alt="" />
                            </div>
                            <div className="">
                                <div className=" font-semibold text-xl">{user.firstName} {user.lastName}</div>
                                <div className=" flex justify-center items-center gap-2">
                                    <span><IoMailOutline /></span>
                                    <span>{user.email}</span>
                                </div>
                                <div className=" flex justify-center items-center gap-2">
                                    <span><FiPhone /></span>
                                    <span>{user.phone}</span>
                                </div>
                                <div className=" w-[250px] m-auto flex flex-col mt-6 justify-center items-center gap-2">
                                    <span><IoLocationOutline /></span>
                                    <span>{user.address}</span>
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

export default UserDetail






// users
const users = [
    { id: 1, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 2, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 3, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 4, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 5, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 6, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 7, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 8, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 9, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 10, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 11, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 12, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 13, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 14, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 15, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 16, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 17, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 18, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 19, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 20, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 21, img: Man, firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 22, img: Girl, firstName: "Jane", lastName: "Doe", email: "janedoe@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 23, img: Man, firstName: "Jamal", lastName: "Khaid", email: "jamal@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
    { id: 24, img: Girl, firstName: "Telma", lastName: "Boldman", email: "telma@gmail.com", phone: "+123456789", address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit adipisci fuga cumque deleniti ea cupiditate nihil ut, corporis soluta?" },
]