'use client'
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar(){

    let[open, setOpen] = useState(false)

    return(   
        <nav className="flex justify-between p-5 text-dark-blue font-bold md:flex md:items-center md:justify-between backdrop-blur">
            
            <div className="flex justify-between items-center"> 
                <span className="text-3xl">
                    <a href="/">henrickva</a>
                </span>
            </div>
            
            <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer md:hidden block"
                 >
                  {open?
                    (<AiOutlineClose  size={30} />)
                    :
                    (<AiOutlineMenu  size={30}/>)
                  }
            </div>

            <ul className={`backdrop-blur md:bg-transparent bg-dark-blue text-center md:flex md:item-center  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto ${open ? 'top-20':'top-[-490px]'}`}>
                <li className="text-back-blue md:text-dark-blue ease-in duration-200 mx-4 my-6 md:my-0 hover:text-white cursor-pointer">
                    <a href="/projects">Projects</a>
                </li>
                <li className="text-back-blue md:text-dark-blue ease-in duration-200 mx-4 my-6 md:my-0 hover:text-white cursor-pointer">
                    <a href="/contacts">Contacts</a>
                </li>
            </ul>
        </nav>  
    )
}