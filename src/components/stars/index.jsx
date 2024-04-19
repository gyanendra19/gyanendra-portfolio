import React from 'react'

const Stars = ({fallStar}) => {
    
  return (
    <>
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
  <span className={`span-class ${fallStar ? '' : 'hidden'}`} />
    </>
  )
}

export default Stars