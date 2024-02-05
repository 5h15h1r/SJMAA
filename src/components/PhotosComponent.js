import Link from 'next/link'
import React from 'react'

const PhotosComponent = ({url}) => {
    return (
        <Link href={url}>
            <div className='h-[200px] w-[200px] mx-4 my-2'>
          <img className="object-cover h-full w-full" src={url}/>
      
    </div></Link>
      
  )
}

export default PhotosComponent
