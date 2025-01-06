import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <hr/>
        <div className='font-semibold text-gray text-xs mt-5'>
            More ways to shop:
            <span className = 'underline text-blue'>
           {' '}Find an Apple Store {' '}
            </span>
            or
            <span className = 'underline text-blue'>
             {' '} other retailer  {' '}
            </span>
            near you.
        </div>
        
    </footer>
  )
}

export default Footer