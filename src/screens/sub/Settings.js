import { useState } from "react";
import Person from "../../assets/person.jpg"
import { FaRegEdit } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Settings = () => {

    const [editPhone, setEditPhone] = useState(false)
    const [phone, setPhone] = useState("+123456789")
    const [errors, setErrors] = useState({ phone: false })

    const [showCurrentPwd, setShowCurrentPwd] = useState(false)
    const [showNewPwd, setShowNewPwd] = useState(false)
    const [showConfirmPwd, setShowConfirmPwd] = useState(false)

    const toggleShowPwd = (field) => {
        switch (field) {
            case "current_pwd":
                setShowCurrentPwd(!showCurrentPwd)
                break;

            case "new_pwd":
                setShowNewPwd(!showNewPwd)
                break;

            case "confirm_pwd":
                setShowConfirmPwd(!showConfirmPwd)
                break;

            default:
                break;
        }
    }

    const handlePhoneChange = (e) => {
        const { value } = e.target
        setPhone(value)
    }

    const editPhoneSubmit = (e) => {
        e.preventDefault()
        let re = /^[+]?[0-9]{9,13}$/
        if (phone === "") {
            setErrors({ ...errors, phone: "Phone is empty" })
        } else if (!re.test(phone)) {
            setErrors({ ...errors, phone: "Phone is invalid" })
        } else {
            setErrors({ ...errors, phone: false })
            setEditPhone(false)
        }
    }

    return (
        <div className=" p-2 sm:p-4 md:p-10">
            <div className=" w-full mt-2 flex flex-col gap-4 md:gap-8 md:flex-row items-center">
                <div className=" w-full max-w-[250px] max-h-[250px] rounded-full overflow-hidden">
                    <img src={Person} className=" w-full h-full object-cover" alt="..." />
                </div>
                <div className=" *:my-4 *:text-nowrap">
                    <div className=" flex gap-2 items-center">
                        <span className=" font-semibold">First Name:</span>
                        <span>User</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <span className=" font-semibold">Last Name:</span>
                        <span>Name</span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <span className=" font-semibold">Email:</span>
                        <span>user@gmail.com</span>
                    </div>
                    <div className=" w-full flex gap-2 items-center">
                        <span className=" font-semibold">Phone No.:</span>
                        {
                            editPhone ?
                                <div className=" relative">
                                    <form onSubmit={(e) => editPhoneSubmit(e)} action=" ">
                                        <input className=" py-1 px-2" type="text" name="phone" id="phone" value={phone} onChange={(e) => handlePhoneChange(e)} />
                                        <button className=" hover:text-green-600"><FaRegCircleCheck /></button>
                                    </form>
                                    {errors.phone && <div className=" absolute text-xs text-red-500 font-semibold">{errors.phone}</div>}
                                </div>
                                :
                                <>
                                    <span>{phone}</span>
                                    <div onClick={() => setEditPhone(true)} className=" cursor-pointer hover:text-blue-600">
                                        <FaRegEdit />
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="card mt-6">
                <div className=" text-xl mb-2">Change Password</div>
                <form onSubmit={(e) => e.preventDefault()} action="">
                    <div className=" flex flex-col my-2">
                        <label className=" text-sm text-gray-500 font-semibold" htmlFor="current-pwd">Current Password</label>
                        <div className=" relative">
                            <input className=" w-full pr-8" type={showCurrentPwd ? "text" : "password"} name="current_pwd" id="current-pwd" />
                            <div onClick={() => toggleShowPwd("current_pwd")} className=" absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer">
                                {
                                    showCurrentPwd ?
                                        <FaRegEyeSlash />
                                        :
                                        <FaRegEye />
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col my-2">
                        <label className=" text-sm text-gray-500 font-semibold" htmlFor="new-pwd">New Password</label>
                        <div className=" relative">
                            <input className=" w-full pr-8" type={showNewPwd ? "text" : "password"} name="new_pwd" id="new-pwd" />
                            <div onClick={() => toggleShowPwd("new_pwd")} className=" absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer">
                                {
                                    showNewPwd ?
                                        <FaRegEyeSlash />
                                        :
                                        <FaRegEye />
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col my-2">
                        <label className=" text-sm text-gray-500 font-semibold" htmlFor="confirm-pwd">Confirm Password</label>
                        <div className=" relative">
                            <input className=" w-full pr-8" type={showConfirmPwd ? "text" : "password"} name="confirm_pwd" id="confirm-pwd" />
                            <div onClick={() => toggleShowPwd("confirm_pwd")} className=" absolute top-[50%] -translate-y-[50%] right-2 cursor-pointer">
                                {
                                    showConfirmPwd ?
                                        <FaRegEyeSlash />
                                        :
                                        <FaRegEye />
                                }
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <button className=" bg-slate-500 text-white hover:bg-slate-400">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings