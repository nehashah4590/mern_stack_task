"use client"
import React, { useState} from 'react';
import axios from 'axios';

function CustomForm() {
    const [firstname, setFirstname] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [getintouch, setGetintouch] = useState();
    const [message, setMessage] = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState();
    const [success, setSucces] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/contact', {
            firstname:firstname,
            email:email,
            phonenumber:phonenumber,
            getintouch:getintouch,
            message:message
          });
          console.log(response.data);
          setSucces(response.data);
          setFirstname("");
          setEmail("");
          setPhonenumber("");
          setGetintouch("");
          setMessage("");
        } catch (error) {
          console.error('Error submitting form:', error);
          setError(error.message);
        }
      };

    return (
        <div className='w-full min-h-screen bg-[rgb(21,27,40)] p-4 md:p-16 flex flex-col justify-center items-center'>
            <div className='w-auto md:w-[80vw] lg:w-[800px] h-auto md:h-[104px] text-center mt-2 md:mt-4'>
                <h1 className='pb-3  text-white font-bold text-3xl'>Get In Touch With Us</h1>
                <p className='text-[16px] text-[#A5ACBA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, </p>
            </div>
            <form className="flex flex-col md:bg-[#1C2534] p-4 md:p-8 m-2 md:m-12 mt-8 w-full md:w-auto h-auto lg:h-[543px]" onSubmit={handleSubmit}>
    
                    <div className="flex flex-col md:flex md:flex-row">
                        <div className='flex flex-col pb-6 md:pr-6'>
                            <label htmlFor="name" className="text-sm font-medium mb-1 text-white ">
                                First Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder='Input'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full md:w-[308px] lg:w-[37vw] h-[46px]"
                                value={firstname}
                                onChange={(e)=>{setFirstname(e.target.value)}}
                                required
                            />
                        </div>

                        <div className='flex flex-col pb-6 md:pb-0'>
                            <label htmlFor="email" className="text-sm font-medium mb-1 text-white ">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Input'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full md:w-[308px] lg:w-[37vw] h-[46px]"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex md:flex-row ">
                        <div className='flex flex-col pb-6  md:pr-6'>
                            <label htmlFor="phonenumber" className="text-sm font-medium mb-1 text-white ">
                                Phone Number
                            </label>
                            <input
                                id="phonenumber"
                                type="text"
                                name="phonenumber"
                                placeholder='+000'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full md:w-[308px] lg:w-[37vw] h-[46px]"
                                value={phonenumber}
                                onChange={(e)=>{setPhonenumber(e.target.value)}}
                                required
                            />
                        </div>

                        <div className='flex flex-col pb-6 md:pb-0 '>
                            <label htmlFor="touch" className="text-sm font-medium mb-1 text-white ">
                                Get In Touch With Us
                            </label>
                            <input
                                id="touch"
                                type="text"
                                name="touch"
                                placeholder='Dropdown'
                                className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full md:w-[308px] lg:w-[37vw] h-[46px]"
                                value={getintouch}
                                onChange={(e)=>{setGetintouch(e.target.value)}}
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
                     className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm px-3 py-2 bg-[#252D3C] text-[#A5ACBA] w-full lg:w-[75.5vw] h-[147px]"
                     value={message}
                     onChange={(e)=>{setMessage(e.target.value)}}
                     required/>
                    </div>

                    <div className="flex items-center pb-6">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            className="shadow-sm focus:ring-[#1C2534] rounded-md sm:text-sm mr-1 bg-[#252D3C] text-[#A5ACBA]"
                            
                            onClick={()=>{setIsChecked(!isChecked)}}
                            required
                           
                        />
                        <label htmlFor="termsCheckbox" className="ml-2 block text-sm text-white">
                            I agree with Lookscout Privacy Policy
                        </label>
                        </div>

                   
                    <div className="flex ">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-[#437EF7] font-medium text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
                {success && <p className='py-4 text-green-500'>{success}</p>}
                {error && <p className='py-4 text-red-500'>{error}</p>}
                     
            </form>
        </div>
    )
}

export default CustomForm