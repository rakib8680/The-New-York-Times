import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Register = () => {

    const { registerUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);


    const handleTerms = event => {
        setAccept(event.target.checked);
    }


    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value



        // password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            // setError('Please provide one upperCase word')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            // setError('Please provide at least one number')
            return
        }
        else if (password.length < 6) {
            // setError('Password must be 6 characters or above')
            return
        }
        else if (password != confirm) {
            // setError("Password didn't matched");
            return
        }

        registerUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }










    return (
        <div
            className="grid mt-10 w-screen place-items-center px-4 text-sm font-medium "
        > <h1 className='text-xl text-secondary mb-6'>Register Your Account</h1>
            <div className="w-full max-w-sm rounded-lg bg-slate-300/30 shadow">
                <form className="p-4 md:p-5 lg:p-6" onSubmit={handleRegistration}>
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
                            <input type="checkbox" name="accept" id="" onClick={handleTerms} />
                            <label htmlFor="" className='text-xs text-slate-500 ms-3'>Accept Terms and Conditions</label>
                        </div>
                        <button
                            className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-200 py-3 px-4 text-slate-700 transition hover:text-secondary disabled:cursor-not-allowed" disabled ={!accept}
                        >
                            Register
                        </button>
                    </div>
                    <p className='text-xs text-center mt-5'>Already have an account ? <Link to="/login" className='text-secondary'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;