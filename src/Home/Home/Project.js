import React from 'react';
import project1 from '../../Image/Project1.png'
import project2 from '../../Image/Project2.png'
import project3 from '../../Image/Project3.png'
import project4 from '../../Image/Project4.jpeg'
import project5 from '../../Image/Project5.png'

const Project = () => {
    return (
        <div>
            

<section class="bg-white">
    <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">

        <div class="flex flex-col items-center sm:px-5 md:flex-row">
            <div class="w-full md:w-1/2">
                <a href="#_" class="block">
                    <img class="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96" src={project1}/>
                </a>
            </div>
            <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                    <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span>Featured</span>
                    </div>
                    <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"><a href="#_">Yoga Campus</a></h1>
                    <p class="pt-2 text-sm font-medium">by <a target='_blank' href="https://yoga-campus.web.app/" class="mr-1 underline">Live Site</a> · <span class="mx-1">April 23rd, 2021</span> · <span class="mx-1 text-gray-600">5 min. read</span></p>
                </div>
            </div>
        </div>

        <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src={project2}/>
                </a>
                <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Lifestyle</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">Creating a Future Worth Living</a></h2>
                <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
                <p class="pt-2 text-xs font-medium"><a target='_blank' href="https://jovial-noyce-69a8f3.netlify.app/" class="mr-1 underline">Live Site</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src={project3}/>
                </a>
                <div class="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Health</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">The Healther Version of Yourself</h2>
                <p class="text-sm text-gray-500">If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.</p>
                <p class="pt-2 text-xs font-medium"><a target='_blank' href="https://delicioumo.web.app/" class="mr-1 underline">Live Site</a> · <span class="mx-1">April 10, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src={project4}/>
                </a>
                <div class="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Food</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Enjoy the Premium Quality</h2>
                <p class="text-sm text-gray-500">Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.</p>
                <p class="pt-2 text-xs font-medium"><a target='_blank' href="https://arial-watch.web.app/" class="mr-1 underline">Live Site</a> · <span class="mx-1">April 6, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>

            <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56" src={project5}/>
                </a>
                <div class="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Motivation</span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl">Writing for Success</h2>
                <p class="text-sm text-gray-500">Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.</p>
                <p class="pt-2 text-xs font-medium"><a target='_blank' href="https://ashfaquesami.github.io/Football-Website/" class="mr-1 underline">Live Site</a> · <span class="mx-1">May 25, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>



        </div>
    </div>
</section>

        </div>
    );
};

export default Project;
