import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'

const Navbar = (props) => {

    return (
        <div className="flex items-center justify-between w-full h-16 px-10 bg-slate-400">
            <p>Movie Night</p>
            <div className="flex items-center justify-around gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={"/popular"}>Popular</Link>
                <Link to={"/toprated"}>Top Rated</Link>
                <Link to={"/mygroups"}>My Groups</Link>
                <Modal modalText={"Login"} modalClasses={""}/>
            </div>
            
        </div>
    )
}

export default Navbar