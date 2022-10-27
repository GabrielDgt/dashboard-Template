import React, { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Recovery = () => {

    return (
        <div className='bg-secondary-100 p-8 rounded-lg'>
            <h1 className='text-2xl uppercase font-bold tracking-[5px] text-center text-tertiary mb-6 w-auto lg:w-[350px]'>
                Enter your Email to recover your password
            </h1>
            <form className='mb-6'>
                <div className='relative mb-6'>
                    <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
                    <input type="email" 
                            className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-tertiary'
                            name="email" 
                            id="email" 
                            autoComplete='off'
                            placeholder='Enter your email' />
                </div>
                <div>
                    <button type='submit' 
                            className='py-2 px-4 bg-primary text-secondary-900 w-full uppercase tracking-[2px] font-bold cursor-pointer rounded-lg hover:text-secondary-100 transition-colors hover:-translate-y-[2px]'>
                        Recover Password
                    </button>
                </div>
            </form>
            <div className='flex flex-col gap-4 items-center mb-1'>
                <span className='flex items-center gap-2'>
                    Already have an account?<Link to='/auth' className='hover:underline text-primary'>Login</Link>
                </span>
            </div>
        </div>
    )
}

export default Recovery