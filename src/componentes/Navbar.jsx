import { useState } from 'react'
import Button from './Button.jsx'


import { Link } from "react-router-dom";

const Navbar = () => {

    let [open, setOpen] = useState(false)

    let Links = [
        { name: "HOME", link: "/home" },

        { name: "ABOUT", link: "/about" },
        { name: "SERVICES", link: "/services" },
        { name: "BLOG'S", link: "/blogs" },
        { name: "CONTACT", link: "/contact" }
    ]
    return (
        <>
            <div className='shadow-md w-full sticky top-0 left-0 opacity-90 z-50'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl  flex items-center font-[Poppins] text-gray-800'>
                        <span className='text-3xl text-indigo-600   mr-3 pt-2'>
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        JUAMAYA

                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 trasition-all-duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100'}`}>
                        {
                            Links.map(link => {
                                return (
                                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                        <Link to={link.link} className='text-gray-800  hover:bg-indigo-600 hover:text-white px-3 py-1 rounded-lg  duration-500'>{link.name}</Link>
                                    </li>
                                )
                            })
                        }
                        <Button>
                            Get Started
                        </Button>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar