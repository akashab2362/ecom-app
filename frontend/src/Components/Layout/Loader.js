import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-screen h-screen grid place-items-center'>
        <TailSpin 
        height={80}
        width={80}
        color='black'
        ariaLabel='tail-spin-loading'
        radius={1}
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        />
    </div>
  )
}

export default Loader;
