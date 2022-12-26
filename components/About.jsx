import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#579a72]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hi, I&apos;m Keshia! And you can call me Kesh for short.
            I could not be more exited to embrace my new journey as a Junior Software Engineer!
          </p>
          <p className='py-2 text-gray-600'>
            While I really enjoyed working as Operations Manager where it has taught me a lot of soft 
            and hard skills which allow me to grow as a person, I know that there is something new out 
            there to learn and discover. That's when I decided to take a career break and enrolled in a 3-month 
            Software Engineering Immersive bootcamp at General Assembly, which I completed in December 2022.
          </p>
          <p className='py-2 text-gray-600'>
            I&apos;m passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient in building 
            front-end applications using HTML, CSS, Javascript, and React, I am a quick learner 
            and can pick up new tech stacks as needed. I believe that being a great developer is 
            not using one specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I&apos;m currently open to job opportunities so please feel free to email or connect with me via LinkedIn.
          </p>
      
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-80 m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
