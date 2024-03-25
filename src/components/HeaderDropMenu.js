import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Modal from "../Modal";

const HeaderDropMenu = ({ showDropdown, toggleDropdown }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div onClick={() => toggleDropdown()} className={`${showDropdown ? " block" : " hidden"} fixed top-0 left-0 w-screen h-screen z-50`}>
                <div onClick={(e) => e.stopPropagation()} className=" absolute top-12 right-6 bg-white shadow-xl rounded-lg py-2">
                    <div onClick={() => setShowModal(true)} className=" flex gap-4 items-center px-6 py-1 hover:bg-slate-500 hover:text-white cursor-pointer">
                        <FiLogOut />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} title={"LOGOUT"} info={"Proceed to logout"} onProceed={() => { }} isProceedModal={true} />}
        </>
    )
}

export default HeaderDropMenu