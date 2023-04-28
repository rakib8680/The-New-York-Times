import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div
            className="grid mt-10 w-screen place-items-center px-4 text-sm font-medium"
        > <h1 className='text-xl text-secondary mb-6'>Register Your Account</h1>
            <div className="w-full max-w-sm rounded-lg bg-slate-300/30 shadow">
                <form className="p-4 md:p-5 lg:p-6">
                    <div className="grid gap-y-3">
                        <input
                            className=" rounded-md border border-slate-600 bg-slate-200 py-3 px-4 placeholder:text-slate-500 transition hover:text-secondary" type='text' placeholder='your name' name='name'
                        />
                        <input
                            className=" rounded-md border border-slate-600 bg-slate-200 py-3 px-4 placeholder:text-slate-500 transition hover:text-secondary" type='text' placeholder='photo url' name='photo'
                        />
                    </div>



                    <div className="grid gap-y-3 mt-3">
                        <input
                            className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-200 py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-500"
                            placeholder="email@example.com" type="email" name='email' required
                        />
                        <input
                            className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-200 py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-500"
                            placeholder="password" type='password' name='password' required
                        />
                        <input
                            className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-200 py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-500"
                            placeholder="confirm password" type='password' name='confirm' required
                        />
                        <div>
                            <input type="checkbox" name="accept" id="" />
                            <label htmlFor="" className='text-xs text-slate-500 ms-3'>Accept Terms and Conditions</label>
                        </div>
                        {/* <button
                            className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-200 py-3 px-4 text-slate-700 transition hover:text-secondary"
                        >
                            <svg
                                // style="color: rgb(203, 213, 225)"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                                    fill="#708090"
                                ></path>
                            </svg>
                            Sign in with Email
                        </button> */}
                    </div>
                    <p className='text-xs text-center mt-5'>Already have an account ? <Link to="/login" className='text-secondary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;