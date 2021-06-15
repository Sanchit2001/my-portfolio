import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
const NavBar = () => {
    return (
        <header className="bg-green-200">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-green-600 hover:text-green-500 text-4xl font-bold cursive tracking-widest"
                     >
                        Sanchit
                    </NavLink>
                    <NavLink to="/project" 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-3 px-3 my-6 text-green-600 hover:text-green-500 cursive tracking-widest"
                    >
                        Projects
                    </NavLink >
                    <NavLink to="/post" 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-3 px-3 my-6 text-green-600 hover:text-green-500 cursive tracking-widest"
                    >
                        Interests
                    </NavLink>
                    <NavLink to="/about" 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-3 px-3 my-6  text-green-600 hover:text-green-500 cursive tracking-widest">
                        About Me
                    </NavLink>
                    <NavLink to="/cirtificates" 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-3 px-3 my-6  text-green-600 hover:text-green-500 cursive tracking-widest">
                        My Cirtifications
                    </NavLink>
                </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/sanchit-jain-21232019a" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://github.com/Sanchit2001" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    </div> 

            </div>
        </header>

    )
}

export default NavBar
