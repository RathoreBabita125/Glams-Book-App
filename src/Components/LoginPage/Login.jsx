import lotus from '../../assets/lotus.png'
import { Link, NavLink } from 'react-router-dom'

function Login() {
    return (
        <div className='w-full h-auto mt-5'>
            <div className='flex flex-wrap justify-center relative'>
                <img src={lotus} alt="" className='md:w-[55vw] md:h-[95vh] opacity-20' />
                <div className='w-full h-auto flex flex-wrap justify-center items-center absolute top-[7px]'>
                    <div className='md:w-[35vw] text-red-900 md:p-7 shadow-lg' >
                        <p className='text-center text-6xl font-bold font-serif'>Login</p>

                        <div className='space-y-3 w-full mt-5'>

                            <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[5px]'>
                                <input className='outline-none font-semibold' type="email" placeholder='Email' />
                                <i class="fa-solid fa-envelope"></i>
                            </div>

                            <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[5px]'>
                                <input className='outline-none font-semibold' type="password" placeholder='Create Password' />
                                <i class="fa-solid fa-lock"></i>
                            </div>

                            <p className='text-gray-700 text-center underline dark:text-gray-500'><Link>Forget Password?</Link></p>

                            <button className='w-full rounded-[4px] py-1 bg-red-900 hover:bg-red-800 text-white cursor-pointer ' type='submit'>Login</button>
                            <br />

                                <p className='text-center text-red-900'>Don't have an account? <NavLink to="/signup" className='text-gray-700 dark:text-gray-500 font-semibold underline'>Sign Up</NavLink></p>
                            <br />
                            <div className='flex justify-center items-center space-x-3'>
                                <p className='w-[40vh] h-[1px] bg-gray-700'></p>
                                <p className='text-red-900'>Or</p>
                                <p className='w-[40vh] h-[1px] bg-gray-700'></p>
                            </div>
                            <br />

                            <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[8px] bg-red-900 hover:bg-red-800 text-white'>
                                <i class="fa-brands fa-google cursor-pointer"></i>
                                <button className='text-center w-full cursor-pointer ' type="submit">Login with Google</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
