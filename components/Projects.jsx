// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import tictacpawImg from '../public/assets/projects/tictacpaw.png';
import traveldiaryImg from '../public/assets/projects/traveldiary.png'
import unwindImg from '../public/assets/projects/unwind.png'
import netflixImg from '../public/assets/projects/netflix.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-28'>
        <p className='text-xl tracking-widest uppercase text-[#579a72]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='object-cover grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Netflix Copy'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS, Axios, Tailwind, Firebase, Cloud Firestore, Netlify'
          />
          <ProjectItem
            title='Unwind Chat'
            backgroundImg={unwindImg}
            projectUrl='/unwind'
            tech='React JS, Firebase, Cloud Firestore, Netlify'

          />
          <ProjectItem
            title='Travel Diary'
            backgroundImg={traveldiaryImg}
            projectUrl='/traveldiary'
            tech='Ruby on Rails, PostgreSQL, Bootstrap'

          />
          <ProjectItem
            title='Tic Tac Paw'
            backgroundImg={tictacpawImg}
            projectUrl='/tictacpaw'
            tech='HTML, CSS, JavaScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
