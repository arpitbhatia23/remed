import React from 'react'
import icon1 from '../assets/image8.avif'
import icon2 from '../assets/image9.avif'
import icon3 from '../assets/image10.avif'

const Services = () => {
  return (
    <>
      <section name="Services" className='flex flex-col w-full justify-center items-center font-frenchCanon mt-16 sm:mt-24'>
        <div className='text-2xl text-center font-semibold'>OUR SERVICES</div>
        <p className='flex justify-center items-center text-xl pt-12 text-center px-4 sm:px-0'>
          As a Site Management Organization, we are glad to offer the following services to our clients as per their needs.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center items-start text-xl pt-12 gap-y-10 gap-x-10'>
          <div className='flex flex-col justify-center items-center'>
            <img src={icon1} alt="Clinical Operation Services Icon" />
            <p className='text-2xl py-3 text-center'>CLINICAL OPERATION SERVICES</p>
            <p className=' text-center'>
              Study start-up at potential sites with a good patient pool. Feasibility of studies and initial document preparation at site level. Subject recruitment and follow-up.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={icon2} alt="Manpower Management Services Icon" />
            <p className='text-2xl py-3 text-center'>MANPOWER MANAGEMENT SERVICES</p>
            <p className=' text-center'>
              We provide properly trained Clinical Research Coordinators, Study nurses, and Phlebotomists to SMOs, CROs, Sponsors, Institutes, and Investigators.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center py-8'>
            <img src={icon3} alt="Data Management Services Icon" />
            <p className='text-2xl py-3 text-center'>DATA MANAGEMENT SERVICES</p>
            <p className=' text-center'>
              We provide data entry management as per Sponsor/CRO requirements with ICH GCP guidelines, including data entry in paper CRF or eCRF on a fast-track process. Document archival facility as per regulatory guidelines.
            </p>
          </div>
      </section>
    </>
  )
}

export default Services
