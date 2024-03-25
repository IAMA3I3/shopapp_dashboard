import { IoClose } from "react-icons/io5";

const ModalComponent = ({ setShowModal, title = "", info = "", onProceed = (() => { }), displayItem = {title: "", doc: ""}, isProceedModal = false, isDisplayModal = false }) => {

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {
                (!isProceedModal && isDisplayModal) ?
                    <div className=" fixed w-full h-screen top-0 left-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-[1000000]">
                        <div onClick={closeModal} className=" absolute top-4 right-4 text-2xl cursor-pointer">
                            <IoClose />
                        </div>
                        <div className=" w-[90%] h-[90%] overflow-y-auto small-scrollbar scrollbar">
                            <iframe src={displayItem.doc} title="modal_iframe" className=" w-full h-full"></iframe>
                        </div>
                        {/* <div className=" text-white">{displayItem}</div> */}
                    </div>
                    :
                    (isProceedModal && !isDisplayModal) ?
                        <div className=" fixed w-full h-screen top-0 left-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-[1000000]">
                            <div className="card shadow-2xl bg-gradient-to-br from-white/70 via-white/50 to-white/70 dark:from-black/70 dark:via-black/50 dark:to-black/70">
                                <div className=" text-2xl md:text-3xl mb-2">{title}</div>
                                <div className="">{info}</div>
                                <div className=" mt-4 flex gap-4 justify-between">
                                    <button onClick={onProceed} className=" bg-blue-600 text-white hover:bg-blue-700">Proceed</button>
                                    <button onClick={closeModal} className=" bg-slate-600 text-white hover:bg-slate-700">Cancel</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div onClick={closeModal} className=" absolute w-full h-screen top-0 left-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-[1000000]">
                            <div className="card shadow-2xl bg-gradient-to-br from-white/70 via-white/50 to-white/70 dark:from-black/70 dark:via-black/50 dark:to-black/70">
                                <div className="">Modal not allowed: it is either Proceed Modal or Display Modal</div>
                            </div>
                        </div>
            }
        </>
    )
}

export default ModalComponent