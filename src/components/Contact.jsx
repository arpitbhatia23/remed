import React from 'react'
import icon1 from "../assets/image11.svg"
import icon2 from "../assets/image12.svg"
import icon3 from "../assets/image13.svg"
import icon4 from "../assets/image14.svg"
import { Link } from 'react-scroll'

const Contact = () => {
  return (
    <section  name="Contact us"className='bg-[#282122] w-full mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-6 font-frenchCanon'>
      <div className='flex flex-col items-center sm:items-start text-white'>
        <span className='text-[#FF0000] text-xl font-semibold mb-2'>ReMed ReSearch</span>
        <p className='mb-4'>
          Remed Research Solutions Pvt. Ltd is a Site Management Organization. We are involved in dealing with all clinical trials from Phase I to Phase IV. We're committed to providing and managing clinical sites with GCP compliance, ICH-GCP experienced certified medical practitioners & trained clinical research staff.
        </p>
        <div className='flex items-center gap-x-4'>
          <img src={icon1} alt="Icon 1" className='w-8 h-8' />
          <img src={icon2} alt="Icon 2" className='w-8 h-8' />
          <img src={icon3} alt="Icon 3" className='w-8 h-8' />
          <img src={icon4} alt="Icon 4" className='w-8 h-8' />
        </div>
      </div>

      <div className='flex flex-col items-center text-white'>
        <span className='text-[#FF0000] text-xl font-semibold mb-2'>Quick Links</span>
        <Link to={"Home"} smooth={true} duration={1000} className='hover:underline mb-1'>Home</Link>
        <Link to={"About"} smooth={true} duration={1000} className='hover:underline mb-1'>About</Link>
        <Link to={"Services"} smooth={true} duration={1000} className='hover:underline mb-1'>Service</Link>
        <Link to={"Contact us"} smooth={true} duration={1000} className='hover:underline'>Contact us</Link>
      </div>

      <div className='flex flex-col items-center sm:items-start text-white'>
        <span className='text-[#FF0000] text-xl font-semibold mb-2'>Get in Touch</span>
        <p className='text-sm'>
          Reg Office address: Remed Research Solutions Pvt. Ltd Yakub Patel Chowk, Akot Tq. Akot Dist. Akola Maharashtra Pin:444101 <br />
          Contact: <a href="tel:+918055012965" className='hover:underline'>+91 80550 12965</a> , <a href="tel:+919805653211" className='hover:underline'>+91 98056 53211</a> <br />          Email: <a href="mailto:director@remedresearch.in" className='hover:underline'>director@remedresearch.in</a>
        </p>
      </div>
    </section>
  )
}

export default Contact
