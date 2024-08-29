import React from 'react'
import about1 from '../assets/about1.avif'
import about2 from '../assets/about2.avif'
import about3 from '../assets/about3.avif'
import icon1 from "../assets/image4.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/image6.svg"
import icon4 from "../assets/image7.svg"


const About = () => {
  return (
    <>
      <section name="About" className="font-frenchCanon flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 px-4">
        <img src={about1} alt="About Us Image 1" className="mt-16 sm:mt-24 w-full max-w-xl sm:h-[35.625rem] object-cover" />
        <div className="flex flex-col w-full max-w-xl mt-16 sm:mt-24 items-center sm:items-start text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold">About Us</h2>
          <p className="mt-6 text-base sm:text-lg">
            ReMed Research Solutions Pvt. Ltd is a Site Management Organization. We are involved in dealing with all clinical trials from Phase I to Phase IV. We're committed to providing and managing clinical sites with GCP compliance, ICH-GCP experienced certified medical practitioners & trained clinical research staff. ReMed Research is having its wide branches of services in the healthcare sector. ReMed Research acts as Clinical Trial Implementer at various trial sites all over India and coordinates for trial implementation with CRO or Sponsors from Pharma / Biotech companies.
          </p>
        </div>
      </section>

      <section className="font-frenchCanon flex flex-col sm:flex-row justify-center items-center space-y-20 sm:space-y-0 sm:space-x-8 px-4 py-10">
        <div className="flex flex-col w-full max-w-xl mt-16 sm:mt-24 items-center sm:items-start text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold">OUR MISSION</h2>
          <p className="mt-6 text-base sm:text-lg">
            We keep a vision of becoming the first choice for our community organizations as a Site Management Organization through our consistent efforts to provide transparency and sincerity in our services with integrity by all means in a business. Our work should be dedicated and beneficial for the betterment of mankind, pharmaceutical companies, and CROs.
          </p>
        </div>
        <img src={about2} alt="Our Mission Image" className="w-full max-w-xl sm:h-[35.625rem] object-cover mt-16 sm:mt-24" />
      </section>

      <div
        style={{
          backgroundImage: `url(${about3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'auto',
        }}
        className="mt-16 py-16"
      >
        <section className="flex flex-col items-center justify-center w-full font-frenchCanon px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold ">WHAT MAKES US SPECIAL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[100px] gap-y-[70px] mt-[30px]">
            {/* Content for the grid items can be added here */}
            {/* //first  */}
            <div className='flex flex-col justify-center items-center'>
             <img src={icon1} alt="" className='w-[89px]'/>
             <p className='text-2xl py-3 text-center'>COMPASSIONATE TO PATIENTS</p>
             <p className=' text-xl '>
             We try to understand the sufferings of the patients and focus on handling them with care and love by keeping their safety in mind.
             </p>
            </div>
            {/* // second  */}
            <div className='flex flex-col justify-center items-center'>
             <img src={icon2} alt="" className='w-[89px]' />
             <p className='text-2xl py-3 text-center'>REPEATED SCRUTINIZING</p>
             <p className='text-xl '>
              We understand how important the correct and fair data regarding trial results are. We try to scrutinize it as much as we can to nullify the errors.</p>
            </div>
            {/* // third */}
            <div className='flex flex-col justify-center items-center'>
             <img src={icon3} alt="" className='w-[89px]'/>
             <p className='text-2xl py-3 text-center'>ELIGIBLE PATIENTS POOL</p>
             <p className=' text-xl'>
              At ReMed Research our efforts are to provide you with the most eligible patient pool as per your study requirements and criteria..</p>
            </div>
            {/* //fourth */}
            <div className='flex flex-col justify-center items-center'>
             <img src={icon4} alt="" className='w-[89px]'/>
             <p className='text-2xl py-3 text-center'>DETAIL ORIENTED</p>
             <p className=' text-xl'>
              It is a well-known fact that even a minute detail can change the game significantly. Along with the conspicuous observations we tend to focus on minute things also to provide the most fair results</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
