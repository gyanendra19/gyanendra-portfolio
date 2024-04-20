import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, trigger, formState: { errors } } = useForm()

    const submit = async(e) => {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }

    console.log(errors);



    return (
        <>
            <div className='absolute w-44 h-32 bg-white z-[1] md:top-10 top-32 md:left-64 blur-[180px]'></div>
            <div className='absolute w-44 h-32 bg-white right-44 top-44 blur-[60px] z-10 md:block hidden'></div>
            <img className='absolute h-[20rem] right-24 top-16 z-20 md:block hidden letter' src="./letter.png" alt="" />

            <div className=',d:ml-20 ml-6 relative z-10'>
                <p className='text-xl text-gray-300 tracking-wider'>Any queries? Don't hesitate to ping me up</p>
                <form
                target='_blank'
                onSubmit={submit}
                action='https://formsubmit.co/gyanendrav416@gmail.com'
                method= 'POST'
                >

                    <div className='flex flex-col gap-1 mt-7'>
                        <label className='text-xl text-white tracking-wider' htmlFor="name">Name</label>
                        <input className='bg-white/20 h-[40px] md:w-1/2 w-[90%] rounded-md p-3 text-lg focus:outline-none'
                            {...register('name', {
                                required: true,
                                maxLength: 50
                            })}
                            type="text" id='name' />
                        {errors.name && (
                            <p className='mt-1 text-red-400 text-lg'>
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "MaxLength is 50 char."}
                            </p>                       
                        )}
                    </div>

                    <div className='flex flex-col gap-1 mt-4'>
                        <label className='text-xl text-white tracking-wider' htmlFor="name">Email</label>
                        <input className='bg-white/20 h-[40px] md:w-1/2 w-[90%] rounded-md p-3 text-lg focus:outline-none'
                            {...register('email', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            type="text" id='name' />
                        {errors.email && (
                            <p className='mt-1 text-red-400 text-lg'>
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid Email Address"}
                            </p>
                        )}
                    </div>


                    <div className='flex flex-col gap-1 mt-4'>
                        <label className='text-xl text-white tracking-wider' htmlFor="name">Message</label>
                        <textarea rows={5} type="text" className='bg-white/20 font-light md:w-1/2 w-[90%] rounded-md p-3 text-lg focus:outline-none' 
                        {...register('message', {
                            required: true,
                            maxLength: 2000
                        })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-red-400 text-lg'>
                                {errors.message.type === "required" && "This field is required"}
                                {errors.message.type === "maxLength" && "MaxLength is 2000 char."}
                            </p>                       
                        )}
                    </div>

                    <button
                        type='submit'
                        className='mt-5 rounded-lg bg-white/20 px-10 text-lg py-2 tracking-wider transition duration-200 hover:text-white'>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default Contact