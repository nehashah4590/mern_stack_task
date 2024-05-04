import React from 'react'
import Image from 'next/image';
import logo from '../../public/companylogo.png';
import iconholder from '../../public/Iconplaceholder.png';
import facebook from '../../public/social_platforms/footerfb.png';
import google from '../../public/social_platforms/footergoogle.png';
import apple from '../../public/social_platforms/apple.png';
import instagram from '../../public/social_platforms/instagram.png';

const Footer = () => {
    return (
        <div className='md:m-16 my-8 md:my-0 '>
            <div className='h-auto md:h-[216px] w-full'>
                <div className='w-[247px] mx-8'>
                    <Image src={logo} alt='company_logo' />
                    <p className='py-4 text-[#5F6D7E] text-sm'>Generate outside the box thinking with the possibility to targtet the low.</p>
                    <div className='flex  justify-between md:space-x-4 pb-4  w-[80vw] md:w-auto'>
                        <Image src={facebook} alt='facebook' />
                        <Image src={google} alt='google' />
                        <Image src={apple} alt='apple' />
                        <Image src={instagram} alt='instagram' />

                    </div>
                </div>
                <div className='grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-col-5 mx-8'>
                    <div>
                        <h2 className='font-semibold text-[16px] pb-3'>Product</h2>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Feature</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Solutions</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Integrations</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Enterprise</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Solutions</p>

                    </div>
                    <div>
                        <h2 className='font-semibold text-[16px] pb-3 '>Resources</h2>
                        <p className='text-[#5F6D7E] pb-3 text-sm'>Partners</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Community</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Developers</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> App</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Blog</p>
                    </div>
                    <div className='md:hidden flex flex-col lg:flex lg:flex-col'>
                        <h2 className='font-semibold text-[16px] pb-3'>Why Choose Us?</h2>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Channels</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Scale</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Watch the Demo</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Our Competitions</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[16px] pb-3'>Company</h2>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> About Us</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> News</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Leadership</p>
                        <p className='text-[#5F6D7E] pb-3 text-sm'> Media Kit</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-6 ml-0'>
                <Image src={iconholder} alt='iconplaceholder' />
                <p className='text-sm p-4'>	&#169; 2023 Lookscout. All Rights Reserved.</p>
            </div>
            </div>      
        </div>
    )
}

export default Footer
