import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PhotosComponent = ({url}) => {
    return (
        
          <div className='h-[90px] w-[90px] md:h-[200px] md:w-[200px] mx-4 my-2'>
          <Image width={200} height={200} className="object-fill " src={url}/>
      
          </div>
      
      
  )
}

export default PhotosComponent
