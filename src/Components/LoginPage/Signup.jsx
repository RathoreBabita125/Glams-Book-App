import { Link, NavLink } from 'react-router-dom'
import lotus from '../../assets/lotus.png'


const Signup = () => {

    function SignupBTNHandler(e) {

        e.preventDefault()

        let isValidDetails = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
    
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        let userDetails=[name, email, password, confirmPassword]
        // localStorage.setItem('userDetails',userDetails)
        

        const errors = document.querySelectorAll('.error')
        errors.forEach(err => err.innerText = "");

        function showError(id, message) {
            const input = document.getElementById(id);
            input.parentElement.previousElementSibling.innerText = message;
        }

        // name
        if (name === '') {
            showError('name', "Name is required")
            isValidDetails = false
        }

        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("email", "Enter a valid email");
            isValidDetails = false;
        }

        //password
        if (password.length < 6) {
            showError("password", "Password must be at least 6 characters");
            isValidDetails = false;
        }

        //confirm password
        if (password !== confirmPassword) {
            showError("confirmPassword", "Passwords do not match");
            isValidDetails = false;
        }

        //successfully-registered
        const registered = document.getElementById('success-registered')
        if (isValidDetails) {

            setTimeout(() => {
                registered.innerText = "Thank you! You have successfully signed up"
                
                setTimeout(() => {
                    registered.innerText = "";
                }, 5000);
                localStorage.setItem('userDetails',userDetails)
                nameInput.value=""
                emailInput.value=""
                passwordInput.value=""
                confirmPasswordInput.value=""

            }, 1000)
        }

    }
    




    return (

        <div className='w-full h-auto mt-5'>
            <div className='flex flex-wrap justify-center relative'>
                <img src={lotus} alt="" className='md:w-[55vw] md:h-[95vh] opacity-20' />

                <div className='w-full h-auto flex flex-wrap justify-center items-center absolute top-[7px]'>

                    <div className='md:w-[35vw] text-red-900 md:p-7 shadow-lg' >
                        <p className='text-center text-6xl font-bold font-serif'>Sign Up</p>

                        <div className='space-y-3 mt-5'>

                            <small className="error text-red-600 text-[12px]"></small>
                            <div className=' flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold w-3/4' type="Text" placeholder='Name' id='name' />
                            </div>

                            <small className="error text-red-600 text-[12px]"></small>
                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold w-3/4' type="email" placeholder='Email' id='email' />
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <small className="error text-red-600 text-[12px]"></small>
                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold w-3/4' type="password" placeholder='Create Password' id='password' />
                                <i className="fa-solid fa-lock"></i>
                            </div>

                            <small className="error text-red-600 text-[12px]"></small>
                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold w-3/4' type="password" placeholder='Confirm Password' id='confirmPassword' />
                                <i className="fa-solid fa-lock"></i>
                            </div>

                            <button className='w-full rounded-[4px] py-1 bg-red-900 hover:bg-red-800 text-white cursor-pointer' type='submit' onClick={SignupBTNHandler}>Sign Up </button>

                            {/* successfully registered */}
                            <p id='success-registered'></p>

                            <br />
                            <p className='text-center'>Already have an account? <NavLink to="/login" className='text-gray-700 font-semibold underline'>Login</NavLink></p>
                            <br />
                            <div className='flex justify-center items-center space-x-3'>
                                <p className='md:w-[40vh] w-[25vw] h-[1px] bg-gray-400'></p>
                                <p>Or</p>
                                <p className='md:w-[40vh] w-[25vw] h-[1px] bg-gray-400'></p>
                            </div>
                            <br />

                            <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[5px] bg-red-900 text-white outline-none hover:bg-red-800'>
                                <i className="fa-brands fa-google cursor-pointer"></i>
                                <button className='text-center w-full cursor-pointer' type="submit">Sign with Google</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup

