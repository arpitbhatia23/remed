import React from 'react'
import icon1 from "../assets/image11.avif"
import icon2 from "../assets/image12.avif"
import icon3 from "../assets/image13.avif"
import icon4 from "../assets/image14.avif"
import { Link } from 'react-scroll'

const Contact = () => {
  return (
    <section  name="Contact us"className='bg-[#282122] w-full mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 py-8 px-6 font-frenchCanon'>
      <div className='flex flex-col items-center sm:items-start text-white'>
        <span className='text-[#FF0000] text-xl font-semibold mb-2'>abc ReSearch</span>
        <p className='mb-4'>
          abc Research Solutions Pvt. Ltd is a Site Management Organization. We are involved in dealing with all clinical trials from Phase I to Phase IV. We're committed to providing and managing clinical sites with GCP compliance, ICH-GCP experienced certified medical practitioners & trained clinical research staff.
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
          Reg Office address: ABC Research Solutions Pvt. Ltd xyz pqr Chowk, kdj Tq. ab Dist. Akola xyz state Pin:12345 <br />
          Contact: <a href="tel:+918055012965" className='hover:underline'>+91 1234567890</a> , <a href="tel:+911234567890" className='hover:underline'>+91 1234567890</a> <br />          Email: <a href="mailto:director@abd.in" className='hover:underline'>director@abd.in</a>
        </p>
      </div>
    </section>
  )
}

export default Contact
