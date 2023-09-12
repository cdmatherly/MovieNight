import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginModal(props) {
    const { modalText, modalClasses, updateUser } = props;
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [validationErrors, setValidationErrors] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user_id'])
    const navigate = useNavigate()

    const authenticateUser = (user) => {
        axios.post('http://localhost:8000/login', user)
            .then(res => {
                console.log(res)
                const user_id = res.data.user_id
                setCookie(['user_id'], user_id, {maxAge: 86400})
                updateUser(user_id)
                setShowLoginModal(false)
                setShowRegisterModal(false)
                navigate("/")
            })
            .catch(err => {
                setEmail('')
                setPassword('')
                setValidationErrors(null)
                console.log(user)
                console.log(err)
                setValidationErrors(err.response?.data)
            })
    }

    const createUser = (user) => {
        axios.post('http://localhost:8000/register', user)
        .then(res => {
                console.log(res)
                const user_id = res.data.user._id
                setCookie(['user_id'], user_id, {maxAge: 86400})
                updateUser(user_id)
                setShowLoginModal(false)
                setShowRegisterModal(false)
                navigate("/")
            })
            .catch(err => {
                console.log(user)
                console.log(err)
                setValidationErrors(err.response?.data?.errors)
            })
    }

    const authenticateHandler = (e) => {
        e.preventDefault()
        setValidationErrors(null)
        authenticateUser({email, password})
    }

    const registerHandler = (e) => {
        e.preventDefault()
        setValidationErrors(null)
        createUser({name, email, password, confirmPassword})
    }

    const handleRegisterModal = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
        setValidationErrors(null)
    }
    const handleLoginModal = () => {
        setShowLoginModal(true);
        setShowRegisterModal(false);
        setValidationErrors(null)
    }

    return (
        <>
            <button
                className={modalClasses + " "}
                type="button"
                onClick={() => setShowLoginModal(true)}
            >
                {modalText}
            </button>
            {showLoginModal && (
                <>
                    <div
                        className="fixed top-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-auto outline-none right-10 focus:outline-none"
                    >
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                    <h3 className="text-2xl font-semibold">
                                        Login
                                    </h3>
                                    <button
                                        className="p-1 ml-auto text-3xl font-semibold leading-none text-red-500 border-0 outline-none opacity-60 focus:outline-none"
                                        onClick={() => (setShowLoginModal(false))}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                </div>
                                {/*body*/}
                                <form className="flex flex-col gap-2"
                                onSubmit={(e) => authenticateHandler(e)}
                                >
                                    <div className="relative flex-auto p-6 pb-3">
                                            {validationErrors?.error && (<p className="absolute top-0 text-red-500 right-8" >{validationErrors.error}</p>)}
                                        <div className="flex justify-between">
                                            <label>Email:</label>
                                            <input type="email" name="email" id="email" value={email} className="px-1 border border-black rounded" onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <label>Password:</label>
                                            <input type="password" name="password" id="password" value={password} className="px-1 border border-black rounded" onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-center gap-1 pb-6 rounded-b border-slate-200">
                                        <p>Don't have an account?</p>
                                        <a className="text-blue-500 underline hover:cursor-pointer"
                                            onClick={() => handleRegisterModal()}
                                        >
                                            Register
                                        </a>

                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                        <button
                                            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                            type="button"
                                            onClick={() => setShowLoginModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                            type="submit"
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
            {showRegisterModal && (
                <>
                    <div
                        className="fixed top-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-auto outline-none right-10 focus:outline-none"
                    >
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                    <h3 className="text-2xl font-semibold">
                                        Register
                                    </h3>
                                    <button
                                        className="p-1 ml-auto text-3xl font-semibold leading-none text-red-500 border-0 outline-none opacity-60 focus:outline-none"
                                        onClick={() => setShowRegisterModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                </div>
                                {/*body*/}
                                <form className="flex flex-col gap-2"
                                onSubmit={(e) => registerHandler(e)}
                                >
                                    <div className="relative flex flex-col gap-6 p-6 pb-3">
                                        {validationErrors?.name && (<p className="absolute top-0 text-red-500 right-8" >{validationErrors.name.message}</p>)}
                                        <div className="flex justify-between">
                                            <label>Name:</label>
                                            <input type="name" name="name" id="name" className="px-1 border border-black rounded" onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                        {validationErrors?.email && (<p className="text-red-500 text-right absolute right-8 top-12" >{validationErrors.email.message}</p>)}
                                        <div className="flex justify-between">
                                            <label>Email:</label>
                                            <input type="email" name="email" id="email" className="px-1 border border-black rounded" onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        {validationErrors?.password && (<p className="absolute right-8 text-right text-red-500" style={{top: "6.1rem"}} >{validationErrors.password.message}</p>)}
                                        <div className="flex justify-between gap-2">
                                            <label>Password:</label>
                                            <input type="password" name="password" id="password" className="px-1 border border-black rounded" onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <label>Confirm Password:</label>
                                            <input type="password" name="confirmPassword" id="confirmPassword" className="px-1 border border-black rounded" onChange={(e) => setConfirmPassword(e.target.value)}/>
                                        </div>
                                        {validationErrors?.confirmPassword && (<p className="absolute right-8 text-right text-red-500" style={{top: "9.4rem"}}>{validationErrors.confirmPassword.message}</p>)}
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-center gap-1 pb-6 rounded-b border-slate-200">
                                        <p>Already have an account?</p>
                                        <a className="text-blue-500 underline hover:cursor-pointer "
                                            onClick={() => handleLoginModal()}
                                        >
                                            Login
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                        <button
                                            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                            type="button"
                                            onClick={() => setShowRegisterModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
        </>
    );
}