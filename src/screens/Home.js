import { useEffect, useState } from "react"
import SideNav from "../components/SideNav"
import Header from "../components/Header"
import Dashboard from "./sub/Dashboard"
import Artisans from "./sub/Artisans"
import Message from "./sub/Message"
import Portfolio from "./sub/Portfolio"
import Reviews from "./sub/Reviews"
import Payout from "./sub/Payout"
import Dispute from "./sub/Dispute"
import Users from "./sub/Users"
import Settings from "./sub/Settings"
import al1 from '../assets/al1.jpeg'
import al2 from '../assets/al2.jpeg'
import al3 from '../assets/al3.jpeg'

const Home = () => {

    const [expandedNav, setExpandedNav] = useState(false)
    const [currentMode, setCurrentMode] = useState(mode.dashboard)

    useEffect (() => {
        window.scrollTo(0, 0)
        let data = window.localStorage.getItem("stopshop360_currentMode")
        if (data !== null) {
            setCurrentMode(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("stopshop360_currentMode", JSON.stringify(currentMode))
    }, [currentMode])

    return (
        <div className=" w-full h-screen md:flex relative">
            <SideNav mode={mode} currentMode={currentMode} setCurrentMode={setCurrentMode} expandedNav={expandedNav} setExpandedNav={setExpandedNav} />
            <div onClick={() => setExpandedNav(false)} className={`${expandedNav ? " block" : " hidden"} md:hidden fixed w-screen h-screen z-10`}></div>
            <div className=" h-full overflow-y-auto overflow-x-hidden md:flex-1 scrollbar relative">
                <Header setExpandedNav={setExpandedNav} currentMode={currentMode} />
                {(currentMode === mode.dashboard) && <Dashboard artisans={artisans} status={status} />}
                {(currentMode === mode.artisans) && <Artisans artisans={artisans} status={status} comments={comments} />}
                {(currentMode === mode.message) && <Message />}
                {(currentMode === mode.portfolio) && <Portfolio artisans={artisans} />}
                {(currentMode === mode.reviews) && <Reviews />}
                {(currentMode === mode.payout) && <Payout />}
                {(currentMode === mode.dispute) && <Dispute />}
                {(currentMode === mode.users) && <Users />}
                {(currentMode === mode.settings) && <Settings />}
            </div>
        </div>
    )
}

export default Home




// MODE: Important!!!
const mode = {
    dashboard: 'dashboard',
    artisans: 'artisans',
    message: 'message',
    portfolio: 'portfolio',
    reviews: 'reviews',
    payout: 'payouts',
    dispute: 'dispute',
    users: 'users',
    settings: 'settings'
}





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
    denied:'Profile denied'
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