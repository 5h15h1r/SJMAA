import React, { useEffect, useState } from 'react'
import { Collapse } from 'flowbite';
const Navbar = () => {
    const [state, setState] = useState(false)
    const [windowSize, setwindowSize] = useState(0)

    useEffect(() => {
        //This code is executed in the browser
        setwindowSize(window.innerWidth)
        console.log(window.innerWidth);
    }, [])


    const handleClick = () => {
        if (state==false)
            setState(true)
        else
            setState(false)
    }
    // const size = window.innerHeight
    // console.log(size);

  return (
    
        <div>
                
            {windowSize >= 500?
                <>
                    <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SJMAA</span>
                    </a>
                    <div class="flex items-center">
                        <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
             
                    <nav class="bg-gray-50 dark:bg-gray-700">
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">About us</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                </>
                :
                <>
                <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex  justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SJMAA</span>
                    </a>
                    <div className='flex items-center space-x-4'>
                        {/* Register Button */}
                        <div class="flex items-center">
                            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Register</a>
                        </div>
                        {/* Login button */}
                        <div class="flex items-center">
                            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                        </div>
                        {/* Burger Menu */}
                        <div class="flex-wrap items-center">
                            <button data-collapse-toggle="navbar-hamburger" onClick={handleClick} type="button" className="inline-flex items-center justify-center p-2 w-10 h-10  text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                            </button>
                        
                        </div>
                    </div>

                </div>
                {state ? 
                        <nav class="bg-gray-50 dark:bg-gray-700">
                        <div class="max-w-screen-xl  ">
                            <div class="flex  items-center">
                            <ul className="flex flex-col w-full font-medium  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400" aria-current="page">Home</a>
                                </li>
                                <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                                </li>
                                <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                                </li>
                                <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                        :
                        null
                    }
            </nav>
             
                    
                </>
            }
            
                    
           
           
        </div>
  )
}

export default Navbar
