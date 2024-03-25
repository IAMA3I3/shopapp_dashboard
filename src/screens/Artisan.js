import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import al1 from '../assets/al1.jpeg'
import al2 from '../assets/al2.jpeg'
import al3 from '../assets/al3.jpeg'
import dummy from '../assets/dummy.pdf'
import Modal from "../Modal";

const Artisan = () => {

    const { id } = useParams()
    const Navigate = useNavigate()

    const [artisan, setArtisan] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [modalItem, setModalItem] = useState({})

    const filterById = () => {
        const filter = artisans.filter((item) => +item.id === +id)[0]
        if (filter) {
            setArtisan(filter)
        } else {
            setArtisan(false)
        }
    }

    const handleCertClick = (title, doc) => {
        setShowModal(true)
        setModalItem({...modalItem, title: title, doc: doc})
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        filterById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                artisan ?
                    <div className=" container py-4">
                        <div className="">
                            <div onClick={() => Navigate(-1)} className=" inline-block cursor-pointer text-2xl">
                                <FaChevronLeft />
                            </div>
                        </div>
                        <div className=" text-center mb-6">
                            <div className=" w-[200px] h-[200px] rounded-full overflow-hidden m-auto mb-4">
                                <img src={artisan.img} className=" w-full h-full object-cover" alt="" />
                            </div>
                            <div className="">
                                <div className=" font-semibold">{artisan.firstName} {artisan.lastName}</div>
                                <div className=" text-2xl tracking-wide">{artisan.businessName}</div>
                                <div className=" flex justify-center items-center gap-2">
                                    <span><IoMailOutline /></span>
                                    <span>mail@gmail.com</span>
                                </div>
                                <div className=" flex justify-center items-center gap-2">
                                    <span><FiPhone /></span>
                                    <span>+123456789</span>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col md:flex-row gap-6">
                            <div className="card flex-1">
                                <div className=" text-2xl mb-2">Bank Details</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className=" font-semibold pr-4">Bank Name:</td>
                                            <td>Chest Bank</td>
                                        </tr>
                                        <tr>
                                            <td className=" font-semibold pr-4">Account Name:</td>
                                            <td>{artisan.firstName} {artisan.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td className=" font-semibold pr-4">Account Number:</td>
                                            <td>0123456789</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card flex-1 mb-1">
                                <div className=" text-2xl mb-2">Business Details</div>
                                <div className=" flex items-center gap-4 mb-2">
                                    <span><IoLocationOutline /></span>
                                    <span>{artisan.address}</span>
                                </div>
                                <div className=" mb-2">
                                    <div className=" text-lg mb-1">Category</div>
                                    <div className=" flex flex-wrap gap-4">
                                        {
                                            ["Cat1", "Cat2", "Cat3"].map((item, index) => (
                                                <div key={index} className=" py-1 px-4 rounded-full bg-slate-300">
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" text-lg mb-1">Certificate</div>
                                    <div className=" flex flex-wrap gap-4">
                                        {
                                            ["Cert1", "Cert2", "Cert3"].map((item, index) => (
                                                <div onClick={() => handleCertClick(item, dummy)} key={index} className=" py-1 px-4 rounded bg-slate-300 flex items-center gap-2 cursor-pointer hover:bg-slate-500 hover:text-white active:scale-95">
                                                    <span><PiCertificateBold /></span>
                                                    <span>{item}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showModal && <Modal setShowModal={setShowModal} isDisplayModal={true} displayItem={modalItem} />}
                    </div>
                    :
                    <div className=" w-screen h-screen flex items-center justify-center text-3xl text-gray-500 uppercase">
                        Not found
                    </div>
            }
        </>
    )
}

export default Artisan





// status
const status = {
    active: 'active',
    inactive: 'inactive',
    pending: 'pending'
}


// comments
const comments = {
    pending: 'Yet to be reviewed',
    approved: 'Congratulations, your profile has been approved',
    denied: 'Profile denied'
}


// Artisans
const artisans = [
    { id: 1, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 2, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 4, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 5, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 6, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 7, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 14, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 13, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 8, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 9, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 10, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 18, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 11, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 20, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
    { id: 12, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 15, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 16, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 17, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.active, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.approved },
    { id: 24, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
    { id: 3, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.pending, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.pending },
    { id: 19, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
    { id: 21, img: al3, businessName: 'Lumilan', firstName: 'Deborah', lastName: 'Babatunde', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
    { id: 22, img: al1, businessName: 'LED Visual Inovative', firstName: 'Brad', lastName: 'William', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
    { id: 23, img: al2, businessName: 'Carving', firstName: 'Nancy', lastName: 'Drew', status: status.inactive, address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', comment: comments.denied },
]