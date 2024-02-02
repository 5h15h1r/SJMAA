import React from 'react'

const Gallerycomponent = ({img,p1,p2,alt="image"}) => {
  return (
      <div className="mx-4 my-4 bg-[#648374] h-[200px] w-[200px] cursor-pointer " >
          <img
              className="h-full w-full object-cover"
              src={img}


              alt={alt}
          />
          <div className="flex flex-col items-center">
              <p> { p1}</p>
              <p> { p2}</p>
          </div>

      </div>
  )
}

export default Gallerycomponent
