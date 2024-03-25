import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaChevronLeft, FaChevronDown } from "react-icons/fa6";
import { IoMailOutline, IoPricetagOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import al1 from '../assets/al1.jpeg'
import al2 from '../assets/al2.jpeg'
import al3 from '../assets/al3.jpeg'
import ap1 from '../assets/artisan.jpg'

const ArtisanPorfolio = () => {

    const { id } = useParams()
    const Navigate = useNavigate()

    const [artisan, setArtisan] = useState({})
    const [expandCard, setExpandCard] = useState({ expand: false, index: -1 })

    const toggleExpandCard = (i) => {
        setExpandCard({expand: !expandCard.expand, index: i})
    }

    const filterById = () => {
        const filter = artisans.filter((item) => +item.id === +id)[0]
        if (filter) {
            setArtisan(filter)
        } else {
            setArtisan(false)
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
                artisan ?
                    <div className=" container py-4">
                        <div className="">
                            <div onClick={() => Navigate(-1)} className=" inline-block cursor-pointer text-2xl">
                                <FaChevronLeft />
                            </div>
                        </div>
                        <div className=" text-center mb-6">
                            <div className=" w-[100px] h-[100px] rounded-full overflow-hidden m-auto mb-4">
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
                        <div className=" columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                            {
                                [...Array(19)].map((e = 0, index) => (
                                    <div onClick={() => toggleExpandCard(index)} key={index} className="card p-0 mb-4 overflow-hidden">
                                        <img src={ap1} className=" w-full" alt="" />
                                        <div className=" p-2">
                                            <div className={`${(expandCard.expand && (expandCard.index === index)) ? " max-h-[600px]" : " max-h-[100px]"} transition-max-height ease-in-out duration-500 overflow-hidden`}>
                                                <div className=" text-xl mb-2">Title</div>
                                                <div className=" mb-2">
                                                    <div className=" text-lg">Overview</div>
                                                    <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur iure ut quisquam. Sunt fugiat sit inventore repellendus. Molestias, quae.</div>
                                                </div>
                                                <div className=" mb-2">
                                                    <div className=" text-lg mb-1">Category</div>
                                                    <div className=" flex flex-wrap gap-4">
                                                        {
                                                            ["Cat1", "Cat2", "Cat3"].map((item, index) => (
                                                                <div key={index} className=" py-1 px-4 rounded-full bg-slate-300 text-sm font-semibold">
                                                                    {item}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className=" mb-2">
                                                    <div className=" text-xl mb-1">Keywords</div>
                                                    <div className=" text-sm">{["Word1", "Word2", "Word3"].join(', ')}.</div>
                                                </div>
                                                <div className=" mb-2">
                                                    <div className=" text-lg mb-1">Tags</div>
                                                    <div className=" flex flex-wrap gap-4">
                                                        {
                                                            ["Tag1", "Tag2", "Tag3"].map((item, index) => (
                                                                <div key={index} className=" py-1 px-4 rounded bg-slate-300 flex items-center gap-2  text-sm font-semibold">
                                                                    <span><IoPricetagOutline /></span>
                                                                    <span>{item}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className=" font-semibold">&#8358; 19, 000</div>
                                            </div>
                                            <div className=" flex items-center justify-between">
                                                <div className={`${(expandCard.expand && (expandCard.index === index)) ? " opacity-0" : " opacity-100"}`}>...</div>
                                                <div className={`${(expandCard.expand && (expandCard.index === index)) ? " rotate-180" : " rotate-0"} transition cursor-pointer`}><FaChevronDown /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
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

export default ArtisanPorfolio














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
