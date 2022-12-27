import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen text-center'>
      <div className='max-w-[1240px] m-auto px-2 py-24 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#579a72]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        {/* <div className='grid lg:grid-cols-5 gap-8'> */}

          {/* left */}
          {/* <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 text-center'> */}
            <div className='lg:p-4 w-96 m-auto text-center items-center'>
              <div>
                <Image
                  className='hover:scale-105 ease-in duration-300 object-scale-down h-48 w-96'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Keshia Wijaya</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                I&apos;m currently open to job opportunities so please feel free to connect with me!
                </p>
              </div>
              <div>
              {/* <a className="email-link" href={`mailto:${email}`}>
                  Say Hello
              </a> */}
              <a href="mailto:kesh.wijaya@gmail.com">
                <button className='w-48 p-4 text-gray-100 mt-4 email-link'>
                  Say Hello
                </button>
              </a>
              </div>
              <div className='flex justify-center py-8'>
              <Link href='/'>
                <a>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp
                      className='text-[#579a72]'
                      size={30}
                    />
                  </div>
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      // </div>
  );
};

export default Contact;

        
