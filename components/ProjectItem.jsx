import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({ title, bg, tech, id }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-gradient-to-r from-secondary to-accent'>
      <div className='relative'>
        <Image
          className='rounded-xl group-hover:opacity-10'
          src={`/../public/assets/projects/${bg}`}
          width={650}
          height={1}
          alt='/'
        />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-secondary-content tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-secondary-content text-center'>
          {tech.map((t, i) => {
            return (
              <span key={t}>
                {t}
                {i < tech.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </p>
        <Link href={`/${id}`}>
          <p className='text-center py-3 rounded-lg bg-base-100 text-secondary font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem