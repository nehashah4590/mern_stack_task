"use client"
import React, { useState } from 'react'

function CustomForm() {
    const [formData, setFormData] = useState({
        // Add your form field names and initial values here
        name: '',
        email: '',
        // ...
    })
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        // Implement your form submission logic here
    }

    return (
        <div className='w-full h-screen bg-[rgb(21,27,40)] p-16 flex flex-col justify-center items-center'>
            <div className='w-auto lg:w-[800px] h-auto md:h-[104px] text-center mt-16'>
                <h1 className='pb-3  text-white font-bold text-3xl'>Get In Touch With Us</h1>
                <p className='text-[16px] text-[#A5ACBA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, </p>
            </div>
            <form className="flex flex-col bg-[#1C2534] p-8 m-12 mt-8 w-auto h-auto lg:h-[543px]" onSubmit={handleSubmit}>
    
                    <div className="flex flex-col md:flex md:flex-row">
                        <div className='flex flex-col pb-6 pr-6'>
                            <label htmlFor="name" className="text-sm font-medium mb-1 text-white ">
                                First Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder='Input'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-[308px] lg:w-[564px] h-[46px]"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className="text-sm font-medium mb-1 text-white ">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Input'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-[308px] lg:w-[564px] h-[46px]"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex md:flex-row ">
                        <div className='flex flex-col pb-6  pr-6'>
                            <label htmlFor="name" className="text-sm font-medium mb-1 text-white ">
                                Phone Number
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder='+000'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-[308px] lg:w-[564px] h-[46px]"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="email" className="text-sm font-medium mb-1 text-white ">
                                Get In Touch With Us
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Dropdown'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-[308px] lg:w-[564px] h-[46px]"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-col  pb-6 w-full'>
                    <label htmlFor="message" className="text-sm font-medium mb-1 text-white ">
                               Message
                    </label>
                    <textarea
                     id="message"
                     type="text"
                     name="message"
                     placeholder='Hi We are Lookscout...'
                     className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full lg:w-[1152px] h-[147px]"
                     value={formData.email}
                     onChange={handleChange}
                     required/>
                    </div>

                    <div className="flex items-center pb-6">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm mr-1 bg-[#252D3C] text-[#A5ACBA]"
                            checked={isChecked}
                            onChange={handleChange}
                        />
                        <label htmlFor="termsCheckbox" className="ml-2 block text-sm text-white">
                            I agree with Lookscout Privacy Policy
                        </label>
                        </div>

                   
                    <div className="flex ">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-[#437EF7] font-medium text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
                     
            </form>
        </div>
    )
}

export default CustomForm