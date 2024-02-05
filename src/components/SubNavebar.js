import React from 'react'
import Link from 'next/link'

const SubNavebar = () => {
  return (
    <div className=" flex flex-row w-[90%] md:max-w-6xl bg-[#355245] h-[50px] ml-[5%] mt-10 rounded-lg shadow-2xl">
        <Link href="/page/gallery/album" className="p-1 mx-2 my-2">
          Album
        </Link>

        <Link href="/page/gallery/videos" className="p-1 mx-2 my-2">
          Videos
        </Link>
        <Link href="/page/gallery/memories" className="p-1 mx-2 my-2">
          Memories
        </Link>
      </div>
  )
}

export default SubNavebar
