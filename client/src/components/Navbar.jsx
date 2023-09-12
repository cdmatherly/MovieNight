import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import LoginModal from './LoginModal'

const Navbar = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user_id'])
    const user_id = cookies.user_id
    const [user, setUser] = useState(user_id)
    const navigate = useNavigate()

    const onClickHandler = (e) => {
        removeCookie(['user_id'])
        setUser(null)
        navigate('/')
    }

    const updateUser = (e) => {
        setUser(e)
    }

    return (
        <div className="flex items-center justify-between w-full h-16 px-10 bg-slate-400 fixed top-0">
            <p>Movie Night</p>
            <div className="flex items-center justify-around gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={"/popular"}>Popular</Link>
                <Link to={"/toprated"}>Top Rated</Link>
                {user && (
                    <Link to={`/${user_id}/lists`}>My Lists</Link>
                )}
                {user? <button onClick={() => onClickHandler()} className='px-2 py-1 text-white bg-red-500 rounded-lg'>Log Out</button> : 
                <LoginModal modalText={"Log In"} modalClasses={""} updateUser={updateUser}/>
                }
            </div>
            
        </div>
    )
}

export default Navbar