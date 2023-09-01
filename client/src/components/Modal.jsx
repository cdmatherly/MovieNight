import React from "react";
import { Link } from "react-router-dom";

export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { modalText, modalClasses } = props;
    return (
        <>
            <button
                className={modalClasses + " "}
                type="button"
                onClick={() => setShowModal(true)}
            >
                {modalText}
            </button>
            {showModal ? (
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
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto p-6 pb-3">
                                    <form action="" className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <label>Email:</label>
                                            <input type="email" name="" id="" className="px-1 border border-black rounded"/>
                                        </div>
                                        <div className="flex justify-between gap-2">
                                            <label>Password:</label>
                                            <input type="password" name="" id="" className="px-1 border border-black rounded"/>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center pb-6 rounded-b border-slate-200">
                                    <p>Don't have an account? <Link className="text-blue-500 underline ">Register</Link></p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                    <button
                                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            ) : null}
        </>
    );
}