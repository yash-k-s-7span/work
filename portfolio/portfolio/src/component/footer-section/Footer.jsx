import React from 'react'
import FooterImage from '../../../public/assets/footer/footerImage.png';
import Instagram from '../../../public/assets/footer/instagram.svg';                               
import Linkedin from '../../../public/assets/footer/linkedin.svg';
import Twitter from '../../../public/assets/footer/twitter.svg';
'../../assets/footer/footerImage.png'
const Footer = () => {
  return (
        <div style={{backgroundImage:`url("/assets/footer/footerImage.png")`}} className="h-svh bg-contain bg-no">
            {/* Footer Section */}
            <h1 className='text-white text-4xl'>sds</h1>
            {/* <div className='fixed bottom-0'>
                <div className='bg-contain z-10'>
                    <img src={FooterImage} alt='footer image'/>
                    <div className='flex gap-3'>
                        <img src={Linkedin} alt="linkedin" className='w-5 h-5'/>
                        <img src={Instagram} alt="instagram" className='w-5 h-5'/>
                        <img src={Twitter} alt="twitter" className='w-5 h-5'/>
                    </div>
                </div>
            </div> */}
       </div>
  )
}

export default Footer
