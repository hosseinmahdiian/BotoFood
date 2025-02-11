import Link from 'next/link';
import React from 'react';

const Guide = () => {
    return (
      <div className=" my-10 flex justify-around gap-x-2  ">
        <Link className='w-44 border rounded-lg text-center py-2 bg-gray-100 shadow-md' href="/menu">Menu</Link>
        <Link className='w-44 border rounded-lg text-center py-2 bg-gray-100 shadow-md' href="/categories">Cate</Link>
        {/* <Link className='w-44 border rounded-lg text-center py-2 bg-gray-100 shadow-md' href="/">DisCount</Link> */}
      </div>
    );
}

export default Guide;
