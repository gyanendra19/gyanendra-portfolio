import React from 'react'

const Tech = () => {

  const progressStyle = (percent, right ,phoneRight) => {
    return `before:absolute before:flex before:justify-center before:items-center ${right} before:bg-blue-500 before:rounded-sm before:w-11 before:h-6 md:before:-top-3 before:-top-4 ${percent} ${phoneRight}`
  }

  return (
    <div className='flex md:flex-row flex-col md:gap-32 gap-8 relative md:mt-14 md:mb-28 my-6'>
      <div className='absolute w-40 h-32 bg-red-400 top-10 left-64 blur-[170px]'></div>
      <div className='flex flex-col gap-8 items-center'>

        <div className='  flex gap-8 items-center relative w-full '>
          <div className={progressStyle(`before:content-['90%']`, 'md:before:right-2', 'before:right-10')}></div>
          <img className='md:h-14 h-12' src="./html.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden  '>
            <div className='absolute block progress-animate bg-blue-500 rounded-md w-[90%] top-0 h-full'></div>
          </div>
        </div>
        
        <div className='flex gap-8 items-center relative w-full'>
          <div className={progressStyle(`before:content-['80%']`, 'md:before:right-7', 'before:right-20')}></div>
          <img className='md:h-14 h-12' src="./css.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[80%] top-0 h-full'></div>
          </div>
        </div>

        <div className='flex gap-8 items-center relative w-full'>
          <div className={progressStyle(`before:content-['70%']`, 'md:before:right-12', 'before:right-28')}></div>
          <img className='md:h-14 h-12' src="./js.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[70%] top-0 h-full'></div>
          </div>
        </div>

        <div className='flex gap-8 items-center relative w-full'>
          <div className={progressStyle(`before:content-['80%']`, 'md:before:right-7', 'before:right-20')}></div>
          <img className='md:h-12 h-12' src="./react.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[80%] top-0 h-full'></div>
          </div>
        </div>

      </div>

      <div className='flex flex-col gap-8 w-full'>
        <div className='flex gap-8 items-center relative md:w-[60%] '>
          <div className={progressStyle(`before:content-['60%']`, 'md:before:right-20', 'before:right-28')}></div>
          <img className='md:h-12 h-8' src="./node.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[60%] top-0 h-full'></div>
          </div>
        </div>

        <div className='flex gap-8 items-center relative md:w-[60%] '>
          <div className={progressStyle(`before:content-['90%']`, 'md:before:right-2', 'before:right-8')}></div>
          <img className='md:h-12 h-8' src="./tailwind.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[90%] top-0 h-full'></div>
          </div>
        </div>

        <div className='flex gap-8 items-center relative md:w-[60%] '>
          <div className={progressStyle(`before:content-['70%']`, 'md:before:right-12', 'before:right-24')}></div>
          <img className='md:h-16 h-10' src="./mongo.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[70%] top-0 h-full'></div>
          </div>
        </div>

        <div className='flex gap-8 items-center relative md:w-[60%] '>
          <div className={progressStyle(`before:content-['50%']`, 'md:before:right-24', 'before:right-36')}></div>
          <img className='md:h-16 h-10' src="./postgres.png" alt="" />
          <div className='md:w-[250px] w-[200px] h-[10px] rounded-md bg-white relative overflow-hidden'>
            <div className='absolute block bg-blue-500 progress-animate rounded-md w-[50%] top-0 h-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech