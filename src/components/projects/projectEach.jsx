import React from 'react'

const ProjectImage = ({project}) => {
    const projectImg = project === 'fitness' ? ['fit-home', 'fit-calc', 'fit-product', 'fit-fourth'] :
    project === 'form' ? ['form-first', 'form-second', 'form-third', 'form-fourth'] :
    project === 'dribble' ? ['dribble-first', 'dribble-second', 'dribble-third', 'dribble-fourth'] :
    ['weather-first', 'weather-second', 'weather-third']
  return (
    <>
    <img className='md:h-[22rem] h-36 mt-7' src={`./${projectImg[0]}.png`} alt="" />
    <img className='md:h-[24rem] h-36 mt-7' src={`./${projectImg[3]}.png`} alt="" />
    <img className='md:h-[22rem] h-36 mt-7' src={`./${projectImg[1]}.png`} alt="" />
    <img className='md:h-[22rem] h-36 mt-7' src={`./${projectImg[2]}.png`} alt="" />
    </>
  )
}

export default ProjectImage