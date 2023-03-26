import React from 'react'

const Image = ({ scrollLeft, scrollRight, nr }) => {
  return (
    <div className='image'>
      <div
        className='left'
        onClick={scrollLeft}
      >
        ◀
      </div>
      <div
        className='right'
        onClick={scrollRight}
      >
        ▶
      </div>
      <img
        src={`./obraz${nr}.jpg`}
        alt=''
      />
    </div>
  )
}

export default Image
