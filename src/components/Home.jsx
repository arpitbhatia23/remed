import React from 'react'
import bg from '../assets/bg1.avif'
import Navbar from './Navbar'
import { Link } from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'
const Home = () => {
  return (
    <header name="Home" style={{
        width:"100vw",
        // height:"100vh",
        backgroundImage:`url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
       
    }} className='h-screen sm:h-auto  '>
        <Navbar/>
 <section>
        <p className='mt-0 sm:mt-[178px] px-2 py-2 text-lg sm:text-4xl font-semibold  w-60 sm:w-[598px] h-[137px] text-white text-left ml-0 sm:ml-[28px] font-frenchCanon'> 
      <TypeAnimation
       sequence={[
        " WELCOME TO Remed RESEARCH SOLUTIONS Pvt. Ltd" ,2000,
        "Advancing Clinical Trials with Expertise and Trust. ",1000
       ]}
       speed={60}
       repeat={Infinity}
       wrapper='div'
      />
       
        </p>
        <p className=' px-2  py-2 mb-6 w-52 sm:w-[445px] h-[101px] text-left text-sm sm:text-xl ml-0 sm:ml-[28px] font-semibold font-frenchCanon '>
        We as a Site Management Organization engaged in the service of providing suitable sites and the patient pool to our clients to carry out Clinical trials of new/ marketed drugs
        </p>
       
       <div className='py-4 sm:py-20'>
       <Link to='About' smooth={true} duration={600}> <button className='bg-[#00FFFF] w-20 sm:w-[131px] h-10 sm:h-[63px] ml-[28px] rounded-lg  flex items-center justify-center font-semibold font-frenchCanon'>Read More</button></Link>
        

       </div>
       </section>

    </header>
  )
}

export default Home
