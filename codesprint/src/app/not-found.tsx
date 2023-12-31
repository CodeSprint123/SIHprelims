"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
 
  return (
    
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold text-white'>404 - Page Not Found</h1>
        <h4 className='py-10 text-lg text-white font-light'>
          Sorry, there is not much to see here. How about you check out the rest of our amazing website?
        </h4>
       
        <div className='space-x-4 justify-center'>
          <Link className='font-semibold text-white hover:text-red-500 duration-300' href='/'>
            Homepage
          </Link>
        </div>
      </div>
  );
}