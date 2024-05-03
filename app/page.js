import Image from "next/image";
import Navbar from "./components/Navbar";
import icon from '../public/Features/icon.png';
import icon1 from '../public/Features/icon (1).png';
import icon2 from '../public/Features/icon (2).png';
import icon3 from '../public/Features/icon (3).png';
import icon4 from '../public/Features/icon (4).png';
import icon5 from '../public/Features/icon (5).png';
import demo from '../public/Left/photo.png';
import check from '../public/check.png';
import arrow from '../public/arrow/icon.png';
import image from '../public/photo.png';
import image1 from '../public/photo1.png';
import image2 from '../public/photo2.png';
import twitter from '../public/social_platforms/twitter.png';
import linkedin from '../public/social_platforms/linkedin.png';
import facebook from '../public/social_platforms/facebook.png';
import telegram from '../public/social_platforms/telegram.png';
import malichimp from '../public/logo_section/mailchimp.png';
import slack from '../public/logo_section/slack.png';
import twilio from '../public/logo_section/twilio.png';
import google from '../public/logo_section/google.png';
import paypal from '../public/logo_section/paypal.png';
import pinterest from '../public/logo_section/pinterest.png';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <hero>
        <header>
          <Navbar />
        </header>
        <div className="flex flex-col justify-center items-center h-[300px] mx-4 text-center">
          <div className="w-[640px] ">
            <p className="text-blue-600 text-xs ">1% OF THE INDUSTRY</p>
            <h1 className="font-bold text-2xl">Hype got you here.</h1>
            <h1 className="font-bold text-2xl">Stay for the support.</h1>
            <p className="pt-4 text-[#5F6D7E]">We’ve been told it is possible to revolutionize the payment industry. We have
              not reinvented the wheel, we decided to build upon it - successfully.</p>
          </div>
        </div>
      </hero>
      {/* All feature section */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[100px]">
          <h1 className="font-bold text-2xl">Messaging for all</h1>
          <p className="text-[#5F6D7E]">User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div className="flex justify-center items-center space-x-12 p-12">
          <div className="h-[200px] w-auto">
            <div className="h-[48px] w-[48px] rounded-full bg-[#437EF7] flex justify-center items-center">
              <Image src={icon} />
            </div>
            <h2 className="font-bold py-2">Easier Work Orgainzation</h2>
            <p className="text-[#5F6D7E]">Efficiently unleash cross-media information without
              cross-media value. Quickly timely deliverables for
              real-time schemas. </p>
          </div>
          <div className="h-[200px] w-auto">
            <div className="h-[48px] w-[48px] rounded-full bg-[#437EF7] flex justify-center items-center">
              <Image src={icon1} />
            </div>
            <h2 className="font-bold py-2">Easier Work Orgainzation</h2>
            <p className="text-[#5F6D7E]">Efficiently unleash cross-media information without
              cross-media value. Quickly timely deliverables for
              real-time schemas. </p>
          </div>
          <div className="h-[200x] w-auto">
            <div className="h-[48px] w-[48px] rounded-full bg-[#437EF7] flex justify-center items-center">
              <Image src={icon2} />
            </div>
            <h2 className="font-bold py-2">Easier Work Orgainzation</h2>
            <p className="text-[#5F6D7E]">Efficiently unleash cross-media information without
              cross-media value. Quickly timely deliverables for
              real-time schemas. </p>
          </div>
        </div>

      </div>

      {/* Demonstrating branding */}
      <div className="flex w-full py-8 px-10">
        <div className="p-8 w-[45vw]">
          <h1 className="text-3xl font-bold">Demonstrate branding</h1>
          <h1 className="text-3xl font-bold">consequently think outside</h1>
          <p className="py-2 text-[#5F6D7E]">Velit purus egestas tellus phasellus.
            Mattis eget sed faucibus magna vulputate pellentesque a
            diam tincidunt. Aenean malesuada tellus tellus
            faucibus mauris quisque mauris in.</p>
          <ul className="py-2 text-[#5F6D7E]">
            <li className="flex space-x-2"><Image src={check} />Enterprise-grade security</li>
            <li className="flex space-x-2"><Image src={check} />99.9% guaranteed uptime SLA</li>
            <li className="flex space-x-2"><Image src={check} />Designated customer success team</li>
          </ul>

          <button className=" flex justify-center items-center rounded-sm text-white bg-blue-500 px-4 py-2 hover:bg-blue-400"> Start now <Image src={arrow} className=" m-2 " /></button>

        </div>
        <div>
          <Image src={demo} />
        </div>

      </div>

      {/* Team Section */}
      <div className="flex flex-col justify-center items-center w-full h-[750px]">
        <div className="flex flex-col justify-center items-center text-center p-16 w-[800px] h-[104px]">
          <h1 className="text-3xl font-bold">The Core of Our Team</h1>
          <p className="py-2 text-[#5F6D7E] text-sm">
            Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment
            of people and great talent that truly rocks.
          </p>
        </div>

        <div className="flex space-x-8 pt-12">
          <div className="h-[454px] w-[384px]">
            <div className="h-[384px] w-full object-cover">
              <Image src={image} />
            </div>
           <div className="h-[90px] w-[240px] mt-4">
            <h2 className="font-semi-bold text-[22px]">Morgan Drew</h2>
              <p className="text-[#5F6D7E] text-[16px]">Manager</p>
              <div className="flex mt-4 w-[128px] h-[20px] space-x-4">
                <Image src={twitter} alt="twitter"  className="w-[20px] "/>
                <Image src={facebook} alt="facebook" className="w-[20px] "/>
                <Image src={linkedin} alt="linkedin" className="w-[20px] "/>
                <Image src={telegram} alt="telegram" className="w-[20px] "/>
              </div>
           </div>
          </div>

          <div className="h-[454px] w-[384px]">
            <div className="h-[384px] w-full object-cover">
              <Image src={image1} />
            </div>
           <div className="h-[90px] w-[240px] mt-4">
            <h2 className="font-semi-bold text-[22px]">Jeffery Walker</h2>
              <p className="text-[#5F6D7E] text-[16px]">Lead Designer</p>
              <div className="flex mt-4 w-[128px] h-[20px] space-x-4">
                <Image src={twitter} alt="twitter"  className="w-[20px] "/>
                <Image src={facebook} alt="facebook" className="w-[20px] "/>
                <Image src={linkedin} alt="linkedin" className="w-[20px] "/>
                <Image src={telegram} alt="telegram" className="w-[20px] "/>
              </div>
           </div>
          </div>

          <div className="h-[454px] w-[384px]">
            <div className="h-[384px] w-full object-cover">
              <Image src={image2} />
            </div>
           <div className="h-[90px] w-[240px] mt-4">
            <h2 className="font-semi-bold text-[22px]">Andrew Steve</h2>
              <p className="text-[#5F6D7E] text-[16px]"> UI/UX Designer</p>
              <div className="flex mt-4 w-[128px] h-[20px] space-x-4">
                <Image src={twitter} alt="twitter"  className="w-[20px] "/>
                <Image src={facebook} alt="facebook" className="w-[20px] "/>
                <Image src={linkedin} alt="linkedin" className="w-[20px] "/>
                <Image src={telegram} alt="telegram" className="w-[20px] "/>
              </div>
           </div>
          </div>

        </div>

      </div>

      {/* call to action */}
      <div className="w-full h-[318px] p-16 flex flex-col  justify-center items-center text-white bg-[#2B63D9] text-center">
        <p className="text-[14px] font-semibold">1% OF THE INDUSTRY</p>
        <h1 className="font-semibold text-3xl w-[600px] h-[84px] pb-8">Welcome to your new digital reality that
          which will rock your world truly at all.</h1>
          <div className="flex space-x-4">
          <button className='px-4 py-2 hover:text-black rounded-md bg-white text-blue-500'>Sign Up</button>
        <button className='bg-blue-500 px-4 py-2 text-white hover:text-blue-500 rounded-md hover:bg-white '>Log In</button>

          </div>
      </div>

      {/* Logo section*/}
      <div className="w-full h-[160px] flex justify-center items-center bg-[#2B63D9] space-x-8">
          <Image src={twilio} alt="twilio"/>   
          <Image src={slack} alt="slack"/>   
          <Image src={google} alt="google"/>   
          <Image src={paypal} alt="paypal"/>   
          <Image src={pinterest} alt="pinterest"/>   
          <Image src={malichimp} alt="malichimp"/>   
      </div>

    
    <div className='w-full h-[496px] '>
    <Footer/>
    </div>


    </>
  );
}
