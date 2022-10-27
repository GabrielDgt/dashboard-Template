import React, { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-secondary-100 p-8 rounded-lg'>
            <h1 className='text-3xl uppercase font-bold tracking-[5px] text-center text-tertiary mb-8 w-auto lg:w-[350px]'>
                Register
            </h1>
            <form className='mb-6'>
                <div className='relative mb-4'>
                    <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
                    <input type="email" 
                            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-tertiary'
                            name="email" 
                            id="email" 
                            autoComplete='off'
                            placeholder='Enter your email' />
                </div>
                <div className='relative mb-6'>
                    <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
                    <input type={showPassword ? "text" : "password"}  
                            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-tertiary'
                            name="password" 
                            id="password" 
                            placeholder='Enter password' />
                    {showPassword ? (
                        <RiEyeLine 
                            onClick={() => setShowPassword(!showPassword)} 
                            className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary' 
                        />
                        ) : (
                        <RiEyeCloseLine 
                            onClick={() => setShowPassword(!showPassword)} 
                            className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'  
                        />  
                    )}
                </div>
                <div className='relative mb-6'>
                    <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
                    <input type={showPassword ? "text" : "password"}  
                            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-tertiary'
                            name="passwordConfirm" 
                            id="passwordConfirm" 
                            placeholder='Confirm password' />
                    {showPassword ? (
                        <RiEyeLine 
                            onClick={() => setShowPassword(!showPassword)} 
                            className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary' 
                        />
                        ) : (
                        <RiEyeCloseLine 
                            onClick={() => setShowPassword(!showPassword)} 
                            className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'  
                        />  
                    )}
                </div>
                <div>
                    <button type='submit' 
                            className='py-2 px-4 bg-primary text-secondary-900 w-full uppercase tracking-[2px] font-bold cursor-pointer rounded-lg hover:text-secondary-100 transition-colors '>
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='flex flex-col gap-4 items-center mb-1'>
                <Link to='/auth/recovery' className='hover:underline hover:text-primary transition-colors'>Forgot Password?</Link>
                <span className='flex items-center gap-2'>
                    Already have an account?<Link to='/auth' className='hover:underline text-primary'>Login</Link>
                </span>
            </div>
        </div>
    )
}

export default Register