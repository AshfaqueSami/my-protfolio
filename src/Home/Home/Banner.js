import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import Project from './Project';



const Banner = () => {
  useEffect( () => {
    AOS.init();
  } ,[])
  const [projects, setProjects] = useState([])
  useEffect(() => {
      fetch('./data.json')
          .then(res => res.json())
          .then(data => setProjects(data))
  }, [])

  return (
    <div>

<section class="w-full px-3 antialiased bg-indigo-600 lg:px-6">
    <div  class="mx-auto max-w-7xl">
        
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" class="container py-32 mx-auto text-center sm:px-4">

            <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Simplify the way you</span> <span class="relative inline-block mt-3 text-transparent text-white">design websites</span></h1>
            <div  style={{paddingBottom:'20px'}} class="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!</div>
            <a href='https://drive.google.com/file/d/17rjUJjpdjWeYXzslWVg-1usScNLEP30o/view'  style={{backgroundColor:'crimson'}}  class=" border-b-4 border-indigo-700 text-white text-white text-center py-2 px-4 rounded">
  <button>Download resume</button>
</a>
            <div class="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
        </div>
    </div>
</section>
<div className='w-full max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
            </div>

    </div>
  );
};

export default Banner;