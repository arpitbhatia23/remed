import React from 'react';
import bg from '../assets/bg1.avif';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
        
    <header
      name="Home"
      style={{
        width: '100vw',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen sm:h-auto " 
    >

<Navbar />

      <section className="flex flex-col justify-center sm:items-start items-center text-center sm:text-left sm:px-6">
        <div className="mt-16 sm:mt-[178px] px-4 sm:px-0">
          <p className="text-lg sm:text-4xl font-semibold sm:w-[598px] min-h-[137px] text-black sm:text-white font-frenchCanon">
            <TypeAnimation
              sequence={[
                'WELCOME TO Remed RESEARCH SOLUTIONS Pvt. Ltd', 2000,
                'Advancing Clinical Trials with Expertise and Trust.', 1000
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="div"
            />
          </p>
        </div>

        <div className="mt-4 px-4 sm:px-0">
          <p className="text-sm sm:text-xl font-semibold sm:w-[445px] min-h-[101px] font-frenchCanon">
            We as a Site Management Organization engage in providing suitable sites and patient pools to our clients for conducting clinical trials of new/marketed drugs.
          </p>
        </div>

        <div className="mt-8 sm:mt-20 pb-16">
          <Link to="About" smooth={true} duration={600}>
            <button className="bg-[#00FFFF] w-28 sm:w-[131px] h-10 sm:h-[63px] rounded-lg flex items-center justify-center font-semibold font-frenchCanon">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </header>
    </>

  );
};

export default Home;
