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
            Hi, my name is Keshia, but you can call me Kesh for short. 
          </p>
          <p className='py-2 text-gray-600'>
            I am really excited to embark on my journey as a junior software engineer and 
            apply my skills and experiences to new challenges and projects. 
            I recently took a career break to pursue my passion for technology and enrolled 
            in a 3-month Software Engineering Immersive bootcamp at General Assembly, 
            where I gained hands-on experience with technologies such as HTML, CSS, and JavaScript.
          </p>
          <p className='py-2 text-gray-600'>
            Before becoming a software engineer, I worked as an Operations Manager, where I develop 
            strong problem-solving, communication, and leadership skills. 
            I am a hard-working and flexible team player, with a strong desire to learn and adapt to new technologies. 
            I also value open communication and collaboration with my team members and strive to deliver high-quality work.
          </p>
          <p className='py-2 text-gray-600'>
            Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, 
            I am a quick learner and can pick up new tech stacks as needed. 
            I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
            So, If you&apos;re looking for a motivated and skilled junior software engineer to join your team, 
            I would love the opportunity to connect and learn more about your project. Let&apos;s get in touch!
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
