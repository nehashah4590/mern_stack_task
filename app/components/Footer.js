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
    <div className='m-16 '>
        <div className='mx-8 flex h-[216px] w-full space-x-40'>
            <div className='w-[247px]'>
                <Image src={logo} alt='company_logo'/>
                <p className='py-4'>Generate outside the box thinking with the possibility to targtet the low.</p>
                <div className='flex space-x-4'>
                    <Image src={facebook} alt='facebook'/>
                    <Image src={google} alt='google'/>
                    <Image src={apple} alt='apple'/>
                    <Image src={instagram} alt='instagram'/>

                </div>
            </div>
            <div>
                <h2 className='font-semi-bold text-[16px] pb-6'>Product</h2>
                <p className='text-[#5F6D7E] pb-6'> Feature</p>
                <p className='text-[#5F6D7E] pb-6'> Solutions</p>
                <p className='text-[#5F6D7E] pb-6'> Integrations</p>
                <p className='text-[#5F6D7E] pb-6'> Enterprise</p>
                <p className='text-[#5F6D7E] pb-6'> Solutions</p>
            </div>
            <div>
                <h2 className='font-semi-bold text-[16px] pb-6'>Resources</h2>
                <p className='text-[#5F6D7E] pb-6'>Partners</p> 
                <p className='text-[#5F6D7E] pb-6'> Community</p>
                <p className='text-[#5F6D7E] pb-6'> Developers</p>
                <p className='text-[#5F6D7E] pb-6'> App</p>
                <p className='text-[#5F6D7E] pb-6'> Blog</p>
            </div>
            <div>
                <h2 className='font-semi-bold text-[16px] pb-6'>Why Choose Us?</h2>
                <p className='text-[#5F6D7E] pb-6'> Channels</p>
                <p className='text-[#5F6D7E] pb-6'> Scale</p>
                <p className='text-[#5F6D7E] pb-6'> Watch the Demo</p>
                <p className='text-[#5F6D7E] pb-6'> Our Competitions</p>
            </div>
            <div>
                <h2 className='font-semi-bold text-[16px] pb-6'>Company</h2>
                <p className='text-[#5F6D7E] pb-6'> About Us</p>
                <p className='text-[#5F6D7E] pb-6'> News</p>
                <p className='text-[#5F6D7E] pb-6'> Leadership</p>
                <p className='text-[#5F6D7E] pb-6'> Media Kit</p>
            </div>
            

        </div>
        <div className='flex flex-col justify-center items-center mt-32'>
            <Image src={iconholder} alt='iconplaceholder'/>
            <p className='text-sm p-4'>	&#169; 2023 Lookscout. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
